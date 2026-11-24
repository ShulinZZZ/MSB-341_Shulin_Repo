# Sprint 5 Review

**Window:** Wed Nov 11, 2026 (plan first committed 14:37) to Mon Nov 23, 2026
**Sessions reviewed:** 5 across 1 project (Claude Code 5, Codex 0; 1 session excluded at your request)
**Not visible to this review:** the 8 traveler sessions (Nov 16–19) and the recruiting with
flyers, Instagram, Reddit, referrals and a school program. These happened outside any AI tool. They
were first written up on Nov 23 in `discovery/PengPal/Interviews/findings-sprint-5.md`, and in
T19–T26 the same day.

## Where the work lives

- **Repo:** ShulinZZZ/MSB-341_Shulin_Repo, public, shared with sdmurff. 9 commits in the window,
  on 4 days:
  - Nov 11: Sprint 5 plan and CLAUDE.md update; PengPal interview guide and tester invite flyer;
    flyer PDF gitignored (real names in its footer)
  - Nov 12: decision 006, the go/drop bar (4 of 8 pay and keep it 7 days)
  - Nov 17: sprint plan change, adding the contact-form milestone (due Nov 21)
  - Nov 23:
    - contact form (spec 007), with the milestone moved to Nov 28
    - spec 008 draft (Supabase funnel data)
    - trip pass (spec 006), group traveler type and competitor table
    - T19–T26 and the Sprint 5 findings
- **Live:** https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/ (trip pass and group
  type live since Nov 23). The sign-up form is at `…/pengpal/?join`. It shows "Sign-ups open soon"
  because `FORMSPREE_ID` is still empty.
- **Outside the repo:** a Supabase version of the prototype, in `drafts/pengpal-supabase/`
  (gitignored, not deployed).

## When you worked

5 of 14 days had AI session activity: Nov 11, 12, 16, 17 and 23. The traveler sessions ran on
Nov 16, 17 and 19, outside these tools. The work came in three bunches:

- **Nov 11–12 (start):** the plan and decision 006.
- **Nov 16–19 (middle):** the 8 traveler sessions, the Gemini request, and the goal change.
- **Nov 23 (last day):** the form, specs 006–008, the competitor table, writing up the sessions,
  and this review.

There were no commits from Nov 13 to Nov 16 or from Nov 18 to Nov 22. 4 of the 9 commits, and all
of the build, landed on Nov 23.

## Where you got stuck

- **The sessions weren't written up until four to seven days after they ran.** The 8 sessions ran
  Nov 16–19. The findings file and T19–T26 were written on Nov 23.
  - Decision 006 makes same-day T-notes the only source of the count, so each T-note now says when
    it was written.
  - The travelers' own words on the offer weren't recorded.
  - Settling the numbers took a round of questions on Nov 23: T19 had been written down as $15
    and was corrected to $20, and the session dates were confirmed.
- **The contact form waited six days after its spec.** You asked for spec 007 on Nov 17, and it was
  written that day. The form was built on Nov 23, after the Nov 21 milestone had passed, and the
  milestone moved to Nov 28. It has no Formspree ID yet, and `leads.md` has 0 rows.
- **The Gemini chatbot didn't land.** On Nov 16 you asked to connect the app to Gemini for a
  traveler Q&A chatbot, then asked for it to be built separately to test later. There is no Gemini
  code, spec or commit in the repo.
- **A backend was built outside these sessions.** You made a Supabase version of the prototype
  elsewhere and brought it in on Nov 23. It was reviewed, moved to `drafts/`, and written up as
  spec 008 (Draft). It isn't merged.

## What took the most time

Measured by AI prompts (37 by the time this review started, plus the rest of Nov 23):

- **Nov 23 was the longest day:**
  - building and testing the form, the trip pass and the group type (57 automated browser checks
    in total)
  - the competitor research
  - turning the findings into T-notes
  - this review
- **Nov 11, 16 prompts:** the sprint plan, committing the interview guide and flyer, and decision 006.
- **Nov 16–17, 11 prompts:** the Gemini request and the goal change.

The traveler sessions themselves (8, on Nov 16, 17 and 19) aren't measured here.

## Learning sessions

None logged this sprint.

## Axis

**Discovery.** The sprint's center was a commitment test with 8 qualified travelers, where 5 paid
real money, and the competitor positioning work. Launch and Learn came second: the sign-up form,
channel tracking and the `?pass=` price test.

## Against your plan

**Goal was:** Rerun the commitment test with travelers whose trip is within 6 months, and know
whether PengPal is a go or a drop.

The goal is partly met. The test ran with 8 qualified travelers, and 5 paid.

**You called it a go on Nov 23**, before the date decision 006 sets for the call (Nov 26, when the
last refund window closes). At the time of the call:
- 1 payment had passed the 7-day check (T19).
- The bar is met if at least 3 of the other 4 (T22, T23, T25, T26) don't ask for a refund.

The Nov 24 and Nov 26 checks will be added here as dated updates.

| Done item | Status |
|---|---|
| 8 sessions with travelers whose trip is ≤6 months; go if 4 of 8 pay and keep it 7 days | 8 sessions ran (Nov 16–19), all trips Feb–Apr 2027. 5 of 8 paid; 1 has kept it 7 days, 4 pending. Go called Nov 23, ahead of the Nov 26 checks |
| Decision 006 committed before the first session | Done, Nov 12 (sessions began Nov 16) |
| Screener requires a trip ≤6 months; recruiting channel recorded | Done for the 8 sessions: all within 6 months, channel recorded for each (R1–R8) |
| Same-day T-note per session | Not done as written: T19–T26 exist, but were written Nov 23, and each says so |
| Spec 006 (trip pass) built, live, and used in the sessions | Built and live Nov 23. Not used in the sessions, which ran on v2 |
| Prototype and pitch lead with meeting a local friend; group traveler type | Done in the prototype, Nov 23 |
| $20 call delivered if anyone pays | 3 paid (T19, T23, T26); 1 delivered (T19, Nov 18, by host H1, about 15 min) |
| Competitor positioning table | Done: `discovery/PengPal/competitors.md` |
| Milestone: contact form live and 2 outside-network travelers booked by Nov 21 | Form built Nov 23 but can't take sign-ups (no Formspree ID); 0 leads. Moved to Nov 28 |

**How the test differed from decision 006**, all logged in the findings:

- **Offers:** only 2 of 8 travelers got both offers. You chose the offer by group size and
  destination cost.
- **Prototype:** the sessions ran on v2, not the spec 006 trip pass.
- **Knew us before:** 2 travelers knew the team (T24, T25).
- **Cities:** 4 travelers spend most days outside the pilot cities, though all arrive through
  Shanghai or Chongqing.
- **Group size:** 2 groups are larger than a pass covers (6 and 10 people).

**Plan changes:**

- Nov 17: the contact-form milestone was added.
- Nov 23: the milestone date moved to Nov 28.
- Not logged before the sessions: the offer change.
- Not in the plan: the Gemini chatbot request, the Supabase backend, and spec 008.

---

## Your retro

*The builder's own answers, recorded word for word.*

**Did you hit the goal?** I finished everything I planned. I committed decision 006 before the first session, screened all 8 travelers, added the friend-first pitch and the group traveler type, built the competitor positioning table, and ran all 8 sessions (Nov 16–19).

**What did the report show you?** My own drop rule was triggered. I was focused on the payment bar, and 5 of 8 paying looked like a clear go. I hadn't connected that all 3 travelers who didn't pay gave the same reason: they'd rather use AI and online suggestions as their guide. My plan said that reason alone is a drop signal. I wouldn't have noticed that my two rules point different ways. It also shows that AI trip planners are a real competitor, not just other tour services.

**If the plan changed, why?** I added a contact-form milestone. The goal was to get 2 travelers from outside our network to sign up by Nov 21. I need evidence from strangers that people actually want to buy PengPal, because recruiting through our own network is what broke Sprint 4. My mentor also told me to put a real app in front of users to validate the idea.I moved that milestone to Nov 28. The form (spec 007) wasn't built by Nov 21. It's built now and sends sign-ups to Formspree, but no sign-ups have come in yet.

**Actual difficulty:** 4

Building took longer than planned. The contact form wasn't ready by Nov 21, so I moved the milestone to Nov 28. The trip pass screen (spec 006) also wasn't ready in time, so the sessions ran on prototype v2.The timing was tight. With sessions on Nov 16–19, the 7-day refund checks run until Nov 26, past the go/drop meeting. Deciding with incomplete results was harder than I planned for.

**What will you change next sprint?** I'll keep a daily to-do list for the sprint and update it every evening. Each day it will list what's due, what got done, and anything that changed from the plan. Any change gets a dated Changes line in the sprint plan that same day.
