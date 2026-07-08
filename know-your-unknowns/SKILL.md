---
name: know-your-unknowns
description: Route and execute unknown-discovery workflows before, during, or after implementation. Use when a user asks for a blindspot pass, unknown unknowns, "what am I missing", domain vocabulary bootstrapping, design directions, mock-before-wire artifacts, codebase-grounded brainstorms, one-question-at-a-time interviews, reference semantics maps, tweakable plans, implementation notes, buy-in docs, merge quizzes, or interactive review artifacts/HTML artifacts that expose assumptions and capture human decisions.
---

# Know Your Unknowns

## Purpose

Expose hidden assumptions before they become implementation mistakes. Treat artifacts as decision instruments: they should reveal uncertainty, let the human react, and turn that reaction into a better prompt, plan, sign-off, or implementation constraint.

This skill routes to the relevant leaf skill. If the user explicitly names one of the leaf skills, load that skill directly.

## Decision Tree

Use the smallest workflow that resolves the unknown:

- Unfamiliar code/module, risky change, "what am I missing": use `unknowns-blindspot-pass`.
- Unfamiliar domain or weak vocabulary: use `unknowns-domain-bootstrap`.
- User cannot specify taste or wants options to react to: use `unknowns-design-directions`.
- UI/interaction is unclear and should be felt before wiring: use `unknowns-mock-before-wire`.
- Problem is known but intervention space is not: use `unknowns-intervention-brainstorm`.
- Requirements are ambiguous: use `unknowns-spec-interview`.
- Existing implementation/reference must be ported or matched: use `unknowns-reference-map`.
- User wants a plan but mostly needs to inspect judgment calls: use `unknowns-tweakable-plan`.
- Implementation is underway and surprises/deviations must be preserved: use `unknowns-implementation-notes`.
- Work is done but buy-in/sign-off is uncertain: use `unknowns-buy-in-doc`.
- User wants to prove they understand a diff/change before merge: use `unknowns-merge-quiz`.

If more than one applies, sequence by phase: pre-implementation discovery, during-implementation logging, post-implementation buy-in/comprehension.

## Universal Contract

Every unknowns artifact must include:

- The user's original ask, reframed as the unknown being tested.
- Evidence gathered, with clear separation between fact, inference, and assumption.
- The hidden decisions or blindspots that matter.
- A human action: choose, veto, answer, confirm, correct, sign off, or pass a quiz.
- A copyable next prompt, decision summary, or implementation constraint.
- A stop condition: what must be true before implementation/merge/sign-off proceeds.

Do not create decorative artifacts. If HTML is used, it must make review easier through layout, comparison, controls, state, or copy-back loops.

## Artifact Mode

When an interactive review artifact is useful, prefer a single self-contained HTML file with no build step. Use it for side-by-side alternatives, selectable chips, toggles, quizzes, timelines, semantic maps, decision tables, or copyable follow-up prompts.

Read `references/artifact-output-contracts.md` for required sections by artifact type. Read `references/html-artifact-guidelines.md` before creating HTML.

Optional scaffold:

```bash
python3 ~/.codex/skills/know-your-unknowns/scripts/scaffold_unknowns_artifact.py --kind blindspot-pass --title "Auth SSO blindspot pass" --output /tmp/auth-blindspots.html
```

## Source Map

This pack is modeled on Thariq Shihipar's "Know your unknowns" examples. For the page-by-page mapping, read `references/corpus-map.md`.
