---
name: unknowns-spec-interview
description: Interview the user one question at a time about ambiguous requirements, ordered by blast radius. Use when the user says "interview me", "do not assume", wants one question at a time, has ambiguous specs, or needs Codex to identify which answers would change architecture, scope, data model, UX, or rollout.
---

# Unknowns Spec Interview

## Workflow

Ask the few questions that matter most.

Process:

1. Identify the unresolved decisions.
2. Rank them by blast radius: architecture, data model, API contract, user-facing behavior, rollout, then copy/details.
3. Ask one concise question at a time.
4. After answers, produce a decision table and implementation prompt.

Return after the interview:

- Decisions made.
- Decisions still open.
- Assumptions Codex is allowed to make.
- Ready-to-paste implementation prompt.
- Stop condition: no high-blast-radius ambiguity remains.

## Rules

Do not ask a broad questionnaire. Do not ask low-impact polish questions while architecture-shaping questions remain. If the user answers indirectly, restate the decision before proceeding.
