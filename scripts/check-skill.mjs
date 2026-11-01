// Validates the skill pack. Zero dependencies. Node >= 20.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const skillDir = join(root, 'skills/fullstack');
const refDir = join(skillDir, 'references');
const errors = [];
const fail = (m) => errors.push(m);

const skill = readFileSync(join(skillDir, 'SKILL.md'), 'utf8');
const skillLines = skill.split('\n').length;
if (skillLines > 400) fail(`SKILL.md has ${skillLines} lines (max 400)`);

const fm = skill.match(/^---\n([\s\S]*?)\n---/);
if (!fm) fail('SKILL.md is missing YAML frontmatter');
else for (const k of ['name', 'description', 'version', 'license'])
  if (!new RegExp(`^${k}:`, 'm').test(fm[1])) fail(`frontmatter missing "${k}"`);

const refs = readdirSync(refDir).filter((f) => f.endsWith('.md') && f !== 'SOURCES.md');
const sources = readFileSync(join(refDir, 'SOURCES.md'), 'utf8');
const sourceIds = new Set([...sources.matchAll(/^\[(\d+)\] /gm)].map((m) => m[1]));

for (const f of refs) {
  if (!skill.includes(`references/${f}`)) fail(`router does not mention references/${f}`);
  const body = readFileSync(join(refDir, f), 'utf8');
  const n = body.split('\n').length;
  if (n > 600) fail(`${f} has ${n} lines (max 600)`);
  for (const m of body.matchAll(/\[(\d{1,3})\]/g))
    if (!sourceIds.has(m[1])) fail(`${f}: citation [${m[1]}] not found in SOURCES.md`);
}

const doctrine = (skill.match(/^\d+\. \*\*/gm) || []).length;
if (doctrine !== 15) fail(`Doctrine has ${doctrine} rules (expected 15)`);

// Phase 2 assets
const tpl = join(skillDir, 'templates');
for (const f of ['tsconfig.strict.json','npmrc','pnpm-workspace.yaml','renovate.json','ci-github-actions.yml','env.ts','errors.ts','idempotency.ts','webhook-verify.ts','vitest.config.ts','playwright.config.ts','msw-handlers.ts'])
  if (!existsSync(join(tpl, f))) fail(`missing templates/${f}`);
try { JSON.parse(readFileSync(join(tpl, 'tsconfig.strict.json'), 'utf8')); JSON.parse(readFileSync(join(tpl, 'renovate.json'), 'utf8')); }
catch (e) { fail(`template JSON invalid: ${e.message}`); }
const stacks = existsSync(join(tpl, 'stacks')) ? readdirSync(join(tpl, 'stacks')).filter((f) => f.endsWith('.md')) : [];
if (stacks.length !== 12) fail(`templates/stacks has ${stacks.length} files (expected 12)`);
for (const s of stacks) if (!skill.includes(s.replace('.md', ''))) fail(`SKILL.md does not list stack ${s}`);
for (const f of ['new-feature.md','pre-launch.md','supply-chain-audit.md'])
  if (!existsSync(join(skillDir, 'checklists', f))) fail(`missing checklists/${f}`);
const ci = readFileSync(join(tpl, 'ci-github-actions.yml'), 'utf8');
for (const m of ci.matchAll(/uses:\s*([^@\s]+)@(\S+)/g)) if (!/^[0-9a-f]{40}$/.test(m[2])) fail(`ci template: ${m[1]} not pinned by SHA`);

const evalPath = join(skillDir, 'evals/prompts.jsonl');
if (!existsSync(evalPath)) fail('missing evals/prompts.jsonl');
else {
  const rows = readFileSync(evalPath, 'utf8').trim().split('\n').map((l, i) => { try { return JSON.parse(l); } catch { fail(`evals line ${i + 1} is not valid JSON`); return {}; } });
  if (rows.length !== 25) fail(`evals has ${rows.length} prompts (expected 25)`);
  const ids = new Set();
  for (const r of rows) {
    if (!r.id || !r.prompt || !Array.isArray(r.expected_references) || !r.expected_references.length) fail(`eval ${r.id ?? '?'} missing fields`);
    if (ids.has(r.id)) fail(`duplicate eval id ${r.id}`); ids.add(r.id);
    for (const ref of r.expected_references ?? []) if (!refs.includes(ref)) fail(`eval ${r.id}: unknown reference ${ref}`);
  }
}

for (const rel of ['README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'LICENSE-CODE', 'LICENSE-CONTENT'])
  if (!existsSync(join(root, rel))) fail(`missing ${rel}`);

if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join('\n')); process.exit(1); }
console.log(`OK: SKILL.md ${skillLines} lines, ${refs.length} references routed, ${sourceIds.size} sources, 15 doctrine rules`);
