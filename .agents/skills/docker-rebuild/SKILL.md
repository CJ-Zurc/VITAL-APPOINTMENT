---
name: VITAL-APPOINTMENT Docker Rebuild
description: Rebuild or recreate the repo-local VITAL-APPOINTMENT Docker services when the user explicitly asks.
---

# VITAL-APPOINTMENT Docker Rebuild

Use this skill only when the user explicitly asks to recreate Docker resources for this repo.

## Current Repo Reality

- `docker-compose.yml` defines `vital-appointment-api` and `vital-appointment-db`
- the NestJS application is containerized in the checked-in repo

## Read First

1. `README.md`
2. `docs/deployment.md`
3. `.agents/rules/docker-rebuild.md`

## Procedure

1. Confirm the user explicitly wants Docker/container work.
2. Recreate only the local PostgreSQL helper service:

```bash
docker compose up -d --build --force-recreate vital-appointment-api vital-appointment-db
```

3. If only database container settings changed, recreating `vital-appointment-db` alone is acceptable.

## Verification

- confirm the requested containers are running
- when app code changed, do not skip rebuilding `vital-appointment-api`
