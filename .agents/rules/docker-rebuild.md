---
trigger: always_on
description: End-of-feature reminder to rebuild the VITAL-APPOINTMENT app container. This repo now includes a Dockerfile and repo-local compose stack.
---

# VITAL-APPOINTMENT: Docker Reminder

This repository now includes a Dockerfile and repo-local compose stack for `vital-appointment-api` plus `vital-appointment-db`.

## End-of-feature reminder

When you report that a feature, bug fix, or code change touching this repo is complete, remind the user in one short sentence that the `vital-appointment-api` container should be rebuilt, and include `vital-appointment-db` only when database-side container settings changed. Fire this reminder once per feature, not on every edit. Skip it when the user is clearly on a host-side dev server such as `npm run start:dev`.

## When to actually recreate containers

Only rebuild or recreate containers when the user explicitly asks. When they do, invoke the `docker-rebuild` skill. The skill documents the safe repo-local command and which services should be recreated.
