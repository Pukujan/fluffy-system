# Fluffy playbook

This is the execution order for a full product-marketing run.

The default output is **one deeply finished primary page per product/audience**, with one optional experimental renderer when it adds meaning. Strategy can branch cheaply. Finished pages should not.

Read `docs/FOCUSED_GENERATION.md` before rendering.

## 1. Product truth

Read primary material until you can answer in plain language:

- What does the product help somebody do?
- What event, failure, frustration, or opportunity caused it to exist?
- Who feels that problem first?
- What does the product currently do in reality?
- What is still a hypothesis or future direction?
- What real incident best demonstrates the problem?

Prefer the incident over architecture as the seed for the story.

Keep a working note:

```text
PRODUCT:
AUDIENCE HYPOTHESIS:
HUMAN MOMENT:
CURRENT ALTERNATIVE:
PRODUCT CHANGE:
REAL PROOF:
NON-CLAIMS:
```

## 2. Buyer-language research

Search outside the repo.

Look for phrases, complaints, tradeoffs, buying triggers, and desired outcomes in practitioner communities, product reviews, GitHub issues, support threads, conference talks, Reddit, Hacker News, and forums.

Collect patterns rather than one dramatic quote.

Write 8 to 15 buyer-language calibration lines and summarize:

```text
BEFORE THE PRODUCT:
CURRENT WORKAROUND:
FRUSTRATION:
DESIRED PROGRESS:
```

## 3. Market gap

Research direct products and the status quo.

The real competitor may be a spreadsheet, ChatGPT prompt, manual review, consultant, internal playbook, existing workflow, or doing nothing.

For each serious alternative, record:

- what it does well;
- why buyers choose it;
- where it leaves this audience dissatisfied;
- switching cost;
- claims Fluffy should avoid because the alternative already owns them.

The gap should be one sentence a buyer can understand.

## 4. Quantitative support

Use market numbers when they change the reader's sense of scale.

Prefer peer-reviewed research, official surveys with sample information, respected market research, and transparent first-party data.

Record source, date, sample, scope, and the exact fact intended for the page.

One memorable number often beats a wall of statistics.

## 5. Positioning exploration

Create at least three **compact strategy options**, not three finished pages.

For each:

```text
ANGLE:
WHO:
MOMENT OF PAIN:
STATUS QUO:
WHY IT BREAKS:
PRODUCT CHANGE:
WHY NOW:
PROOF:
OVERCLAIM TO AVOID:
```

Choose the strongest commercial thesis for the requested audience before writing the main page.

## 6. Brand research

Run `research/BRAND_RESEARCH.md`.

For substantial work, analyze at least 20 useful references across direct competitors, adjacent categories, editorial storytelling, interaction, motion, and a few non-software references.

Develop at least three **brand territories on paper**. Describe emotion, visual metaphor, typography, composition, product visualization, motion, and anti-goals.

Select one territory for the primary render. Do not render all three simply because they exist.

## 7. Story spine

Write the page as a sequence of reader realizations.

A useful test:

```text
I recognize this situation.
I understand why it matters now.
I see the limitation in what I use today.
I understand what this product changes.
I can see it doing that.
I trust the proof enough to keep paying attention.
I know the next action.
```

Read only the headlines. They should tell a story rather than expose a generated outline.

## 8. First copy draft

Write freely once.

Then run `copy/HUMAN_MARKETING.md` as a separate editing job.

The first fluent draft is raw material.

## 9. Product demonstration

Show the product changing something.

Prefer an actual workflow, real before/after state, concrete artifact, annotated real example, or a simulation grounded in real behavior.

Avoid generic abstract hero graphics when the product has something more specific to show.

## 10. Focused HTML generation

Run `docs/FOCUSED_GENERATION.md`.

Generate one complete page from the chosen positioning and brand territory.

Treat it as the only deliverable during the pass. Review and repair:

- first-screen comprehension;
- human voice;
- commercial story;
- typography;
- spacing and hierarchy;
- visual specificity;
- source treatment;
- interaction;
- mobile layout;
- accessibility;
- page ending and CTA.

Only after that review can a second full candidate begin.

A later candidate gets a fresh creative brief and should not automatically inherit the first page's layout, hero syntax, section order, component shapes, palette, type, or CTA wording.

## 11. Optional experimental renderer

One experimental page may be added by default when the medium tests a real idea.

For Three.js, state the spatial thesis before coding. Example:

> Product, buyer, market, proof, and brand begin scattered and physically align as the market story becomes coherent.

Three.js must preserve semantic HTML, usable CTAs, reduced-motion behavior, touch usability, and a soft failure path.

Decorative particles are not a concept.

## 12. HTML quality

Native HTML/CSS/JS is the baseline renderer.

Requirements:

- semantic HTML;
- responsive layout;
- keyboard-visible focus;
- reasonable contrast;
- reduced-motion support;
- touch-safe interactions;
- graceful third-party-script failure;
- fast first content paint where practical;
- real source and CTA links.

## 13. Presentation

A deck is a separate persuasion artifact.

Compress the same truth into one main idea per screen. Do not split website sections into slides mechanically.

HTML decks should support visible navigation, keyboard, swipe, progress, and mobile-safe type.

## 14. Evidence surface

When detailed provenance matters, place it on a separate evidence page or source drawer.

The sales page should remain readable.

## 15. Gallery

Publish experimental work to an unlisted/noindex gallery that is not linked from the homepage.

A gallery may contain one deeply finished page for each product. It does not need several variants per product.

Show enough context to judge the work:

- product;
- audience / market angle;
- design thesis;
- renderer;
- full-page link.

No automated winner score.

## 16. Final self-review

Ask:

- Would the target buyer know this is for them in five seconds?
- Is there a sentence five unrelated AI startups could use unchanged?
- Did the system appear before the person had a reason to care?
- Did visual polish hide weak positioning?
- Are strong claims supported?
- Does the page have a memorable product-specific visual idea?
- Does any paragraph sound suspiciously balanced and generic?
- Would I improve this page before starting another option?

If the last answer is yes, keep working on the page.