# Decision 005: Day One runs as a language exchange with unpaid hosts, sold as a trip pass

**Date:** 2026-11-09
**Status:** Active. The product lead chose the model (Mode A, monetized as a trip pass) on
2026-11-09, and the teammate still has to confirm. This extends decision 004. Taking real money
still waits for the three checks under Decision.

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
   own share of meals or tickets. The traveler pays PengPal's US side for the service (see "How
   Mode A makes money" below). Rules: no airport pickups, no driving, no homestays, no paid commentary at sights, and
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

**How Mode A makes money.** These options were weighed on Nov 9, after both mentors flagged
monetization (`discovery/PengPal/mentor-feedback-sprint-4.md`):

- **Matching fee:** a one-off fee per trip, paid for the introduction. Cons: "pay to meet a
  volunteer" is a weak pitch, and nobody has tested it.
- **Trip pass:** one price for a trip window. It covers pre-trip setup help (Alipay, apps, eSIM,
  metro), a matched local friend, and chat support during the trip. Pros: it sells the result
  travelers asked for (setup that works on day one, plus a friend there) instead of access to a
  person. It also fits the language-exchange framing. Cons: untested, and PengPal has to deliver
  the setup help and the chat support itself.
- **Paid remote calls:** a host advises from home on a pre-trip video call for about $20. Low
  legal risk, because advice from home isn't on-site guiding (`legal.md`). Cons: it drops the
  in-person part, and the host is paid, so it's China-source income they have to declare.
- **Day rate with a commission:** the 80/20 pitch split, or the prototype's +15%. This has the
  strongest evidence: the $40 half day and a 15% fee accepted when shown upfront. But it's paid
  unlicensed guiding, so it only works through an agency (option 3).

Affiliate revenue (eSIM and insurance referrals) can be added to any of these. It isn't a model
on its own.

## Decision

**Option 2 (Mode A) for Day One, monetized as a trip pass, with option 3 (Mode B) as the 2027
path to paid guided days.** The deciding reason: it's the only option that can put a traveler
with a host in Shanghai by December without making the host an unlicensed guide. The trip pass
beats a matching fee because it charges for the setup help and support PengPal itself provides,
not for access to an unpaid host.

The trip pass is paid to PengPal's US side. None of it goes to the host as pay for their time.
Hosts get the non-cash rewards listed in open question 1.

**Paid remote calls are sold alongside the pass** (added Nov 9). This is a smaller first
purchase, about $20 for a 30-minute pre-trip video call with a Shanghai local. It's the only
offer where the host is paid. That's allowed because the host advises from home and doesn't
accompany anyone. Pay hosts a lump sum after the call, in writing, and tell them it's taxable
income (`legal.md` section 2). The two offers also test different things. The pass tests
whether travelers pay for setup help plus a friend there; the call tests whether they pay for
a host's time at all.

Before it goes live, three things must happen first:
- **BYU's international student office confirms** that the founders can sell a trip pass.
  Until then, any payment is a fully refundable deposit toward a pass, or the pilot is free.
- **A Shanghai culture-and-tourism lawyer answers this question:** "Does a US platform that
  sells travelers a trip pass (setup help, chat support and a match with an unpaid language
  partner) count as running a travel agency, or as the hosts guiding?" If the answer is yes,
  make the pilot free or take the match out of what the pass sells.
- **A host code of conduct and a short written agreement** are in place: language exchange and
  cultural exchange, no time-based pay, the Mode A rules above, no sensitive sites or political
  topics, no proselytizing, and an emergency contact process. Travelers must carry travel
  insurance and sign a waiver.

**What changes if this is adopted:**
- The prototype stops showing hourly or daily host prices and shows one trip-pass price
  instead, listing what's included. That needs a new spec.
- Sessions offer two things instead of holding a host day: "a $10 refundable deposit toward a
  Shanghai trip pass" and "a $20 pre-trip video call with a Shanghai local"
  (`discovery/PengPal/interview-guide-v2.md`).
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
2. What does the trip pass cost, and is the pilot free? The only price evidence is for a day
   rate ($40 half day), so the pass price has to be tested on its own.
3. When do we approach a licensed Shanghai agency, and who owns that?

## What would change our mind

- **Lawyer:** if the lawyer says selling a pass that includes the match makes PengPal an
  unlicensed agency, make the pilot free or move straight to option 3.
- **Host supply:** if fewer than 3 hosts agree to unpaid Mode A, look at option 3 or 4 instead.
- **Traveler demand:** if fewer than 4 of 8 travelers commit to either offer (a refundable
  deposit toward a trip pass, or a paid remote call), the model we can legally run isn't proven,
  and paid days only work through an agency (option 3). If most commit to the call but not the
  pass, lead with calls and rethink what the pass includes.
- **Agency partner:** if a licensed Shanghai agency agrees to dispatch PengPal hosts, paid days
  move to option 3 and Mode A is no longer needed for them.
