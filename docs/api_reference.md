# API Reference

This document describes the current checked-in HTTP surface of `VITAL-APPOINTMENT` and the future internal contracts it may need to expose.

## 1. Current Checked-In Routes

Current repo reality:

- `GET /`
  - returns the Nest starter hello response
- `GET /internal/users/{user_id}/roles`
  - requires `X-Internal-Api-Key`
  - returns `{ "success": true, "data": { "roles": [] } }`
- `appointment` controller exists
  - no handlers implemented yet
- `payment` controller exists
  - no handlers implemented yet

Do not document appointment business endpoints as live until they are implemented in `src/`.

## 2. Future Internal Contracts

This service already exposes the documented internal role contract:

```http
GET /internal/users/{user_id}/roles
```

Expected success shape:

```json
{
  "success": true,
  "data": {
    "roles": []
  }
}
```

If local role changes should refresh the next Gateway-mediated request, call:

```http
POST /internal/users/{user_id}/stale
```

These are target-state contracts, not current checked-in endpoints.
