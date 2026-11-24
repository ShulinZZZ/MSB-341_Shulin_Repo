# Sprint 5 findings: commitment retest

Each session has a T-note (T19–T26) in this folder, and the tally below is counted from those
notes. Fill in each 7-day check on the day it falls due, in the T-note first, then here.

## The test

- **Question:** Will travelers with a China trip in the next 6 months actually pay, and keep the payment for 7 days?
- **Offer:** $10 refundable trip-pass deposit, or $20 refundable pre-trip call with a Shanghai host
- **Bar (decision 006):** Go if at least 4 of 8 qualified travelers pay and don't ask for a refund within 7 days. Otherwise, drop.
- **Trip window used:** 6 months (all trips are Feb–Apr 2027)
- **Sessions ran:** Nov 16 (T19–T21), Nov 17 (T22–T23), Nov 19 (T24–T26), 2026. Dates confirmed by the product lead on Nov 23.
- **Who ran them:** the PengPal team (names are kept out of the repo)
- **Prototype used:** the live v2 prototype (spec 005). The spec 006 trip pass wasn't built until Nov 23.

## Recruiting

| | Session | Channel (where we found them) | Knew us before? (y/n) | Trip date | Within window? (y/n) | Session booked? |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | T19 | Friend's referral (loose connection, found through our flyers) | n | Mar 1–5 | y | y |
| R2 | T20 | Online (Instagram) | n | Feb 22–28 | y | y |
| R3 | T21 | Online (Reddit) | n | Mar 22–24 | y | y |
| R4 | T22 | Friend's referral (loose connection, found through our flyers) | n | Apr 11–14 | y | y |
| R5 | T23 | Online (Instagram) | n | Apr 23–25 | y | y |
| R6 | T24 | Referral | y | Feb 12–15 | y | y |
| R7 | T25 | Referral | y | Mar 2–7 | y | y |
| R8 | T26 | School program | n | Apr 2–6 | y | y |

- People screened: 8
- Passed the screener: 8
- Sessions held with qualified travelers: 8 of 8
- Channels: referrals 4, Instagram 2, Reddit 1, school program 1
- Knew us before: 2 (R6/T24, R7/T25), against the plan to recruit from outside our own network
- R1 and R4: the product lead says these were very loose connections, no one on the team knew
  them, and they were found through our flyers.

## Session by session

| | Traveler type | Trip (city with most days, dates, party size) | Offer made | Paid? | Refund asked? | 7-day check date | Counts toward bar? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| T19 | family | Shanghai, Mar 1–5, 4 | both | y, Nov 16, $20 call | n | Nov 23 ✓ | y |
| T20 | group | Chongqing, Feb 22–28, 3 | both | n | – | – | n |
| T21 | solo | Chengdu, Mar 22–24, 1 | $10 | n | – | – | n |
| T22 | solo | Shenzhen, Apr 11–14, 1 | $10 | y, Nov 17, $10 | n so far | Nov 24 | pending |
| T23 | group | Shanghai, Apr 23–25, 6 | $20 | y, Nov 17, $20 | n so far | Nov 24 | pending |
| T24 | solo | Shenzhen, Feb 12–15, 1 | $10 | n | – | – | n |
| T25 | family | Shanghai, Mar 2–7, 5 | $10 | y, Nov 19, $10 | n so far | Nov 26 | pending |
| T26 | group | Xi'an, Apr 2–6, 10 | $20 | y, Nov 19, $20 | n so far | Nov 26 | pending |

The city listed is where each traveler spends the most days. The product lead says every traveler
flies in through Shanghai or Chongqing and spends at least 2 days there. Their words on the offer
weren't recorded on the day.

A payment counts only if the person paid, didn't ask for a refund, and the 7-day check is done.

## Tally (from T19–T26, as of Nov 23)

| Step | Count |
| --- | --- |
| Qualified travelers in a session | 8 |
| Offered the $10 deposit | 6 (T19, T20, T21, T22, T24, T25) |
| Paid the $10 | 2 (T22, T25) |
| Offered the $20 call | 4 (T19, T20, T23, T26) |
| Paid the $20 | 3 (T19, T23, T26) |
| Paid either offer | 5 of 8 |
| Asked for a refund within 7 days | 0 so far (confirmed by the product lead, Nov 23) |
| Passed the 7-day check | 1 (T19) |
| Still waiting on the 7-day check | 4 (T22, T23 on Nov 24; T25, T26 on Nov 26) |
| **Kept payment for 7 days (counts toward the bar)** | **1 confirmed; 5 if no refunds by Nov 26** |
| $20 calls delivered | 1 of 3 (T19: Nov 18, H1, about 15 min) |

## Result

**Go, called early by the product lead on Nov 23** (recorded in decision 006, "Result"). Decision
006 puts the call on Nov 26, when the last refund window closes. The Nov 24 and Nov 26 checks are
still recorded, and any refund goes in as a dated update.

5 of 8 qualified travelers paid, and none has asked for a refund. 1 has passed the 7-day check, and
the other 4 finish on Nov 24 and Nov 26. The bar is met if at least 3 of those 4 keep their
payment (1 + 3 = 4 of 8).

For reference, not part of the bar: leaving out the 2 travelers who knew us before (T24, T25),
4 of the other 6 paid (T19, T22, T23, T26). Decision 006 doesn't exclude them, so the bar is counted
on all 8.

## Why people didn't pay

The 3 who didn't pay were T20, T21 and T24. The product lead recalled their reasons on Nov 23, close
to their words, but didn't match them to individual travelers:

- "I think AI can do a lot for me now, and I prefer to go with the flow, meet people on the way."
- "I'm not sure I want to travel with someone I barely know. I'd like to plan things on my own."
- They're okay without a guide, just exploring.

| Reason | Count |
| --- | --- |
| Would rather plan or explore on their own, with AI or nothing | 3 |
| Not sure about spending time with someone they don't know | 1 (of the 3 above) |
| Price | 0 |
| Trip too far off / dates not set | 0 |

**Observation, not part of the bar (logged Nov 23, after the sessions):** all 3 non-payers would
rather manage on their own, one of them with AI. A draft of this file proposed treating that as a
drop signal. Decision 006 says the bar doesn't change once sessions start, so this stays a note for
the go/drop discussion. It also matches `../competitors.md`: AI apps are the closest substitute.

## What went wrong in running the test

- **The T-notes weren't written on the session day.** Decision 006 requires same-day T-notes as the
  only source of the count. T19–T26 were written on Nov 23 from this file, and each one says so.
  Each traveler's words on the offer weren't recorded.
- **The offers weren't the same for everyone,** and decision 006 says every session offers both:
  - 2 travelers (T19, T20) got both.
  - 4 got only the $10 deposit (T21, T22, T24, T25).
  - 2 got only the $20 call (T23, T26).

  The product lead's reason: bigger groups are willing to pay more, especially when the places they
  go are more expensive. The change wasn't written into the plan before the sessions, as decision
  006 asks when the offer changes.
- **The sessions ran on the v2 prototype,** not the spec 006 trip pass that decision 006 names.
- **2 of 8 travelers (R6, R7) knew us before,** against the plan to recruit from outside our network.
- **4 travelers spend most days outside the pilot cities** (T21 Chengdu, T22 and T24 Shenzhen,
  T26 Xi'an), though all arrive through Shanghai or Chongqing. They didn't ask about it. The product
  lead decided on Nov 23 to count their payments as they stand.
- **2 groups are larger than the 4 people a pass covers** (T23: 6, T26: 10).
- **The last 7-day checks fall on Nov 26,** two days after the planned Nov 24 go/drop call.

## Next step

- Nov 24: check T22 and T23 for refund requests. Update their T-notes, then this file.
- Nov 26: check T25 and T26. Record both checks in decision 006 and as a dated update to
  `sprints/sprint-5-review.md`. If refunds bring the count under 4 of 8, review the go against the bar.
- Deliver the 2 remaining paid $20 calls (T23, T26) with a Shanghai host, and log each in its T-note.
  T19's call was delivered Nov 18 by H1.
- Go: next steps to be set in Sprint 6 planning.
