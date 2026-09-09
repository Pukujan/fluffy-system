# Copy transformations

Use these as style examples. They are meant to teach judgment, not provide reusable slogans.

Anthropic's prompting guidance recommends using a small set of relevant, diverse examples to steer tone and structure. Claude Code loads this file through `CLAUDE.md`.

## Example 1: FOSSIL

### Too system-first

> FOSSIL is a durable epistemic provenance system that records technical claims, decisions, sources, dependencies, and supersession state across engineering workflows.

### Better market entry

> You remember what you chose. Do you remember why?

Then make the situation concrete:

> Git can show that the code changed five months ago. The issue might show what shipped. What usually disappears is the reasoning that made the decision make sense at the time.

Why it works:
- starts with a familiar engineering moment
- gives the reader a reason to care before naming the system
- uses concrete artifacts such as Git and issues
- leaves room for the product explanation later

## Example 2: Study OS

### Too research-first

> Study OS diagnoses representation-transition failures across multidimensional learner state and adapts the instructional operation before fading assistance and testing transfer.

### Better learner entry

> When it doesn't click, change the explanation.

Then:

> You can understand the idea and still get stuck on somebody else's variable name, notation, control flow, or jump in reasoning. A wrong answer does not tell the tutor which one happened.

Why it works:
- treats the learner as capable
- names recognizable friction
- frames a market problem in plain language
- keeps the learning science underneath the story instead of inside the hero

## Example 3: PAM

### Too internal

> PAM is a modular methodology registry that routes versioned project-assurance requirements from declared project facts into a reviewed manifest.

### Better buyer entry

> You finished the research. Are you ready to build?

Then:

> The repo is easy to create. The expensive miss is discovering halfway through the build that nobody froze the success criteria, checked reusable systems, planned the benchmark, or wrote down the failure you were supposed to catch.

Why it works:
- starts at the decision moment
- makes forgotten planning feel expensive and real
- turns modules and manifests into implementation detail

## Example 4: Research Assurance

### Too architecture-first

> Research Assurance is an integration control plane that pins independently versioned research components and validates stack-level contracts across multiple assurance dimensions.

### Better buyer entry

> Which part actually passed?

Then:

> A retrieval benchmark can be green while the source is stale. A citation can point to the right bytes while the conclusion still overreaches. Once several research systems are composed, one green check starts hiding too much.

Why it works:
- gives the audience a question they can use
- separates different failure modes with concrete examples
- introduces the need for the product before the component map

## Example 5: Fluffy

### Failed v1 framing

> Fluffy System is a repo-guided experiment for turning real product evidence into market-ready case studies, presentations, and product pages without forcing every project through the same template or visual system.

Problems:
- sounds like a methodology abstract
- talks about the system before the user's frustration
- uses a contrastive `without forcing` frame
- no buyer, no urgency, no market scale

### Better entry

> Give an AI your product repo. Get a marketing story a buyer might actually care about.

Then:

> Coding agents can already make the page. The hard part is deciding which customer pain deserves the hero, what the buyer is doing today, which claim can survive scrutiny, and what the brand should feel like.

Why it works:
- immediately explains input and outcome
- acknowledges the current AI-design market
- identifies the missing work in buyer language
- creates a reason for the workflow to exist

## Example 6: Avoiding the contrast habit

### AI-shaped

> This is not another website generator. It is a strategic layer that turns product truth into market-ready creative.

### Better

> Fluffy researches the buyer and market before the agent writes the page. It hands the creative step a real positioning brief, proof, customer language, and several brand territories to work from.

The second version simply says what the product does.

## Example 7: Avoiding three-part polish

### AI-shaped

> Research faster. Position smarter. Launch stronger.

### Better

> The page should not reach final polish before anyone has checked whether it is selling the right problem.

## Example 8: Research as a receipt

### Audit-shaped

> Evidence class: external. Authority: peer-reviewed. Scope: market authenticity. Product efficacy: unestablished.

### Better sales-page treatment

> In seven preregistered experiments, consumers reacted worse to emotional marketing they believed was AI-authored. The effect was linked to perceived authenticity.
>
> Source: Journal of Business Research, 2025.

Keep the full caveat and source detail on the evidence page.
