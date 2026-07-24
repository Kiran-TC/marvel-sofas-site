import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProductImage } from "../../types/product";

export function ImageLightbox({
  open,
  images,
  selected,
  onClose,
  onSelect,
}: {
  open: boolean;
  images: ProductImage[];
  selected: number;
  onClose: () => void;
  onSelect: (index: number) => void;
}) {
  const image = images[selected] ?? images[0];
  const move = (direction: number) => onSelect((selected + direction + images.length) % images.length);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[95] flex items-center justify-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true">
          <button className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white" type="button" onClick={onClose} aria-label="Close lightbox">
            <X className="h-6 w-6" />
          </button>
          <button className="absolute left-4 top-1/2 rounded-full bg-white/10 p-3 text-white" type="button" onClick={() => move(-1)} aria-label="Previous image">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img src={image.src} alt={image.alt} className="max-h-[86vh] max-w-[92vw] rounded-lg object-contain" />
          <button className="absolute right-4 top-1/2 rounded-full bg-white/10 p-3 text-white" type="button" onClick={() => move(1)} aria-label="Next image">
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
