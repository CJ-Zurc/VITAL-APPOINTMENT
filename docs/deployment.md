# Deployment

This document describes the current local startup path for `VITAL-APPOINTMENT` and notes the future production integration boundary.

## 1. Current Local Reality

The checked-in application runs as a normal NestJS process from the repo root.

Application commands:

```bash
npm install
npm run start:dev
```

Repo-local Docker stack:

```bash
docker compose up -d --build
```

Current repo reality:

- the repo contains a Dockerfile for the NestJS application
- `docker-compose.yml` provisions both `vital-appointment-api` and `vital-appointment-db`
- the canonical local app port is `8009`
- the canonical local PostgreSQL port is `5435`

## 2. Future Production Boundary

When this service is deployed behind the BGH platform:

- browser traffic should still reach it through `BGH_API_GATEWAY`
- the public contract should remain under the shared `vital` system boundary
- the current Gateway path ownership for this repo is `/vital/appointments*`, `/vital/payments*`, and `/vital/notifications*`
- trust should begin only after `X-Gateway-Secret` validation

## 3. Deployment Documentation Rule

When this repo's container/runtime shape, published ports, or Gateway-facing route contract changes, update this file in the same change.
