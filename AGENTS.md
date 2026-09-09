# Fluffy agent contract

Fluffy turns a real product repo into buyer-facing marketing directions and working pages.

The human owner judges taste, positioning, and which candidate survives. Your job is to do enough research and creative work that the owner is choosing among strong outputs instead of repairing generic AI copy.

## Read before starting

1. `PLAYBOOK.md`
2. `copy/HUMAN_MARKETING.md`
3. `research/MARKET_AND_AUDIENCE.md`
4. `research/BRAND_RESEARCH.md`
5. `design/VISUAL_MEDIA_STRATEGY.md`
6. `examples/COPY_TRANSFORMATIONS.md`
7. `docs/FOCUSED_GENERATION.md`

## Finish the whole run

When the user asks for a Fluffy run, complete the research, positioning, brand exploration, media direction, copy, HTML, QA, and gallery publication in one working session when tools allow it.

Do not stop after a strategy memo and ask the owner to pick a direction unless they explicitly requested a workshop. The default review surface is rendered work.

A completed run does **not** require several full pages for the same product. The default is one deeply finished primary page plus, when useful, one separate experimental renderer such as Three.js.

## Phase 1: understand the product

Read primary sources before writing marketing:

- README and product definition
- architecture and design docs
- current status
- PRs and issues
- real incidents and failures
- usage or transcripts when available
- benchmark or experiment results
- explicit limitations and non-claims

Write a private one-paragraph product truth statement using plain language. If you cannot explain why a person would care, keep investigating.

## Phase 2: understand the buyer and market

Research the live market. Do not invent a persona from the repo alone.

For a substantial page, gather at minimum:

- the primary buyer/user job
- the situation that makes the problem urgent
- current alternatives, including status quo/manual workflow
- at least 2 sources showing how people in the audience describe the pain or desired outcome
- at least 2 credible quantitative or research sources that make the market pain concrete when suitable data exists
- direct competitors and adjacent alternatives
- category language already overused by competitors
- a credible `why now`

Reddit, Hacker News, product reviews, forums, support threads, GitHub issues, and practitioner communities are useful for language and lived experience. Treat community comments as qualitative signals, not population statistics.

External research supports the market problem. It does not prove the product works.

## Phase 3: positioning before copy

Create at least 3 positioning angles as compact strategy notes. Each must state:

- audience
- job or desired progress
- current alternative
- specific pain in that alternative
- product difference
- customer consequence
- why now
- evidence that makes the angle believable
- risk of overclaiming

These are cheap strategic options. Do not automatically build one page for every positioning angle.

Choose the strongest commercial thesis for the requested audience before the main design pass.

Avoid category claims that five competitors can already say unchanged.

## Phase 4: brand research before design

For a major new visual direction, inspect at least 20 live references.

Split the set across:

- direct category
- adjacent category with a similar emotional job
- strong editorial/product storytelling
- interaction or motion references
- at least a few references outside software for visual freshness

Record what each reference teaches. Do not create a link dump.

Develop at least 3 brand territories as compact research artifacts. Each direction must differ in:

- emotional temperature
- visual metaphor
- layout/composition model
- typography category
- image/illustration/product-demo treatment
- motion language
- use of depth/3D

Do not render all three automatically. Select the territory that best serves the product story, then give it a full design pass.

## Phase 4.5: choose the visual medium

Run `design/VISUAL_MEDIA_STRATEGY.md` after the brand direction is selected.

Decide what should carry the visual story:

- typography/layout
- product UI/screenshots
- custom SVG/vector
- generated imagery
- photography
- Three.js/WebGL
- video/motion

Choose one dominant medium and at most one or two supporting media for the primary page.

Generated imagery is appropriate when the brand needs atmosphere, a character, a human scene, editorial art, or a visual world that code alone would not create well. Give the image a specific job, crop/compress it for the real layout, keep essential copy in HTML, and use vector/HTML for precise interaction around it.

Custom SVG is preferred when the product has a mechanism, route, state model, instrument, or relationship that should become a repeatable brand asset.

Three.js is appropriate when depth or spatial transformation adds understanding. It is not the default visual filler.

## Phase 5: write like someone who knows the customer

Follow `copy/HUMAN_MARKETING.md`.

Public copy must:

- start from a recognizable situation, buyer thought, consequence, or aspiration
- use concrete nouns from the real product and market
- explain the market gap in buyer terms
- state what the product changes in practical terms
- use numbers only when they earn attention
- keep proof close to the claim
- sound natural when read aloud

Public copy must not use:

- `not X, but Y`
- `not just X, but Y`
- `more than just`
- `it's not about X, it's about Y`
- `in today's fast-paced...`
- `at its core...`
- `whether you're A, B, or C...`
- `unlock`, `empower`, `revolutionize`, `seamlessly`, `holistic`, `game-changing`, `cutting-edge`
- repetitive three-part slogan structures
- em dash characters
- fake quotes or fake customer stories
- audit language as the emotional center of a sales page

Do not solve AI-sounding prose by adding slang, lower-case text, random fragments, or fake imperfections. Fix the underlying structure, specificity, point of view, and rhythm.

## Phase 6: generate one focused page

Native HTML/CSS/JS is the default because it is fast and gives the agent broad creative freedom.

Follow `docs/FOCUSED_GENERATION.md`.

The normal sequence is:

1. freeze the selected audience, positioning, proof boundary, creative thesis, and media strategy;
2. generate one complete page;
3. critique the page as if it were the only deliverable;
4. fix weak copy, typography, spacing, hierarchy, mobile layout, source treatment, imagery/vector treatment, and interactions;
5. only after that page is strong may another full candidate begin.

A later candidate must receive a fresh creative brief. It may inherit product truth and market research. It should not automatically inherit section order, hero syntax, components, palette, type, visual metaphor, media mix, or CTA wording.

Do not satisfy a request for “choices” by generating several shallow pages in parallel.

## Optional experimental renderer

At most one experimental renderer is included by default when it adds meaning.

Three.js is appropriate when the product has a spatial, transformational, network, simulation, or object-based story that benefits from it.

A Three.js page must keep semantic HTML for all essential information and CTAs. WebGL is progressive enhancement.

It must:

- stay useful if the module import fails
- respect `prefers-reduced-motion`
- remain usable on touch devices
- avoid unreadable text inside canvas scenes
- use 3D to explain the product or brand idea
- avoid decorative particle fields as the main concept

## Phase 7: run the de-pattern pass

Before publish, inspect the copy as structure, not only vocabulary.

Look for:

- identical paragraph lengths
- headline after headline built from the same rhetorical contrast
- every section ending in a slogan
- excessive questions
- over-neat logical symmetry
- repeated colon constructions
- repeated three-item lists
- abstract claims without product-specific nouns
- too many transitions such as `so`, `then`, `that means`, `the result`

Rewrite until the page has natural variation in sentence length, paragraph length, rhetorical move, and information density.

## Phase 8: buyer test

A strong candidate should let a first-time visitor answer within seconds:

- What is this?
- Who is it for?
- What problem does it help with?
- Why is that problem worth caring about?

By the end of the page they should also understand:

- what they do today instead
- why this approach is different enough to consider
- what proof exists
- what remains unproven when relevant
- what action to take next

## Phase 9: gallery review

Publish experimental candidate(s) to an unlisted/noindex gallery when the target repo supports it.

A gallery can contain one focused page per product. It does not need to contain several design variants for every product.

The gallery is a human taste surface. It may show direction notes, but do not bias the owner with an automated winner score.

The owner can keep one, combine pieces, request another round, or reject every candidate.

Never promote a candidate to a featured homepage without explicit owner approval.

## Source discipline

Keep these separate internally:

- direct product evidence
- self-report
- interpretation
- external research
- measured product result
- unknown

Strong sales language is welcome. Invented proof is not.
