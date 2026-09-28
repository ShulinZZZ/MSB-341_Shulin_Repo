# Spec 002: MCAT prep tracker + personalized lessons (prototype)

**Status:** Draft
**Date:** 2026-09-21

## Problem

No interview evidence yet. `discovery/` is empty and this is a builder-initiated idea. The
assumed problem: pre-med students prepping for the MCAT drown in dense textbook material
that doesn't match how they learn best, and they have no single place that shows whether
their studying is moving their score or which topics are still weak. Existing tools
(UWorld, AAMC, Kaplan, Blueprint, Anki, Khan Academy) each cover one slice.

Validate with 5+ real pre-med students (see `discovery/interviews/`) before building past
this prototype. The prototype exists to put something concrete in front of them.

## What we're building

A single-page web app, in a new folder `product/mcat/` (the habit tracker in `product/` is
left alone). Data in localStorage. Four parts:

1. **Setup:** exam date and target total score (472-528). Days-to-exam countdown.
2. **Study log:** log a session (MCAT section, topic, minutes, date). Hours this week and
   study streak.
3. **Practice scores:** log a practice exam per section (Bio/Biochem, Chem/Phys, Psych/Soc,
   CARS) with a section score (118-132). Trend per section against the target.
4. **Personalized lessons (the learning part):** the student picks a topic from a small set
   of pre-made demo lessons (3 topics, hand-written for the prototype, not generated live
   and not copied from any textbook) and views it in a format of their choice:
   - **Visual:** diagram / concept map / labeled figure of the same content
   - **Video-style:** a short narrated walkthrough (scene-by-scene slides with animation and
     browser text-to-speech; no real video rendering in the prototype)
   - **Text summary:** plain-language version for comparison
   Each lesson ends with 2-3 comprehension questions. Results update per-topic mastery.
   The student can switch formats on the same material and mark which one worked, which
   builds a per-student preference profile that sets the default format next time.

**Dashboard** ties it together: countdown, weekly hours, latest section scores vs. target,
and a "weakest topics" list (from comprehension-check accuracy and hours studied) so the
student knows what to study next.

## Out of scope

- Accounts, login, multi-device sync
- Real rendered video files (video-style = animated slides + speech in the browser)
- Live generation: no LLM, backend, or API key. Pasting/uploading your own textbook text
  (the "convert my material" flow) is the next step after interviews, not this prototype.
- A curated question bank, adaptive study plans, spaced repetition scheduling
- Score prediction (we display logged scores, we do not forecast)
- Reminders/notifications, social features, mobile app (responsive web only)

## Definition of done

- [ ] Can set an exam date and target score and see the countdown
- [ ] Can log a study session and see weekly hours and streak update
- [ ] Can log a practice score for each of the 4 sections and see the trend vs. target
- [ ] Can open each of the 3 demo lessons and switch between the visual, the video-style
      walkthrough, and the text summary of the same content
- [ ] Comprehension check results change topic mastery and the weakest-topics list
- [ ] Format preference is recorded and changes the default format on the next lesson
- [ ] Data survives a page reload (localStorage)
- [ ] Deployed to a live URL
- [ ] Validation: shown to at least 3 pre-med students; note what they'd actually use in
      `discovery/insights.md`

## Open risks

- **Content accuracy:** the demo lessons and their check questions are written by Claude
  and can be wrong, and a study tool with wrong science is worse than none. They are
  labeled "demo, unverified" in the UI and should be checked by someone with the
  background (or against a trusted source) before any student relies on them.
- **The demo fakes the core bet:** with pre-made lessons, students can't test whether
  the tool works on *their* material. Interviews should ask for that reaction explicitly.
- **"Learning styles" is a weak claim:** research does not support that matching material to
  a student's self-declared style (visual vs. auditory, etc.) improves learning. Multiple
  representations of the same idea do help. So the pitch to test in interviews is "see it
  several ways and keep what works for you," not "we detect your learning style."
- **Copyright:** the demo lessons are original text; no textbook content ships with the app.
  The paste-your-own-material flow will need a plan for this before it's built.
- **Differentiation:** the aggregation across resources is the bet, and the prototype only
  fakes it with manual logging. Manual entry may be too much friction; interviews should
  test that.
