# Human marketing copy standard

This is the rewrite pass that Fluffy must run after a first draft.

The goal is not to hide AI authorship. The goal is to produce copy that is specific, readable, buyer-aware, and worth publishing.

## What research suggests

Several recent studies have found measurable differences between LLM-generated and human writing. A 2026 International Journal of Applied Linguistics study found significant differences across multiple lexical-diversity measures. A 2025 Frontiers study found ChatGPT essays were lexically denser and often less readable than student writing. Research into lexical overrepresentation has also documented LLM-linked overuse of words such as `delve`, `intricate`, and `underscore`.

Marketing has an extra authenticity problem. Seven preregistered experiments published in the Journal of Business Research found that perceived AI authorship of emotional marketing messages reduced positive word of mouth and loyalty, with authenticity playing a mediating role.

Useful references:
- https://doi.org/10.1111/ijal.70115
- https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1616935/full
- https://arxiv.org/abs/2412.11385
- https://doi.org/10.1016/j.jbusres.2024.114984

The practical lesson is bigger than a banned-word list. AI prose often feels synthetic because the structure is too regular, the abstraction level is too high, the point of view is generic, and every thought arrives polished into a complete rhetorical unit.

## Hard bans for public marketing copy

Rewrite any sentence that uses these frames:

- `not X, but Y`
- `not just X, but Y`
- `it's not X. It's Y.`
- `this isn't about X. It's about Y.`
- `more than just`
- `at its core`
- `in today's fast-paced`
- `in an era where`
- `whether you're A, B, or C`
- `from X to Y` as a generic transformation slogan
- `X meets Y`
- `the future of X`

Avoid these words unless a technical meaning makes them necessary:

- unlock
- empower
- revolutionize
- seamless / seamlessly
- holistic
- game-changing
- cutting-edge
- robust
- transformative
- elevate
- supercharge
- leverage when `use` works
- delve
- intricate
- underscore as a verb

Public marketing copy should not contain em dash characters.

## The deeper patterns to fix

### 1. Perfect rhetorical symmetry

AI likes pairs and triples that feel finished:

> Faster research. Better positioning. Stronger stories.

Sometimes that is fine. Repeating the move across the page makes the writer disappear.

Rewrite with a concrete consequence:

> You should not need three rounds of feedback to discover that the page is selling the wrong problem.

### 2. Generic abstractions

Weak:
> Turn product truth into differentiated market narratives.

Stronger:
> Give the agent the repo, the customer problem, and somewhere to publish. It researches the market before it writes the landing page.

The stronger version names objects and actions.

### 3. Explaining from above

Weak:
> Technical founders often struggle to communicate complex value propositions.

Stronger:
> You know exactly why the system matters. The homepage still reads like an architecture document.

Write from inside the situation.

### 4. Every paragraph has a conclusion

Human writing often lets one paragraph set up the next. AI tends to close every block with a summary sentence.

Delete unnecessary mini-conclusions.

### 5. Same paragraph shape

If every paragraph is 2 to 3 sentences with one setup and one punchline, vary the rhythm.

Use:
- one-line statements
- a longer explanatory paragraph where needed
- concrete examples
- short dialogue fragments
- code or product artifacts
- numbers
- captions

Variation should come from the information, not random style noise.

### 6. Fake intimacy

Do not add slang, `honestly`, rhetorical asides, or casual misspellings to simulate a person.

Specificity is more convincing than performative casualness.

## Buyer-language method

Before final copy, create a scratch list of 8 to 15 lines that a real person in the audience could plausibly say.

Examples:

```text
I know what this product does. I have no idea how to explain it on the homepage.

The agent made something beautiful and somehow missed the reason anyone would buy it.

We keep rewriting the same positioning from scratch every launch.

The page sounds professional. It also sounds like every AI startup I have seen this week.
```

These lines do not need to appear verbatim. They calibrate the point of view.

When possible, derive them from real community language and product evidence.

## The specificity pass

Underline every sentence that contains no product-specific or market-specific noun.

If a paragraph can be pasted into a different AI startup with no edits, rewrite it.

Good nouns:
- pull request
- benchmark
- homepage
- sales call
- product repo
- case study
- learner
- architecture decision
- spreadsheet
- brief
- pricing page

Weak nouns:
- solution
- experience
- transformation
- ecosystem
- innovation
- value
- journey

Abstract nouns are allowed. They cannot carry the whole paragraph.

## The market gap pass

A market gap should connect three things:

```text
what the buyer is trying to do
what they use today
where that current approach leaves work undone
```

Example:

> Framer, Replit, Claude Design, and coding agents have made page production dramatically easier. A prompt can get you to a polished draft quickly. The founder still has to decide which customer pain deserves the hero, which competitor the product is really replacing, which claim can be defended, and what the brand should feel like. Fluffy gives the agent a process for doing that research before generation.

This is a useful market frame because the alternatives are acknowledged rather than caricatured.

## Numbers and research

Use a number when it changes the reader's sense of scale.

Good:
> Ahrefs surveyed 879 marketers in 2025. 87% were already using AI to help create content.

Weak:
> 87% of marketers use AI, 43% use it for content, 34% use it for research, 27% use it for brainstorming...

Do not turn the page into a stat wall.

For each number keep:
- source
- year
- sample size when known
- exact scope

## Page voice

Choose a voice for the audience before drafting.

Examples:

### Technical founder
Plain, sharp, skeptical of hype. Comfortable with product detail. Wants a market story that survives scrutiny.

### Student
Warm, direct, hopeful. Avoid remedial language. Explain the struggle without making the person feel deficient.

### Investor
Commercial, category-aware, explicit about timing, alternatives, and expansion. Avoid pretending early evidence is traction.

### Engineering buyer
Concrete, risk-aware, practical. Show how the current workflow fails and what changes operationally.

Do not average these voices together.

## Read-aloud edit

Read every headline and the first sentence of every section aloud.

Rewrite when:
- you run out of breath
- the sentence sounds like a keynote
- you would never say it to the buyer in a meeting
- the line is grammatically polished but emotionally empty
- the same cadence happened two sections ago

## Final anti-pattern scan

Search the finished public files for:

```text
not just
not only
more than just
at its core
in today's
in an era
whether you're
unlock
empower
revolution
seamless
holistic
game-changing
cutting-edge
—
```

Search is a backstop. Human review still has to inspect structure and meaning.
