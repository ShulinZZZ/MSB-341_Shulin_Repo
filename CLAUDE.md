# CLAUDE.md

Loaded at the start of every Claude Code session in this repo. Keep it current. It should let
a brand new session act like a colleague who already knows what you are working on and why.

## What I am building

- **What it is:** PengPal, a service that connects first-time foreign travelers in China with
  young, English-speaking Chinese locals who help them navigate transportation, payments,
  food, and authentic local experiences. Pilot cities: Chongqing + Shanghai (decisions/003).
  Currently a clickable prototype (specs/004); first trips are to be hand-matched.
- **Who it is for:** People planning a first-time trip to China in the next year.
- **My role:** Product lead, PM, and builder on a team.
- **Why they would use it:** Assumed problem, not yet validated with travelers — it comes from
  helping BYU friends travel in China, where they struggled with Chinese apps, QR-code
  payments, and transportation because Google Maps, card payments, and Uber don't work well
  there.
- **Previous project (Sprints 1–2):** MCAT Prep Tracker / Gapmap at product/mcat/. Dropped
  after Sprint 2 tests showed it needed far more than a personalized plan to be useful.

## Current state

- **This sprint's goal (Sprint 5, from Nov 11):** Rerun the commitment test with 8 travelers
  whose trip is within 6 months and decide go or drop: go if 4 of 8 pay ($10 trip-pass deposit
  or $20 pre-trip call) and don't ask for a refund within 7 days. Bar goes in decision 006 before
  the first session. Also: same-day T-notes, spec 006 trip pass, friend-first pitch with a group
  type, a delivered call if anyone pays, and a competitor positioning table. TAM/SAM/SOM moved
  out (see sprints/sprint-5-plan.md).
- **Last sprint's result (Sprint 4):** Legal check, prototype v2, 3 Shanghai hosts, market.md
  and mentor feedback done, but the commitment test couldn't show whether travelers pay: every
  trip was in 2027, and the tallies contradicted each other (see
  discovery/PengPal/findings-sprint-4.md and sprints/sprint-4-review.md).
- **Live at:** https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
- **Biggest open risk:** Whether travelers will actually pay, not just say they will; after
  that, host verification and traveler safety. Hosts are unpaid language-exchange partners and
  only the pre-trip call is paid, because of China legal limits (decisions/004, 005).

## How this repo works

- Non-code work is committed as files, same as code. Interviews, experiments, pricing models,
  and usability findings all live here.
- Specs go in `specs/` and are written before building. When asked to build something
  non-trivial, check for its spec first. If there is none, draft one and confirm it before
  writing code.
- Meaningful choices get a numbered record in `decisions/`, written when the choice is made,
  including what was rejected and why.
- Sprint plans and reviews live in `sprints/`. The plan is committed on day one.
- Never put real names, emails, or phone numbers in this repo. Anonymize.

## Stack and conventions

- **Stack:** Vanilla HTML/CSS/JS, no framework, no backend. Data persists in the browser via
  localStorage (per specs/001, 002, and 004).
- **Deploy:** GitHub Pages, serving straight from `main` (root). A push to `main` goes live
  within a minute or two — no build step.
- **Testing and style:** [fill in as they emerge]

## Working with me

- Ask before large refactors or before adding a dependency.
- When I am wrong about something technical, say so directly and explain why.
- Show me the plan before executing anything that touches more than a couple of files.

## Voice

Copy that users read sounds like: [2 or 3 adjectives, plus one example line]
