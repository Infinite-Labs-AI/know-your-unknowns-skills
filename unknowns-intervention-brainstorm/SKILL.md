---
name: unknowns-intervention-brainstorm
description: Expand a known problem into a codebase-grounded intervention space. Use when the user knows the outcome problem but not the best fix, asks to brainstorm interventions, wants options from cheapest to most ambitious, or wants Codex to search the repo for leverage points before choosing a plan.
---

# Unknowns Intervention Brainstorm

## Workflow

Ground brainstorming in the current system.

Return:

- Problem framing and evidence gathered.
- 8-12 possible interventions, ordered from cheapest/reversible to ambitious/structural.
- For each: codebase evidence, effort, risk, likely impact, and why it might work.
- A selection mechanism: resonates, reject, maybe later.
- Recommended first bet and what to validate.
- Stop condition: the user chooses a starting intervention or asks for a deeper plan on one option.

## Rules

Do not free-associate product ideas without repo or artifact evidence. Name the files, flows, docs, analytics hooks, or UI surfaces that make each intervention plausible.

Use HTML when a ranked board with checkboxes and copyable reply text makes selection easier.
