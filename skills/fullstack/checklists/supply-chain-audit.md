# Supply-chain audit (runnable)

Background: references/security.md, "Software supply chain". Run top to bottom; record the result of each command.

## 1. Install posture
- [ ] `.npmrc` has `ignore-scripts=true` and `save-exact=true` (templates/npmrc)
- [ ] pnpm: `onlyBuiltDependencies` is a short, reviewed allowlist (templates/pnpm-workspace.yaml)
- [ ] Cooldown configured: pnpm `minimumReleaseAge` and/or Renovate `minimumReleaseAge: 7 days` (templates/renovate.json)
- [ ] CI uses `npm ci` or `pnpm install --frozen-lockfile`; never `npm install`
```bash
grep -E "ignore-scripts|save-exact" .npmrc
git grep -nE "npm install( |$)" -- .github Dockerfile* package.json || echo "none"
```

## 2. Lockfile and dependency review
- [ ] Lockfile committed; diffs reviewed in PRs
- [ ] No git/URL/tarball dependencies without justification
- [ ] No dependency published within the cooldown window
```bash
npm audit --audit-level=high   # with pnpm: pnpm audit --audit-level high; trace a package with: pnpm why <pkg>
git grep -nE '"(preinstall|postinstall|prepare)"' -- package.json packages/*/package.json apps/*/package.json
```

## 3. CI hardening
- [ ] Every third-party Action pinned by full commit SHA
- [ ] Top-level `permissions: contents: read`; elevate per job only
- [ ] No `pull_request_target` that checks out untrusted code with secrets
- [ ] Cloud auth through OIDC; no long-lived cloud keys in secrets
```bash
git grep -nE "uses: [^@]+@(v[0-9]|main|master)" -- .github/workflows || echo "all pinned"
git grep -n "pull_request_target" -- .github/workflows || echo "none"
```

## 4. Publishing (if you publish packages)
- [ ] npm 2FA with WebAuthn; trusted publishing via OIDC; scoped, short-lived tokens
- [ ] Provenance attestation on (necessary, not sufficient: attested packages were malicious in May 2026)
- [ ] SBOM generated per release (CycloneDX or SPDX)

## 5. Exposure and response
- [ ] Secrets scanning on (gitleaks/TruffleHog) pre-commit and in CI
- [ ] Know how to rotate: npm tokens, GitHub PATs, cloud credentials, API keys
- [ ] If a compromised package was ever installed on a dev machine or runner: treat every reachable credential as compromised and rotate
- [ ] EU-facing products: CRA reporting contact and 24h/72h process documented (applies from 11 September 2026)
