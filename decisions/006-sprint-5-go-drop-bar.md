# Decision 006: Go if 4 of 8 qualified travelers pay and keep it for 7 days

**Date:** 2026-11-11
**Status:** Active. Set by the product lead in the Sprint 5 plan (`sprints/sprint-5-plan.md`),
before the first Sprint 5 session. The bar does not change once sessions start.

## Context

Sprint 4's commitment test couldn't show whether travelers would actually pay
(`discovery/PengPal/findings-sprint-4.md`):
- **Wrong travelers.** Every traveler's trip was in 2027, so their hesitation mostly reflected
  timing, not PengPal.
- **The bar was set for a different offer.** The 4-of-8 bar was written for "intro call or $10
  deposit". The legal check then changed the offer to a $10 trip-pass deposit and a $20 pre-trip
  call (decision 005), and the bar was never restated.
- **Two tallies that disagreed.** Sessions were recorded only in the write-up, and its
  commitments table and session table told opposite stories. Refunds cancelled out some of the
  payments, and they weren't tracked per traveler.

Sprint 5 reruns the test. This record fixes the bar, and what counts toward it, before the first
session, so the result is a go or a drop rather than an argument.

## Options considered

1. **No fixed bar; judge the results after the sessions:** flexible. Cons: this is how Sprint 4
   ended up unreadable. A bar set afterward bends toward the outcome you hoped for.
2. **Count stated intent ("would pay", joins the waitlist):** easy to hit. Cons: Sprint 3
   already showed that everyone says yes (10 of 10 said they'd pay). It adds nothing new.
3. **4 of 8 pay and keep the payment for 7 days (chosen):** counts only money that stayed paid,
   and matches the 4-of-8 level used in Sprint 4 and decision 005, so results stay comparable.
4. **A stricter bar (6 of 8, or the pass deposit only):** a stronger signal if it's met. Cons:
   with 8 people, one no-show swings the result, and counting only the pass would ignore the
   call, which decision 005 sells alongside it on purpose.

## Decision

**Go if at least 4 of 8 qualified travelers pay and haven't asked for a refund 7 days after
paying. Drop if fewer than 4 do.** The deciding reason: only money that stays paid shows that
travelers will actually pay, which is the question the last two tests couldn't answer.

**What counts:**
- **Qualified traveler:** passes the screener, including the required question that their trip
  to China is within the next 6 months. The trip date goes in the T-note. The Sprint 4 retro
  said 3 months; on Nov 11 the product lead widened it to 6 months for Sprint 5 (noted under the
  retro in `sprints/sprint-4-review.md`). For a session on Nov 11, that means a trip by
  about May 11, 2027.
- **Session:** run on the trip pass prototype (spec 006), offering both the $10 refundable
  deposit toward a trip pass and the $20 pre-trip call.
- **Pays:** the deposit or the call is actually paid, not promised. A traveler who buys both
  counts **once**. Recruiting channel, offer and amount go in the T-note.
- **Keeps it:** no refund requested within 7 days of payment. A refund request after day 7 is
  recorded but doesn't change the count.
- **Source of the count:** only the T-notes, one per session in `discovery/PengPal/Interviews/`,
  written the day of the session and updated on day 7 with refund status. The findings are
  tallied from those notes, with no second table kept by hand.

**Go means:** keep building PengPal on the decision 005 model and plan the first real trip.
**Drop means:** the model we can legally run is not proven (as decision 005 already says for
fewer than 4 of 8). Stop work on it, and decide in the Sprint 5 review whether to drop PengPal or
move to the agency path (decision 005, option 3).

**Fewer than 8 qualified sessions:** with 6 or 7 sessions, the ratio holds: go if at least half
pay and keep it (3 of 6, 4 of 7). With fewer than 6, there is no result: neither go nor drop, and
the Sprint 5 review says so plainly instead of reading a trend into it.

**Late payments:** the go/drop call is made when the last 7-day refund window closes, even if
that falls after the Sprint 5 review. The review reports the count so far and the date the call
will be made; the result is added to the review as a dated update.

## What would change our mind

- **The offer changes mid-sprint** (a new price, or the call is removed): restate the bar in a
  `**Changes:**` line in the Sprint 5 plan before the next session, as the Sprint 4 retro
  committed.
- **Most payments are calls, not passes:** a go still stands, but lead with calls and rethink
  what the pass includes (decision 005).
- **Travelers qualify but pay nothing because of payment friction** (for example, the payment
  link fails): fix it and count only the sessions that ran with a working payment link.

## Result

**Nov 23, 2026: Go, called early by the product lead.**

The count when the call was made (from T19–T26, `discovery/PengPal/Interviews/findings-sprint-5.md`):
- 8 qualified travelers in a session; 5 of 8 paid (T19, T22, T23, T25, T26); no refund requests.
- 1 payment past the 7-day check (T19). 4 still in their refund window: T22 and T23 until Nov 24,
  T25 and T26 until Nov 26.
- The bar is 4 of 8 kept for 7 days. It's met if at least 3 of the 4 pending payers don't ask for
  a refund.

**Called before the bar's date.** This record says the call comes when the last refund window
closes (Nov 26). The product lead made it on Nov 23. The Nov 24 and Nov 26 checks are still
recorded below. If refunds bring the count under 4 of 8, that goes here as a dated update, and the
go is reviewed against the bar.

**Also logged in the findings:**
- Only 2 of 8 sessions offered both options.
- The sessions ran on v2, not the spec 006 prototype.
- T-notes were written Nov 23, not on the session days.
- 2 travelers knew the team before.

| Check | Due | Result |
|---|---|---|
| T22, T23 refund window | Nov 24 | pending |
| T25, T26 refund window | Nov 26 | pending |
