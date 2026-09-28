# CLAUDE.md

Loaded at the start of every Claude Code session in this repo. Keep it current. It should let
a brand new session act like a colleague who already knows what you are working on and why.

## What I am building

- **What it is:** A web app for pre-med students to log MCAT study sessions and practice
  scores, and view the same lesson content in three formats (visual, video-style, text) to
  find what actually helps them learn.
- **Who it is for:** Pre-med students actively prepping for the MCAT (see
  discovery/personas.md — not yet filled in with real interview data).
- **My role:** Product lead, PM, and builder on a team.
- **Why they would use it:** Assumed problem, not yet validated by interviews — existing
  tools (UWorld, AAMC, Kaplan, Blueprint, Anki, Khan Academy) each cover one slice, and
  there's no single place that shows whether studying is actually moving the score or which
  topics are still weak.

## Current state

- **This sprint's goal:** Decide what project my team wants to work on for the sandbox and
  start interviewing customers and building prototypes (see sprints/sprint-1-plan.md).
- **Live at:** Not yet deployed
- **Biggest open risk:** Lacking the technical skill to build a real personalized/adaptive
  studying feature, and the cost of obtaining accurate data to train it on.

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
  localStorage (per specs/001 and specs/002).
- **Deploy:** Not yet set up.
- **Testing and style:** [fill in as they emerge]

## Working with me

- Ask before large refactors or before adding a dependency.
- When I am wrong about something technical, say so directly and explain why.
- Show me the plan before executing anything that touches more than a couple of files.

## Voice

Copy that users read sounds like: [2 or 3 adjectives, plus one example line]
