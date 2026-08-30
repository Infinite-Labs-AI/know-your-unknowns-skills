# Contributing to Know Your Unknowns Skills

Contributions should make assumption discovery more concrete without turning a focused skill into a
generic prompt collection. Small corrections, clearer trigger language, stronger output contracts,
and reproducible installer fixes are welcome.

## Development setup

Requirements:

- Node.js 18 or newer
- npm

Fork the repository, clone your fork, and create a descriptive branch:

```bash
git clone https://github.com/YOUR-ACCOUNT/know-your-unknowns-skills.git
cd know-your-unknowns-skills
git switch -c fix/describe-the-change
```

There are currently no third-party runtime dependencies to install. Run the repository gate before
and after your edit:

```bash
npm test
git diff --check
```

`npm test` syntax-checks `bin/install-skills.mjs` and runs the installer with `--dry-run`; it does
not write to your Codex or Claude skill directories.

## Changing a skill

- Keep the YAML frontmatter valid and make the description specific enough for reliable routing.
- Preserve the skill's evidence and honesty boundaries. Mark unsupported conclusions as hypotheses.
- Do not add tokens, credentials, private paths, customer data, or private repository references.
- Keep examples generic and safe to publish.
- If the output contract changes, explain the user-visible effect in the pull request.

## Adding a skill

A new top-level skill directory must contain `SKILL.md` and be registered in all three places:

1. `SKILLS` in `bin/install-skills.mjs`
2. `files` in `package.json`
3. the Skills list in `README.md`

Run `npm test` afterward so the packaged source and both default destination plans are exercised by
the dry-run.

## Installer changes

The default installer protects modified destinations by moving them to timestamped `.bak-*`
directories before replacement. Preserve that non-clobbering default. Any change involving
`--force`, destination resolution, backups, or filesystem writes should include a clear manual test
plan and must keep `--dry-run` non-writing.

The GitHub `npx github:Infinite-Labs-AI/know-your-unknowns-skills` command is the current public
install route. Do not describe `npx know-your-unknowns-skills` as available until the npm registry
endpoint for this package returns a published package.

## Pull requests

Include:

- what changed and why;
- which skills or installer paths are affected;
- the exact validation commands and results;
- screenshots only when a rendered artifact changed;
- any compatibility or migration concern for existing installed skills.

Keep pull requests focused. Maintainers handle package publication and releases separately from an
ordinary documentation or skill change.

For vulnerabilities or installer supply-chain concerns, use the
[Infinite Labs AI security policy](https://github.com/Infinite-Labs-AI/.github/security/policy) and
do not open a public vulnerability issue.
