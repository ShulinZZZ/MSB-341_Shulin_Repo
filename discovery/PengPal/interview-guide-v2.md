# PengPal session script v2 (Sprint 4)

**Goal:** Find out whether travelers will **commit money**, not just say they'd pay. Every
session ends with a real ask for one of the two offers in decision 005: a fully refundable $10
deposit toward a **Shanghai trip pass**, or a **$20 pre-trip video call** with a Shanghai local
(see `sprints/sprint-4-plan.md`, `decisions/004-…`, `decisions/005-…`).

**Updated Nov 9 for decision 005.** The ask no longer holds a host day, because paid in-person
days with unlicensed hosts are out. The prototype still shows day prices, so the walkthrough and
the pay question (sections 3–4) stay as they were, and answers still compare with Sprint 3.
Section 4 adds a trip-pass price question, and section 5 is the new ask.
**Length:** ~25 min. Video call with screen share, or in person on their phone.
**Prototype:** https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/ (v2, spec 005)
**Notes:** one file per session from `T00-notes-template.md` → `T11.md` … `T18.md`. No real
names, emails, phone numbers or payment handles in the repo.

**What counts as committed:** the money actually arrives, either the $10 pass deposit or the $20
call deposit. Saying "yes, send it" is recorded separately. Picking "Hold my trip date" in the
app is a third, weaker signal.

Ground rules for me:
- Ask about what they **have done**, not what they **would** do.
- During the walkthrough, **don't help or explain**. If they get stuck: "What would you expect
  to happen?" and wait.
- **Don't sell the deposit.** Ask once, plainly, and accept the answer. A pushed yes is worth
  less than an honest no.
- Write down their exact words for the pay question and the deposit answer.
- **Say "local friend", not "guide".** Never say guide, tour, "show you around" or "take you
  sightseeing" about hosts (decision 005).
- **Until BYU's international student office answers the F-1 question, every payment is fully
  refundable,** the $20 call included. Say so when you ask.

Before each session:
- [ ] Open the prototype and tap **Restart demo**, so they start clean
- [ ] Have both payment requests ready to send (Venmo / PayPal / whatever you'll use):
      $10 "PengPal trip pass deposit (refundable)" and $20 "PengPal pre-trip call (refundable)"
- [ ] Check whether a real Shanghai host can take a call in the next 2 weeks. If not, skip the
      call offer in section 5 and note "call not offered" in the T-file.

---

## 0. Screener and who to invite

New people must say yes to both:
1. Are you planning a trip to mainland China in the next 12 months?
2. Would it be your first time in mainland China?

**Returning waitlist travelers (T01–T10)** are welcome. They've seen v1, so skip section 2,
note which T-number they were, and watch whether v2 fixed what they asked for.

## 1. Intro (1 min)

> "Thanks for doing this. I'm testing an early version of PengPal, a service that matches
> first-time visitors to China with a young local friend who helps with payments, transport and food.
> There are no right answers, and honest criticism helps me most. OK if I take notes? I won't
> record your name."

## 2. Their trip (4 min) — *new people only, before showing anything*

1. Tell me about the trip. Where, when, **who's going with you**, and why China?
2. What part are you least sure how to handle?
3. Have you ever paid for a guide, tour or local experience? What did you pay, and was it worth it?

## 3. Prototype walkthrough (10 min)

> "Here's the prototype. The hosts are sample profiles and nothing gets charged. Please think
> out loud: what you're looking at, what you expect, what's confusing."

| # | Task to read aloud | Screens | Watch for |
|---|---|---|---|
| 1 | "Set it up for your trip." | About your trip | Which traveler type they pick. Does any type fit them, or do they hesitate between two? Solo: do they use the female-host toggle? |
| — | **Before they open a profile:** "What would you expect a half day with one of these people to cost, for your whole group?" | Your matches | Their number *before* they see prices |
| 2 | "Pick someone you'd want to spend a day with." | Matches → profile | Do they notice the type badge ("Great with families") and "Experienced with"? Does the order feel right for them? |
| 3 | "Set up a call with them." | Video intro | Quick. Skip if short on time. |
| 4 | "Book a day with them." | Book your day | Which length they pick. Do they understand the total includes the fee and covers the group? Any surprise at the price? |
| 5 | "Keep going." | Make it real | **Don't explain this screen.** Note what they pick (hold date / not yet) and what they say while deciding. If "not yet", note what they type. |

Stop the walkthrough after task 5. The rest of the flow was tested in Sprint 3.

After the walkthrough:
1. Did the hosts feel picked for someone like you? Why or why not?
2. Was the price clear? What do you think the $46 covers?
3. What would stop you from booking this?

## 4. The pay question (4 min) — *same wording as Sprint 3, so answers compare*

> **"Would you pay for this, and how much?"**

Write their answer word for word. Then:
1. "For a 2-hour visit, a half day or a full day?"
2. "The prices you saw were $27.60 for a 2-hour visit, $46 for a half day and $92 for a full
   day, for your whole group, fee included. Is that too cheap, about right, getting
   expensive, or too expensive?"
3. "At what price would you stop considering it?"

Then the new question, *new in the Nov 9 update*:

> "The first version we're actually launching is a bit different. It's a **Shanghai trip pass**:
> before you go, we help you set up Alipay, your apps, an eSIM and the metro. We match you with a
> local friend your age to meet up with, someone who lived in your country. And you can message
> us for help during the trip."

4. "What would you expect to pay for that, for your whole trip?" *(Write their number before
   you say anything else. No pass price is set yet: open question 2 in decision 005.)*
5. "Which part of that matters most to you: the setup help, the local friend or the help
   during the trip?"

## 5. The commitment ask (3 min) — *ask this the same way every time*

Ask for the pass first. Offer the call only if they don't say yes to the pass, and only if a
real host is available (see Before each session).

> **"We're starting with real travelers now. To save you a place for a Shanghai trip pass, we
> take a $10 deposit that goes toward the pass. It's fully refundable: if we can't match you,
> or you change your mind, you get it back. Would you like me to send you the request now?"**

Write their answer word for word.

- **Yes:** send the $10 request while you're still talking, or within the hour. Note trip month
  and city. Don't wait to see if it's paid; check later and record it in the note.
- **Not now / maybe / no:** don't push. Ask: "What would make it a yes?" or "What's the main
  reason?" Then offer the call:
  > **"Something smaller, then: a 30-minute video call with a Shanghai local before your trip.
  > They'd help you plan and answer your questions. It's $20, fully refundable if it isn't
  > useful. Would you like that?"**
  - **Yes:** send the $20 request and book a time with the host. Note it.
  - **No:** offer the free fallback:
    > "Would you like me to put you down for a specific trip date on the waitlist instead? No
    > money, I'd just follow up closer to then."

If they ask what happens to the money: the pass deposit is held until you're matched for your
dates, and then it counts toward the pass. If there's no match, or you cancel, it's refunded in
full. The call fee goes to the local friend after the call, unless you ask for a refund.
(Decision 005: no paid in-person day in China is being sold.)

If they ask whether the local friend is paid: "No. They're students and young locals who want
to practice English and meet people from abroad. The pass pays for our setup help and support."

## 6. Wrap-up (1 min)

1. "Do you know anyone else planning a first trip to China I could talk to?"
2. "Anything I should have asked but didn't?"

Thank them.

---

## After each session (10 min, same day)

1. Fill in `T1X.md` from the template while it's fresh.
2. Log any payment details (name, handle, amount, date) **outside the repo**, in a private
   sheet, so you can refund. In the repo, record only paid yes/no and the date.
3. 48 hours later, check whether unpaid requests were paid, and update the note.
4. If anyone asks for a refund, refund it the same day and note "refunded" in the T-file.
5. If someone booked a call: after it happens, pay the host a lump sum with a written note,
   and tell them it's taxable income (`legal.md` section 2). Record only "call held: yes / no"
   in the T-file.
