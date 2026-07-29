# UX foundation

## Source

- `ai-web-design-director` interface-quality contract.
- `ui-ux-pro-max` design-system, UX, landing and `html-tailwind` baseline searches.
- Selected references `01`, `02`, `05`.

## Selected interface pattern

**Hero-centric professional service landing with editorial photography and a private-club layer.**

The interface should explain the service within three seconds, show one clear private-conversation action, and then unfold into process, services, club and expertise. It must feel human and selective without imitating a dating app, hotel booking interface or luxury nightlife site.

## Advisory recommendations accepted

- One primary CTA above the fold.
- Predictable horizontal navigation.
- Strong heading hierarchy and short readable text measure.
- Responsive images with reserved aspect ratios.
- Mobile-first collapse and no horizontal scrolling.
- Visible labels and explicit success/error feedback in the future application form.
- Subtle 150–300 ms interface transitions; small 8–16 px reveal offsets only.
- Semantic color roles and accessible contrast.

## Recommendations rejected

- Pink database accent: conflicts with an explicit brand prohibition.
- Suggested Be Vietnam Pro pairing: not a final brand decision and does not match the desired editorial character; typography will be chosen during style-selection with Cyrillic and future CJK support.
- Testimonials, media logos, ratings and large metrics: no verified material exists yet.
- Mega menu, login, pricing cards and marketplace search: do not match the current service model.
- Sticky duplicated hero CTA: one header CTA and one hero CTA may share the same destination, but they must not visually compete.
- Decorative bounce, large scroll choreography and 3D: outside the selected Core tier.

## Navigation model

### Desktop

- Horizontal header, `76–88 px` high.
- Temporary wordmark at left: `Брачное агентство` until a brand name and logo exist.
- Five links: `Услуги`, `Как всё устроено`, `Клуб`, `Фотография`, `О нас`.
- Compact header CTA at right: `Записаться на интервью`.
- Header remains visually simple; no login, social icons, phone cluster or second navigation row.
- Sticky behavior may begin only after the first viewport; it must not obscure anchor targets.

### Mobile

- Wordmark at left, labelled menu button at right, minimum target `44 × 44 px`.
- Primary CTA appears inside the opened menu and again in the hero; it is not squeezed into the closed mobile header.
- Focus moves into the menu when opened and returns to the menu button when closed.
- Escape closes the menu; background content is not tabbable while the menu is open.

### Future language architecture

- Structure must allow a `RU / 中文` switch after a professionally localized Chinese version exists.
- Do not show a non-working language switch in the first release.

## CTA hierarchy

### Primary

- Hero label: `Записаться на приватное интервью`.
- Header label: `Записаться на интервью`.
- Destination: private application / introductory conversation flow.
- Desktop height: `50–52 px`.
- Horizontal padding: `24–28 px`.
- Maximum width: content width, not more than `250 px`.
- Mobile: full width of the content column is allowed, with a minimum height of `50 px`.

### Secondary

- Label: `Посмотреть услуги`.
- Treatment: restrained outline button or clearly underlined text action.
- Desktop height when button: `48–50 px`.
- It must remain quieter than the primary CTA.

### Club-specific

- Label below the fold: `Подать заявку в клуб`.
- It is not a third competing action in the first viewport.

## First-viewport copy contract

- **Eyebrow:** `Знакомства в России и Китае`.
- **H1:** `Брачное агентство для серьёзных отношений`.
- **Supporting copy:** `Личный подбор, интервью и организация встреч. Конфиденциально, без публичных анкет.`
- **Primary CTA:** `Записаться на приватное интервью`.
- **Secondary action:** `Посмотреть услуги`.
- **Proof content:** three separate items, `Личный отбор`, `Конфиденциально`, `Россия и Китай`, separated by layout rather than decorative punctuation.

The same copy and actions are used in all three composition candidates.

## Content hierarchy

1. Category and geography.
2. Explicit value proposition.
3. What the agency does and how privacy is protected.
4. Primary and secondary action.
5. Compact non-numeric proof.
6. Human editorial photograph.
7. Below the fold: process, services, Russia–China, club, photographer, team, FAQ and final application.

## Component grammar

- Large photographic surfaces with intentional crops, not thumbnail galleries.
- One hero text group with a maximum comfortable measure around `520–620 px`.
- Bordered or tonal editorial modules may be used for the club layer.
- Compact proof row uses text and fine dividers, not badges, stars or fake certification icons.
- Service presentation uses varied editorial layouts; avoid a uniform grid of many identical rounded cards.
- Lines and radii remain consistent within a style candidate.
- Use SVG icons only when they clarify an action; no decorative emojis.
- Alcohol-related props, nightlife imagery and wine-glass silhouettes are prohibited.

## Screen scope

- Composition selection surface: `Home / first viewport`.
- Viewport: `1440 × 900`.
- Header and hero must be fully visible.
- The bottom edge is the actual fold.
- No partial second section, cropped next card or fake scroll state.
- One static state of the Russia/China image transition may be shown; other states are described, not stacked.

## Responsive constraints

- Design and later test at `320`, `375`, `414`, `768`, `1024` and `1440 px`.
- At `375 px`, text appears before imagery; the image retains a meaningful face-safe crop.
- At `768 px`, split compositions may stack or use a controlled `45/55` ratio only if both columns remain readable.
- No fixed-width content wider than the viewport.
- Responsive images use `srcset`, `sizes`, WebP/AVIF and explicit dimensions to avoid layout shift.
- Body text is at least `16 px` on mobile with approximately `1.5` line-height.
- Long copy uses a `65–75` character line length.

## Accessibility constraints

- Normal text contrast at least `4.5:1`; large text at least `3:1`.
- Semantic heading order without skipped levels.
- Visible keyboard focus on every link, button and form control.
- Tab order follows the visual reading order.
- Application fields use persistent labels, not placeholders alone.
- Form submission exposes loading, success and actionable error states.
- Every meaningful photograph has contextual alt text; decorative crops use empty alt.
- `prefers-reduced-motion` reveals all content immediately and switches imagery without animated masking.
- Native scroll, browser back behavior and anchor navigation remain intact.

## V2 UX addendum

- A compact contact strip precedes the main navigation and exposes both
  telephone numbers plus MAX, VK and Telegram marks.
- The main conversion changes from an interview anchor to a dedicated
  questionnaire at `/v2/questionnaire/`.
- The questionnaire is a four-step accessible form with visible progress,
  persistent labels, back navigation, local validation and an explicit
  demonstration-only completion state.
- The reference-site mechanism is used only as a structural cue; its branding,
  copy, statistics and visual design are not copied.
- V2 mobile hero is image-first with a dedicated portrait source, preserving
  both faces and hands without destructive cropping.
