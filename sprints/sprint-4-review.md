# Sprint 4 Review

**Window:** 2026-10-28 (plan committed 11:55 MDT) to 2026-11-09
**Sessions reviewed:** 5 across 1 project (Claude Code 5, Codex 0; 1 session excluded at your request)
**Not visible to this review:** Claude Docs and Google Docs (team docs: the China operating
strategy, target customers and channels, mentor feedback notes). Work on another device,
including the T11–T18 session notes, isn't in the repo.

## Where the work lives

- **ShulinZZZ/MSB-341_Shulin_Repo:** public, shared with sdmurff and the TA. 19 commits in the
  window.
- **PengPal prototype v2:** https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
- **Team docs (Claude Docs):** target customers, customer journey and channels; Sprint 4 mentor
  feedback notes. Copies are in `discovery/PengPal/target-customers.md` and
  `discovery/PengPal/mentor-feedback-sprint-4.md`.

## When you worked

7 of 13 days had sessions: Oct 28, Oct 29, Nov 4, Nov 5, Nov 7, Nov 8 and Nov 9. The work was
front-loaded and back-loaded, with a quiet middle:

- **Oct 28–29:** the plan, the legal check and decision 004, with 22 prompts and 4 commits.
- **Oct 30 – Nov 3:** no sessions and no commits.
- **Nov 4–8:** light, 6 prompts. Spec 005, the v2 build, the session script.
- **Nov 9:** the last day carried about 37 of the roughly 65 prompts in the window (more than
  half), and 13 of the 19 commits.

## Where you got stuck

1. **The T11–T18 notes never reached the repo.** You reported pushing them twice, and both pulls
   brought nothing; GitHub still ends at the code of conduct commit. Meanwhile, the findings
   draft's Commitments table (6 of 8 committed money) contradicts its session table (0 paid,
   4 yes-unpaid, 3 waitlist). It's unresolved. `findings-sprint-4.md` is saved with [CONFIRM]
   markers and is uncommitted.
2. **Reading the China strategy doc.** The first link was a doc this session couldn't access, and
   reading the artifact returned an empty frame. It ended when you pasted the text, which was
   then saved as `china-operating-strategy.md`.
3. **Accepting doc suggestions.** On the target-customers doc, your accepts hadn't saved, and all
   6 suggestions were still open. The agent's first attempt to accept them in one batch was
   refused. It ended when they were accepted one at a time and synced to the repo.

## What took the most time

By prompt volume, Nov 9 was the largest block, with about 37 prompts. In order, they went to:

1. bringing the teammate's China strategy into the repo and reconciling it with the legal check
2. decision 005 and choosing a monetization model (trip pass plus paid calls)
3. reviewing and syncing two team docs
4. `market.md` part 1, spec 006, the host log and the code of conduct

The second largest was the Oct 28 planning session, about 14 prompts. The prototype v2 build
itself took few prompts, about 3 on Nov 7–8.

## Learning sessions

None logged this sprint.

## Axis

**Discovery.** Most of the work was about who PengPal is for and what it may legally sell: the
legal check, segments, early adopters and the ideal customer profile, mentor feedback, host
recruiting and the commitment test. Pricing (the trip pass) was a smaller part, under Launch and
Learn.

## Against your plan

**Goal was:** Add traveler-type options and the all-in price to the PengPal prototype, design a
logo, recruit real hosts, check the legal concerns on the China side, and test whether travelers
will commit (a real intro call or a deposit); define PengPal's target customers (personas,
segments, early adopters, ideal customer profile, customer journey, channels), and get feedback
from mentors.

| Plan item | Due | What happened |
|---|---|---|
| China legal check in `legal.md` | Fri Oct 30 | Done Oct 29 (`f1eecde`), plus decision 004. Data threshold corrected Nov 9 |
| Prototype v2 live, spec first | Week 1 (Nov 1) | Spec 005 written Nov 5 and built Nov 7 (`af38dfb`), a week late. Fixes Nov 9 |
| New logo in prototype and README | Week 1 | No logo commit and no logo in README: not done |
| `market.md` part 1 from T01–T10 | Week 1 | Done Nov 9 (`6eb4252`), a week late |
| 3 real Shanghai hosts in `hosts.md` | Fri Nov 6 | 3 recruited Nov 1–7 (the last one a day late). Logged Nov 9 (`56a049f`) |
| 8 sessions T11–T18, commitment recorded | Week 2 | No T11–T18 notes in the repo. The findings draft's commitment counts contradict each other |
| `market.md` part 2: journey and channels | Week 2 | Written in the team doc and copied to `target-customers.md`. `market.md` points to it rather than holding it |
| Feedback from 2 mentors | Week 2 | Done (`b9fc216`) |
| Findings write-up | Week 2 | A draft with open [CONFIRM] markers, uncommitted |

**Also done, not in the plan:**
- the China operating strategy
- decision 005 (language exchange sold as a trip pass, plus paid calls)
- the session script updated to the new offers
- spec 006 (trip pass screen, draft)
- a host code of conduct and agreement

**Does the work match the goal?** Partly. The legal check, prototype v2, hosts, target-customer
work and mentor feedback match it. The plan's "why" was to see whether travelers will actually
commit and pay. That part, the T11–T18 commitment test and its count, has no notes in the repo
and no settled result. The logo wasn't done.

**Update after the review (Nov 9, the same evening):** three plan items moved after this report
and the retro were written. The retro above is unchanged.

| Plan item | Was | Now |
|---|---|---|
| New logo in prototype and README | Not done | Done (`2e6e653`): `product/pengpal/logo.svg`, in the prototype, the favicon and the README |
| `market.md` part 2: journey and channels | In `target-customers.md`, linked from `market.md` | Done in `market.md` itself (`9fb14f6`), linking to `target-customers.md` for sources |
| Findings write-up | A draft with [CONFIRM] markers, uncommitted | Committed (`9d59c8d`). It concludes the test can't show whether travelers commit money, because payments weren't recorded per session; on the session rows, the bar of 4 of 8 was not met. Missing facts are marked "not recorded" |

Still open: the T11–T18 notes aren't in the repo.

---

## Your retro

*The builder's own answers, recorded word for word in step 7.*

**Did you hit the goal?** Yes, I did these following: the legal check, prototype v2, market.md parts 1 and 2, 3 real hosts (one day late) and feedback from 2 mentors. Those were the building and preparation steps. They make a proper test possible; they don’t replace it. I did everything on the list, but I didn’t hit the sprint’s actual goal.

**What did the report show you?** All my travelers’ trips are in 2027. I marked all 7 as matching my ideal customer because their traveler type fit. But my own definition says the trip is within 1 to 3 months, and none of them were. That probably explains the hesitation more than price or the product does.
My two tables tell opposite stories. Looking at only one, I could have called the sprint a success or a failure. Together, they show my test results can’t be trusted yet.
The refunds cancel out the commitments. I was counting payments and hadn’t thought about how many people asked for their money back.
People wanted a local friend more than setup help. My pitch leads with Day One app setup, but the friend came out on top (3 people), ahead of setup and in-trip help (2 each). The pass should lead with meeting a friend.
Families will pay more and solo travelers less. The overall half-day price matched Sprint 3’s $40. Families expected $50–80 and solo travelers $20–40, which supports retesting with families.
Some travelers came as a group. Two people described themselves as a “group”, which isn’t one of my traveler types, so my prototype doesn’t fit every real traveler yet.

**If the plan changed, why?** Yes, the plan changed in three ways.

The offer. The plan was to ask each traveler to book a real intro call or put down a $10 deposit. In the sessions, I asked for a $10 refundable deposit toward a Shanghai trip pass and a $20 refundable pre-trip call with a real host (decision 005). The legal check showed that paying hosts for in-person days was risky, because of guide licensing and cross-border payments. So we made hosts unpaid language-exchange partners and kept only the pre-trip call as a paid service.
The timing. The traveler sessions were planned for Nov 2–9 but ran Nov 9–13. It took longer than expected to get prototype v2 ready and to recruit travelers who passed the screener, since only 6 of the 8 waitlist members qualified.
The hosts. I aimed for 3 hosts by Nov 6. The third agreed on Nov 7, one day late.

What I learned: I didn’t write these changes into the plan when they happened. The bar of 4 of 8 was set for the original offer, so it’s unclear whether it still applies to the new one. Next sprint, I’ll record any change to the plan when it happens, along with whether the bar still holds.

**Actual difficulty:** It was harder than I expected, for four reasons:

The legal check changed the offer. I planned a simple choice between an intro call and a $10 deposit. After the legal check, I had to redesign it as a $10 trip-pass deposit plus a $20 pre-trip call, and set up hosts as unpaid language-exchange partners. That was extra work I hadn’t planned for.
Recruiting took longer on both sides. Only 6 of my 8 waitlist members passed the screener, so I had to find new travelers. The third host agreed a day after my deadline.
The sessions slipped a week. They moved from Nov 2–9 to Nov 9–13, which squeezed the findings write-up into the end of the sprint.
The hardest part was getting clean results. Building the prototype and writing up the documents went roughly as planned. What I underestimated was running a real commitment test and recording it clearly. My results ended up contradicting each other.

I’d rate this sprint a 4 out of 5, one point harder than the 3 I predicted.

**What will you change next sprint?** What I’ll change next sprint: I’ll only run the commitment test with travelers who have a trip to China booked within the next 3 months. I’ll add that as a required screener question before I book any session. This sprint, every traveler’s trip was in 2027, so their answers mostly reflected timing, not whether they’d pay for PengPal.
