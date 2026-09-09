# Fluffy v1 failure retrospective

## What failed

The first Fluffy gallery was a useful failure.

The repository had reasonable intentions: read the product, research the market, keep evidence separate, generate multiple pages, let the human owner choose. In practice, an agent could satisfy those instructions while still producing the exact failure mode Fluffy was supposed to prevent.

The output sounded like AI-generated methodology copy.

Recurring problems included:

- `not X, but Y` framing throughout the prose;
- architecture and assurance vocabulary arriving before a buyer reason to care;
- pages describing the system from above instead of speaking from the user's situation;
- weak market-gap framing;
- research stored in the repo but barely shaping the sales story;
- brand-reference work that did not materially change the final designs;
- multiple candidates sharing the same underlying composition and visual grammar;
- Three.js used as an aesthetic variant without a strong enough product-specific visual thesis;
- a gallery that technically provided choice while the choices still felt related and conservative.

The owner rejected the system as a whole.

That rejection is the success signal for this iteration. Human taste is the acceptance boundary.

## Root causes

### 1. Negative rules were too weak

Telling an agent to `sound human` and avoid a few buzzwords leaves the default structure intact.

The v2 rules explicitly address sentence architecture, paragraph rhythm, rhetorical symmetry, abstraction, point of view, and concrete nouns.

### 2. AGENTS.md was not enough for Claude Code

Claude Code automatically loads project `CLAUDE.md` files. The first version relied primarily on `AGENTS.md`, so a Claude Code run could miss the intended workflow unless the user explicitly told Claude to read it.

v2 adds `CLAUDE.md` and imports the core playbook, copy standard, research protocols, and examples.

Reference:
https://docs.anthropic.com/zh-CN/docs/claude-code/memory

### 3. Examples were missing

Rules tell a model what constraints exist. Examples show the actual distance between a technically correct sentence and a market-ready sentence.

Anthropic's prompting guidance recommends several relevant and diverse examples for steering output. v2 includes transformations from FOSSIL, Study OS, PAM, Research Assurance, and Fluffy itself.

Reference:
https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables

### 4. Market research did not force buyer language

The first protocol asked for competitors and research. It did not require enough direct work on how the audience describes the problem.

v2 requires live audience-language sources and a buyer-language scratch set before copy is written.

### 5. Brand research could become paperwork

A list of 20 websites does not create a brand direction by itself.

v2 requires analysis of emotional tone, composition, typography, product visualization, motion, and explicit lessons from every reference. Candidate directions must differ structurally across multiple axes.

### 6. The page formula remained too visible

The first process still encouraged a predictable sequence of problem, system, proof, CTA.

v2 defines reader realizations and page functions while leaving section structure open. The finished page is reviewed for repeated rhetorical moves and information rhythm.

## External evidence informing v2

### AI writing has measurable stylistic differences

A 2026 International Journal of Applied Linguistics study found ChatGPT outputs differed significantly from human writing across all six lexical-diversity measures examined.

https://doi.org/10.1111/ijal.70115

A 2025 Frontiers corpus study found ChatGPT writing was lexically denser and often less readable in its comparison set.

https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1616935/full

Research on lexical overrepresentation has documented model-linked spikes in words such as `delve`, `intricate`, and `underscore`.

https://arxiv.org/abs/2412.11385

### Marketing authenticity matters

A Journal of Business Research paper reported seven preregistered experiments in which perceived AI authorship of emotional marketing communications reduced positive word of mouth and loyalty, with perceived authenticity helping explain the effect.

https://doi.org/10.1016/j.jbusres.2024.114984

### AI content production is already mainstream

Ahrefs surveyed 879 marketers in 2025 and reported that 87% use AI to help create content. Marketers using AI published 42% more content per month in the sample.

https://ahrefs.com/blog/marketers-using-ai-publish-more-content/

Gartner surveyed 418 marketing leaders in 2024 and found 77% of organizations that had adopted GenAI were using it for creative-development tasks.

https://www.gartner.com/en/newsroom/press-releases/2025-02-18-gartner-survey-reveals-over-a-quarter-of-marketing-organizations-have-limited-or-no-adoption-of-genai-for-marketing-campaigns

The market problem Fluffy targets is therefore quality and judgment inside a high-volume AI-assisted production environment.

## v2 acceptance behavior

A future run should fail its own review when:

- the hero could belong to five unrelated AI products;
- the buyer is absent from the first screen;
- market data is present but does not change the story;
- the copy relies on contrast formulas;
- three candidate pages share the same layout with different colors;
- a visual direction has no product-specific metaphor;
- the product is hidden behind methodology vocabulary;
- the owner has to rewrite the market framing before they can even judge the design.

The owner can still reject every v2 candidate. Fluffy improves by treating that feedback as design input rather than an aesthetic-scoring failure.
