#!/usr/bin/env python3
"""Create a self-contained starter HTML artifact for know-your-unknowns workflows."""

from __future__ import annotations

import argparse
from pathlib import Path


LEDES = {
    "blindspot-pass": "Surface hidden assumptions before touching unfamiliar code.",
    "domain-bootstrap": "Teach the vocabulary needed to ask precise questions.",
    "design-directions": "Show incompatible directions so preference can be discovered by reaction.",
    "mock-before-wire": "Make the interaction inspectable before wiring production code.",
    "intervention-brainstorm": "Expand the codebase-grounded option space before choosing a fix.",
    "spec-interview": "Ask only the questions whose answers change architecture or scope.",
    "reference-map": "Prove semantic understanding before porting from a reference.",
    "tweakable-plan": "Put human-changeable decisions before mechanical execution steps.",
    "implementation-notes": "Log deviations and conservative choices while building.",
    "buy-in-doc": "Package evidence and objections for sign-off.",
    "merge-quiz": "Verify understanding before merge.",
}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--kind", required=True, choices=sorted(LEDES))
    parser.add_argument("--title", required=True)
    parser.add_argument("--ask", default="Replace with the original user ask.")
    parser.add_argument("--output", required=True)
    args = parser.parse_args()

    skill_dir = Path(__file__).resolve().parents[1]
    shell = skill_dir / "assets" / "artifact-shell.html"
    html = shell.read_text(encoding="utf-8")
    replacements = {
        "{{TITLE}}": args.title,
        "{{KIND}}": args.kind,
        "{{LEDE}}": LEDES[args.kind],
        "{{ASK}}": args.ask,
    }
    for key, value in replacements.items():
        html = html.replace(key, value)

    output = Path(args.output).expanduser().resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(html, encoding="utf-8")
    print(output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
