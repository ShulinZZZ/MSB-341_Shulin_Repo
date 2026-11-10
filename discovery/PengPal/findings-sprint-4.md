# PengPal Sprint 4 findings: will travelers commit?

**Sessions:** 8, dates not recorded (script `interview-guide-v2.md`). The sessions were recorded
directly in this write-up, not as separate `Interviews/T11.md`–`T18.md` notes, so this file is
the only record.
**Who:** new vs returning: not recorded. Screener results: not recorded.
**Offers asked:** a $10 refundable deposit toward a Shanghai trip pass, and a $20 refundable
pre-trip call with a real host (offered in 2 of 8 sessions) (decision 005).
**Caveat:** how people were found: not recorded. All 7 recorded trips are in 2027, about 4–12
months away, and recorded only by month or season, not exact dates. T11's row: not recorded.
**Where "not recorded" appears:** the source notes didn't capture it, so this write-up doesn't
guess.

## Conclusion

**This test can't show whether travelers will commit money.** Payments and refunds weren't
recorded session by session, and the two tallies disagree. The summary count says 6 of 8
committed money and 6 asked for a refund, while the session rows show nobody paid.

**Going by the session rows, the bar of 4 of 8 was not met.** Of 7 recorded sessions, 4 said yes
to the deposit without paying and 3 took a free waitlist date. Saying yes is the weaker signal
the script records separately from money arriving. Decision 005's rule applies: what PengPal can
legally sell isn't proven yet, so the commitment test has to be rerun.

## Commitments

**Bar:** 4 of 8 commit to either offer (decision 005, "What would change our mind").

| Step | Summary tally | Session rows | Note |
| --- | --- | --- | --- |
| Asked for the $10 pass deposit | 4 | not recorded | The script asks everyone, so 4 is likely undercounted |
| Said yes to the pass deposit | 4 | 4 (T13, T14, T16, T18) | Matches |
| **Paid the $10** | 3 | 0 | Conflict; payments per session not recorded |
| Offered the $20 call | 2 | not recorded | |
| Said yes to the call | 3 | not recorded | More yeses than offers, so the tally is in error |
| **Paid the $20** · call held | 3 | 0 | Conflict; not recorded per session |
| Took a free waitlist date instead | 6 | 3 (T12, T15, T17) | Conflict |
| Said no to everything | 2 | 0 | Conflict |
| Asked for a refund | 6 | not recorded | Who asked (traveler, or a refund because of the F-1 rule): not recorded |
| **Committed money (either offer)** | 6 of 8 | 0 of 7 | Conflict |

**Result against the bar:** not met on the session rows. It can't be confirmed either way, because
payments weren't recorded per session.

## Session by session

Trip timing is measured from Nov 2026 against the ICP window in `market.md`, 3–8 months out.

| | Segment / traveler type | Trip (cities, month, party) | Months out · in ICP window? | Expected half-day price | Pay answer (verbatim) | Pass: expected price | Pass: part that matters most | Outcome |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T11 | not recorded | not recorded | – | – | not recorded | – | – | not recorded |
| T12 | solo | May 2027 | ~6 · yes | $40 | not recorded | $60 | friend | waitlist |
| T13 | solo | Summer 2027 | ~7–9 · borderline | $20 | not recorded | $50 | friend | yes, unpaid |
| T14 | solo | Spring 2027 | ~4–6 · yes | $30 | not recorded | $50 | support | yes, unpaid |
| T15 | family | Summer 2027 | ~7–9 · borderline | $50 | not recorded | $80 | support | waitlist |
| T16 | group | Fall 2027 | ~10–12 · no | $30 | not recorded | $50 | friend | yes, unpaid |
| T17 | group | Summer 2027 | ~7–9 · borderline | $40 | not recorded | $50 | setup | waitlist |
| T18 | family | June 2027 | ~7 · yes | $80 | not recorded | $120 | setup | yes, unpaid |

All 7 were marked as ICP matches on traveler type. On timing, 3 are in the window, 3 are
borderline and 1 is outside it. Cities and party size: not recorded.

## Who committed

From the session rows.

| Segment | Sessions | Committed money | Said yes, unpaid | Waitlist |
| --- | --- | --- | --- | --- |
| Independent first-timers (solo) | T12, T13, T14 | 0 / 3 | 2 | 1 |
| Families with kids | T15, T18 | 0 / 2 | 1 | 1 |
| Groups (not a segment in `market.md`) | T16, T17 | 0 / 2 | 1 | 1 |
| Couples, older travelers, students, business | – | – | – | – |

- **Did ICP matches commit more often than everyone else?** Nobody paid, so there's nothing to
  compare. On saying yes, the 3 in the timing window (T12, T14, T18) split 2 yes and 1 waitlist,
  and the other 4 split the same way, 2 and 2.
- **Did the early-adopter pattern from T04, T06 and T07 hold?** Not recorded. The pattern is an
  experienced traveler, research already done, paid for local help before, a dated trip. No one
  had an exact trip date.
- **Did people found outside our own networks behave differently?** Not recorded.

## Price

- **Trip pass, expected price:** range $50–$120, median $50. By segment: solo $50–60, groups $50,
  families $80–120.
- **Half day, compared with Sprint 3 ($40 held up best):** the same overall (median $40, range
  $20–80). Solo travelers came in lower ($20–40, median $30) and families higher ($50 and $80).
- **The all-in prices ($27.60 / $46 / $92):** reactions to the fee and the group price weren't
  recorded.

## What the trip pass is worth to them

| Part that matters most | Count (top part, from session rows) | Their words |
| --- | --- | --- |
| A local friend to meet | 3 (T12, T13, T16) | not recorded |
| Pre-trip setup help | 2 (T17, T18) | not recorded |
| Help during the trip | 2 (T14, T15) | not recorded |

A separate tally of 4 / 6 / 8 adds up to 18 across 8 sessions. Whether it counted every part
each person valued or only their top choice wasn't recorded, so the session-row counts above are
used.

**Lead with:** a local friend to meet, with setup help and in-trip support presented as part of
that friendship. This is what spec 006 already does.

## Why people didn't commit

Reasons for not committing weren't recorded per session. All 7 recorded trips are 4–12 months
out with no exact dates, so timing is a likely factor. That's an inference, not a recorded reason.

## Prototype v2 (spec 005)

- **Traveler types:** "group" came up twice and isn't a listed type. Hesitation between types, and
  use of the female-host toggle: not recorded.
- **Host order and "Experienced with":** not recorded.
- **All-in price:** not recorded.
- **"Make it real" screen:** in-app choices compared with real answers: not recorded.
- **Fixes to make:** add a "group / friends" traveler type.

## What this changes

- [ ] **Decision 005:** not confirmed. Rerun the commitment test before treating the trip pass as
      proven.
- [ ] **Recording:** for each session, record payment ($10 / $20 / none), refund and who asked
      for it, the decline reason and the verbatim pay answer in the T-note on the day of the
      session. Tally the findings from the notes, not separately.
- [ ] **Pass price for Day One:** $49–50 holds as the placeholder. That's the median expected pass
      price and spec 006's default. Consider a family tier, since families expected $80–120.
- [ ] **Screener:** require a dated trip (the builder's retro sets it at booked within 3 months).
      Note that `market.md`'s early adopters had trips 3–8 months out.
- [ ] **Prototype:** add a group type; build spec 006.
- [ ] **Recruiting:** the next travelers should come from outside our networks, with how each was
      found recorded.
- [ ] **Hosts:** H1 is ready. H2 needs her English level confirmed. H3's pay question needs a
      decision before December. All 3 need ID-check dates (see `hosts.md`).
- [ ] **Notes:** next sprint, write one T-note per session from `T00-notes-template.md` on the
      day of the session, and tally the findings from those notes. This sprint the sessions were
      recorded only in this write-up, which is how the two tallies came to disagree.
