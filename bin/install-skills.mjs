#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SKILLS = [
  "know-your-unknowns",
  "unknowns-blindspot-pass",
  "unknowns-domain-bootstrap",
  "unknowns-design-directions",
  "unknowns-mock-before-wire",
  "unknowns-intervention-brainstorm",
  "unknowns-spec-interview",
  "unknowns-reference-map",
  "unknowns-tweakable-plan",
  "unknowns-implementation-notes",
  "unknowns-buy-in-doc",
  "unknowns-merge-quiz"
];

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function usage() {
  return `Install Know Your Unknowns skills for Codex and Claude.

Usage:
  npx know-your-unknowns-skills
  npx know-your-unknowns-skills --codex-only
  npx know-your-unknowns-skills --claude-only

Options:
  --codex-only       Install only to ~/.codex/skills
  --claude-only      Install only to ~/.claude/skills
  --dry-run          Print actions without writing
  --force            Replace existing skills without creating backups
  --help             Show this help

Environment:
  CODEX_HOME         Override Codex home, default ~/.codex
  CLAUDE_HOME        Override Claude home, default ~/.claude
  CODEX_SKILLS_DIR   Override Codex skills dir directly
  CLAUDE_SKILLS_DIR  Override Claude skills dir directly
`;
}

function parseArgs(argv) {
  const options = {
    codex: true,
    claude: true,
    dryRun: false,
    force: false
  };

  for (const arg of argv) {
    if (arg === "--help" || arg === "-h") {
      console.log(usage());
      process.exit(0);
    }
    if (arg === "--codex-only") {
      options.codex = true;
      options.claude = false;
      continue;
    }
    if (arg === "--claude-only") {
      options.codex = false;
      options.claude = true;
      continue;
    }
    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (arg === "--force") {
      options.force = true;
      continue;
    }
    throw new Error(`Unknown option: ${arg}\n\n${usage()}`);
  }

  return options;
}

function skillDirs() {
  const home = os.homedir();
  const codexHome = process.env.CODEX_HOME || path.join(home, ".codex");
  const claudeHome = process.env.CLAUDE_HOME || path.join(home, ".claude");
  return {
    codex: process.env.CODEX_SKILLS_DIR || path.join(codexHome, "skills"),
    claude: process.env.CLAUDE_SKILLS_DIR || path.join(claudeHome, "skills")
  };
}

async function listFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "__pycache__" || entry.name.endsWith(".pyc")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      for (const child of await listFiles(fullPath)) {
        files.push(path.join(entry.name, child));
      }
    } else if (entry.isFile()) {
      files.push(entry.name);
    }
  }
  return files.sort();
}

async function digestDir(dir) {
  const hash = createHash("sha256");
  for (const rel of await listFiles(dir)) {
    hash.update(rel);
    hash.update("\0");
    hash.update(await fs.readFile(path.join(dir, rel)));
    hash.update("\0");
  }
  return hash.digest("hex");
}

async function sameTree(a, b) {
  if (!existsSync(a) || !existsSync(b)) return false;
  const [aHash, bHash] = await Promise.all([digestDir(a), digestDir(b)]);
  return aHash === bHash;
}

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, "").replace(/\..+$/, "Z");
}

async function copySkill(source, target, options) {
  if (!existsSync(source)) {
    throw new Error(`Missing packaged skill: ${source}`);
  }

  if (!existsSync(target)) {
    if (options.dryRun) return `would install ${target}`;
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.cp(source, target, { recursive: true, preserveTimestamps: true });
    return `installed ${target}`;
  }

  if (await sameTree(source, target)) {
    return `already current ${target}`;
  }

  if (options.dryRun) {
    return options.force
      ? `would replace ${target}`
      : `would back up and replace ${target}`;
  }

  if (options.force) {
    await fs.rm(target, { recursive: true, force: true });
  } else {
    const backup = `${target}.bak-${timestamp()}`;
    await fs.rename(target, backup);
  }
  await fs.cp(source, target, { recursive: true, preserveTimestamps: true });
  return `updated ${target}`;
}

async function installTarget(label, skillsDir, options) {
  const results = [];
  if (!options.dryRun) await fs.mkdir(skillsDir, { recursive: true });
  for (const skill of SKILLS) {
    const source = path.join(packageRoot, skill);
    const target = path.join(skillsDir, skill);
    results.push(`[${label}] ${await copySkill(source, target, options)}`);
  }
  return results;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const dirs = skillDirs();
  const results = [];

  if (options.codex) {
    results.push(...await installTarget("codex", dirs.codex, options));
  }
  if (options.claude) {
    results.push(...await installTarget("claude", dirs.claude, options));
  }

  console.log(results.join("\n"));
  console.log("\nDone. Restart Codex or Claude if an existing session does not pick up the new skills.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
