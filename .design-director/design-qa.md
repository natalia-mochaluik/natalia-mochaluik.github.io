# Design QA

## Scope

- Source: approved full-bleed first-screen composition supplied by the user
- Implementation: `.design-director/assets/qa/implementation-home-1440x900.png`
- Comparison: `.design-director/assets/qa/comparison-hero-final.png`
- China desktop state:
  `.design-director/assets/qa/implementation-china-crop-1440x900.png`
- China mobile state:
  `.design-director/assets/qa/implementation-china-crop-375x844-v2.png`
- Temporary text-only identity rollback, desktop:
  `.design-director/assets/qa/implementation-restored-agency-1440x900.png`
- Temporary text-only identity rollback, mobile:
  `.design-director/assets/qa/implementation-restored-agency-375x844.png`
- Final `VO + ВЗАИМНО` identity with original copy, desktop:
  `.design-director/assets/qa/implementation-vzaimno-original-copy-1440x900.png`
- Final `VO + ВЗАИМНО` identity with original copy, mobile:
  `.design-director/assets/qa/implementation-vzaimno-original-copy-375x844.png`
- Revised club photograph:
  `.design-director/assets/qa/implementation-club-photoreal-1440x900.png`
- Revised process-card spacing:
  `.design-director/assets/qa/implementation-process-hover-spacing-1440x900.png`
- Desktop viewport: 1440 × 900
- Mobile viewport: 375 × 844

## Findings

- The desktop composition preserves the approved white navigation bar, dark editorial hero, restrained green CTAs, two-level action hierarchy and three trust markers.
- The preferred seated-couple photograph replaces the original city scene and remains legible beneath a controlled left-to-right overlay.
- The China switch visibly replaces the hero image and keeps the Russia–China positioning explicit.
- The revised China focal point keeps both heads and faces visible at desktop
  and mobile viewports.
- The mobile layout preserves the headline, primary CTA and core value proposition without horizontal overflow.
- The mobile headline now keeps a semantic line break and no longer joins
  «агентство» and «для».
- Navigation, mobile menu, geography switch, FAQ and local application confirmation were exercised in the browser.
- The approved `VO + ВЗАИМНО` identity is restored in the header, footer,
  browser metadata and icon.
- The earlier editorial copy remains intact: the hero still reads «Брачное
  агентство для серьёзных отношений» and retains the original personal
  selection and confidentiality message.
- The discarded explanatory VO story and later humanized rewrite are not
  present on the public page.
- The club photograph was re-rendered with more natural skin, hands, fabric,
  light falloff and camera texture; it contains no glass or alcohol-related
  object.
- The first process card now uses the same internal left padding as the other
  cards and lifts vertically without horizontal scale, so its hover surface no
  longer appears cramped against the left boundary.
- The Russia hero now has a dedicated phone crop: the photograph is lifted and
  its focal point is shifted so the man no longer disappears beneath the large
  headline, while the desktop composition remains unchanged.
- The mature-couple service photograph and the closed-club photograph use their
  natural portrait proportions on mobile instead of being forced into shallow
  landscape frames; faces and bodies are no longer cut off.
- Intrinsic image dimensions now match the two portrait source files, preventing
  unstable layout calculations while the photographs load.
- The services grid now includes professional couple psychology and facilitated
  women game evenings. The new cards remain a balanced two-column pair at
  `1440 × 900` and become two full-width sequential cards at `390 × 844`.
- The club description, team copy, FAQ and application selector consistently
  expose the psychologist and game-practitioner formats.
- The Russia hero uses a dedicated photorealistic `9:16` mobile asset with both
  faces above the headline; the original approved horizontal asset remains
  unchanged on desktop.
- The China mobile hero uses the full portrait source rather than a destructive
  cover crop. Both hero states keep both faces visible at `390 × 844`.
- The mature-couple, international and club images use portrait slots on mobile;
  browser captures confirm that every photographed pair keeps both faces in
  frame.
- The production build completes without errors.
- The two rendered-site tests pass.
- Desktop and mobile browser checks show no console errors or horizontal
  overflow.

## Severity

- P0: none
- P1: none
- P2: none
- P3: replace provisional contact details, legal links and demo form handling
  before accepting real enquiries

final result: passed

## V2 QA — 2026-07-30

- V1 remains server-rendered at `/`; V2 is isolated at `/v2` and its
  questionnaire at `/v2/questionnaire`.
- Desktop hero checked at `1440 × 900`: both people are fully visible, contact
  strip is within the viewport and no horizontal overflow is present.
- Mobile hero checked at `390 × 844`: the dedicated portrait source loads,
  keeps both heads and faces in frame, and the H1 enters the first viewport.
- Young Russian and Russian-Chinese portrait sections were checked on desktop
  and mobile; natural portrait ratios prevent cropped heads.
- Questionnaire checked at desktop and mobile widths. All four steps, required
  fields, back/continue controls, interests, consent and demo completion work.
- Step transitions return the mobile viewport to the beginning of the new form
  step, eliminating mid-form jumps.
- Exact palette tokens, V2 asset isolation, both telephone numbers, support
  services and route separation are covered by rendered-site tests.
- Production build completes without errors; all four rendered-site tests pass.
- Remaining launch input: real MAX, VK and Telegram URLs plus production form
  delivery and reviewed personal-data text.

V2 final result: passed
