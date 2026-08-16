import { Maximize2 } from "lucide-react";
import { useState } from "react";
import { ImageLightbox } from "../product/ImageLightbox";
import { clientProjects, projectImages, type ClientProject } from "../../data/clientProjects";

type OurWorkGalleryProps = {
  projects?: ClientProject[];
  compact?: boolean;
};

export function OurWorkGallery({ projects = clientProjects, compact = false }: OurWorkGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const images = projects.map((item) => ({
    src: item.image,
    thumb: item.thumb,
    alt: item.alt,
  }));

  return (
    <>
      <div className={compact ? "columns-1 gap-4 sm:columns-2 lg:columns-3" : "columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4"}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-forest-900/10 bg-white shadow-[0_18px_60px_rgba(7,21,16,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <button
              className="group relative block w-full bg-gradient-to-br from-ivory via-white to-stonewarm/40 p-2 text-left"
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Open ${project.title}`}
            >
              <img
                src={project.thumb}
                alt={project.alt}
                loading="lazy"
                className="h-auto w-full rounded-md object-contain transition duration-500 group-hover:scale-[1.015]"
              />
              <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/78 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">{project.mood}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-forest-950">{project.title}</h3>
              <p className="mt-1 text-sm text-forest-900/58">{project.room}</p>
            </div>
          </article>
        ))}
      </div>

      <ImageLightbox
        open={selected !== null}
        images={selected === null ? projectImages : images}
        selected={selected ?? 0}
        onClose={() => setSelected(null)}
        onSelect={setSelected}
      />
    </>
  );
}
