# Visual media strategy

Run this after positioning and brand research, before HTML.

The question is not `what effects should the page have?`

The question is:

> What visual medium makes this product easier to feel, understand, or remember?

## Available media

### Typography + layout
Best when the product needs authority, argument, editorial clarity, or dense technical explanation.

Use for:
- strong market thesis
- serious engineering buyers
- investor framing
- research-heavy case studies

### Product UI / screenshots
Best when seeing the workflow creates trust quickly.

Use for:
- concrete software interaction
- before/after states
- demos
- workflows buyers recognize

### Custom SVG / vector
Best when the product has a mechanism worth explaining precisely.

Use for:
- diagrams
- instrument metaphors
- state transitions
- bespoke icons
- animated paths
- scalable brand illustration

Prefer custom vectors over generic icon packs when the mechanism can become part of the brand.

### Generated imagery
Best when the page needs emotional context, a character, atmosphere, editorial art, or a visual world that code alone would struggle to create.

Use for:
- hero scenes
- brand characters
- editorial illustrations
- campaign images
- metaphorical scenes
- human context

Generated imagery still needs art direction. Define composition, emotion, audience age, lighting, material, camera, and brand role before generating.

Do not use generated images as decorative filler between generic sections.

### Photography
Best when real people, places, or physical products matter to trust.

### Three.js / WebGL
Best when depth, spatial relationships, transformation, simulation, or exploration are central to the product idea.

Use 3D to explain something. Do not use it as a particle-screen saver.

### Video / motion
Best when change over time is itself the story.

## Media brief

Before building, write:

```yaml
visual_media:
  dominant: generated_image | vector | typography | product_ui | threejs | photography
  supporting:
    - vector
    - product_ui

  generated_images:
    role: hero emotional world
    style: warm cinematic editorial
    count: 1-3

  vector:
    role:
      - explain mechanism
      - section transitions

  threejs:
    role: none

  motion:
    role: reveal relationships, not decoration
```

## One dominant medium

A polished page usually has one dominant medium and one or two supporting media.

Examples:

- Study OS: generated character/scene + vector learning traces + HTML
- PAM: custom vector preflight system + typography + small product artifacts
- Research Assurance: scientific vector instruments + restrained product data + optional 3D relationship view
- Fluffy: editorial/generated campaign art + live HTML demo + copy-edit annotations

Using every medium at once is an experiment, not the default.

## Generated-image workflow

1. Lock positioning and emotional goal.
2. Write the image's job in one sentence.
3. Generate a composition, not a vague `cool AI image`.
4. Judge whether the image strengthens the product story.
5. Crop and compress for the actual layout.
6. Keep text in HTML rather than baking key copy into the image.
7. Use custom SVG or CSS for interactive elements around the image.
8. Provide useful alt text.

## Vector workflow

Create SVG directly when precision matters.

Good vector subjects:
- process maps
- assurance dimensions
- route gates
- state diagrams
- custom icon families
- measurement instruments
- animated explanatory marks

SVG should look art-directed. Default boxes and arrows are documentation, not brand illustration.

## Review questions

- Would removing the image make the page emotionally weaker?
- Would removing the vector make the mechanism harder to understand?
- Does the 3D interaction teach anything the 2D page cannot?
- Is this media choice specific to the product?
- Are we using an image because it helps, or because the page felt empty?
