---
name: unknowns-blindspot-pass
description: Surface unknown unknowns before touching unfamiliar code or systems. Use when the user asks for a blindspot pass, "what am I missing", hidden traps, implementation risks, prompt hardening, or wants Codex to inspect a module/repo area before writing code.
---

# Unknowns Blindspot Pass

## Workflow

Inspect before proposing implementation. Gather evidence from code, tests, docs, config, migrations, feature flags, TODOs, recent history, and local conventions.

Return:

- Original ask and the code/system territory being entered.
- 5-9 blindspot cards.
- For each card: evidence, why it bites, what a naive agent would miss, and a prompt fix.
- A final hardened prompt that folds every important constraint into the user's next request.
- Stop condition: implementation should not start until the user accepts or edits the hardened prompt.

## Rules

Do not invent architecture. Mark unsupported concerns as hypotheses and list the evidence needed. Prefer concrete file paths, symbols, tests, and config names over general warnings.

If an HTML artifact would help, use a card layout with copyable prompt chips and a final copyable implementation prompt.
