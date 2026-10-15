# PengPal

> Travel China like you have a friend there: PengPal connects first-time foreign travelers in
> China with young, English-speaking Chinese locals who help with transportation, payments,
> food, and local experiences.

**Live prototype:** https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
**Previous project (Sprints 1–2):** MCAT Prep Tracker / Gapmap at
https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/mcat/
**Side project:** To-do list app with Supabase backend (spec 003) at
https://msb-341shulinrepo-todo.vercel.app
**Built by:** Shulin Zhang, MSB 341 Product Management, BYU

## Context

Fill this in during Sprint 1 and keep it current. Every sprint is read against it.

- **What I am building:** PengPal, a service that connects first-time foreign travelers in
  China with young, English-speaking Chinese locals who help them navigate transportation,
  payments, food, and authentic local experiences. Pilot cities: Chongqing + Shanghai
  (`decisions/003`). Right now it is a clickable prototype (`specs/004`); the first trips are
  meant to be hand-matched before building real software.
- **Who it is for:** First-time foreign travelers to China, and the English-speaking local
  hosts who guide them.
- **My role:** Product lead, PM, and builder on a team.
- **My user:** People planning a first-time trip to China in the next year.

**What changed (Oct 14, Sprint 3):** Switched from the MCAT Prep Tracker / Gapmap to PengPal.
The Sprint 2 tests showed Gapmap would need accurate assessments, flexible scheduling, and
progress tracking to be useful, and would compete with established MCAT platforms. PengPal can
be validated faster with real, hand-arranged trips (see `sprints/sprint-2-review.md`, retro).

If your situation changes, revise this and note what changed. That is normal; a silent
mismatch between this file and your work is not.

## Where the work lives

- **Repos:** ShulinZZZ/MSB-341_Shulin_Repo, public, shared with sdmurff and the TA
- **Live:**
  - MCAT Prep Tracker: https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/mcat/
  - PengPal clickable prototype: https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
  - Gapmap with Knowledge Tree (prototype used in Sprint 2 tests): https://claude.ai/artifact/42hitm4hF1kYmTd2xPHfnx
  - To-do app (side project): https://msb-341shulinrepo-todo.vercel.app
- **Docs:**
  - Sprint 2 interview and test notes: `discovery/interviews/` (002–012, plus the Word notes and summaries)
  - PengPal pitch deck: `discovery/PengPal/PengPal-Big-Idea-Pitch-Guided-Travel-Final.pptx`
  - PengPal 90-second pitch video: `discovery/PengPal/PengPal Pitch Video.mp4`

## What is in this repo

| Folder | What lives here |
|---|---|
| `sprints/` | One plan and one review per sprint |
| `discovery/` | Interviews, personas, what you learned about your user |
| `design/` | Flows, screens, usability test notes |
| `product/` | The build itself |
| `specs/` | One spec per feature, written before building it |
| `gtm/` | Launch, channels, copy, experiments |
| `metrics/` | What you measure and what it says |
| `decisions/` | Numbered records of what you decided and why |

Non-code work belongs here too. An interview, a pricing model, a landing page draft, and a
usability finding are all artifacts, and they get committed like anything else.

If you build an AI feature, put its eval set in `product/evals/`. A test set is how you know
whether a change to a prompt helped or hurt.

## Running it

Open the PengPal prototype: https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
(the MCAT tracker is still at `/product/mcat/`).

No build step or install. To run locally, serve the repo root and open `/product/pengpal/`:

```bash
npx serve .        # or: python -m http.server
```

Data is stored in your browser's localStorage, so each browser has its own data.

## Sprints

Each sprint:

```bash
/sprint-plan     # day one, then commit the plan
# ...build...
/sprint-review   # last day, then commit the report and write your retro
```

## Ground rules

- **Spec before build.** For anything non-trivial, the spec's commit should predate the
  feature's commits.
- **Decisions get recorded.** When you make a real choice, write it in `decisions/` with the
  alternatives you rejected.
- **No real customer contact details anywhere in this repo.** Anonymize people in interview
  notes: "dental office manager, Provo" rather than a name and an email.
- **Keep `CLAUDE.md` current.** It is what your agent knows about your work. Stale context
  produces bad output.
