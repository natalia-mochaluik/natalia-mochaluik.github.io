# Visual specification

## Approved source

- Layout and visual language:
  `codex-clipboard-9928b21c-e1d8-4e5e-b4b2-12fcb2925850.png`.
- Hero photo replacement:
  `codex-clipboard-393cd8fb-992a-49ba-887e-3521dcdeec34.png`.
- Composition fingerprint: white horizontal header; full-bleed photograph;
  protected dark text zone at left; compact geography pill and tabs; large
  left-aligned sans-serif H1; primary green CTA; quiet secondary action; trust
  row at the lower edge.

## Tokens

- Ink: `#1d1f1b`
- Charcoal surface: `#20221f`
- Warm paper: `#f3f1eb`
- Warm white: `#fbfaf7`
- Moss accent: `#4d5c49`
- Moss dark: `#394537`
- Sand line: `#c8bba8`
- Muted text: `#6b6b65`
- White overlay text: `#f7f6f1`

## Typography

- Interface and display: native modern sans stack with Cyrillic and future CJK
  fallbacks.
- Hero H1: `clamp(3rem, 5.2vw, 5.25rem)`, 0.96–1.02 line-height,
  approximately `680–760 px` measure.
- Section H2: `clamp(2.4rem, 4.4vw, 4.8rem)`.
- Body: `17–20 px`, 1.5–1.65 line-height, maximum `68 ch`.
- Meta/eyebrow: `13–15 px`, modest letter spacing; no all-caps luxury styling.

## Geometry

- Desktop header: `86 px`.
- Main content width: `1440 px` maximum, side padding `clamp(20px, 4vw, 72px)`.
- Primary CTA: `52 px` high, 4 px radius.
- Editorial modules: mostly square corners with restrained `2–12 px` radii.
- Fine one-pixel dividers; no glass panels or heavy shadows.
- Desktop section spacing: `112–156 px`; mobile: `72–96 px`.

## Brand identity

- Selected brand: «ВЗАИМНО» / `VZAIMNO`.
- The header and footer use the approved `VO + ВЗАИМНО` lockup; the browser
  icon uses the isolated `VO` mark.
- `VO` joins the first and last letters of `VZAIMNO` into one continuous route.
- The main heading and service copy remain direct: «Брачное агентство для
  серьёзных отношений», with personal selection, interviews and organised
  meetings described in plain editorial language.
- The logo does not require an explanatory brand-story block on the public
  page; the earlier, more concise site copy remains intact.
- No pink, hearts, rings or decorative wedding clichés.

## Interaction finish

- Process and secondary service cards gain lift, a controlled shadow and a
  subtle surface change on hover-capable devices.
- Hover motion is disabled by the existing reduced-motion preference.
- Russia and China tabs use small circular flag signs; the selected or hovered
  sign lifts slightly while the text remains the primary label.

## Hero

- Height: at least `calc(100svh - 86px)`.
- Photograph fills the viewport and uses a high crop that removes the tableware
  at the bottom.
- Overlay: dense charcoal at the left, falling to transparent toward the
  couple; a light bottom vignette protects the trust row.
- Text and actions match the approved copy contract exactly.

## Imagery

- `hero-couple.jpg`: selected Russia hero.
- `couple-china-city.jpg`: China hero state and international section.
- The China hero uses an upper focal point (`56% 18%`) so both faces remain
  visible in wide first-viewport crops.
- `couple-china-club-no-glass.jpg`: closed-club section; re-rendered as a more
  natural editorial photograph with realistic skin, hands, fabric and optical
  texture. The scene contains no glass or alcohol.
- `couple-russia-mature.jpg`: photography/service section.
- Every temporary AI photograph is marked as illustrative and must remain easy
  to replace with the photographer's future original work.

## Responsive intent

- Under `980 px`, desktop navigation becomes a labelled menu.
- Under `760 px`, editorial grids stack and images follow their heading/copy.
- Hero keeps the photograph as atmosphere but strengthens its left/bottom
  overlay for text contrast.
- Under `480 px`, CTAs become full-width and no text is smaller than 15 px.

## Accessibility

- Visible focus rings on all interactive controls.
- Minimum touch target `44 px`.
- Semantic landmarks and heading order.
- Persistent form labels and explicit demo-state feedback.
- Native anchors, keyboard-accessible tabs/menu/FAQ and reduced-motion support.
