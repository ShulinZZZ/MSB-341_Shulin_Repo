# PengPal Sprint 3 findings: would travelers pay?

**Sessions:** 10, Oct 19–24, 2026 (notes in `Interviews/T01.md`–`T10.md`)
**Who:** 8 passed the screener (first China trip in the next 12 months). T03 (trip in ~2 years) and
T08 (repeat business traveler) did not. Their answers are counted below but marked.
**Caveat:** everyone came through friends, coworkers, classmates or professors. Pay answers are
what people said, not money paid.

## Conclusion

**Yes, travelers say they would pay, and $40 for a half day is the price that held up best.**
All 10 said yes or a conditional yes to the pay question, 9 with a number. 8 of 10 joined the waitlist and 6 referred
someone. But the right price depends heavily on who is traveling, and the 15% fee only works if the
all-in total is shown from the start.

**The biggest gap in the prototype is that it treats every traveler the same.** Families, solo
travelers, seniors, students and business travelers each asked for options the app doesn't have.

## The pay question

| | Answer | Length | Walk-away | Waitlist |
|---|---|---|---|---|
| T01 | ~$50 for a full day | 3 full days | $120/day | yes |
| T02 | $120 for five days (~$24/day) | 5 full days | $50/day | yes, Chengdu |
| T03\* | "If one host can work for the whole family I can pay more" | 3 full days | — | yes, Dalian |
| T04 | ~$40, with good English | half day | $90 | yes, Guilin |
| T05 | "Maybe $20 for a couple of hours" | visit | $35 | no |
| T06 | $80–$100, if trustworthy and good with kids | full day | $150 | yes, Beijing |
| T07 | $40–$50, with a female host | half day | $70 | yes, Shanghai |
| T08\* | $100+, if professional | full day+ | $180/day | yes, Guangzhou |
| T09 | ~$50 for two people | half day | $85 for two | yes, Shanghai |
| T10 | $80, if patient and clear | full day | $130 | no |

\* did not pass the screener

## What the prices told us

- **$40 half day:** "about right" for 4 of the 8 who rated it. 3 thought it was too cheap
  (T06, T08, T10); only the student (T05) found it expensive.
- **$24 visit:** 6 of 7 who rated it called it too cheap. Only T05, a long-stay student, wanted it.
- **$80 full day:** split by who is traveling. It's right for families (T06), older travelers (T10)
  and business (T08), who all offered $80 or more. It's getting expensive or too expensive for 5:
  the students (T02, T05) and the three who'd book a half day (T04, T07, T09).
- **15% fee:** no one rejected it outright. 4 accepted it only if the total is shown upfront or
  clearly explained (T04, T06, T07, T10). It made T05 and T09 think twice, and T05 hesitated at it
  during the booking flow.
- **Multi-day:** 4 people would book 3 or more days (T01, T02, T03, T08). T02 asked for a
  multi-day discount without being prompted.

## Who would pay the most

- **Families with kids** (T03, T06) and **older travelers** (T10) pay for reliability and ease, not
  sightseeing: "I would pay more for someone who makes the trip easier, not necessarily someone who
  knows more history." (T06)
- **Students** (T02, T05) are the most price-sensitive and see it more as a way to make friends:
  "I'd use it more like a friendship app than a tour guide app." (T05)
- **What people are buying:** in most sessions it was help with daily life (paying, getting around,
  talking to people), not a guided tour: "I need someone to make China feel less intimidating."
  (T04)

## What confused travelers or held them back

Everyone finished the full flow. Where they hesitated or asked for more:

- **No way to say what kind of traveler you are (the biggest gap).** Onboarding asks for city,
  country, language and interests, but not who is traveling. 6 of 10 asked for options that fit
  their type of trip:
  - Family: a "traveling as a family" option, and hosts who know kid-friendly places (T03, T06)
  - Solo: choosing a female host (T07)
  - Senior: larger text, simpler navigation and phone support (T10)
  - Business: "business travel" as a trip type, hosts with professional experience, invoices (T08)
  - Student: student interests, younger hosts with shared hobbies (T05)

  Host profiles can't show these either: there's no family, business or student experience on them.
- **Unclear price:** does it cover the whole group (T09, T03)? Are meals and transport extra (T09)?
  Where is the fee (T04, T05)?
- **Safety and trust:** location sharing and emergency support (T04, T06, T07, T10), verification
  and reviews (T04, T06, T07, T10), a clear cancellation policy (T06, T07, T10).
- **Other missing features:** in-app messaging (T05, T09), seeing where the host would take you
  (T01), booking more than one day (T01, T02, T03, T08).

## Pilot cities

Only Shanghai showed up among the waitlist cities that people named (2 of 7). No one named
Chongqing for the waitlist. Beijing and Shanghai were each in 6 travelers' plans, and Chengdu in 4.
This is worth revisiting in `decisions/003-pengpal-pilot-cities.md`.
