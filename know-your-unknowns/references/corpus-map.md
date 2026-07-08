# Corpus Map

Source hub: https://thariqs.github.io/html-effectiveness/unknowns/

The reusable pattern is not "make HTML". It is: expose an unknown, make it inspectable, capture the human reaction, and turn that reaction into the next prompt or constraint.

## Pre-Implementation

1. Blindspot pass
   - Situation: entering unfamiliar code.
   - Unknown: hidden conventions, reverted history, dependency traps, missing concepts.
   - Mechanism: evidence-backed blindspot cards and a rewritten prompt.
   - Skill: `unknowns-blindspot-pass`.

2. Teach me my unknowns
   - Situation: domain vocabulary is weak.
   - Unknown: the user cannot name the important distinctions.
   - Mechanism: mental model, vocabulary ladder, examples, prompt phrases.
   - Skill: `unknowns-domain-bootstrap`.

3. Four design directions
   - Situation: the user will know good taste only when they see it.
   - Unknown: latent visual/product preference.
   - Mechanism: incompatible directions with steal/skip reaction capture.
   - Skill: `unknowns-design-directions`.

4. Mock before you wire
   - Situation: UI/interaction choices are ambiguous.
   - Unknown: layout, interaction, and scope calls that become expensive after implementation.
   - Mechanism: fake-data clickable mock with open questions and reply template.
   - Skill: `unknowns-mock-before-wire`.

5. Brainstorm the intervention
   - Situation: the problem is known but the intervention space is narrow.
   - Unknown: codebase-grounded options the user has not considered.
   - Mechanism: interventions ranked from cheap to ambitious with selection controls.
   - Skill: `unknowns-intervention-brainstorm`.

6. The interview
   - Situation: requirements are ambiguous.
   - Unknown: which answers would change architecture.
   - Mechanism: one-question-at-a-time interview ordered by blast radius.
   - Skill: `unknowns-spec-interview`.

7. Point at a reference
   - Situation: an existing implementation encodes desired behavior.
   - Unknown: whether the agent understood semantics rather than syntax.
   - Mechanism: source/target semantics map with gotchas and confirmation gate.
   - Skill: `unknowns-reference-map`.

8. The tweakable plan
   - Situation: a plan is needed, but normal execution order hides review points.
   - Unknown: which decisions the human is likely to change.
   - Mechanism: plan sorted by tweak likelihood, with alternatives first and mechanical work last.
   - Skill: `unknowns-tweakable-plan`.

## During Implementation

9. Implementation notes
   - Situation: the build deviates from the plan.
   - Unknown: discoveries, conservative choices, and product calls disappear into scrollback.
   - Mechanism: durable deviation log with fold-back bullets for the next attempt.
   - Skill: `unknowns-implementation-notes`.

## Post-Implementation

10. The buy-in doc
    - Situation: the work exists but other people must approve or adopt it.
    - Unknown: objections, sign-off path, proof burden.
    - Mechanism: demo-first package with objections, rollout, risks, and named asks.
    - Skill: `unknowns-buy-in-doc`.

11. Quiz me before I merge
    - Situation: the user may be skimming a diff they need to own.
    - Unknown: whether they truly understand the behavior change.
    - Mechanism: report plus quiz with remediation pointers.
    - Skill: `unknowns-merge-quiz`.
