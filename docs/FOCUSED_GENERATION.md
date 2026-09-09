# Focused candidate generation

This protocol exists because the first Fluffy bakeoffs exposed a repeatable quality failure: asking an agent to make many design options in one pass tends to produce shallow variation.

## Why batch option generation degrades quality

When the same context window is asked to produce several alternatives at once, the task changes from **finish one strong page** to **make the options visibly different**.

That creates predictable shortcuts:

- visual novelty receives more attention than typography, spacing, hierarchy, copy, and interaction detail;
- the same narrative skeleton leaks into every candidate;
- recent phrases and component ideas contaminate later variants;
- each option gets less local reasoning and fewer critique cycles;
- designs diverge at thumbnail scale while converging in section rhythm and marketing voice;
- unfinished choices survive because the agent moves on to satisfy the requested count.

The fix is process, not another design rubric.

## Default rule

**One product + one audience + one creative thesis = one focused generation pass.**

Do not generate 3 to 5 full pages in one response or one uninterrupted coding pass.

For a normal Fluffy run:

1. freeze product truth, audience, market gap, proof boundary, and chosen creative thesis;
2. generate one complete page;
3. inspect that page as if it were the only deliverable;
4. rewrite weak copy and repair hierarchy, spacing, mobile behavior, interactions, and source treatment;
5. only then start a second candidate;
6. the second candidate gets a fresh creative brief and should not reuse the first page's section structure by default.

## Candidate counts

Default output:

- **1 primary focused page** for the product and audience;
- **0 or 1 experimental renderer page** when a different medium genuinely tests the product idea, such as Three.js;
- additional candidates only when the user explicitly wants a wider bakeoff or the first candidate reveals a materially different market story worth testing.

A gallery may contain several products. That does not require several styles for each product.

## Separate strategy options from finished pages

It is cheap and useful to produce several positioning or brand territories as short research artifacts.

Example:

```text
Position A: project preflight
Position B: proof that the homework happened
Position C: continuity across agents
```

Do **not** automatically turn all three into pages.

Pick the strongest commercial angle for the requested audience, then spend the design budget on finishing it.

Likewise, three brand territories may be researched before one is rendered.

## Deep review before the next candidate

Before another page is allowed, review the current page for:

### First screen
- Is the buyer identifiable within five seconds?
- Is there a concrete pain, trigger, or aspiration?
- Does the hero say something the product can actually own?

### Copy
- Does the page contain buyer-specific nouns and situations?
- Are generic AI contrast formulas or neat slogan stacks still present?
- Does the market gap acknowledge real alternatives?
- Does the copy sound natural read aloud?

### Commercial story
- Is there a reason to care now?
- Does a real incident or product behavior make the pitch credible?
- Do external numbers change the reader's sense of scale rather than decorate the page?

### Design
- Is the type system doing real work?
- Are spacing and composition deliberate beyond the hero?
- Does the page have one or two memorable product-specific visual ideas?
- Does mobile still feel designed?
- Are interactions useful rather than ornamental?

### Evidence
- Are product proof and market research clearly different things?
- Are source links readable without turning the sales page into an audit dashboard?

If the page fails one of these, improve it before generating another option.

## Independence rule for later candidates

A later candidate should inherit:

- product truth;
- evidence boundaries;
- audience facts;
- researched market alternatives.

It should **not automatically inherit**:

- section order;
- hero syntax;
- component layout;
- palette;
- type pairing;
- visual metaphor;
- motion language;
- CTA wording.

Write a new one-paragraph creative brief before rendering the next candidate.

## Three.js rule

A 3D candidate is a separate focused pass, not a decorative variant of the 2D page.

State the spatial idea in one sentence first.

Good:
> Product, buyer, market, proof, and brand start scattered and physically align as the launch story becomes coherent.

Weak:
> Add floating particles and a rotating globe to make the page feel innovative.

Keep the core story in semantic HTML and let WebGL fail softly.

## Human review

The owner remains the final judge. The protocol only improves the quality of what reaches the gallery.

`reject all` remains valid.