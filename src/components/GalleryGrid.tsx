import Image from "next/image";
import { PlaceholderBlock } from "@/components/PlaceholderBlock";
import { galleryImages } from "@/lib/images";

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {galleryImages.map((img) => (
        <figure
          key={img.file}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
        >
          {img.kind === "photo" ? (
            <>
              <Image
                src={img.path}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent px-3 pb-2 pt-6 text-xs font-semibold text-white">
                {img.caption}
              </figcaption>
            </>
          ) : (
            <PlaceholderBlock alt={img.alt} icon="dumpster" label={img.caption} className="h-full w-full" />
          )}
        </figure>
      ))}
    </div>
  );
}
