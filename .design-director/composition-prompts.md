# Composition prompts

## Decision mode

This pack compares spatial composition only. Exact brand typography and final palette are intentionally deferred to style-selection.

## Design read

Reading this as a hybrid service landing for adults who value serious relationships and privacy, with a contemporary editorial language, human photography and the composure of a private members club.

- `DESIGN_VARIANCE: 6/10`
- `MOTION_INTENSITY: 2/10`
- `VISUAL_DENSITY: 3/10`

## Shared input images

Every candidate receives the same five images in the same order:

1. Reference 01, Kelleher: clarity, full photographic field and proof integration.
2. Reference 02, Tawkify: legible text and image relationship.
3. Reference 05, The Aster: framed modular club interface only.
4. Temporary editorial photograph, Russian couple.
5. Temporary editorial photograph, Chinese man and Russian woman in a city.
References 1-3 are inspiration only. Their logos, copy, branded components and exact layouts must not be reproduced. Images 4-5 are the available temporary project assets. The two other generated photographs are excluded from composition generation because visible tableware conflicts with the updated image direction.

## Interface contract, shared P0

- Site model: hybrid, editorial landing plus service catalog.
- Selection frame: `Home / first viewport`.
- Screen scope: `first-viewport-only`.
- Exact viewport: `1440 × 900`.
- One complete desktop website viewport, no browser chrome and no device mockup.
- Header: familiar horizontal header, `80 px` maximum.
- Temporary wordmark at left: `Брачное агентство`.
- Navigation: `Услуги`, `Как всё устроено`, `Клуб`, `Фотография`, `О нас`.
- Compact header CTA at right: `Записаться на интервью`.
- Hero primary CTA: `Записаться на приватное интервью`, content width, about `50-52 px` high.
- Secondary action: `Посмотреть услуги`, visibly quieter.
- One clear fold at the bottom edge; no partial next section.
- Mobile collapse: single-column text first, image second; labelled menu button; no compressed desktop navigation.
- Accessibility: legible hierarchy, strong contrast, normal button shapes, no text placed over a visually busy face.

## Shared content, locked

- Eyebrow: `Знакомства в России и Китае`
- Headline, arranged in no more than two lines: `Брачное агентство для серьёзных отношений`
- Supporting copy: `Личный подбор, интервью и организация встреч. Конфиденциально, без публичных анкет.`
- Primary CTA: `Записаться на приватное интервью`
- Secondary action: `Посмотреть услуги`
- Proof content in three separate layout cells: `Личный отбор`, `Конфиденциально`, `Россия и Китай`

ImageGen is not the production source of text. Copy is locked for hierarchy and placement; any raster lettering error is corrected during implementation.

## Shared comparison language

- Neutral comparison palette only: light mineral gray, graphite text and one muted forest signal.
- One neutral high-legibility sans-serif family with Cyrillic support.
- Same photographic quality and color treatment in every candidate.
- Editorial natural light, calm adult clothing, authentic gestures.
- No option may win through a unique color, font, texture, shadow system or more expensive image treatment.

## Bounded composition fingerprints

| Field | A: Full photographic field | B: Editorial split | C: Framed club modules |
|---|---|---|---|
| Hero layout family | full-bleed image below header | asymmetric `5/7` split | framed modular `7/5` grid |
| Reading path | top-left down, then across bottom proof | left text to right image | text module, image module, proof module |
| Copy geometry | wide overlay block, two-line H1 | contained vertical stack in solid column | large text card with offset alignment |
| Primary asset treatment | one edge-to-edge photograph | one contained right-side photograph | one large and one narrow coordinated crop |
| Proof integration above fold | calm three-cell base inside hero | three aligned text cells at lower left | dedicated compact lower-right module |
| Signature-interaction staging | Russia/China switch near upper image edge | switch anchored to image column | switch sits between the two image crops |
| Mass and empty-space balance | image dominant, darkened left safe zone | balanced light text mass and photo mass | graphite frame, light text card and contained photo masses |

## Pairwise distance gate

| Pair | Fingerprint distance | Required family or asset difference | Decision |
|---|---:|---|---|
| A / B | 6/7 | full-bleed vs contained split image | pass |
| A / C | 7/7 | full field vs modular multi-crop | pass |
| B / C | 5/7 | conventional split vs framed modular grid | pass |

## Pre-generation critic gate

All candidates score `4/5` or higher on brief fidelity, asset realism, responsiveness, signature-interaction feasibility and implementation realism. Screen-scope clarity, interface familiarity, navigation appropriateness and CTA proportionality score `5/5`. No candidate uses an unusual navigation system, oversized action, partial next section or alcohol-related imagery.

## Candidate A: Full photographic field

### Final prompt

```text
Use case: ui-mockup
Asset type: composition-selection comp for a premium matchmaking website

Create one realistic, production-quality desktop website design. This is one single website comp, not a moodboard, collage, browser frame, device mockup, or collection of alternatives.

INPUT IMAGES
Image 1: reference only for immediate service clarity, a large photographic field and compact proof integration.
Image 2: reference only for a legible relationship between copy and human photography.
Image 3: reference only for restrained private-club framing. Do not copy the wine scene.
Images 4-5: temporary project photography pool. Use these people and scenes as available visual assets. They are illustrative, not client testimonials.

DECISION MODE
This render is for composition selection, not color or brand-style selection. Use the shared neutral comparison language only. Do not introduce a unique color mood, decorative material system, or stylistic advantage.

OUTPUT AND SCOPE, P0
Surface: Home / first viewport.
Exact viewport: 1440 x 900.
Show one complete desktop viewport with the full header and full hero. The bottom edge is the real fold. Do not show any part of the next section. Show one static state only.

BUSINESS
Company: a marriage agency for serious relationships.
Audience: adults who prefer confidential personal service to public dating apps.
Geography: Russia and China.
Primary action: book a private introductory interview.

SHARED INTERFACE, P0
Use a familiar horizontal header, no more than 80 px high. Temporary wordmark at left: "Брачное агентство". Navigation on one line: "Услуги", "Как всё устроено", "Клуб", "Фотография", "О нас". Compact header button at right: "Записаться на интервью".
Hero primary CTA: a normal content-width button about 50-52 px high labelled "Записаться на приватное интервью". Secondary action: "Посмотреть услуги", visibly quieter. No sidebar, no contact rail, no giant action band and no oversized arrow.

COMPOSITION FINGERPRINT
Hero layout family: full-bleed photographic field directly below the header.
Reading path: top-left copy down to CTA, then across a calm proof base.
Copy geometry: a wide left safe zone with a two-line headline.
Primary asset treatment: one edge-to-edge editorial couple photograph, faces clear on the right and calm negative space on the left.
Proof integration: three separate low-key text cells inside the bottom of the hero. Each cell contains only its short label. No icons, descriptions, metrics or additional claims.
Signature interaction: a small, clear Russia/China image switch near the upper image edge; show only one active state.
Mass balance: image dominant, with a subtle graphite scrim only behind copy. Keep the right side luminous and human.

EXACT VISIBLE COPY
Eyebrow: "Знакомства в России и Китае"
Headline, no more than two lines: "Брачное агентство для серьёзных отношений"
Supporting copy: "Личный подбор, интервью и организация встреч. Конфиденциально, без публичных анкет."
Primary CTA: "Записаться на приватное интервью"
Secondary action: "Посмотреть услуги"
Proof cells: "Личный отбор", "Конфиденциально", "Россия и Китай"
These three short labels are the only allowed proof words. Do not add explanations such as candidate verification, data protection, language support, years of experience or guarantees.
Use no em dash and no decorative middle-dot separators in visible text.

COMPARISON STYLE LOCK
Light mineral gray, graphite and one muted forest signal only. One neutral high-legibility sans-serif family with Cyrillic support. Natural editorial photography, soft daylight and restrained clothing. No unique decorative finish.

RESPONSIVE INTENT
At less than 768 px, stack text first and a face-safe image second; collapse navigation to a labelled menu button. Primary copy and CTA remain available without animation.

AVOID
No pink, red romantic accent, hearts, ribbons, wedding styling, wine, drinking glasses, stemware, cups, bottles, alcohol, bar, nightlife, party mood, public profile gallery, swipe UI, flags as decoration, Chinese ornamental clichés, black-and-gold VIP styling, fake awards, fake metrics, fake testimonials, logos from the references, gradient objects, glassmorphism, 3D, giant buttons, partial next section, browser chrome, watermark.
```

## Selected composition revision: B with user-preferred photograph

- Decision source: user explicitly selected Candidate B.
- Edit target: `composition-b-editorial-split-1440x900.png`.
- Preferred image: `photo-couple-russia-user-preferred-v1.png`.
- Invariant: the interface and all spatial geometry remain unchanged.

### Final prompt

```text
Use case: precise-object-edit
Asset type: selected first-viewport website composition revision

INPUT IMAGES
Image 1 is the edit target and strict layout reference: the selected Editorial Split website composition.
Image 2 is the user-preferred replacement photograph.

PRIMARY REQUEST
Change only the right-side hero photograph in Image 1. Replace it with Image 2 while preserving the selected website interface exactly.

LAYOUT LOCK, P0
Keep the 1440 x 900 first-viewport composition, horizontal header, 5/7 split ratio, left text-column width, all margins, alignments, typography sizes, line breaks, buttons, dividers, proof labels and the Russia/China switch in the same positions.
Keep every visible Russian UI string unchanged.
Keep the same light mineral, graphite and muted forest comparison palette.
Do not redesign, restyle, add, remove or move any interface element.
Do not show the next section, browser chrome or a device frame.

PHOTO TREATMENT
Use Image 2 as the only photograph in the right hero column.
Preserve the couple's identity, faces, clothing, seated pose, eye contact, green sofa and calm architectural interior.
Crop the photograph as a clean tall editorial panel that fills the right column. Prioritise both faces and upper bodies.
Crop out the foreground table and all drinking vessels, including the water glass and dark cup. Do not invent wine, bottles, tableware or bar details.
Keep natural soft daylight and realistic texture. Do not turn the scene into a wedding, party or testimonial portrait.

TEXT INVARIANTS
Wordmark: "Брачное агентство"
Navigation: "Услуги", "Как всё устроено", "Клуб", "Фотография", "О нас"
Header CTA: "Записаться на интервью"
Eyebrow: "Знакомства в России и Китае"
Headline: "Брачное агентство для серьёзных отношений"
Supporting copy: "Личный подбор, интервью и организация встреч. Конфиденциально, без публичных анкет."
Primary CTA: "Записаться на приватное интервью"
Secondary action: "Посмотреть услуги"
Proof labels only: "Личный отбор", "Конфиденциально", "Россия и Китай"
Switch labels: "Россия", "Китай"

AVOID
No changed text, misspellings, new claims, icons, metrics, testimonials, hearts, pink, ribbons, wedding styling, wine, drinking glasses, cups, bottles, alcohol, bar, nightlife, public profile gallery, flags as decoration, Chinese ornamental clichés, extra cards, gradients, glassmorphism, 3D, watermark or layout drift.
```

## Candidate B: Editorial split

### Final prompt

```text
Use case: ui-mockup
Asset type: composition-selection comp for a premium matchmaking website

Create one realistic, production-quality desktop website design. This is one single website comp, not a moodboard, collage, browser frame, device mockup, or collection of alternatives.

INPUT IMAGES
Image 1: reference only for immediate service clarity, a large photographic field and compact proof integration.
Image 2: reference only for a legible relationship between copy and human photography.
Image 3: reference only for restrained private-club framing. Do not copy the wine scene.
Images 4-5: temporary project photography pool. Use these people and scenes as available visual assets. They are illustrative, not client testimonials.

DECISION MODE
This render is for composition selection, not color or brand-style selection. Use the shared neutral comparison language only. Do not introduce a unique color mood, decorative material system, or stylistic advantage.

OUTPUT AND SCOPE, P0
Surface: Home / first viewport.
Exact viewport: 1440 x 900.
Show one complete desktop viewport with the full header and full hero. The bottom edge is the real fold. Do not show any part of the next section. Show one static state only.

BUSINESS
Company: a marriage agency for serious relationships.
Audience: adults who prefer confidential personal service to public dating apps.
Geography: Russia and China.
Primary action: book a private introductory interview.

SHARED INTERFACE, P0
Use a familiar horizontal header, no more than 80 px high. Temporary wordmark at left: "Брачное агентство". Navigation on one line: "Услуги", "Как всё устроено", "Клуб", "Фотография", "О нас". Compact header button at right: "Записаться на интервью".
Hero primary CTA: a normal content-width button about 50-52 px high labelled "Записаться на приватное интервью". Secondary action: "Посмотреть услуги", visibly quieter. No sidebar, no contact rail, no giant action band and no oversized arrow.

COMPOSITION FINGERPRINT
Hero layout family: asymmetric 5/7 split below the header.
Reading path: focused left text column, then right photographic field.
Copy geometry: a vertically centred text stack with a two-line headline and compact actions.
Primary asset treatment: one contained right-side editorial photograph with a clean straight crop, not a background image.
Proof integration: three restrained text cells aligned at the lower part of the left column, separated by spacing and fine rules. Each contains only its short label. No icons, descriptions, metrics or additional claims.
Signature interaction: a small Russia/China switch anchored to the upper edge of the image column; show one static state.
Mass balance: a calm light mineral text field at left and a slightly larger photographic mass at right. No overlap.

EXACT VISIBLE COPY
Eyebrow: "Знакомства в России и Китае"
Headline, no more than two lines: "Брачное агентство для серьёзных отношений"
Supporting copy: "Личный подбор, интервью и организация встреч. Конфиденциально, без публичных анкет."
Primary CTA: "Записаться на приватное интервью"
Secondary action: "Посмотреть услуги"
Proof cells: "Личный отбор", "Конфиденциально", "Россия и Китай"
These three short labels are the only allowed proof words. Do not add explanations such as candidate verification, data protection, language support, years of experience or guarantees.
Use no em dash and no decorative middle-dot separators in visible text.

COMPARISON STYLE LOCK
Light mineral gray, graphite and one muted forest signal only. One neutral high-legibility sans-serif family with Cyrillic support. Natural editorial photography, soft daylight and restrained clothing. No unique decorative finish.

RESPONSIVE INTENT
At less than 768 px, stack the left text field first and the image second. Collapse navigation to a labelled menu button. Keep the text column order and CTA hierarchy unchanged.

AVOID
No pink, red romantic accent, hearts, ribbons, wedding styling, wine, drinking glasses, stemware, cups, bottles, alcohol, bar, nightlife, party mood, public profile gallery, swipe UI, flags as decoration, Chinese ornamental clichés, black-and-gold VIP styling, fake awards, fake metrics, fake testimonials, logos from the references, gradient objects, glassmorphism, 3D, giant buttons, partial next section, browser chrome, watermark.
```

## Candidate C: Framed club modules

### Final prompt

```text
Use case: ui-mockup
Asset type: composition-selection comp for a premium matchmaking website

Create one realistic, production-quality desktop website design. This is one single website comp, not a moodboard, collage, browser frame, device mockup, or collection of alternatives.

INPUT IMAGES
Image 1: reference only for immediate service clarity, a large photographic field and compact proof integration.
Image 2: reference only for a legible relationship between copy and human photography.
Image 3: reference only for restrained private-club framing. Do not copy the wine scene.
Images 4-5: temporary project photography pool. Use these people and scenes as available visual assets. They are illustrative, not client testimonials.

DECISION MODE
This render is for composition selection, not color or brand-style selection. Use the shared neutral comparison language only. Do not introduce a unique color mood, decorative material system, or stylistic advantage.

OUTPUT AND SCOPE, P0
Surface: Home / first viewport.
Exact viewport: 1440 x 900.
Show one complete desktop viewport with the full header and full hero. The bottom edge is the real fold. Do not show any part of the next section. Show one static state only.

BUSINESS
Company: a marriage agency for serious relationships.
Audience: adults who prefer confidential personal service to public dating apps.
Geography: Russia and China.
Primary action: book a private introductory interview.

SHARED INTERFACE, P0
Use a familiar horizontal header, no more than 80 px high. Temporary wordmark at left: "Брачное агентство". Navigation on one line: "Услуги", "Как всё устроено", "Клуб", "Фотография", "О нас". Compact header button at right: "Записаться на интервью".
Hero primary CTA: a normal content-width button about 50-52 px high labelled "Записаться на приватное интервью". Secondary action: "Посмотреть услуги", visibly quieter. No sidebar, no contact rail, no giant action band and no oversized arrow.

COMPOSITION FINGERPRINT
Hero layout family: framed modular 7/5 grid inside a calm graphite outer field.
Reading path: large light text module first, large photo module second, compact proof module last.
Copy geometry: a generous rectangular text card with an offset but familiar left alignment and a two-line headline.
Primary asset treatment: one large upper-right editorial couple crop plus one narrow supporting crop below or beside it, both from the same supplied photography pool.
Proof integration: a dedicated compact lower-right module with three separate text cells. Each contains only its short label. No icons, descriptions, metrics or additional claims.
Signature interaction: a small Russia/China switch placed between the two coordinated photo crops; show one static state.
Mass balance: visible graphite frame around a light text module and contained photography. Use one consistent moderate corner radius. No floating glass cards.

EXACT VISIBLE COPY
Eyebrow: "Знакомства в России и Китае"
Headline, no more than two lines: "Брачное агентство для серьёзных отношений"
Supporting copy: "Личный подбор, интервью и организация встреч. Конфиденциально, без публичных анкет."
Primary CTA: "Записаться на приватное интервью"
Secondary action: "Посмотреть услуги"
Proof cells: "Личный отбор", "Конфиденциально", "Россия и Китай"
These three short labels are the only allowed proof words. Do not add explanations such as candidate verification, data protection, language support, years of experience or guarantees.
Use no em dash and no decorative middle-dot separators in visible text.

COMPARISON STYLE LOCK
Light mineral gray, graphite and one muted forest signal only. One neutral high-legibility sans-serif family with Cyrillic support. Natural editorial photography, soft daylight and restrained clothing. No unique decorative finish.

RESPONSIVE INTENT
At less than 768 px, remove the outer framing effect and stack text, primary photo, supporting photo and proof as clear full-width blocks. Collapse navigation to a labelled menu button.

AVOID
No pink, red romantic accent, hearts, ribbons, wedding styling, wine, drinking glasses, stemware, cups, bottles, alcohol, bar, nightlife, party mood, public profile gallery, swipe UI, flags as decoration, Chinese ornamental clichés, black-and-gold VIP styling, fake awards, fake metrics, fake testimonials, logos from the references, gradient objects, glassmorphism, 3D, giant buttons, partial next section, browser chrome, watermark.
```
