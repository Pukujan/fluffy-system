# Fluffy playbook

This file is the execution order for a full product-marketing run.

## 1. Product truth

Read enough primary material to answer these in plain language:

- What does the product help somebody do?
- What event, failure, frustration, or opportunity caused it to exist?
- Who feels that problem first?
- What does the product currently do in reality?
- What is still a hypothesis or future direction?
- What real incident best demonstrates the problem?

Prefer the incident over architecture as the seed for the story.

Save a short working note with:

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

Search outside the product repo.

Look for the phrases, complaints, tradeoffs, and desired outcomes people in the target market actually use. Useful places include Reddit, Hacker News, GitHub issues, product reviews, practitioner forums, conference talks, blog comments, support threads, and public communities.

Collect patterns, not isolated spicy quotes.

Write 8 to 15 raw buyer-language lines. They may be paraphrases if direct quoting would be misleading or unnecessary.

Then write:

```text
BEFORE THE PRODUCT:
What happened right before this person would care?

CURRENT WORKAROUND:
What are they doing today?

FRUSTRATION:
What makes the current way annoying, risky, slow, confusing, expensive, or limiting?

DESIRED PROGRESS:
What would a good outcome feel like in their language?
```

## 3. Market gap

Research direct products and the status quo.

Use April Dunford's competitive-alternative logic as a guardrail: the main competitor may be a spreadsheet, ChatGPT prompt, manual review, consultant, existing workflow, or doing nothing.

For each serious alternative, record:

- what it does well
- why buyers choose it
- where it leaves this target audience dissatisfied
- what switching cost it creates
- what claim Fluffy should avoid because the alternative already owns it

The market gap should be one sentence a buyer can understand.

Bad:
> fragmented epistemic support across multimodal production workflows

Better:
> AI can build the page. It still needs somebody to figure out what the buyer should care about.

## 4. Quantitative support

Find market numbers only when they strengthen the story.

Prefer:
- peer-reviewed research
- official surveys with disclosed sample sizes
- respected market research
- first-party product/company data with clear methodology

Record source, date, sample, and the exact fact you intend to use.

A strong page usually needs fewer numbers than a research memo. One memorable number with context often beats six tiny statistics.

## 5. Positioning options

Create at least three.

Use this compact form:

```text
ANGLE NAME:
WHO:
MOMENT OF PAIN:
STATUS QUO:
WHY STATUS QUO BREAKS:
WHAT THIS PRODUCT CHANGES:
WHY NOW:
PROOF:
RISK / OVERCLAIM TO AVOID:
```

Pick the angles that create the clearest and most different page stories.

## 6. Brand research

Run `research/BRAND_RESEARCH.md`.

Collect at least 20 references for a major page project. Do not choose a direction based only on direct competitors.

Create at least three visual territories with meaningful differences.

## 7. Story spine

Write the page as a sequence of reader realizations.

Example sequence:

```text
I recognize this problem.
I did not realize how common/expensive/important it is.
The way I solve it today has a specific limitation.
This product approaches the limitation differently.
I can see the product doing it.
There is enough proof to take it seriously.
I know what to do next.
```

Section labels do not need to match this sequence.

Read the headlines by themselves. They should sound like a story, not a generated outline.

## 8. Copy draft

Write the first draft freely.

Then run `copy/HUMAN_MARKETING.md` as a separate editing pass.

Never treat the first fluent draft as finished copy.

## 9. Product demo

Show the product changing something.

Prefer:
- an actual workflow
- a real before/after state
- a live or simulated interaction
- a concrete artifact
- an annotated real example

Avoid a hero made only of generic abstract shapes when the product has something real to show.

## 10. Candidate generation

For a full bakeoff, generate 3 to 5 candidates.

Every candidate should have its own creative thesis. Example:

```text
Candidate A: editorial proof page
Candidate B: warm customer story
Candidate C: interactive product demo
Candidate D: cinematic Three.js experience
```

Do not vary only the palette.

## 11. HTML quality

Native HTML/CSS/JS is the baseline renderer.

Requirements:
- semantic HTML
- responsive layout
- keyboard-visible focus
- reasonable contrast
- reduced-motion support
- touch-safe interactions
- no broken layout when third-party scripts fail
- fast first content paint where practical
- real links for sources and CTAs

## 12. Presentation

A deck is a separate persuasion artifact.

Compress the same product truth into one idea per screen. Do not copy website sections verbatim.

HTML decks should support visible arrows, keyboard navigation, swipe, progress, and mobile-safe type.

## 13. Evidence surface

When a product needs research/provenance support, create a separate evidence page or source drawer.

Keep the sales page readable.

## 14. Gallery

Publish every experimental candidate to a noindex route that is not linked from the homepage.

The gallery should make comparison easy:
- preview
- candidate name
- design thesis
- target audience/angle
- renderer
- open full page

No automated winner score.

## 15. Final self-review

Ask:

- Would the target buyer know this is for them in five seconds?
- Is there a sentence here five unrelated AI startups could use unchanged?
- Did we talk about the system before the person had a reason to care?
- Did we hide weak positioning under visual polish?
- Are the strongest claims supported?
- Are the candidates actually different?
- Does any paragraph sound suspiciously balanced, complete, and generic?

Rewrite before publishing when the answer is uncomfortable.
