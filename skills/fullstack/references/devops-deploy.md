# Cloud, DevOps & Deployment

- Git and CI/CD hardening, containers, deploy targets, IaC, release strategies, platform engineering.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- Pin Actions by SHA; use OIDC federation instead of long-lived cloud keys.
- Stack Overflow 2025 infrastructure figures are carried and flagged [unverified].

## 7. Cloud, DevOps & Deployment

Core full-stack scope in 2026, not an optional extra [16].

**Source control & delivery [Core]:**
- **Git:** branching strategies (trunk-based, GitFlow), rebase vs merge, squash, cherry-pick, bisect, reflog, conflict resolution, conventional commits, PR workflows, CODEOWNERS, branch protection, signed commits, semantic versioning, changesets/semantic-release
- **CI/CD — GitHub Actions** (dominant CI; 62% personal / 41% org usage `[unverified — confirm source]`): lint → typecheck → test → build → deploy pipelines, matrix builds, caching, reusable workflows, secrets management, environment protection rules, preview deployments, environment promotion (dev → staging → prod), concurrency groups, path filters, artifact attestation · **harden the pipeline:** pin third-party Actions to a commit SHA, least-privilege `permissions:`, avoid `pull_request_target` with untrusted code, **OIDC federation to cloud (no long-lived cloud keys in CI)** — the Mini Shai-Hulud payloads harvest GitHub tokens, npm tokens and cloud credentials from CI and developer machines [34][35] · GitLab CI, CircleCI [Situational]

**Containers [Core]:** **Docker** — 71.1% usage in Stack Overflow 2025, largest single-year jump (+17pp) of any technology that year `[unverified — confirm source]` [25][36] · multi-stage builds, Docker Compose, image optimization (layer caching, `.dockerignore`, alpine/slim/distroless bases, BuildKit cache mounts), non-root user, read-only root filesystem, healthchecks, pin base image digests, container registries (Docker Hub, ECR, GHCR, Artifact Registry), image scanning (Trivy, Grype) · Dev Containers

**Deployment targets [Core]:**
- **Vercel:** Next.js native, preview deployments, edge/Fluid compute functions, analytics, AI Gateway (10.6% cloud-platform usage in SO 2025) `[unverified — confirm source]`
- **Netlify**, **Railway**, **Render**, **Fly.io** (global machines), Cloud Run, Azure Container Apps
- **Cloudflare Workers/Pages:** edge compute on V8 isolates, near-zero cold starts, D1 (SQLite), KV, R2, Durable Objects, Queues, Workflows, Hyperdrive (20.1% platform usage in SO 2025) `[unverified — confirm source]`
- **AWS basics** (43.3% in SO 2025 `[unverified — confirm source]`): EC2, S3, Lambda, RDS/Aurora, ECS/Fargate, CloudFront, IAM, Route 53, SQS/SNS, EventBridge, Secrets Manager, VPC basics (public/private subnets, security groups, NAT)
- **Serverless vs container vs VM decision:** serverless → spiky traffic, event handlers, small teams; containers → steady load, long-lived connections, predictable cost; VMs → legacy/stateful or GPU

**Ops fundamentals [Core]:** Linux/terminal (bash, ssh, process management, systemd, journalctl, `curl`, `jq`, `lsof`, `dig`) · environment variables (type-safe validation with `@t3-oss/env-*` + Zod) · secrets management (Doppler, AWS Secrets Manager, Vault, SOPS, 1Password; never commit `.env`) · TLS/HTTPS (Let's Encrypt, ACME, certificate renewal), DNS configuration, CDN + WAF + DDoS protection (Cloudflare, CloudFront), reverse proxy (Nginx, Caddy, Traefik) · rollback strategy · backups and restore drills

**Infrastructure & scale [Senior]:**
- **Kubernetes** (28.5% usage in SO 2025 `[unverified — confirm source]`): pods, deployments, services, ingress/Gateway API, Helm, HPA, probes, resource requests/limits, namespaces, RBAC, managed offerings (EKS/GKE/AKS) · **when NOT:** small team, few services → managed container platform is cheaper to operate
- **Infrastructure as Code:** **Terraform** (17.8% in SO 2025 `[unverified — confirm source]`) / OpenTofu, Pulumi, AWS CDK, SST — declarative state, remote state + locking, modules, drift detection, plan-in-PR/apply-on-merge · **GitOps:** Argo CD, Flux
- **Release strategies:** feature flags (LaunchDarkly, Flagsmith, GrowthBook, OpenFeature, Vercel Flags SDK, simple DB flags), canary, blue-green, progressive delivery, dark launches, kill switches, database-compatible rollbacks
- **Cost-aware architecture (FinOps):** right-sizing, spot instances, serverless vs container cost tradeoffs, egress costs, budgets + alerts, tagging, cost per tenant/request
- **Multi-environment strategy:** dev, staging, production parity, ephemeral preview environments, branch databases (Neon/PlanetScale branching), seed data
- **Reliability:** multi-AZ, multi-region failover, RTO/RPO, disaster-recovery runbooks, load testing before launch, capacity planning
- **Platform engineering awareness** [Senior for platform roles]: Backstage (CNCF; reported ~89% IDP market share, 3,400+ adopters), Port, Cortex, OpsLevel, Humanitec · service catalogs, golden paths, scorecards, self-service provisioning · DORA metrics (deployment frequency, lead time, change failure rate, MTTR) · reported 94% of orgs adopting or planning platform teams `[unverified — confirm source]` [37][38][39] · **caveat:** Backstage demands React/TypeScript expertise, 6–12 months to stand up, ~10% internal adoption outside Spotify `[unverified — confirm source]` [38] → managed (Roadie, Port) beats DIY for small platform teams

**[Situational]** Azure (26.3% in SO 2025 `[unverified — confirm source]`), GCP (24.6%), Firebase, DigitalOcean/Hetzner, Nix, Packer, Ansible, service mesh (Istio, Linkerd), Vagrant/Colima


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
