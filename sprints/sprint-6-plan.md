# Sprint 6 Plan

**Goal:** Live by Dec 5: a stranger can find, book and pay $20 without contacting us. By Dec 11:
15 sign-ups and at least 2 paid calls from strangers, and every non-buyer asked what they'd use
instead.

**Why this:** Strangers paying proves real demand beyond our own network.

**Done looks like:**
- The public URL, linked from the Company brain. A reviewer can open it and walk through to the
  payment step.
- One test booking by someone outside the team, done on the live site with no help from us. The
  Stripe record and a short note go in GitHub: who tested it (by ID), the date, and whether they
  got stuck.
- Sign-ups are stored in the Supabase table, each with a timestamp and a source field (which
  channel or DM it came from). On Dec 11, export it to a CSV and commit it to GitHub with names
  and emails removed, using IDs like S01, S02 (the way T19 and H1 are used).
- Each paid call from a stranger has its Stripe record and a note in GitHub: ID, date, host, and
  whether the call was delivered.
- A stranger means someone with no contact with anyone on the team before they signed up. The
  source field shows the channel they came from, so a reviewer can check it.

**Predicted difficulty:** 3
