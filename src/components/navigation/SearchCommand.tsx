import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "../../data/products";
import { productSearchText } from "../../utils/productFilters";

export function SearchCommand({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) return products.slice(0, 6);
    return products.filter((product) => productSearchText(product).includes(text)).slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[90] bg-forest-950/70 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            className="mx-auto mt-24 max-w-3xl rounded-lg bg-ivory p-4 shadow-soft"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Search products"
          >
            <div className="flex items-center gap-3 border-b border-forest-900/10 px-2 pb-3">
              <Search className="h-5 w-5 text-gold-500" />
              <input className="min-h-12 flex-1 bg-transparent text-lg outline-none" autoFocus placeholder="Search products, styles, upholstery..." value={query} onChange={(event) => setQuery(event.target.value)} />
              <button className="rounded-full p-2 text-forest-950 hover:bg-forest-900/5" type="button" onClick={onClose} aria-label="Close search">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-auto py-3">
              {results.map((product) => (
                <Link key={product.id} to={`/product/${product.slug}`} onClick={onClose} className="flex items-center gap-4 rounded-lg p-3 hover:bg-white">
                  <img src={product.images[0].thumb ?? product.images[0].src} alt="" className="h-16 w-20 rounded-md object-cover" />
                  <span>
                    <span className="block font-semibold text-forest-950">{product.name}</span>
                    <span className="text-sm text-forest-900/60">{product.shortDescription}</span>
                  </span>
                </Link>
              ))}
            </div>
            <p className="px-3 pb-2 text-xs text-forest-900/50">Press Esc or close to leave search. Recent searches can be added when analytics are connected.</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
