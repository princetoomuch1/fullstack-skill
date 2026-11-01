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

for (const rel of ['README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'LICENSE-CODE', 'LICENSE-CONTENT'])
  if (!existsSync(join(root, rel))) fail(`missing ${rel}`);

if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join('\n')); process.exit(1); }
console.log(`OK: SKILL.md ${skillLines} lines, ${refs.length} references routed, ${sourceIds.size} sources, 15 doctrine rules`);
