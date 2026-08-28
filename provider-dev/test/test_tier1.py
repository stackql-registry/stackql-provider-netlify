"""
Tier 1 smoke tests, parametrised from tier1.yaml.

To add a query: edit tier1.yaml. To add an assertion primitive: edit this file.
The intent is to keep the test file small enough that the YAML is the
human-readable contract.
"""

from __future__ import annotations

import os
import re
from pathlib import Path
from typing import Any

import pytest
import yaml

TIER1 = Path(__file__).resolve().parent / "tier1.yaml"

_VAR_RE = re.compile(r"\$\{([A-Z_][A-Z0-9_]*)\}")


def _substitute(template: str, env: dict[str, str]) -> str:
    def repl(match: re.Match[str]) -> str:
        name = match.group(1)
        if name in env:
            return env[name]
        if name in os.environ:
            return os.environ[name]
        raise KeyError(f"tier1.yaml references ${{{name}}} but it is not set")
    return _VAR_RE.sub(repl, template)


def _load_cases() -> list[dict[str, Any]]:
    with TIER1.open() as f:
        return list(yaml.safe_load(f))


_PREDICATE_BUILTINS = {
    "all": all, "any": any, "len": len, "int": int, "float": float,
    "str": str, "bool": bool, "isinstance": isinstance, "abs": abs,
    "min": min, "max": max, "sum": sum, "range": range,
    "sorted": sorted, "set": set, "list": list, "dict": dict, "tuple": tuple,
}


def _evaluate_predicate(expr: str, rows: list[dict[str, Any]]) -> bool:
    """Predicates have `rows` (full result) and `r` (rows[0] if any) in scope.
    Predicates are author-controlled YAML, not user input - eval is fine here."""
    scope = {"rows": rows, "r": rows[0] if rows else None}
    return bool(eval(expr, {"__builtins__": _PREDICATE_BUILTINS}, scope))


@pytest.mark.parametrize("case", _load_cases(), ids=lambda c: c["name"])
def test_tier1(case: dict[str, Any], runner, mode: str, test_env: dict[str, str], derived_env: dict[str, str]) -> None:
    # Optional per-case `xfail` block in tier1.yaml flags known provider/binary
    # bugs without losing visibility. Shape:
    #   xfail:
    #     reason: "..."           # required, surfaced in pytest output
    #     modes: [pgwire]         # optional - if omitted, applies to all modes
    #     strict: false           # optional - true means an unexpected PASS fails
    xfail = case.get("xfail")
    if xfail and (xfail.get("modes") is None or mode in xfail["modes"]):
        pytest.xfail(xfail.get("reason", "known issue"))

    sql = _substitute(case["sql"], test_env)
    rows = runner.run(sql)

    assertions = case.get("assertions", {})

    min_rows = assertions.get("min_rows", 1)
    assert len(rows) >= min_rows, (
        f"expected at least {min_rows} row(s), got {len(rows)}\nSQL:\n{sql}"
    )

    required_columns = assertions.get("required_columns", [])
    for col in required_columns:
        for i, row in enumerate(rows):
            assert col in row, (
                f"row {i} missing required column '{col}'. "
                f"present columns: {sorted(row)}\nSQL:\n{sql}"
            )

    for expr in assertions.get("row_predicates", []):
        substituted = _substitute(expr, test_env)
        assert _evaluate_predicate(substituted, rows), (
            f"row_predicate failed: {substituted}\nrows: {rows!r}\nSQL:\n{sql}"
        )
