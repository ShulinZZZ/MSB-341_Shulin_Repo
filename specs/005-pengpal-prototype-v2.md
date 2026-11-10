# Spec 005: PengPal prototype v2 (traveler types, all-in price, commitment ask)

**Status:** Building
**Date:** 2026-11-05

## Problem

Sprint 3 put prototype v1 (spec 004) in front of 10 travelers (`discovery/PengPal/findings.md`,
`Interviews/T01.md`–`T10.md`). Two problems came out of it:

1. **It treats every traveler the same.** 6 of 10 asked for options that fit who they travel
   with: families wanted kid-friendly hosts (T03, T06), a solo woman wanted a female host (T07),
   an older traveler wanted larger text and patience (T10), a business traveler wanted
   professional hosts (T08), and a student wanted younger hosts with shared hobbies (T05). Host
   profiles can't show any of this.
2. **The fee only works if the total shows from the start.** 4 travelers accepted the 15% fee
   only if the all-in total was shown upfront (T04, T06, T07, T10). T05 hesitated when the fee
   first appeared at checkout. T09 and T03 weren't sure whether the price covered the whole group.

Sprint 4 also has to test whether travelers will **commit**, not just say they'd pay. v1 ends
with a fake "Pay" button, which measures nothing. Decision 004 rules out selling paid in-person
days with unlicensed hosts, but allows a refundable $10 deposit or an intro call.

## What we're building

Changes to the existing prototype at `product/pengpal/`. Same stack, same eight screens,
same localStorage state. Nothing is sold, and the hosts stay labeled as sample profiles.

### 1. Traveler type in onboarding

- A new first question on the "About your trip" screen: **"Who's traveling?"** Pick one of
  Family with kids, Solo, Senior, Business, Student.
- Saved in state as `travelerType`. A traveler who already has v1 state is asked on their next
  visit (a missing type counts as unanswered).
- **Solo** also shows an optional toggle: "I'd prefer a female host."
- **Senior** turns on larger text (bigger base font across the app) and adds a line on the
  host list: "Prefer a phone call? PengPal support can help you book." (simulated).

### 2. Hosts sorted by traveler type

- Each host in `hosts-data.js` gets two new fields:
  - `goodFor`: the traveler types they have experience with, such as `["family", "senior"]`
  - `gender`: `"f"` or `"m"`, used only by the solo female-host toggle
- Each pilot city has at least one host for each of the five types. Edit the sample bios so they
  back it up (for example, a host who is good with families mentions kid-friendly places).
- The host list sorts by: type match first, then interest overlap (as now). With the female-host
  toggle on, female hosts come first.
- Host cards show a type badge when they match, such as "Great with families" or "Business
  experience", next to the existing "Matches 2 of your interests" badge.

### 3. Experience on host profiles

- A new "Experienced with" row on the profile lists the host's `goodFor` types as chips.
- The reviews for each host are rewritten so at least one fits a type they're good for (for
  example, a family review for a family host).

### 4. All-in price everywhere

- Every price the traveler sees is the **total including the 15% service fee**: the host
  profile price cards, the booking screen, and the confirmation. There's no screen where the
  host rate appears without the fee.
- Under each total, in small text: "Includes $X PengPal fee · whole group up to 4 · meals,
  tickets and rides extra."
- The breakdown on the booking screen keeps host rate + fee = total, but the total comes first
  and is largest.
- The prices are still spec 004's placeholders ($24 visit, $40 half day, $80 full day + 15%),
  so the all-in totals are $27.60, $46.00 and $92.00.

### 5. Commitment step (replaces the fake Pay)

- On the booking screen, "Pay" becomes **"Make it real"**. It opens a new screen that says
  plainly that this is a prototype, and asks the traveler to pick one:
  1. **Hold my trip date: $10 refundable deposit.** Fully refunded if we can't match you with a
     host. Asks for trip month and city.
  2. **Book a free intro call with a real Shanghai host.** Shown only when `REAL_HOSTS_READY`
     (a flag in `hosts-data.js`) is true.
  3. **Not yet.** One question: "What would make you say yes?" (free text).
- The choice is saved in state and shown on the confirmation screen. The prototype **does not
  take money**. In a session, the facilitator collects the deposit by sending a payment request
  after the call, and records whether it was paid in the T-note.
- After the commitment screen, the flow continues to the trip prep checklist as before.

## Out of scope

- Taking real payments in the prototype, or adding a payment link or other dependency
- Changing the price points or the fee rate. Findings suggest $24 is too cheap and $80 depends
  on traveler type, but that's a pricing decision for later, not this build.
- Multi-day booking, in-app messaging, cancellation policy, invoices for business travelers
- Real host profiles in the app. Real Shanghai hosts are logged in `discovery/PengPal/hosts.md`,
  not shown with their details.
- The logo (separate Sprint 4 item)
- Changes to the day-of, safety or review screens

## Definition of done

- [ ] Picking each of the five traveler types changes which hosts show first, in both cities
- [ ] Every host card and profile shows the types that host is good with
- [ ] Solo + female-host toggle puts female hosts first; Senior turns on larger text
- [ ] No price anywhere appears without the fee included; total is the first number shown
- [ ] "Make it real" offers the deposit, the intro call (only when the flag is on) and "Not yet",
      and the choice shows on confirmation
- [ ] v1 state in localStorage doesn't break the app; "Restart demo" clears the new fields
- [ ] Deployed at https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
- [ ] Used in the 8 Sprint 4 sessions (T11–T18); each note records traveler type, commitment
      choice and whether the deposit was actually paid

## Changes

**2026-11-09:** Three fixes to traveler types after a review against this spec:
- Every host card on the list shows "Experienced with …", with the traveler's own type
  highlighted, not only a badge when the type matches (closes the "every host card" item above).
- Each host's reviews carry an optional `for` type. On the profile, a review from the same kind
  of traveler shows first and is tagged "…, like you".
- The host list has a "Change" link next to "Sorted for …" that goes back to onboarding.
