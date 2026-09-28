# Spec 003: To-do list app with Supabase backend

**Status:** Draft
**Date:** 2026-09-28

## Problem

Standalone practice project: learn to ship an app with a real backend (hosted database,
user accounts, access rules) instead of browser-only localStorage. Not tied to the MCAT
tracker and not driven by interview evidence. Its value is the builder skill it teaches.
See decisions/001-supabase-backend-for-todo-app.md.

## What we're building

A single-page to-do app at `product/todo/`, hosted on Vercel (live URL: TBD,
`<project>.vercel.app` once the Vercel project exists). Vercel serves the static files
only. Supabase is the whole backend, so there are no Vercel serverless functions.

- **Accounts:** sign up and log in with email + password, or with Google (Supabase Auth).
  "Forgot password" sends a reset email that lands back in the app to set a new password.
  Log out button.
- **To-dos:** add a to-do with an optional due date, edit its text or due date, mark it
  done or undone, delete it. Open to-dos with due dates sort soonest-first, then undated
  ones newest-first. Overdue to-dos are visibly flagged.
- **Per-user data:** each user sees only their own to-dos, enforced in the database by
  Row Level Security (RLS), not just by the front end.
- **Stack:** vanilla HTML/CSS/JS, same as the rest of the repo. The only new dependency is
  `@supabase/supabase-js`, loaded from a CDN (jsDelivr) with no build step.

### Database (Supabase project `MSB341_F26`)

Table `public.todos`:

| column     | type        | notes                                              |
|------------|-------------|----------------------------------------------------|
| id         | bigint      | primary key, auto-generated                        |
| user_id    | uuid        | defaults to `auth.uid()`; references `auth.users`; deleted with the user |
| title      | text        | required, 1–500 characters                         |
| done       | boolean     | default `false`                                    |
| due_date   | date        | optional                                           |
| created_at | timestamptz | default `now()`                                    |

RLS on, with select/insert/update/delete policies all limited to `user_id = auth.uid()`.
The schema lives in a migration file under `supabase/migrations/` and goes live with
`supabase db push`.

### Keys

The front end uses the project URL and the **publishable/anon key**. These are safe to
publish because RLS guards the data. The **service_role / secret key and the database
password never go in this repo.**

## Out of scope

- Priorities, tags, drag-to-reorder, due times (dates only)
- Sharing lists between users
- GitHub/other OAuth providers, magic links
- Offline support or realtime sync across open tabs
- Any link to the MCAT tracker

## Definition of done

- [ ] Two different test accounts each see only their own to-dos (RLS verified)
- [ ] Add / edit / toggle / delete / due dates survive a page refresh and work from another device
- [ ] Google login works, and a password reset email leads to a working new password
- [ ] Deployed to live URL
- [ ] Usage signal: row counts in `auth.users` and `todos` in the Supabase dashboard

## Setup notes

- Vercel: import the GitHub repo, set Root Directory to `product/todo`, Framework Preset
  "Other", no build command. Every push to `main` redeploys.
- Supabase dashboard → Authentication → URL Configuration: set Site URL to the Vercel URL
  so confirmation and password-reset emails link back to the app. Add the live URL (and
  a local test URL) to Redirect URLs.
- Google login needs an OAuth client from Google Cloud Console, pasted into Supabase
  dashboard → Authentication → Providers → Google. Google's redirect URI is
  `https://vmucmqoqjtcmjhppbpzx.supabase.co/auth/v1/callback`.
- Free-tier projects pause after about a week without activity. Resume from the dashboard.
