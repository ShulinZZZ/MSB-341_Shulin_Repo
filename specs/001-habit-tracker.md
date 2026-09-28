# Spec 001: Habit tracker

**Status:** Draft
**Date:** 2026-09-14

## Problem

No interview evidence yet — `discovery/` is empty and this is a builder-initiated idea, not
one validated with a real user. The assumed problem: someone trying to build a daily habit
(exercise, reading, etc.) loses track of whether they did it, and generic to-do apps don't
show streaks/consistency in a way that motivates them to keep going.

This should be validated with real users before investing beyond the MVP below.

## What we're building

A single-page web app, for personal use first:

- Add a habit by name (e.g., "Read 20 min").
- Mark a habit done/not-done for today with one click.
- See the current streak (consecutive days completed) per habit.
- See the last ~30 days as a simple grid/list of hit-or-miss per habit.
- Data persists in the browser (localStorage) — no login required.

Small enough to ship this week; no backend.

## Out of scope

- Accounts, login, or multi-device sync
- Reminders/notifications
- Mobile app (responsive web only)
- Sharing, social features, analytics dashboards
- Editing/deleting past history entries (only today's status is editable)

## Definition of done

- [ ] Can add a habit and see it in a list
- [ ] Can mark today complete/incomplete for each habit
- [ ] Current streak is shown per habit and updates correctly
- [ ] Data survives a page reload (localStorage)
- [ ] Deployed to a live URL
- [ ] Validation: I use it daily for a week and it still feels worth opening
