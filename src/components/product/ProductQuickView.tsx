import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "../../types/product";
import { useUserStore } from "../../store/useUserStore";

export function ProductQuickView({ product, onClose }: { product?: Product; onClose: () => void }) {
  const openQuote = useUserStore((state) => state.openQuote);
  return (
    <AnimatePresence>
      {product ? (
        <motion.div className="fixed inset-0 z-[85] bg-forest-950/70 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            className="mx-auto mt-16 grid max-w-5xl overflow-hidden rounded-lg bg-ivory shadow-soft md:grid-cols-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} quick view`}
          >
            <img src={product.images[0].src} alt={product.images[0].alt} className="h-full min-h-80 w-full object-cover" />
            <div className="p-6">
              <button className="ml-auto flex rounded-full p-2 hover:bg-forest-900/5" type="button" onClick={onClose} aria-label="Close quick view">
                <X className="h-5 w-5" />
              </button>
              <p className="eyebrow">{product.subcategory}</p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-forest-950">{product.name}</h2>
              <p className="mt-4 text-forest-900/68">{product.description}</p>
              <ul className="mt-6 grid gap-2 text-sm text-forest-900/70">
                {product.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="rounded-md bg-white px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="btn-primary" to={`/product/${product.slug}`} onClick={onClose}>
                  Open product page
                </Link>
                <button className="btn-ghost" type="button" onClick={() => openQuote(product.id)}>
                  Request quote
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
