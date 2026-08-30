# Know Your Unknowns Skills

An assumption-discovery skill pack for Codex and Claude. It turns hidden requirements, design
choices, implementation risks, and stakeholder objections into reviewable artifacts before those
unknowns become expensive.

## Install from GitHub

The current public distribution is this GitHub repository. It requires Node.js 18 or newer and
`npx`.

Preview every destination without writing:

```bash
npx github:Infinite-Labs-AI/know-your-unknowns-skills --dry-run
```

Then install:

```bash
npx github:Infinite-Labs-AI/know-your-unknowns-skills
```

By default the installer copies the skills into both `~/.codex/skills` and
`~/.claude/skills`. Use `--codex-only` or `--claude-only` to choose one host.

The default update path does not silently destroy a changed skill. An identical destination is left
alone; a different destination is renamed to a timestamped `.bak-*` directory before the packaged
skill is copied. `--force` deliberately replaces a different destination without a backup, so use it
only when that is what you intend.

Environment overrides are available for custom homes and skill directories:

- `CODEX_HOME` and `CLAUDE_HOME`
- `CODEX_SKILLS_DIR` and `CLAUDE_SKILLS_DIR`

### After npm publication (not available today)

The `know-your-unknowns-skills` package is not currently published to the npm registry. After a
maintainer publishes it and the registry endpoint is live, the intended npm command will be:

```bash
npx know-your-unknowns-skills
```

Until then, use the GitHub command above.

## Skills

- `know-your-unknowns`
- `unknowns-blindspot-pass`
- `unknowns-domain-bootstrap`
- `unknowns-design-directions`
- `unknowns-mock-before-wire`
- `unknowns-intervention-brainstorm`
- `unknowns-spec-interview`
- `unknowns-reference-map`
- `unknowns-tweakable-plan`
- `unknowns-implementation-notes`
- `unknowns-buy-in-doc`
- `unknowns-merge-quiz`

## Related Infinite projects

These are related public projects, not replacement install paths for this focused skill pack:

- [Infinite Skills](https://github.com/Infinite-Labs-AI/infinite-skills) — the broader collection
  of marketing operator skills plus the Goal skill.
- [Infinite OS](https://github.com/Infinite-Labs-AI/infinite-os) — the open-source local growth
  analytics engine and CLI for Claude and Codex.
- [Infinite agent ecosystem](https://infinite.fast/agents/) — the public map of Infinite's shipped
  open-source agents and local tools.
- [Infinite](https://infinite.fast/) — the main product website.

## Validate or contribute

The repository's validation command checks the installer syntax and runs its non-writing dry-run:

```bash
npm test
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for skill registration, validation, and pull-request rules.
Security issues should follow the [Infinite Labs AI security policy](https://github.com/Infinite-Labs-AI/.github/security/policy), not a public issue.
