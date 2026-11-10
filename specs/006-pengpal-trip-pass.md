# Spec 006: PengPal trip pass screen (prototype v3)

**Status:** Draft. Confirm before building.
**Date:** 2026-11-09

## Problem

The prototype sells the one model PengPal can't legally run. The profile and "Book your day"
screens price a host's time ($27.60 visit, $46 half day, $92 full day). That's paid in-person
guiding by unlicensed hosts, which decisions 004 and 005 rule out.

Decision 005 chose a different model:
- a **trip pass** paid to PengPal: setup help, a matched local friend who is an unpaid
  language-exchange partner, and help during the trip
- **paid pre-trip calls**, $20, as a second offer

Both are untested. The prototype has to show them so travelers react to what we'll actually
sell.

Evidence for what the pass should lead with (`discovery/PengPal/market.md`):
- **The top pains** were being understood (5 of 10) and getting around (4 of 10). Payments came
  up for only 1 of 10 (T04). So the pass leads with "you'll be understood and you'll get around,"
  not Alipay setup.
- **Trust decides whether they book.** Verification, reviews, an intro before committing, and
  public meeting places came up for T04, T06, T07 and T10.
- **Price surprises cost trust.** The full price has to show from the first time a price appears,
  covering the whole group, with what's extra said plainly (T04, T06, T07, T09, T10; spec 005).
- **A first-day meetup fits early adopters.** "I'd probably book someone for my first day, just
  to feel comfortable navigating the city afterward." (T07)

## What we're building

Changes to `product/pengpal/`. Same stack, same localStorage state, and nothing is sold. The
flow keeps its screens, but "Book your day" becomes "Your trip pass."

### 1. Trip pass screen (replaces "Book your day")

- **Title:** "Your [City] trip pass". The top bar label changes from "Book your day" to "Trip
  pass".
- **One price, shown first and largest:** `PASS_PRICE` in `hosts-data.js`, default **$49**. Under
  it: "One price for your whole trip · up to 4 people traveling together · no fees added later."
- **What's included,** in this order, each with one line of detail:
  1. **A local friend to meet:** "[Host] meets you once, in daytime, somewhere public: food,
     the metro, a neighborhood. They're a language-exchange partner who wants to practice
     English, not a paid guide." Under it: "If you eat or go somewhere together, you cover
     your own costs, and their share."
  2. **Help getting around and being understood during your trip:** "Message PengPal in English
     any day of your trip: directions, a menu or a message to translate, what to say to a driver."
  3. **Setup before you go:** "A step-by-step checklist for Alipay, WeChat, an eSIM, Amap,
     DiDi and the metro, and we answer your questions by message."
- **Kept from "Book your day":**
  - the meetup date picker, renamed "When would you like to meet [Host]?"
  - the travelers stepper (1–4)
  - the "after your intro call" line
- **Removed:** the duration picker (visit / half / full), the host-rate + fee breakdown, and "Host
  is paid after your trip."
- **CTA:** "Make it real", which opens the commitment screen (section 3).

### 2. Host profile

- **"Price, all in" becomes "How you'd meet [Host]"** and says: "Included in a [City] trip pass ·
  $49 for your whole trip." This is the first place a price appears, so it's the full price.
- **A new "Why [Host] does this" row** comes from a new `wants` field per host in
  `hosts-data.js`, for example "Practice English and meet people from the UK." This backs up the
  language-exchange framing.
- Everything else stays (spec 005): badges, "Experienced with", reviews with "like you."

### 3. Commitment screen ("Make it real")

The options are now:
1. **Save my place: $10 refundable deposit toward the pass.** "It counts toward your $49 pass.
   Fully refunded if we can't match you, or if you change your mind." Asks for trip month and
   city, as now.
2. **Book a $20 pre-trip video call with a [City] local.** "30 minutes before you go: plan your
   days, ask anything. Refunded if it isn't useful." Shown only when `REAL_HOSTS_READY` is
   true. This replaces the free intro call option.
3. **Not yet.** As now ("What would make you say yes?"), plus one new question: "Which part of
   the pass matters most to you?" with three choices: the local friend / help during the trip /
   setup before you go.

- **All three options** ask "Which part matters most?". It's optional for options 1 and 2. It's
  saved in state as `commit.mostValued` and shown on the confirmation screen, so the facilitator
  can copy it into the T-note.
- The choice summary on the done screen reads like this:
  - "Place saved: Mar 2027, Shanghai ($10 refundable, toward a $49 pass)"
  - "Pre-trip call requested ($20 refundable)"

### 4. Price test by link

- **Setting the price:** a URL parameter sets the price for one session, such as
  `?pass=29`, `?pass=49` or `?pass=79`. With no parameter, `PASS_PRICE` is used.
- **Saved with the commitment:** the price shown is saved in state as `commit.passPrice`, so each
  deposit is tied to the price that traveler saw. A facilitator can test three prices across
  sessions without redeploying.
- **Every place that shows the pass price** uses the same value: the profile, the pass screen, the
  commitment screen and the confirmation.

### 5. Wording across the app

- **No screen says these words:** "guide", "tour", "show you around", "book a day", "your day" or
  "host's time". And no screen shows an hourly or per-day price.
- **Screens that need it:**
  - the top bar labels (`book`, `review`)
  - the trip screen: "Today with [Host]", and its CTA "Trip finished · rate your day" becomes
    "Meetup finished · how did it go?"
  - the review screen heading: "How was your day with…" becomes "How was meeting [Host]?"
  - the welcome screen: "Meet your host" becomes "Meet your local friend"
- **The trip screen's time** comes from a single `MEETUP_TIME` in `hosts-data.js` ("10:00 –
  13:00") instead of `DURATIONS`.

### 6. State

- **Removed:** `booking.duration`.
- **Added:** `commit.mostValued` and `commit.passPrice`.
- **Old state:** a traveler with v2 state doesn't hit an error, because missing fields count as
  unset.
- **Restart demo** clears the new fields.

## Out of scope

- **Real payments:** taking real money in the prototype, or adding a payment link. Facilitators
  still send the requests by hand (`interview-guide-v2.md`).
- **Choosing the final pass price.** The price test (section 4) feeds that decision, and
  `PASS_PRICE` stays a placeholder.
- **Other pass designs:** more than one meetup, multi-city passes, or family or business versions
  of the pass.
- **Paid in-person days of any kind,** including through an agency. That's decision 005's 2027
  path, with its own spec.
- **In-app chat with PengPal support.** The trip screen's scripted host chat stays as it is.
- **Cancellation policy, accessibility changes, real host profiles in the app.**

## When to build

**After T11–T18 are done.** They run on v2 and the updated script, and changing the app
mid-round would make sessions inconsistent. Then build this for the Sprint 5 sessions, and
update `interview-guide-v2.md` to a v3 script: drop the day-price questions, and ask for the pass
from the screen itself.

## Definition of done

- [ ] No screen shows an hourly or per-day price, or the words guide, tour, "show you around" or
      "book a day"
- [ ] The profile shows the pass price ($49, or the `?pass=` value) as the first price, with
      "for your whole trip"
- [ ] The trip pass screen lists the three parts in order, with one price and "no fees added
      later"
- [ ] `?pass=29` / `49` / `79` changes the price everywhere, and the price shown is saved with
      the commitment
- [ ] "Make it real" offers the $10 deposit toward the pass, the $20 call (only when the flag is
      on), and "Not yet"; "Which part matters most?" is saved and shown on confirmation
- [ ] Every host has a `wants` line on their profile
- [ ] v2 state in localStorage doesn't break the app; Restart demo clears the new fields
- [ ] Deployed at https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
- [ ] Used in the Sprint 5 sessions. Each T-note records the pass price shown, the commitment and
      "most valued"
