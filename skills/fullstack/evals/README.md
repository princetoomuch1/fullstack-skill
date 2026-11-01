# Evals

`prompts.jsonl` holds 25 routing prompts. Each line:

```json
{"id": "r01", "prompt": "...", "expected_references": ["api-integration.md"], "expected_behaviors": ["..."]}
```

- `expected_references`: reference files a correct agent should read (first entry is the primary).
- `expected_behaviors`: things the answer or plan must do or must not do.

## What CI checks today

`node scripts/check-skill.mjs` validates the file: 25 lines, valid JSON, unique ids, every expected reference exists and is routed in SKILL.md.

## What is NOT automated yet

Running the prompts against a live model and scoring routing accuracy (target: at least 90% primary-reference hits) needs an API key and a runner, which this repository does not ship yet. Until then, run the prompts manually with your agent and record results in a pull request. Do not claim a measured accuracy without doing that.
