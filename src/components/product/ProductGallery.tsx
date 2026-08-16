import { ChevronLeft, ChevronRight, Maximize2, Share2 } from "lucide-react";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { ProductImage } from "../../types/product";
import { ImageLightbox } from "./ImageLightbox";

export function ProductGallery({ images, productName }: { images: ProductImage[]; productName: string }) {
  const [selected, setSelected] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const current = images[selected] ?? images[0];

  const goTo = (index: number) => {
    setSelected(index);
    emblaApi?.scrollTo(index);
  };

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg bg-white shadow-soft">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <button key={image.src} type="button" className="min-w-0 flex-[0_0_100%] bg-gradient-to-br from-ivory via-white to-stonewarm/45 p-2" onClick={() => setLightboxOpen(true)} aria-label={`Open ${productName} image ${index + 1}`}>
                <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full rounded-md object-contain" />
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-forest-950/80 px-3 py-1 text-xs font-semibold text-white">
          {selected + 1} / {images.length}
        </div>
        <div className="absolute right-4 top-4 flex gap-2">
          <button className="rounded-full bg-white/90 p-3 text-forest-950" type="button" onClick={() => navigator.share?.({ title: productName, url: window.location.href })} aria-label="Share product">
            <Share2 className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-white/90 p-3 text-forest-950" type="button" onClick={() => setLightboxOpen(true)} aria-label="Open image lightbox">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
        <button className="absolute left-4 top-1/2 rounded-full bg-white/90 p-3 text-forest-950" type="button" onClick={() => goTo((selected - 1 + images.length) % images.length)} aria-label="Previous image">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button className="absolute right-4 top-1/2 rounded-full bg-white/90 p-3 text-forest-950" type="button" onClick={() => goTo((selected + 1) % images.length)} aria-label="Next image">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button key={image.src} className={`overflow-hidden rounded-md border bg-white p-1 ${selected === index ? "border-gold-500" : "border-transparent"}`} type="button" onClick={() => goTo(index)}>
            <img src={image.thumb ?? image.src} alt="" className="aspect-[4/3] w-full object-contain" />
          </button>
        ))}
      </div>
      <ImageLightbox open={lightboxOpen} images={images} selected={selected} onClose={() => setLightboxOpen(false)} onSelect={setSelected} />
      {current?.cataloguePage ? <p className="mt-3 text-xs text-forest-900/50">Catalogue reference page {current.cataloguePage}</p> : null}
    </div>
  );
}
