# Sprint 3 Review

**Window:** 2026-10-14 to 2026-10-26
**Sessions reviewed:** 4 across 2 projects (Claude Code 4, Codex 0; 2 sessions excluded at your request)
**Not visible to this review:** traveler interviews and meetings, and Claude/ChatGPT in a browser (reported by you)

## Where the work lives

- **Repo:** ShulinZZZ/MSB-341_Shulin_Repo, public, shared with sdmurff and the TA. 6 commits in
  the window, on 3 days (Oct 14, 19, 20).
  - 2026-10-14 Sprint 3 plan; switch README and CLAUDE.md focus to PengPal
  - 2026-10-14 Add Sprint 1 demo recording and transcript
  - 2026-10-14 Ignore private Feedback folder
  - 2026-10-19 Add PengPal traveler interview guide and session notes template
  - 2026-10-20 PengPal prototype: host photos and $24 visit / $40 half-day pricing
  - 2026-10-20 Rename PengPal's Chinese name from 朋友派 to 朋派
- **Not committed:** `discovery/PengPal/Interviews/PengPal Interview Guide.docx`,
  `discovery/PengPal/PengPal Interview Flyer.pdf`, `discovery/PengPal/PengPal_PULL_Worksheet.docx`
  (all dated Oct 21).
- **Live:** PengPal prototype at https://shulinzzz.github.io/MSB-341_Shulin_Repo/product/pengpal/

## When you worked

7 of 14 days had session activity (Oct 15, 19, 20, 21, 23, 24, 26), with 32 prompts. The work
came in three bursts: sprint planning and repo setup at the start (Oct 14–15, 14 prompts), the
interview guide and prototype changes mid-sprint (Oct 19–21), and course-book study (Oct 23–24).
No sessions or commits on Oct 16–18, Oct 22 or Oct 25. The last commit is Oct 20.

## Where you got stuck

- **Host photos and new prices (Oct 20–21).** The first price request ("a bit lower for a half
  day trip and $24 per visit") took two rounds of clarifying questions, because the first
  answers contradicted each other. It ended as three options: $24 visit, $40 half day,
  $80 full day. For the photos, Unsplash blocked downloads and Pexels needed an API key. That
  ended with free Pexels stock photos found through web search. Both changes were pushed the
  same night.
- **An extra change slipped into a commit (Oct 21).** The photo/price commit staged the whole
  prototype folder. It picked up a reformatted `index.html` with the Chinese name changed. You
  then made 朋派 the name everywhere and pushed it in a follow-up commit.

No other runs of retries or repeated errors show up in the sessions.

## What took the most time

By prompt volume, sprint planning and repo setup on Oct 14–15 took the most (14 of 32 prompts).
That included the plan interview, switching the README and CLAUDE.md to PengPal, and sorting
out what stays private. Next came the prototype changes on Oct 20–21 (photos, pricing, name,
deploy), with the most tool use of the sprint (mostly shell commands and web lookups). Then the
interview guide and weekly plan on Oct 19–20, and two /learn sessions plus midterm prep on
Oct 23–24.

## Learning sessions

None logged this sprint. The sessions show two /learn sessions started on Oct 24 ("The loop: how
this course works" and "Blast radius"), but no log file for either is in `learning/`.

## Axis

**Discovery.** The committed and uncommitted work is mostly about testing with travelers: the
interview guide, the session notes template, a recruiting flyer, a PULL worksheet, and
interviews you reported doing outside these sessions. Design is a close second, from the
prototype changes on Oct 20–21.

## Against your plan

**Goal was:** Test the PengPal prototype with 10 potential travelers.

The repo shows the setup for the test, not the test itself. Against the five "done looks like"
items:
- **Prototype updated for find host / video intro / book:** done, plus photos and new prices,
  live Oct 20.
- **10 travelers tested the prototype:** you report interviews outside these sessions, but none
  are recorded in the repo.
- **One anonymized notes file per session (T01–T10):** none. Only the T00 template exists.
- **Same pay question and waitlist invite, answers recorded:** no recorded answers.
- **Findings write-up on willingness to pay and price:** not written.

**Update 2026-10-26, after the retro:** the ten session notes, with each pay answer and waitlist
answer (`discovery/PengPal/Interviews/T01.md`–`T10.md`), and the findings write-up
(`discovery/PengPal/findings.md`) were committed after this report was written.

---

## Your retro

*The builder's own answers, recorded word for word in step 7, then edited for spelling and grammar at the builder's request on 2026-10-26. Answer 1 was rewritten later that day at the builder's request, after the interview notes and findings were committed.*

**Did you hit the goal?** Yes. I finished the PengPal prototype, where travelers can find a local host, schedule an introductory video call, and book a trip. I interviewed 10 potential travelers and had them test it, with one notes file per session (T01–T10). I asked every traveler the same pay question and invited them to the waitlist: all 10 said they'd pay, and 8 joined. The findings write-up (discovery/PengPal/findings.md) concludes that $40 for a half day held up best, and that the app needs options for different traveler types.

**What did the report show you?** Travelers want more options for places to go, and some want to book more than one day. Some also want the app to show the trips they've booked, and a message tab for keeping in touch with their host.

**If the plan changed, why?** (skipped: the plan did not change)

**Actual difficulty:** 2, one lower than the 3 I predicted. Running the interviews and updating the prototype based on the feedback was not too hard.

**What will you change next sprint?** I'll make a more structured sprint plan, with a specific quota to hit each week.
