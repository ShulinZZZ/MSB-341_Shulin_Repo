# Sprint 1 Review

**Window:** Sprint 1 closes 2026-09-28. The plan file was only committed today (see "Where you
got stuck"), so the Claude Code session evidence below covers one day, 10:55 to 15:41 MDT.
Outreach, interviews, and professor conversations happened across the sprint, outside that session.
**Sessions reviewed:** 1 across 1 project (0 excluded)

## When you worked

All in one day, 2026-09-28, in a single continuous session spread over about five hours
(roughly 10:36 to 15:41 MDT) with a few gaps — the longest around an hour, waiting on GitHub
Pages to build and on an outreach status update. Not spread across the sprint; the sprint has
only just opened.

## Where you got stuck

- **The Day-1 commit didn't actually land on day one.** The sprint plan interview was
  (per your account) run once already in an earlier session, but nothing was committed then.
  Professor Murff emailed to say the repo was missing. That prompted this session: writing
  the plan fresh, committing it, and sending him an email acknowledging the delay rather than
  asserting it was on time — the git history has no trace of an earlier attempt, so a
  same-day claim of "done on day one" wouldn't have held up.
- **Wrong git remote, unrelated history.** `origin` pointed at the shared class template
  (`byu-strategy/builder-template`) instead of your own repo. Once repointed to
  `ShulinZZZ/MSB-341_Shulin_Repo`, the two histories were unrelated (yours from the old
  template clone, GitHub's from a fresh "Use this template" commit), which blocked a normal
  push. Ended with a force-push of local history onto the new repo, after confirming the
  remote repo held nothing worth keeping.
- **Misidentified prototype link.** A pasted artifact link was presented as "the prototype we
  built," but it resolved to a different, unrelated product concept ("Gapmap") from a
  teammate's separate account — not editable, and not a match for `specs/002`. Ended with
  building the actual MCAT tracker prototype from the spec instead, in `product/mcat/`.

## What took the most time

Building and shipping the MCAT prep tracker prototype: four files (~1,470 lines) covering
setup, study log, practice scores, and multi-format lessons with a dashboard, then verifying
it by standing up a local server, installing Playwright/Chromium, and scripting a full
click-through test before committing. Git and deployment mechanics around it — the remote fix
above, plus hitting GitHub's private-repo limit on Pages and making the repo public to clear
it — made up most of the rest.

## Axis

**Application Architecture.** The dominant work was build-and-ship plumbing: a localStorage
data model spanning four linked views, a from-scratch headless-browser test harness to verify
it, git history repair, and a GitHub Pages deployment (including working around the
private-repo restriction). UI/flow design for the same prototype was the next-largest chunk,
but architecture and deployment took more of the session's time.

## Against your plan

**Goal was:** I will decide what project my team wants to work on for the sandbox and start
interviewing customers and building prototypes.

Partially matches, and the gap is worth naming plainly. The repo now shows a decided project
(MCAT Prep Tracker) and a built, deployed prototype — two of the three clauses are backed by
committed work in this window. The third, "start interviewing customers," is not: the 6
people reached and 1 completed interview happened outside the Claude Code session. They are
logged in the repo: see `discovery/outreach-log.md`,
`discovery/interviews/001-premed-student.md`, and `discovery/insights.md`.

## Final scorecard

| Done-criterion | Target | Actual | Met? |
|---|---|---|---|
| People reached | 10 | 6 | No |
| Interviews set up | 5 | 3 (1 done, 2 scheduled) | No |
| Business ideas listed | 3 | 3 ([decision 002](../decisions/002-choose-mcat-prep-tracker.md)) | Yes |
| Professors/advisors talked to | 3 | 1, the Sandbox director (met twice); pre-health advisor meeting scheduled; 1 more reached out | No |
| Team decided on one idea | 1 | MCAT Prep Tracker | Yes |
| 3-page prototype | 1 | [Live](https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/mcat/) | Yes |

3 of 6 met. All three misses are on the outreach side. Time went into building and deploying
the prototype before the customer conversations were far enough along. A predicted difficulty
of 3 was too low for the outreach half.

## Carry into Sprint 2

- Finish the 2 scheduled interviews and the scheduled professor meeting in week 1.
- Reach 4 more pre-med students to hit this sprint's target of 10.
- Put the live prototype in front of interviewees and write up what they do with it
  before building anything more.
