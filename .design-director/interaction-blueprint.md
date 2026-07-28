# Interaction blueprint

## Tier

Core: fast static shell with restrained transitions. No decorative 3D,
parallax or scroll hijacking.

## Signature interaction

The `Россия / Китай` control in the hero changes the editorial photograph while
preserving the same message and CTA. The default Russia state uses the exact
user-selected seated couple photograph. The China state uses an existing
project image of a Chinese man and Russian woman.

## Supporting behavior

1. Header links use native anchors and smooth scrolling.
2. The mobile navigation uses a full-width menu, supports Escape and returns
   focus to its trigger.
3. FAQ uses native `details` elements.
4. The prototype application form validates required fields locally and states
   clearly that it does not yet transmit personal data.

## Motion

- Image crossfade: 360 ms.
- Buttons and links: 180–220 ms.
- No entrance offset larger than 12 px.
- With `prefers-reduced-motion`, smooth scrolling and all transitions are
  disabled and content is immediately visible.

## Performance

- Hero image is eager-loaded and compressed for the selected crop.
- Images below the fold are lazy-loaded.
- No external font, video, WebGL or animation library.
