# Spec 004: PengPal clickable trip prototype

**Status:** Building
**Date:** 2026-10-12

## Problem

No interview evidence yet. Source is the founder story and pitch deck
(`discovery/PengPal/PengPal-Big-Idea-Pitch-Guided-Travel-Final.pptx`): BYU friends visiting
Nanchang needed help with Chinese QR-code menus, Alipay/WeChat Pay and DiDi rides. Assumed
problem: independent, first-time foreign travelers in China can't get around comfortably
without a local, because the Western apps they rely on (Google Maps, card payments, Uber)
don't work well there.

The prototype exists to put one concrete trip in front of travelers and potential hosts, so
we can ask "would you book this, at this price?" It is not the product. The pilot plan is to
hand-match the first trips, so nothing here needs to really match, book or charge anyone.

## What we're building

A mobile-first clickable prototype at `product/pengpal/` (vanilla HTML/CSS/JS, same as the
MCAT app; no backend). Rendered in a phone-sized frame on desktop, full-screen on a phone.
State (onboarding answers, chosen host, booking) kept in localStorage so a refresh doesn't
lose your place. A "Restart demo" link resets it.

One trip, eight screens, walked in order:

1. **Welcome / onboarding:** "Travel China like you have a friend there." Pick city (pilot
   pair only), home country, language, interests (food, history, nightlife, views, shopping).
2. **Host list:** 4 sample hosts for the chosen city, sorted by interest overlap
   ("Matches 2 of your interests"). Each card: avatar initial, name, verified check, a
   returnee badge ("Studied in Manchester"), languages, specialties.
3. **Host profile:** bio, intro-video placeholder (poster + play button, no real video),
   3 sample reviews with stars, price per half day and full day.
4. **Book a video intro:** free 15-min call, pick a slot from the next 3 days, shown in both
   the traveler's local time and China time.
5. **Book and pay:** trip date, half/full day, party size. USD price breakdown: host rate +
   PengPal service fee shown as its own line + total. "Pay" is a fake button (no card form)
   that shows a confirmation.
6. **Trip prep checklist:** tickable items (Alipay with foreign card, Amap, eSIM/VPN
   note, DiDi in English, save hotel address in Chinese), each with a "Lin's tip" note.
7. **Day of the trip:** meeting point card (name in English + Chinese, "show to driver"),
   scripted chat with the host (canned replies), and a red safety button that opens a sheet
   with 110/120 emergency numbers, "share my location with PengPal", and "call PengPal
   support" (all simulated).
8. **Review:** 1-5 stars, tags ("helped with payments", "great food spots"), comment,
   "would you recommend to a friend?" (0-10, our referral signal). Thank-you screen.

**Brand:** PengPal / 朋友派, P-mark logo (drawn in CSS/SVG), lantern red `#E84632` and gold
accent, navy `#18345A` text, matching the deck.

**All hosts, reviews and prices are clearly labeled sample data** ("Sample profile"), as the
deck does.

## Out of scope

- Accounts, real matching, real payments, real video calls, real chat or push notifications
- Host-side app (host signup, verification flow, payouts)
- Maps or live location
- Chinese-language UI (English only for the prototype)
- More than the two pilot cities
- Pricing decisions: the sample price and fee % are placeholders to test reactions to, not
  a pricing model

## Pilot cities

Chongqing + Shanghai (see `decisions/003-pengpal-pilot-cities.md`). Price placeholders: $45
half day, $80 full day per group of up to 4, plus a 15% service fee.

## Definition of done

- [ ] Someone can tap from welcome to review in one pass without help, on a phone
- [ ] Onboarding answers change which hosts show first and the badge text
- [ ] Price screen shows the service fee as a separate line in USD
- [ ] Safety button is reachable from the day-of screen in one tap
- [ ] Deployed at https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
- [ ] Used in at least 5 traveler conversations; note who would book and at what price
