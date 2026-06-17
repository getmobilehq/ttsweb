# Programme photography

Drop approved TTS Nigeria photography here, then wire it up in
`lib/content.ts` (the `mosaicTiles` photo entries).

## Rules (HANDOFF §8)

- Use **only programme-supplied** images. No stock or third-party photos.
- Until real images land, the photo tiles render a styled duotone-green
  placeholder so the layout never looks broken.

## How to add a photo

1. Save the file here, e.g. `participant-1.jpg` (use optimised JP/WebP).
2. In `lib/content.ts`, set the matching `mosaicTiles` photo entry's `src`
   (e.g. `src: "/images/participant-1.jpg"`) and finalise its `alt` text to
   describe the actual image.
3. The component serves it through `next/image` (sized, `priority` in the hero,
   lazy elsewhere) and keeps the brand duotone wash on top. Remove the wash in
   `components/Mosaic.tsx` (`<Duotone />`) if comms prefers clean photos.

The hero mosaic becomes visible to assistive tech automatically once any photo
`src` is set (it is `aria-hidden` only while all slots are placeholders).
