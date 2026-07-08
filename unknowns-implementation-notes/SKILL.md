---
name: unknowns-implementation-notes
description: Keep a durable implementation-notes/deviation log while building. Use when the user asks to log surprises, preserve deviations from a plan, keep implementation notes, pick conservative options and continue, or capture unknowns discovered during execution for a later attempt.
---

# Unknowns Implementation Notes

## Workflow

Do not let discoveries vanish into scrollback.

Maintain a notes artifact with:

- Planned step completed as expected.
- Discovery: new fact not in the plan.
- Deviation: where code forced a different path.
- Conservative choice: what Codex chose and why.
- Human call: product/security/policy decisions that should not be guessed.
- Fold-back bullets: what a future plan should know.

## Rules

During implementation, keep moving on reversible conservative choices and log them. Stop for destructive, irreversible, credential-gated, external-production, or materially scope-changing decisions.

At the end, summarize the notes and list which items need user decision before merge.
