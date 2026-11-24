# Spec 007: PengPal contact form ("Join the first trips")

**Status:** Confirmed 2026-11-23. Milestone moved from Nov 21 to Nov 28.
**Date:** 2026-11-17

## Problem

Sprint 5 needs 8 qualified travelers for the commitment test, recruited from outside our own
networks (decision 006, `sprints/sprint-5-plan.md`). Right now a stranger who finds the live
prototype has no way to raise their hand. The only call to action is "Make it real", at the end
of a nine-screen flow, and what it collects stays in that visitor's localStorage, so we never
see it.

Sprint 4's travelers were all from our circles and all traveling in 2027
(`discovery/PengPal/findings-sprint-4.md`). Our mentor said to put a real app in front of users.
The Nov 17 milestone in the sprint plan is that 2 travelers from outside our network submit a
contact form by Sat Nov 28 (moved from Nov 21) and get booked for a session.

## What we're building

A short sign-up form in `product/pengpal/` that sends each submission to **Formspree**. We'd see
each one in the Formspree dashboard and by email. Same stack, with no build step and no other
dependency.

### 1. Where it appears

- **Welcome screen:** a secondary button under the main CTA: "Going to China soon? Join the
  first trips". It opens the form in the existing bottom sheet.
- **Desktop side panel (`.about`):** the same link under "Restart demo". The panel is hidden
  under 760px, so the welcome-screen button is the one phone users see.
- **Direct link:** `?join` opens the sheet on load, e.g. `.../product/pengpal/?join`. Use this
  link in posts and flyers, so strangers reach the form in one tap.
- **The "Make it real" screen doesn't change.** It's still for facilitated sessions, and spec 006
  owns it.

### 2. The form

Heading: **"Join PengPal's first trips"**. Intro line: "We're hand-matching our first travelers
with English-speaking locals in Chongqing and Shanghai. Leave your details and we'll email you
to set up a 30-minute video call. Nothing to pay now."

| Field | Type | Required | Notes |
|---|---|---|---|
| Email | email | yes | Browser validation |
| First name | text | no | |
| When's your trip? | select | yes | This month plus the next 6 months by name (e.g. "Nov 2026" … "May 2027"), then "Later than that" and "Not booked yet" |
| Which city? | select | yes | Chongqing / Shanghai / Both / Somewhere else / Not sure yet |
| Who's going? | select | yes | Just me / With a partner / With friends / With family |
| How did you hear about PengPal? | select + text | yes | Reddit / Facebook group / Instagram or TikTok / A flyer / A friend sent it / Other (shows a text box) |
| Do you know anyone on the PengPal team? | yes/no | yes | This is the "outside our network" check |
| Consent | checkbox | yes | "PengPal can email me about a call. My details are only used for this." |

**Hidden fields, sent with every submission:**
- `channel`: the `?src=` value from the link (e.g. `?join&src=reddit-chinatravel`), or "direct"
- `qualified`: "yes" if the trip month is within 6 months, otherwise "no"
- `page_version`: "spec-007"
- a Formspree honeypot field (`_gotcha`) against spam bots

**Travelers who don't qualify can still submit.** A "Later than that" or "Not booked yet" trip
isn't turned away. It's saved with `qualified: no`, so we can contact them in a later sprint, and
it doesn't count toward the milestone.

### 3. Submitting

- The app sends the form with `fetch` to `https://formspree.io/f/<FORMSPREE_ID>`, as JSON, with
  `Accept: application/json`. The ID is a constant, `FORMSPREE_ID`, in `hosts-data.js`. A form ID
  isn't a secret: it shows up in any page that uses Formspree.
- **While sending,** the button reads "Sending…" and is disabled.
- **On success,** the sheet shows: "You're in. We'll email you within 2 days to find a time."
  The only thing saved in localStorage is `joined: true`. The visitor's details aren't stored, and
  the welcome button then reads "You're on the list ✓".
- **On failure,** the message is: "That didn't send. Check your connection and try again." Their
  answers stay filled in.
- **If `FORMSPREE_ID` is empty,** the button is disabled and the sheet says "Sign-ups open soon".
  So an unconfigured deploy never loses a submission without anyone knowing.

### 4. Tracking what comes in

- **A new log, `discovery/PengPal/leads.md`,** holds one row per submission. Each row gets an
  anonymous code (L01, L02…) and records date, channel, trip month, qualified, knows the team
  (Y/N), contacted, booked (Y/N), and the T-note code once a session happens.
- **Names, emails and messages never go in the repo.** They stay in Formspree and in our inbox.
- **The milestone count** is rows where qualified = yes, knows the team = no, and booked = yes.

## Out of scope

- **Payments of any kind.** Deposits and calls are still requested by hand in sessions
  (spec 006, decision 006).
- **Automatic emails or booking links** (Calendly etc.). We reply by hand.
- **Changes to the session flow** or the "Make it real" screen. That's spec 006.
- **Analytics** beyond Formspree's submission count and the `channel` field.
- **Where and how we recruit** (which subreddits, groups, flyers). That's sprint work, not
  product. The `?src=` link just records it.
- **Upgrading Formspree from its free plan.** The free plan's 50 submissions a month is plenty.

## Setup the product lead does (I can't do this part)

1. Create a free Formspree account and a new form named "PengPal sign-ups".
2. Turn on email notifications for it. Set the allowed domain to `shulinzzz.github.io`.
3. Paste the form ID (the part after `/f/`) into `FORMSPREE_ID`.

## Definition of done

- [ ] `?join` opens the form; the welcome-screen button and the desktop link open it too
- [ ] Required fields are enforced; "Other" shows a text box; the trip-month list runs from this
      month to 6 months out, then "Later" and "Not booked yet"
- [ ] A test submission arrives in Formspree with `channel`, `qualified` and every answer, and
      shows the success message
- [ ] Turning the network off shows the error and keeps the answers; an empty `FORMSPREE_ID`
      disables the form
- [ ] Only `joined: true` is saved in localStorage, never the visitor's details
- [ ] The form works at phone width (375px) and keyboard-only
- [ ] `discovery/PengPal/leads.md` exists, with its columns and no personal details
- [ ] Deployed at https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/?join
- [ ] By Sat Nov 28: 2 or more rows in `leads.md` with qualified = yes, knows the team = no and
      booked = yes
