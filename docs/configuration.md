# Configuration

This document records current and planned configuration for `VITAL-APPOINTMENT`.

## 1. Current Checked-In Runtime Inputs

Current repo reality:

- `src/main.ts` reads `PORT` and falls back to `3000`
- the repository includes a Dockerfile plus `docker-compose.yml` for the app and local PostgreSQL
- `.env.example` documents the canonical local app port as `8009`
- `.env.example` documents the canonical local PostgreSQL port as `5435`
- `src/internal/internal.controller.ts` reads `INTERNAL_API_KEY` for the Auth-facing placeholder endpoint
- no checked-in Nest configuration module or env schema exists yet for database, Gateway trust, or outbound Auth calls

## 2. Local Development

Application:

```bash
npm install
npm run start:dev
```

Repo-local Docker:

```bash
docker compose up -d --build
```

## 3. Planned Integration-Facing Settings

When this service gains real Gateway/Auth integration, prefer explicit env-backed settings such as:

- `PORT`
- `INTERNAL_API_KEY`
- `DATABASE_URL`
- `GATEWAY_SECRET`
- `GATEWAY_TRUST_ENABLED`
- `AUTH_SERVICE_URL`
- `AUTH_INTERNAL_SERVICE_NAME` with default `vital-appointment`
- `AUTH_INTERNAL_SERVICE_KEY`
- `INTERNAL_API_KEY` only if legacy compatibility is required

## 4. Configuration Rules

- do not hardcode Gateway secrets or Auth internal credentials
- keep `.env.example` aligned with runtime config once env files are introduced
- when adding integration config, update this document in the same change
