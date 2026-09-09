# Fluffy

**Give an AI your product repo. Get a marketing story a buyer might actually care about.**

Coding agents can already produce a polished landing page in minutes. The harder part is deciding what deserves to be on that page: who the buyer is, what they are struggling with, what they use today, where the market is leaving them short, which proof matters, and what visual world makes the product feel distinct.

Fluffy gives the agent that upstream job.

You point it at the product source and the place you want the marketing to live. It researches the product, the audience, the market, real customer language, competitors, quantitative evidence, and brand references. Then it writes and renders several genuinely different marketing directions for you to judge.

The final taste call stays with you.

## Why this exists

AI has made content production cheap. Ahrefs surveyed 879 marketers in 2025 and found 87% were already using AI to help create content, with AI users publishing 42% more per month. That speed does not solve the quality problem. Research has found measurable stylistic differences between LLM and human writing, including lexical patterns and readability differences, while controlled marketing experiments have found that perceived AI authorship can reduce authenticity, positive word of mouth, and loyalty for emotional brand communications.

Sources:
- https://ahrefs.com/blog/marketers-using-ai-publish-more-content/
- https://doi.org/10.1111/ijal.70115
- https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1616935/full
- https://doi.org/10.1016/j.jbusres.2024.114984

Fluffy treats research, positioning, copy, and art direction as one creative job. The agent has to understand the buyer before it gets to decorate the page.

## What you give it

```text
Product repo: Pukujan/my-product
Target repo: Pukujan/design-bakery
Audience: founders / developers / students / buyers / investors
Deliverables: case study + presentation + evidence page
```

If the audience is unclear, Fluffy researches plausible segments and picks the strongest working hypothesis for the candidate set.

## What it does

1. Reads the real product source, including docs, PRs, incidents, usage, and current limitations.
2. Researches how the target audience describes the problem in the wild.
3. Maps current alternatives, including the status quo and manual workarounds.
4. Finds credible market data and external research that makes the pain concrete.
5. Develops several positioning angles and writes a buyer-facing creative brief.
6. Reviews at least 20 relevant brand and interaction references for a major page direction.
7. Creates several visual directions that differ in layout, typography, metaphor, motion, and emotional tone.
8. Writes the marketing copy from the buyer's point of view and runs a dedicated anti-AI-pattern rewrite.
9. Produces working HTML candidates, with Three.js or other rendering approaches when they earn their place.
10. Publishes the candidates to a review gallery. You keep, combine, revise, or delete them.

## Claude Code

Claude Code automatically loads `CLAUDE.md`. This repository includes a project memory file that imports the Fluffy playbook and the human-copy rules.

From this repo:

```text
claude
```

Then:

```text
Use Fluffy on Pukujan/my-product.
Research the market and audience first.
Create 4 materially different product-marketing page candidates in Pukujan/design-bakery.
Publish them to an unlisted gallery and finish the work without waiting for me to choose a direction mid-process.
```

## ChatGPT, Codex, Cursor, and other agents

Start with `AGENTS.md`. The same workflow is written to be agent-agnostic.

## The output standard

A strong Fluffy run should leave you with pages that answer these questions quickly:

- Is this for someone like me?
- Does this describe a problem I actually recognize?
- Why should I care now?
- What am I doing instead today?
- What makes this product worth switching for?
- What evidence makes the claim believable?
- Does this brand feel like this product specifically?

The page should sound like somebody met the customer before they opened the code editor.

## Current pilot

The first pilot uses:
- `Pukujan/project-assurance-modules`
- `Pukujan/research-assurance`

The first gallery exposed a real failure in this repo: the instructions were too easy for an agent to satisfy with polished, generic, system-centric copy. The v2 workflow treats that as a design defect and makes buyer language, market framing, copy examples, brand research, and structural variation explicit requirements.

See `docs/V1_FAILURE_RETROSPECTIVE.md`.
