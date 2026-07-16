# Real photos go here

This folder holds real, client-provided photos — as opposed to the stock/
placeholder imagery used elsewhere in `public/images/`.

## How to swap a stock photo for a real one

1. Drop the real photo in this folder (`public/images/real/your-photo.jpg`).
2. Open `src/lib/images.ts`.
3. Find the slot you want to replace and change its `path`/`file` to point at
   the new file, and set `kind: "photo"` if it isn't already. That's it —
   every component (`PageHero`, `GalleryGrid`, `DumpsterCard`) already
   branches on `kind`, so no other code changes are needed.

`old-site-hero.jpg` in this folder is the original, full-resolution photo
Justin pulled from the old site — it's the source for the optimized
`hero-home.jpg` currently used as the homepage hero and in the gallery.

## Note for Justin

The client's Yelp listing (**martinez-dumpsters-pomona-2**) has roughly 236
real photos of his actual dumpsters and completed jobs, and his Instagram
(**@martinez_junk_removal_**) has more. Those are the ideal long-term
replacement for the stock photos currently filling in the gaps — once
downloaded, swapping them in is the same one-line change described above.

Current stock/placeholder slots that are good candidates for a real-photo
swap first: the About page crew photo, the Service Area / Contact / Reviews
hero images, and the 10/20/40-yard cards on the Dumpster Rental page.
