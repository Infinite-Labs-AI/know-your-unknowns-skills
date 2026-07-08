---
name: unknowns-reference-map
description: Prove semantic understanding before porting, reimplementing, or matching a reference implementation. Use when the user points at another file/package/language/repo as the desired behavior, asks for a semantics map, or wants confirmation before Codex writes code based on a reference.
---

# Unknowns Reference Map

## Workflow

Map behavior before porting.

Return:

- Reference inventory: key behaviors, invariants, edge cases, and tests.
- Source-to-target semantic pairs.
- Preserved behavior, adapted behavior, deliberately dropped behavior.
- Gotchas where syntax translation would break semantics.
- Tests required to prove equivalence.
- Confirmation/correction prompt.
- Stop condition: the user confirms the map or corrects it before implementation starts.

## Rules

Do not implement until the semantics map is accepted unless the user explicitly overrides that gate. Distinguish exact equivalence from intentional product/API adaptation.

Use HTML when side-by-side code excerpts, highlighted notes, and correction buttons make review easier.
