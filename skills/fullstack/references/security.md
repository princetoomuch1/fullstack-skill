# Security

- OWASP Top 10:2025, authentication, authorization, web/API threats, supply chain, operational and AI security.
- Server-side authorization on every endpoint and Server Action.
- Treat RSC/Server Function endpoints as public attack surface.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- OWASP Top 10:2025 final January 2026; adds Software Supply Chain Failures and Mishandling of Exceptional Conditions.
- React2Shell CVE-2025-55182 (CVSS 10), disclosed 3 Dec 2025; patched 19.0.1 / 19.1.2 / 19.2.1.
- Mini Shai-Hulud, May 2026: some malicious packages carried valid provenance attestations.
- EU CRA reporting obligations apply from 11 Sep 2026; main obligations 11 Dec 2027.

## 10. Security

Security moved into implementation, not post-deployment review. Average data-breach cost reached $4.44M in 2025 `[unverified — confirm source]` [16].

**OWASP Top 10:2025 [Core]** (announced November 2025 at Global AppSec, final release January 2026; 248 CWEs across the ten categories) [48][49]:
A01 **Broken Access Control** (SSRF folded in) · A02 **Security Misconfiguration** · A03 **Software Supply Chain Failures** (new) · A04 **Cryptographic Failures** · A05 **Injection** (SQLi, XSS, command, NoSQL, template) · A06 **Insecure Design** · A07 **Authentication Failures** · A08 **Software or Data Integrity Failures** · A09 **Logging & Alerting Failures** · A10 **Mishandling of Exceptional Conditions** (new; improper error handling, fail-open) [48][50][49] · the 2021 list is what older postings still cite — know both labels

**Authentication [Core]:** password hashing (**argon2id**, **bcrypt**, scrypt; never MD5/SHA alone), JWT lifecycle (signing, `alg` pinning, verification, expiration, refresh rotation + reuse detection), OAuth 2.0 / OIDC flows (authorization code + **PKCE**; OAuth 2.1 direction), session management (server-side sessions, `__Host-` cookies, rotation on privilege change, idle + absolute timeouts), MFA (TOTP, WebAuthn; SMS is weakest), **Passkeys/WebAuthn** (FIDO2, phishing-resistant, platform authenticators — standard practice), account recovery hardening, credential-stuffing defense (rate limits, breached-password check), SSO (SAML, OIDC), SCIM provisioning [Situational], magic links

**Authorization [Core]:** RBAC (role-based access control), permission checks enforced server-side on **every** endpoint and Server Action, least privilege, object-level checks (**BOLA/IDOR**), ABAC awareness, ReBAC (OpenFGA, SpiceDB, Zanzibar-style) and policy engines (OPA, Cedar) [Senior], tenant isolation checks, deny by default

**Web & API threats [Core]:** XSS (stored, reflected, DOM-based — output encoding, CSP with nonces/`strict-dynamic`, Trusted Types) · CSRF (SameSite cookies, CSRF tokens, double-submit, Origin checks on Server Actions) · SQL injection (parameterized queries, prepared statements — never string concatenation) · SSRF (validate URLs, block internal/metadata IPs, egress allowlists) · unsafe deserialization (**React2Shell is the 2025 case study** [13][14]) · path traversal, open redirect, clickjacking (`frame-ancestors`), prototype pollution, ReDoS, mass assignment, file-upload risks (type sniffing, size limits, AV scan, storage outside web root), XXE · **OWASP API Security Top 10 (2023):** BOLA, broken authentication, BOPLA, unrestricted resource consumption, BFLA, unrestricted access to sensitive business flows, SSRF, security misconfiguration, improper inventory management, unsafe consumption of APIs

**Input & transport [Core]:** server-side validation on every input (Zod, Joi, class-validator), output encoding, sanitization (DOMPurify) · CORS (allowed origins, credentials, preflight) · security headers: CSP, HSTS (+ preload), X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP/COEP/CORP, Subresource Integrity · TLS everywhere, secure cookie attributes · rate limiting / abuse prevention

**Secrets & data protection [Core]:** no secrets in code or client bundles (`NEXT_PUBLIC_*` is public) · rotation policies, vault management, short-lived credentials · encryption at rest/in transit, field-level encryption for PII, KMS · secrets scanning pre-commit and in CI

**Software supply chain — a Core competency after the 2025–2026 npm worm waves [Core]:**
- **Timeline:** Shai-Hulud worm (September 2025, 500+ packages) and Shai-Hulud 2.0 (November 2025, ~800 packages) `[unverified — confirm source]` [51][52][53] · **Mini Shai-Hulud (TeamPCP), May 2026:** 11–12 May wave hit 160–172 npm/PyPI packages including @tanstack/react-router (~12M weekly downloads), Mistral, UiPath and Guardrails AI, and was the first npm worm to ship **validly attested** malicious packages — provenance alone does not prove safety [35] · 19 May wave compromised the `atool` maintainer account (314 of 547 packages, 637 malicious versions in under an hour, ~16M weekly downloads) [34] · campaign total to date: 1,055 compromised versions across 502 packages on npm, PyPI and Composer [54]
- **Mechanism:** malicious `preinstall`/`postinstall`/`prepare` hooks steal npm tokens, GitHub PATs and cloud credentials, then republish through the victim's packages [34][54]
- **Practices:** disable install scripts by default (`ignore-scripts=true`; pnpm 10+ blocks dependency build scripts unless allowlisted via `onlyBuiltDependencies`) · `npm ci`/frozen lockfile in CI, never `npm install` · lockfile review and lockfile-lint · **dependency cooldown** (pnpm `minimumReleaseAge`, Renovate `minimumReleaseAge`, Dependabot cooldown: wait 7–14 days before adopting new versions) · pin exact versions for critical deps · npm 2FA with WebAuthn, **trusted publishing (OIDC)** with scoped tokens, provenance attestations (necessary, not sufficient) · SBOM generation (CycloneDX/SPDX; Syft) · real-time blocking (Socket, Snyk, Aikido, npq pre-install audit) · dev containers / sandboxing for untrusted installs · rotate every credential reachable from an affected machine [55][56]
- **Regulation:** EU Cyber Resilience Act — vulnerability and incident reporting obligations apply from **11 September 2026** (early warning within 24 hours, fuller notification within 72 hours), main obligations including SBOM-backed technical documentation from 11 December 2027 [57][58]

**Operational security [Senior]:** threat modeling (STRIDE), security review in PR, dependency risk (`npm audit`, Snyk, Dependabot, Renovate), SAST/DAST/SCA in CI, container and IaC scanning (Trivy, Checkov), WAF + bot management, CAPTCHA/Turnstile, audit logging, incident response plan, vulnerability disclosure policy (security.txt), penetration test remediation, CIS benchmarks

**AI-specific security [Senior]:** OWASP Top 10 for LLM Applications 2025 (prompt injection ranked first, then sensitive information disclosure, then supply chain) [59] · prompt-injection defense, tool permission boundaries, output validation, secrets isolation from model context, MCP server auth (OAuth 2.1 + PKCE) → §13

**[Situational]** Zero Trust architecture, compliance frameworks (GDPR, SOC 2, ISO 27001, HIPAA, PCI-DSS 4.0, India DPDP Act depending on market) → §17, penetration testing, bug bounty, HSM/KMS key management, mTLS


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
