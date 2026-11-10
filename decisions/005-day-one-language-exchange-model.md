# Decision 005: Day One runs as a language exchange with unpaid hosts

**Date:** 2026-11-09
**Status:** Proposed. This is a draft for the team. It becomes Active once both founders agree
and the three open questions below have answers. If adopted, it extends decision 004.

## Context

Decision 004 kept Sprint 4's paid commitments outside China: refundable $10 deposits and intro
calls, with no paid in-person days. The next step is a first real trip ("Day One") in December
2026, and in-person days need a model that's legal before then.

A teammate's strategy (`discovery/PengPal/china-operating-strategy.md`, Nov 5) confirms what
`legal.md` found and adds three points:
- Regulators judge the substance, not the label. The Ministry of Culture and Tourism has
  specifically warned about unlicensed "travel buddies" (旅游搭子) and "guides" (向导).
- Individuals do get fined. In July 2025, a person in Pingdingshan was fined ¥2,000 for one
  unlicensed day tour. Enforcement usually starts with a complaint, an accident or a viral post.
- On the US side, both founders are international students. Taking money or running a
  for-profit business may need work authorization, so this has to be checked with BYU's
  international student office first.

Sprint 3's strongest signal was a **$40 paid half day**, which is the model the law rules out.

## Options considered

1. **Paid half and full days with unlicensed hosts** (the current prototype): This tests the
   price travelers responded to. Cons: decision 004 already rejected it, because hosts carry the
   fines and PengPal could be treated as an unlicensed travel agency (Art. 95, ¥10,000–100,000).
2. **Mode A, language exchange:** Hosts are unpaid volunteers. In return they get English
   practice, a friend and a reference letter or certificate. Travelers cover only the host's
   own share of meals or tickets. The traveler pays PengPal's US entity a matching or membership
   fee. Rules: no airport pickups, no driving, no homestays, no paid commentary at sights, and
   the first meeting is in daytime in a public place. Pros: it can start in December, and it
   removes the host's main risk because they earn nothing. Cons: PengPal still charges a fee
   for setting up meetings in China. That's close to "recruiting travelers" (招徕), the activity
   Art. 28/95 requires a license for, so PengPal's own risk is lower but not gone. It's also
   unknown whether enough hosts will join unpaid, and whether travelers will pay to meet a
   volunteer.
3. **Mode B now, through a licensed Shanghai travel agency:** The agency sells guided days and
   dispatches certified guides, while PengPal markets and matches for a revenue share. This is
   the legally clean option. Cons: there's no agency contact yet, and a deal by December is
   unlikely.
4. **Stay remote until Mode B:** Offer only paid pre-trip video calls, with no in-person days.
   Pros: lowest risk. Cons: it drops the on-the-ground help that is PengPal's whole value.

Modes C (hosts taking the guide exam; the 2026 exam is Nov 21 and registration has closed) and
D (PengPal's own Chinese agency license) are later options, not Day One choices.

## Decision

**Proposed: option 2 (Mode A) for Day One, with option 3 (Mode B) as the 2027 path to paid
guided days.** The deciding reason: it's the only option that can put a traveler with a host in
Shanghai by December without making the host an unlicensed guide.

Before it goes live, three things must happen first:
- **BYU's international student office confirms** that the founders can take a matching fee.
  Until then, any fee is collected as fully refundable, or the pilot is free.
- **A Shanghai culture-and-tourism lawyer answers this question:** "Does a US platform that
  charges travelers a fee to match them with unpaid language partners count as running a travel
  agency, or as the hosts guiding?" If the answer is yes, make the pilot free or drop the fee.
- **A host code of conduct and a short written agreement** are in place: language exchange and
  cultural exchange, no time-based pay, the Mode A rules above, no sensitive sites or political
  topics, no proselytizing, and an emergency contact process. Travelers must carry travel
  insurance and sign a waiver.

**What changes if this is adopted:**
- The prototype stops showing hourly or daily host prices and shows a matching fee instead.
  That needs an update to spec 005.
- Chinese recruiting copy never uses 导游, 陪游, 带团 or 包车.
- Hosts use WeChat groups or WeCom. There's no mini-program yet, because it needs a Chinese
  entity.
- Host pages must work in China without a VPN. The `github.io` domain needs testing from China,
  and PengPal never provides or recommends VPNs to hosts.
- Hosts' data: first name, WeChat ID, languages and experience, with separate consent for
  transfer abroad. No ID numbers (see `legal.md` section 4).

## Open questions (team)

1. Will enough hosts join with no pay? What non-cash rewards would work: reference letters,
   certificates, English practice, connections?
2. How much is the matching fee, and is the pilot free?
3. When do we approach a licensed Shanghai agency, and who owns that?

## What would change our mind

- **Lawyer:** if the lawyer says the paid match fee makes PengPal an unlicensed agency, make the
  pilot free or move straight to option 3.
- **Host supply:** if fewer than 3 hosts agree to unpaid Mode A, look at option 3 or 4 instead.
- **Traveler demand:** if travelers who said they'd pay $40 for a half day won't pay a matching
  fee to meet a volunteer, the paid model only works through an agency (option 3).
- **Agency partner:** if a licensed Shanghai agency agrees to dispatch PengPal hosts, paid days
  move to option 3 and Mode A is no longer needed for them.
