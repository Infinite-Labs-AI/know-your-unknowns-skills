---
name: unknowns-mock-before-wire
description: Build a throwaway mock or prototype before wiring production code. Use when UI layout, interaction, scope, placement, or flow is ambiguous and the user wants to react to fake data, a clickable HTML artifact, or a prototype before implementation.
---

# Unknowns Mock Before Wire

## Workflow

Probe the interaction without touching production code.

Return:

- The decision the mock is meant to test.
- A fake-data artifact or precise prototype description.
- The intentionally fake parts and non-goals.
- Open questions the mock should answer.
- A reply template that captures placement, scope, and interaction decisions.
- Stop condition: the user has answered the layout/scope questions or approved the direction.

## Rules

Keep prototypes disposable. Avoid adding dependencies or integrating with real app state unless the user explicitly asks. The artifact should reduce uncertainty before implementation, not become implementation.

Use one self-contained HTML file when clickable review is valuable.
