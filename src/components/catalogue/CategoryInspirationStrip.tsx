import { categoryInspirations } from "../../data/categoryInspiration";
import type { ProductCategory } from "../../types/product";

export function CategoryInspirationStrip({ category }: { category?: ProductCategory }) {
  const images = category ? categoryInspirations[category] : undefined;
  if (!images?.length) return null;

  return (
    <section className="mb-8 rounded-lg border border-forest-900/10 bg-white p-4 shadow-[0_16px_52px_rgba(7,21,16,0.06)] sm:p-5">
      <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Internet inspiration</p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-forest-950">Premium references for this category.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-forest-900/58">
          Mood images only. Actual Marvel Sofa's work is shown in Our Work.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {images.map((image) => (
          <article key={image.sourceUrl} className="overflow-hidden rounded-lg bg-ivory">
            <img src={image.image} alt={image.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
            <div className="p-3">
              <h3 className="font-display text-xl font-semibold leading-tight text-forest-950">{image.title}</h3>
              <a className="mt-1 block text-xs font-semibold text-forest-900/55 hover:text-gold-700" href={image.sourceUrl} target="_blank" rel="noreferrer">
                {image.credit}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
