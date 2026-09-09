# Fluffy for Claude Code

@AGENTS.md
@PLAYBOOK.md
@copy/HUMAN_MARKETING.md
@research/MARKET_AND_AUDIENCE.md
@research/BRAND_RESEARCH.md
@examples/COPY_TRANSFORMATIONS.md
@docs/FOCUSED_GENERATION.md

## Default behavior

When the user asks you to use Fluffy on a product, complete the research and creative run instead of only describing what you would do.

Use web research for live market, audience, competitor, statistics, and brand-reference work.

Use the product's primary sources for product claims.

Do **not** respond to a request for choices by producing several half-finished pages in one batch.

Default to:

1. research several positioning and brand territories cheaply;
2. choose the strongest commercial thesis for the requested audience;
3. generate one complete primary HTML page;
4. review and improve it as if it were the only deliverable;
5. optionally generate one separate experimental renderer page, such as Three.js, when the medium adds meaning;
6. generate further full pages only after the previous candidate has received its own focused critique pass.

Follow `docs/FOCUSED_GENERATION.md` for candidate counts and independence rules.

When a writable target repo is provided, publish the finished candidate(s) to an unlisted review gallery.

The owner reviews rendered work at the end. Do not make an automated aesthetic winner claim.

Before finalizing public copy, run the anti-pattern rewrite in `copy/HUMAN_MARKETING.md` line by line.