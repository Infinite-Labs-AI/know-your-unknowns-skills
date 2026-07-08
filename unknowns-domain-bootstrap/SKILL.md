---
name: unknowns-domain-bootstrap
description: Teach the user enough domain vocabulary and mental models to prompt accurately. Use when the user says they do not understand a domain, lacks the right words, asks to learn their unknown unknowns, or needs practitioner vocabulary before asking Codex to do unfamiliar work.
---

# Unknowns Domain Bootstrap

## Workflow

Turn a vague domain ask into promptable vocabulary.

Return:

- The naive framing and why it is too low-resolution.
- A beginner mental model.
- A vocabulary ladder: everyday phrase -> practitioner term -> why the distinction matters.
- Common traps, false friends, and decisions the user probably did not know existed.
- 3-6 prompts the user could not have written before the bootstrap.
- Stop condition: the user can ask the next question using the domain's real distinctions.

## Artifact Use

Use HTML when sliders, before/after comparisons, glossary sidebars, diagrams, or presets let the user feel the distinction. Otherwise use a compact teaching note with copyable prompt upgrades.

Do not over-teach. Teach only enough to make the next prompt precise.
