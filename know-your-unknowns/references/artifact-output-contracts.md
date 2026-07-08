# Artifact Output Contracts

Use these contracts when a workflow benefits from an artifact. Markdown is fine when layout/interactivity adds nothing. HTML is preferred when comparison, toggles, state, copy-back text, or quizzes make review materially easier.

## Shared Sections

Every artifact should contain:

- Frame: original ask, phase, and unknown being tested.
- Evidence: repo files, diffs, docs, screenshots, or source references used.
- Unknowns: the hidden assumptions or decisions.
- Human loop: what the human must choose, answer, confirm, or correct.
- Next prompt: copyable text for the next agent turn.
- Stop condition: what must be true before continuing.

## Contracts By Mode

Blindspot pass:
- Summary of the danger zone.
- 5-9 blindspot cards.
- For each card: evidence, why it bites, prompt fix.
- Final hardened implementation prompt.

Domain bootstrap:
- Beginner mental model.
- Vocabulary ladder from naive words to practitioner terms.
- Common traps and distinctions.
- Prompts the user could not have written before learning the vocabulary.

Design directions:
- 3-4 incompatible directions using the same content/data.
- "Steal" and "skip" dimensions.
- Clear tradeoff for each direction.
- Reply builder that captures preference.

Mock before wire:
- Fake-data mock or static prototype.
- Open questions the mock is designed to answer.
- Clear non-goals and what is intentionally fake.
- Reply template for layout/scope decisions.

Intervention brainstorm:
- Codebase-grounded option list from cheapest to most ambitious.
- Evidence path for each option.
- Effort/risk/expected impact.
- Selection mechanism and recommended first bet.

Spec interview:
- One question at a time.
- Questions ordered by architecture/product blast radius.
- Decision table after answers.
- Ready-to-paste implementation prompt.

Reference map:
- Reference behavior inventory.
- Source-to-target semantic pairs.
- Preserved, adapted, and dropped behavior.
- Edge-case table and confirmation/correction gate.

Tweakable plan:
- Decisions most likely to be changed first.
- Alternatives with "choose this if" language.
- Type/API/user-facing impacts.
- Execution sequence and mechanical work separated below.

Implementation notes:
- Running log grouped by planned work, discovery, deviation, and human call.
- Conservative choice for each deviation.
- Revisit items that need human decision.
- Fold-back bullets for the next plan.

Buy-in doc:
- Demo or outcome first.
- Problem, solution, evidence, rollout, risk/rollback.
- Objections pre-answered.
- Named asks/sign-offs.

Merge quiz:
- Mental model of the change.
- Non-obvious behaviors and dependencies.
- Quiz that tests understanding, not trivia.
- Remediation pointer for each wrong answer.
