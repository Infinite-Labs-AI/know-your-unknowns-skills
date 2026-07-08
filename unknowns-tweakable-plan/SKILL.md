---
name: unknowns-tweakable-plan
description: Write implementation plans sorted by the decisions the human is most likely to tweak, with mechanical work buried below. Use when the user asks for a tweakable plan, decision-first plan, plan review artifact, alternatives before sequencing, or wants judgment calls surfaced before implementation.
---

# Unknowns Tweakable Plan

## Workflow

Optimize for review, not chronological execution.

Return:

- The top decisions likely to change the plan.
- For each decision: recommended choice, alternative, "choose this if", consequences, and evidence.
- Type/API/data/user-facing impacts.
- Execution sequence after the decisions.
- Mechanical work grouped last.
- Copyable tweaks the user can send back.
- Stop condition: high-impact judgment calls are accepted or edited.

## Rules

Do not lead with routine step order. If a step is obvious plumbing, move it below the decisions. Surface irreversible or expensive-to-change choices early.

Use HTML when toggles or side-by-side alternatives make plan review easier.
