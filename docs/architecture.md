# Architecture

This document describes the current structure of `VITAL-APPOINTMENT` and the target platform shape it should follow.

## 1. Current Checked-In Structure

The repository is currently a single NestJS service at the repo root.

Key files and folders:

- `src/main.ts`: boots the Nest application
- `src/app.module.ts`: registers the current modules
- `src/appointment/`: placeholder appointment module and controller
- `src/payment/`: placeholder payment module and controller
- `src/notification/`: placeholder notification module and service
- `src/internal/`: Auth-facing internal roles endpoint
- `src/user/`: placeholder user service
- `test/`: e2e scaffold
- `Dockerfile`: app container build
- `docker-compose.yml`: repo-local app and PostgreSQL stack

## 2. Current Route Reality

Current checked-in HTTP behavior is minimal:

- `GET /` returns the Nest starter hello response
- `GET /internal/users/:userId/roles` returns an empty role list placeholder for Auth aggregation
- the `appointment` controller exists but does not expose handlers yet
- the `payment` controller exists but does not expose handlers yet

This repository should not be documented as owning live appointment APIs until real route handlers are added.

## 3. Target Service Role

This service is intended to own appointment-domain backend behavior within the VITAL bounded context, such as:

- appointment booking and scheduling workflows
- appointment staff operations
- appointment lifecycle state changes
- appointment-related payment coordination when that responsibility belongs here
- appointment-related events and notifications

## 4. Shared Platform Boundary

The browser-facing boundary remains:

```text
Frontend -> BGH_API_GATEWAY -> VITAL service(s)
```

For this repo, that means:

- do not design production browser traffic to call this service directly
- keep the service inside the shared `vital` system boundary
- the current workspace Gateway contract already maps `/vital/appointments*`, `/vital/payments*`, and `/vital/notifications*` to this repo's domain
- keep any future route-boundary changes synchronized with `BGH_API_GATEWAY` and `UHSE_AUTH`

## 5. Documentation Promise

When implementation moves beyond the starter state, update this file and the matching integration and security docs in the same change.
