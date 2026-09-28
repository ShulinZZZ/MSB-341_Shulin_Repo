# Decision 001: Use Supabase as the backend for the to-do app

**Date:** 2026-09-28
**Status:** Active

## Context

The repo's apps so far (specs 001, 002) are backend-free and store data in localStorage.
The new standalone to-do app needs per-user logins, and data has to follow the user
across devices. localStorage can't do either.

## Options considered

1. **localStorage only (current pattern)**: zero setup / no accounts, data stuck in one browser.
2. **Supabase (hosted Postgres + Auth)**: auth, database, and row-level access rules in
   one free tier, callable straight from vanilla JS on GitHub Pages / adds a CDN
   dependency and a hosted service; free projects pause when idle.
3. **Firebase**: similar convenience / NoSQL data model, weaker fit for learning SQL and
   access-rule patterns.
4. **Custom server (e.g. Node + Postgres)**: full control / needs hosting beyond GitHub
   Pages and much more build time.

## Decision

Supabase. It is the only option that adds real accounts and per-user data without giving
up a no-build, static front end. The MCAT tracker stays on localStorage.

Hosting: the to-do app deploys to Vercel rather than GitHub Pages, so it gets its own URL
and a per-app deploy (Root Directory `product/todo`). Vercel hosts static files only.
All backend logic stays in Supabase.

## What would change our mind

The free tier's limits or idle pausing get in the way of testing, or the app needs
server-side logic that Supabase's database policies and functions can't express.
