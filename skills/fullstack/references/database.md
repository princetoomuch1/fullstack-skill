# Databases & Data Layer

- Postgres by default. Indexing, transactions, RLS, migrations, Redis, ORM decision rule, vectors, governance.
- Never `db push` in production; expand-and-contract migrations.
- Money as integer minor units; timestamptz always.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- Stack Overflow 2026: PostgreSQL 57.9%, SQLite 42.1%, MySQL 35.1%, Redis 28.3%, MongoDB 19.0%.
- Drizzle is ahead of Prisma in npm downloads; Prisma 8 is an RC; Drizzle still 0.45.x (Oct 2026).

## 4. Databases & Data Layer

**PostgreSQL [Core]** — 57.9% usage in Stack Overflow 2026, #1 database [6]; SQLite 42.1%, MySQL 35.1%, Redis 28.3%, SQL Server 27.1%, MariaDB 20.3%, MongoDB 19.0%, Elasticsearch 14.8% [6]: types (uuid, **timestamptz always**, jsonb, arrays, generated columns, enums vs lookup tables) · PostgreSQL 18 (native `uuidv7()`, async I/O) · normalization 1NF–3NF + deliberate denormalization · constraints (FK, CHECK, UNIQUE, EXCLUDE, NOT NULL discipline) · **indexes: B-tree, composite column order (leftmost prefix), partial, expression, covering (INCLUDE), GIN (jsonb/FTS), GiST, BRIN, pg_trgm fuzzy, HNSW/IVFFlat (vectors)** · **`EXPLAIN (ANALYZE, BUFFERS)`** reading · **`pg_stat_statements`** (slow-query source of truth) · N+1 detection/fixes (joins, IN-batching, DataLoader) · **transactions + isolation levels** (read committed / repeatable read / serializable; dirty, non-repeatable, phantom reads, write skew) · locking: optimistic version columns vs `SELECT ... FOR UPDATE [SKIP LOCKED]`, advisory locks, deadlock + serialization-failure retries · CTEs, window functions, `LATERAL`, `UPSERT` (`ON CONFLICT`) · full-text search (tsvector/tsquery) · LISTEN/NOTIFY · partitioning (range/list/hash) · materialized views · **Row-Level Security (RLS) — the multi-tenancy primitive** · logical replication + CDC (Debezium situational) · connection pooling (PgBouncer, RDS Proxy, pool-size math) · **PITR backups + restore drills** · autovacuum/bloat awareness, `VACUUM`, `ANALYZE` · extensions: pgvector, PostGIS, pg_cron, pg_trgm, pg_partman

**Scaling [Senior]:** read replicas + replication lag handling · Citus sharding · connection ceiling math · queue-based write smoothing · hot-row contention · online schema change tools · caching in front of reads · zero-downtime failover/HA (Patroni, managed multi-AZ)

**Data modeling hygiene [Core]:** ID strategy (UUIDv7/ULID vs bigserial vs UUIDv4 index-bloat tradeoff) · **money as integer minor units or `numeric`, never float** · UTC storage + IANA time zone name for user-facing time · soft delete columns + partial unique indexes · created_at/updated_at triggers · idempotency/unique business keys · enums evolution · JSONB vs relational columns decision · audit/history tables

**Redis [Core]** (28.3% usage in Stack Overflow 2026, #4 database [6]): data structures (hashes, sorted sets, streams, HyperLogLog) · cache-aside, write-through, session store, rate limiter patterns, pub/sub · distributed locks (`SET NX PX` + fencing token; know the Redlock debate) · eviction (allkeys-lru), TTL discipline, hot keys, big keys, cache stampede protection · persistence (RDB/AOF) tradeoffs · **[Situational]** Upstash (serverless), Valkey (open fork), Dragonfly

**MongoDB [Core]:** embed vs reference, schema validation, aggregation pipeline, indexes, change streams, transactions · 19.0% usage in Stack Overflow 2026 (7th) [6]; Postgres + JSONB absorbs many document use cases, but MongoDB remains a MERN staple in postings → learn it when the posting says MERN; default to Postgres otherwise

**ORM/query layer [Core]:** **Drizzle** (TS-first schema, SQL-like API, ~7.4KB gzip, zero dependencies, edge-native; now ahead of Prisma in weekly npm downloads — sources disagree on the crossover date and exact figures, but all agree on the direction [27][28]; still pre-1.0 numbering at 0.45.x with a 1.0 RC track as of October 2026 [27] · **hazard: in strict/interactive modes a renamed column can be generated as drop+add = data loss; always read generated SQL** `[unverified — confirm source]`) · **Prisma** (Prisma 7: pure-TypeScript client, Rust engine removed, ~1.6MB bundle, edge support `[unverified — confirm source]`; Prisma 8 is a release candidate and the npm `latest` tag pointed at `8.0.0-rc.23` on 19 October 2026, so pin to the last stable 7.x in production [27]; schema-first `.prisma`, `prisma generate`, Prisma Migrate, Prisma Studio) · Kysely (typed SQL builder) · TypeORM (legacy/NestJS, 1.1.x line [27]) / Sequelize (legacy) · SQLAlchemy 2 + Alembic (Python) · sqlc (Go) · **decision rule:** Drizzle → edge/serverless, SQL-literate teams, small bundles; Prisma → teams that prioritize DX and a polished migrate/Studio workflow and do not need the smallest bundle; raw SQL/Kysely → complex reporting queries

**Migration discipline [Core]:** versioned files, **never `db push` in prod**, review generated SQL, **expand-and-contract (zero-downtime) migrations**, backward-compatible deploys, lock-aware DDL (`CREATE INDEX CONCURRENTLY`, `NOT VALID` constraints then `VALIDATE`), staging rehearsal at prod volume, roll-forward preference, seed vs fixture data, schema drift detection

**Vector/AI data [Senior]:** **pgvector** (HNSW), Pinecone, Qdrant, Weaviate, Chroma, Turbopuffer · hybrid search (vector + FTS/BM25), reranking, metadata filtering · embedding model versioning + re-embed plan · when NOT: below ~1M vectors, pgvector in your existing Postgres is usually enough

**Search [Situational]:** Postgres FTS, **ParadeDB pg_search**, Meilisearch, Typesense, Algolia, Elasticsearch/OpenSearch · relevance concepts (typo tolerance, faceting, synonyms, BM25, analyzers)

**Analytics & warehouse [Situational]:** ClickHouse, **DuckDB** (local analytics), BigQuery, Snowflake, TimescaleDB, dbt, ETL/ELT (Airbyte, Fivetran), event pipelines (Segment, RudderStack), OLTP vs OLAP separation

**[Situational]** MySQL/PlanetScale (Vitess), SQLite + Turso/libSQL (edge), Cloudflare D1, DynamoDB (single-table design), CockroachDB, Neon (branching, scale-to-zero), PostGIS (geospatial), graph (Neo4j), serverless Postgres cold-start behavior

**Data governance [Senior]:** backups + tested restores (RPO/RTO) · encryption at rest/in transit, column-level encryption for PII · data retention + deletion jobs (GDPR erasure) · PII tagging, masking in non-prod · least-privilege DB roles, no superuser from the app · secrets rotation


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
