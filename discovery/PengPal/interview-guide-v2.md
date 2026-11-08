# PengPal session script v2 (Sprint 4)

**Goal:** Find out whether travelers will **commit money**, not just say they'd pay. Every
session ends with a real ask: a fully refundable $10 deposit to hold a trip date (see
`sprints/sprint-4-plan.md`, `decisions/004-no-paid-in-person-days-with-unlicensed-hosts.md`).
**Length:** ~25 min. Video call with screen share, or in person on their phone.
**Prototype:** https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/ (v2, spec 005)
**Notes:** one file per session from `T00-notes-template.md` → `T11.md` … `T18.md`. No real
names, emails, phone numbers or payment handles in the repo.

**What counts as committed:** the $10 actually arrives. Saying "yes, send it" is recorded
separately. Picking "Hold my trip date" in the app is a third, weaker signal.

Ground rules for me:
- Ask about what they **have done**, not what they **would** do.
- During the walkthrough, **don't help or explain**. If they get stuck: "What would you expect
  to happen?" and wait.
- **Don't sell the deposit.** Ask once, plainly, and accept the answer. A pushed yes is worth
  less than an honest no.
- Write down their exact words for the pay question and the deposit answer.

Before each session:
- [ ] Open the prototype and tap **Restart demo**, so they start clean
- [ ] Have the payment request ready to send (Venmo / PayPal / whatever you'll use), $10, with
      the note "PengPal refundable trip-date deposit"

---

## 0. Screener and who to invite

New people must say yes to both:
1. Are you planning a trip to mainland China in the next 12 months?
2. Would it be your first time in mainland China?

**Returning waitlist travelers (T01–T10)** are welcome. They've seen v1, so skip section 2,
note which T-number they were, and watch whether v2 fixed what they asked for.

## 1. Intro (1 min)

> "Thanks for doing this. I'm testing an early version of PengPal, a service that matches
> first-time visitors to China with a young local who helps with payments, transport and food.
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

## 5. The commitment ask (3 min) — *ask this the same way every time*

> **"We're starting to match real travelers with hosts now. To hold a trip date, we take a
> $10 deposit. It's fully refundable: if we can't match you with a host, or you change your
> mind, you get it back. Would you like me to send you the request now?"**

Write their answer word for word.

- **Yes:** send the request while you're still talking, or within the hour. Note trip month
  and city. Don't wait to see if it's paid; check later and record it in the note.
- **Not now / maybe:** don't push. Ask: "What would make it a yes?" Then offer the fallback:
  > "Would you like me to put you down for a specific trip date on the waitlist instead? No
  > money, I'd just follow up closer to then."
- **No:** "That's really helpful. What's the main reason?"

If they ask what happens to the money: it's held until you're matched with a host for your
dates. If no match, or you cancel, it's refunded in full. (Decision 004: the deposit holds a
date or an intro call. No paid day in China is being sold.)

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
