# Architecture

Fluffy System has no long-running runtime service.

It is an orchestration and review boundary across existing systems.

## Components

```text
product repositories
        |
        v
primary-source discovery
        |
        +----> real incidents / PRs / usage / transcripts
        |
        v
market + audience research
        |
        +----> external quantitative/research support
        |
        v
positioning + narrative brief
        |
        v
creative-direction set
        |
        +----> native HTML/CSS/JS control
        +----> OSS-informed / adapter candidate
        +----> Three.js/WebGL candidate
        |
        v
Design Bakery hidden gallery
        |
        v
human owner review
        |
        +----> reject
        +----> iterate
        +----> combine
        +----> explicitly select
                        |
                        v
               featured/public integration
```

## Ownership

### Fluffy System owns

- experiment methodology;
- research/positioning brief format;
- creative comparison protocol;
- invariants and failure register;
- records of what tools/workflows were actually used;
- review state.

### Design Bakery owns

- deployed candidate HTML;
- gallery routes;
- final featured project integration after human selection;
- production deployment conventions.

### Subject repositories own

- product truth;
- product maturity/status;
- usage evidence;
- architecture and implementation claims;
- public/private source boundaries.

### External research sources own

- market statistics;
- published findings;
- third-party claims.

External research can support the market problem. It cannot silently become product efficacy evidence.

## Renderer boundary

The story brief and creative direction are upstream of the rendering technology.

A candidate may be plain HTML, CSS, SVG, canvas, Three.js, or another suitable renderer. Renderer choice does not change product truth or evidence scope.

## OSS adapter boundary

Existing open-source projects are treated as reusable capabilities, reference workflows, or optional editors.

The first comparison set includes:

- OpenDesign: design brief / frontend craft / design-system workflow;
- website-builder: agent skill orchestration from insights through launch;
- Casa: model-directed case-study art direction;
- BrandSpec: brand-as-code output contract;
- Onlook: visual code iteration/editor workflow;
- Three.js / React Three Fiber ecosystem: immersive renderer;
- native HTML/CSS/JS: control path.

Fluffy System does not claim to run an adapter unless that tool was actually executed. A candidate may be described as `informed by` a workflow without claiming tool execution.

## Review boundary

A candidate in the hidden gallery is experimental.

Gallery inclusion is not endorsement. Homepage/featured inclusion requires explicit human selection.
