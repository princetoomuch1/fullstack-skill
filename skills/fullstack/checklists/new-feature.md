# New feature checklist: PLAN, BUILD, VERIFY

Copy into the PR description or your task tracker. Skip an item only by writing why.

## PLAN (gate: goal, constraints, stack, riskiest assumption in five lines)
- [ ] User-visible behavior described in one sentence; acceptance criteria listed
- [ ] Data model change identified; migration is expand-and-contract and backward compatible
- [ ] Authorization rule written down (who can do what to which object)
- [ ] Inputs and external calls listed (each needs validation and a timeout)
- [ ] Rollout: feature flag? rollback path? who is on call?
- [ ] Riskiest assumption named and a cheap way to test it chosen

## BUILD (gate: each slice compiles, passes its tests, small diff)
- [ ] Vertical slice first (UI + API + data for one behavior)
- [ ] Boundary validation with a Standard-Schema validator
- [ ] Server-side authorization on the endpoint/Server Action, object-level
- [ ] Parameterized queries; no ORM entities in responses
- [ ] Errors returned as RFC 9457 problem details; no internals leaked
- [ ] Idempotency key on mutating endpoints that clients may retry
- [ ] Slow work moved to a background job; jobs are idempotent
- [ ] Accessible by default: labels, focus order, keyboard use, contrast

## VERIFY (gate: green tests, types, lint, budgets; applicable doctrine rules checked)
- [ ] Unit/integration tests for logic; Playwright test for the main path; MSW for external calls
- [ ] Authorization test: another user/tenant cannot read or modify the object
- [ ] `tsc --noEmit`, lint, and tests pass locally and in CI
- [ ] Web Vitals budgets checked (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1) for UI changes
- [ ] Viewed in a browser at mobile and desktop widths
- [ ] Logs/metrics/traces cover the new path; no PII or secrets in logs
- [ ] No `[unverified]` claim copied into comments or docs as fact
- [ ] Diff reviewed line by line, including AI-generated code

## SHIP
- [ ] CI green with pinned actions; migration applied safely in staging first
- [ ] Flag default off or canary plan agreed; rollback steps written
- [ ] Alerts/dashboards updated; changelog or release note written
