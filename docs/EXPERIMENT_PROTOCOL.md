# Experiment Protocol

## Purpose

Generate multiple market-story and visual candidates for a real product, deploy them together, and let the human owner compare rendered outcomes.

The process is intentionally comparative. The goal is to learn which research, narrative, brand, and rendering approaches produce work the owner actually wants to feature.

## Subject intake

For each subject:

1. Read README/PDD/architecture and current status.
2. Search PRs/issues/knowledge packs/transcripts for real incidents that explain why the project exists.
3. Identify public-safe evidence.
4. Write a non-marketing product truth statement.
5. Identify primary and secondary audiences.

## Market research

Research:

- direct competitors;
- substitutes/manual workflows;
- adjacent products that solve a similar emotional job;
- category language and overused claims;
- current market timing;
- external quantitative/research evidence.

For major brand exploration, collect at least 20 useful references across direct and adjacent categories.

## Positioning set

Produce at least three candidate positioning angles.

For each:

- target audience;
- human pain or aspiration;
- existing alternative;
- market gap;
- why now;
- product insight;
- evidence that supports the story;
- what the angle risks overstating.

Choose the strongest framing for each visual candidate, but keep the underlying product truth fixed.

## Candidate minimum

For the initial PAM and Research Assurance experiment, each subject gets at least three pages:

1. **Native HTML control** — high-quality static HTML/CSS/JS with no framework dependency.
2. **Alternate 2D direction** — materially different visual and narrative treatment, informed by one or more OSS workflows/references.
3. **Three.js direction** — 3D used to embody the product mechanism, with semantic HTML fallback.

Additional candidates are allowed when they test a meaningfully different idea.

## Gallery

Deploy to Design Bakery under a direct, non-homepage route:

`/experiments/fluffy-system/`

Requirements:

- `noindex,nofollow` metadata;
- no sitemap entry;
- no homepage/project-card link;
- cards show subject, direction, renderer, and experiment notes;
- owner can open each candidate full-screen;
- candidate pages link back to the gallery;
- gallery makes `reject all` an explicit valid outcome.

## Review questions

The human owner should be able to answer:

- Do I understand the problem in the first screen?
- Does the page sound like it understands the target person?
- Is the market gap credible?
- Do numbers/research add trust rather than clutter?
- Does the product feel innovative rather than bureaucratic?
- Does the visual world fit this product specifically?
- Is the page memorable after closing it?
- Would I show this to a target user, founder, investor, or hiring manager?
- Which pieces should be kept, combined, changed, or thrown away?

## Selection

Gallery inclusion is experiment status only.

After owner feedback:

- selected candidate may be refined;
- ideas from multiple candidates may be combined;
- rejected candidates remain unfeatured or may be deleted;
- homepage/featured-project integration occurs only on explicit instruction.
