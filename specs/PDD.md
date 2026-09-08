# Product Definition Document

## Problem

High-quality product marketing for technical projects often fails in two opposite ways.

The first failure is generic AI marketing: polished abstractions, interchangeable SaaS language, weak audience empathy, and design that looks fashionable without revealing why the product matters.

The second failure is evidence overcorrection: the page becomes a methodology report, feature inventory, provenance ledger, or audit surface before the visitor has any reason to care.

Recent Design Bakery work improved when the process started from a real person and a real moment, then connected that moment to a broader market pain, external evidence, a defensible product insight, and a visual world that fit the audience.

The difficult part is not HTML generation. The difficult part is repeatedly doing the upstream research and judgment well enough that the HTML has something worth expressing.

## Product outcome

Create a repeatable, repo-guided creative experiment that can take a technical product and produce several market-ready candidate stories and visual directions for human review.

The system should preserve strong process discipline without constraining the final creative output to a template.

## Primary user

The human product/project owner who can judge:

- whether the product has been understood;
- whether the market pain is real and relevant;
- whether the copy sounds human;
- whether the evidence is fair;
- whether the visual direction feels right;
- whether a candidate deserves to become public/featured marketing.

## Secondary users

- an AI agent researching and generating candidates;
- future collaborators who need to understand how a candidate was framed;
- reviewers comparing creative directions.

## Current subjects

1. `Pukujan/project-assurance-modules`
2. `Pukujan/research-assurance`

## Goals

1. Ground positioning in product primary sources and real incidents.
2. Research audience, market, competitors, substitutes, and adjacent brand references before final design.
3. Use quantitative/external research to support market pain where suitable.
4. Preserve human-sounding, audience-specific storytelling.
5. Keep detailed provenance available without making it the emotional center of the marketing page.
6. Generate multiple genuinely different visual candidates.
7. Keep native HTML/CSS/JS as the fast baseline renderer.
8. Include experimental Three.js candidates where 3D can embody the product story.
9. Publish candidates in a hidden Design Bakery gallery for human selection.
10. Reuse existing OSS tools or their workflows where they add value instead of building a replacement platform.

## Non-goals

- automatically deciding which design is tasteful;
- automatically promoting a candidate to the homepage;
- building another general-purpose site generator;
- replacing OpenDesign, Casa, Onlook, BrandSpec, Three.js, or other mature tools;
- creating a universal scoring function for marketing quality;
- proving that a product works because external research supports its problem domain;
- requiring every candidate to share a component library or brand system;
- forcing Three.js into products where it adds no explanatory value.

## Success criteria

At the current experiment horizon:

- a hidden gallery is live in Design Bakery;
- both subject projects have multiple working candidate pages;
- each subject has at least one 3D/Three.js direction and at least two non-3D directions;
- all candidates are usable on mobile and desktop;
- each candidate exposes enough source/research links to verify strong claims;
- no candidate is linked from the main Design Bakery homepage before owner approval;
- the owner can review the gallery and give qualitative feedback candidate by candidate.

## Human authority

The human owner is the final authority on creative acceptance.

Automated checks may reject broken HTML, inaccessible navigation, malformed evidence, invented claims, or missing fallback behavior. They may not declare a candidate aesthetically correct or market-winning.
