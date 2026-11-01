# Pre-launch checklist

## Security
- [ ] OWASP Top 10:2025 reviewed against this app (access control, misconfiguration, supply chain, crypto, injection, design, auth, integrity, logging, exception handling)
- [ ] Authorization tested at object level on every endpoint and Server Action
- [ ] Security headers set: CSP (nonces), HSTS (+preload when ready), X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors
- [ ] CORS allows only needed origins; cookies are HttpOnly, Secure, SameSite
- [ ] Passwords hashed with argon2id/bcrypt; MFA/passkeys offered; session rotation and timeouts
- [ ] Rate limiting on auth, search, and expensive endpoints; webhook signatures verified
- [ ] No secrets in repo, client bundle, logs; secrets rotated; least-privilege DB role
- [ ] React/Next.js on patched versions (CVE-2025-55182 class); dependency audit clean at high severity
- [ ] File uploads: type, size, storage location, malware scan

## Performance
- [ ] LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 on a mid-range mobile profile
- [ ] Initial JS within budget; images AVIF/WebP with dimensions; fonts preloaded and subset
- [ ] DB queries reviewed with EXPLAIN ANALYZE; indexes in place; pooling configured
- [ ] Caching headers and CDN configured; cache invalidation tested
- [ ] Load test run to expected peak with p95/p99 targets

## Accessibility and compliance
- [ ] WCAG 2.2 AA checked with axe plus a manual keyboard and screen-reader pass
- [ ] Privacy policy, terms, cookie consent (opt-in, logged) in place if serving the EU
- [ ] Data export and deletion paths exist (GDPR); retention rules set
- [ ] Email: SPF, DKIM, DMARC pass; unsubscribe works

## SEO
- [ ] Titles, meta, canonical, Open Graph, sitemap.xml, robots.txt, JSON-LD where relevant; hreflang for multilingual

## Observability and operations
- [ ] Error tracking with source maps and release tagging; uptime check; status page
- [ ] Structured logs with request IDs; traces for the critical path; RUM for Web Vitals
- [ ] SLOs and alerts defined; on-call and runbooks exist
- [ ] Backups configured AND a restore has been rehearsed (RPO/RTO known)
- [ ] Rollback tested; feature flags for risky parts; migrations backward compatible
- [ ] Cost alerts and budgets set
