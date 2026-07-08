# HTML Artifact Guidelines

Use HTML only when it turns a document into a review tool.

Good uses:
- Side-by-side alternatives.
- Toggles that reveal tradeoffs.
- Chips/checkboxes that assemble a reply.
- Timeline, map, graph, or table layout that markdown flattens.
- Clickable mock with fake data.
- Quiz or scoring state.
- Copy buttons for next prompts, corrections, or decisions.

Avoid HTML when:
- A short answer or checklist is enough.
- The artifact would be decorative.
- Interactivity does not change the review loop.
- The user needs code changes immediately and no decision is pending.

Requirements:
- Produce one self-contained `.html` file unless the user asks otherwise.
- No remote assets or build step.
- Include visible source/evidence references.
- Include copyable next prompt or decision summary.
- Keep state client-side.
- Verify locally when possible by opening, screenshotting, or checking for key HTML markers.

Useful primitives:
- Prompt box at top.
- Evidence sidebar.
- Decision cards.
- Steal/skip chips.
- Toggleable alternatives.
- Copy-back prompt.
- Correction template.
- Pass/fail quiz.
