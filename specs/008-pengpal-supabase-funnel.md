# Spec 008: Save prototype answers to Supabase (funnel data)

**Status:** Draft. Confirm before building.
**Date:** 2026-11-23
**Build after:** the spec 007 contact form is live and has its Formspree ID, so this doesn't compete
with the Nov 28 milestone.

## Problem

Spec 007 tells us **who** wants in. It doesn't tell us **what strangers do** in the prototype. Right
now every answer (traveler type, city, the host they pick, what they choose on the "Make it real"
screen, why they say "Not yet") stays in that visitor's localStorage, so we never see it.

That matters for Sprint 5:

- The go/drop bar (decision 006) is about paying. The commit screen's choice (deposit / intro /
  not yet) and the "What would make you say yes?" answer are the closest thing to a pay signal we
  get from people we never talk to.
- Sprint 4's tallies contradicted each other (`discovery/PengPal/findings-sprint-4.md`). Counts
  that come from a table, not from memory, fix that for anything that happens on the page.
- We can't tell whether strangers drop off at the host list, the price, or the commit screen.

A working version already exists: the product lead built it as a separate copy of the prototype,
now in `drafts/pengpal-supabase/` (gitignored). It needs to be merged into the real prototype, not
deployed as a second site.

## What we're building

The live prototype in `product/pengpal/` sends a snapshot of each visitor's answers to a
**Supabase** table. Still no build step and no server of our own; Supabase is the one new service.

### 1. What gets saved

- **One row per visitor,** found by a random `session_id` kept in the visitor's localStorage.
  "Restart demo" starts a new row.
- **When:** on every screen change after onboarding (`hosts` onward). The row is overwritten each
  time, so `stage` shows the furthest screen reached.
- **Columns** (from `drafts/pengpal-supabase/supabase/schema.sql`): stage, traveler type, female-host
  preference, city, country, language, interests, host picked, booking date, duration, party size,
  commit choice, commit month, commit city, commit reason, review stars, NPS, review tags, review
  comment, created/updated time.
- **New columns, not in the draft:**
  - `channel`: the `?src=` value from the link, same as spec 007, or "direct". This lets us split
    strangers (e.g. `reddit-…`) from our own facilitated sessions.
  - `page_version`: "spec-008", so later changes to the prototype don't get mixed into old rows.
- **Not saved:** names, emails, the contact form's answers, the chat, the checklist.

### 2. How it's locked down (keep the draft's design)

- Row level security on, with no policies. The public key can't read or write the table directly.
- The only public entry point is `save_session()`. It checks every field and caps lengths
  (1,000 characters for free text, 20 items in a list), and it rejects unknown stages.
- The browser uses only the public "anon"/"publishable" key, in `config.js`. The `service_role`
  key never goes in the repo (see the never-commit-env-files rule).
- **Fire and forget:** if Supabase isn't set up, is paused, or fails, the prototype keeps working
  exactly as now. The visitor never sees an error.

### 3. Telling visitors

The prototype now saves what people type, including free text, so it must say so. A line under the
welcome screen's buttons, and in the desktop side panel:

> "We save your answers anonymously to improve PengPal. No names or emails."

The two free-text boxes ("What would make you say yes?" and the review comment) get the placeholder
hint "Please don't include your name or contact details."

### 4. Files

| File | Change |
|---|---|
| `product/pengpal/app.js` | Add `sessionId` to state, `newSessionId()` and `sync()` from the draft, call `sync()` in `go()`, send `channel` and `page_version` |
| `product/pengpal/config.js` | New, from the draft: `supabaseUrl`, `supabaseKey` (public key only) |
| `product/pengpal/index.html` | Load `config.js` before `hosts-data.js`; the notice line in the side panel |
| `product/pengpal/supabase/schema.sql` | From the draft, plus the two new columns and their checks |

The draft's own `index.html`, `style.css`, `hosts-data.js` and photos are identical to the live ones
and are not copied. Its README's "deploy from `/docs`" steps don't apply: the repo serves from root.
After the merge, `drafts/pengpal-supabase/` can be deleted.

### 5. Reading the data

- In Supabase: **Table Editor › sessions**, or the SQL Editor queries in the draft README (how far
  people got; what they chose on the commit screen), filtered by `channel`.
- **Weekly, a counts-only summary goes in `discovery/PengPal/funnel.md`:** rows per stage, commit
  choices, by channel. No raw rows and no free-text quotes that could identify someone.
- Free-text answers are read in Supabase and paraphrased into findings, the same way T-notes are.

## Out of scope

- **Linking a funnel row to a contact-form sign-up.** It would make the "anonymous" row
  identifiable once someone leaves their email. Revisit only if we need it, with its own notice.
- **Counting visits to the welcome and onboarding screens.** Nothing is saved before `hosts`.
  The draft rejects those stages; keep it that way for now.
- **Analytics tools** (Google Analytics, Plausible etc.), cookies, and tracking pixels.
- **A history of each visitor's path.** One row, overwritten, is enough to see where people stop.
- **Rate limiting or spam protection** beyond the field checks. Fine at our traffic.
- **Upgrading from Supabase's free plan.**
- **Payments.** Still requested by hand (decision 006).

## Decision needed (write decision 007 when this spec is confirmed)

This changes the stack in CLAUDE.md ("no backend, data in localStorage") and adds a service, so it
needs a numbered decision. Options to record:

- **Supabase, via one locked-down function** (proposed): free, already built, nothing to host.
- **Keep localStorage only:** no new service, but we stay blind to what strangers do.
- **Formspree for funnel data too:** one service instead of two, but it's built for one-off form
  sends, not a row updated on every screen, and the free plan's 50 a month would run out.
- **An analytics tool:** counts clicks, not answers. Adds cookies and a tracker for little gain.

## Known risks

- **Free Supabase projects pause after 7 days with no activity.** Saves then fail quietly, and the
  demo hides it. During Sprint 5 the product lead opens the Supabase dashboard at least every
  Monday and Friday, and restores the project if it's paused.
- **Facilitated sessions are mixed in with strangers.** Use a `?src=session` link in our own
  sessions so `channel` separates them.
- **Our own test clicks.** Use `?src=test` when testing, and leave those rows out of the tallies.

## Setup the product lead does (I can't do this part)

1. Create a free Supabase project. In **SQL Editor › New query**, paste
   `product/pengpal/supabase/schema.sql` and click **Run**.
2. From **Project Settings › API**, copy the Project URL and the public **anon/publishable** key into
   `config.js`. Never the `service_role` or secret key.

## Definition of done

- [ ] Decision 007 committed, and the CLAUDE.md stack line updated
- [ ] Going past onboarding creates one row in `sessions`; each later screen updates it; "Restart
      demo" starts a new row
- [ ] `channel` and `page_version` are saved; a `?src=test` visit shows up as `test`
- [ ] With an empty `config.js`, or Supabase unreachable, the prototype works as before with no
      visible error
- [ ] The public key can't read the table (a direct `select` with it returns nothing or an error)
- [ ] The notice shows on the welcome screen and in the side panel; the free-text hints are in place
- [ ] The spec 007 contact form still works, and still stores only `joined: true` in localStorage
- [ ] Deployed at https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/
- [ ] `discovery/PengPal/funnel.md` exists with the first weekly counts, with no personal details
- [ ] `drafts/pengpal-supabase/` deleted after the merge
