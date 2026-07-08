---
name: unknowns-merge-quiz
description: Verify understanding of a diff or completed change before merge. Use when the user asks to be quizzed before merging, wants to ensure they understand what changed, needs a merge-readiness report, or wants an artifact that tests comprehension and points wrong answers back to the relevant explanation.
---

# Unknowns Merge Quiz

## Workflow

Convert "I skimmed the diff" into tested understanding.

Return:

- Mental model of the change.
- What changed and why.
- Non-obvious behavior introduced.
- Risks, dependencies, and rollback notes.
- 5-8 questions that test understanding, not trivia.
- For each question: answer, explanation, and remediation pointer.
- Stop condition: the user can answer the quiz correctly or has reread the missed sections.

## Rules

Ground the quiz in the actual diff, tests, and behavior. Ask about implications and invariants, not line-number trivia.

Use HTML when scoring, answer reveal, and remediation links make the gate more effective.
