import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "../../types/product";
import { EmptyState } from "../common/EmptyState";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products, onQuickView, view }: { products: Product[]; onQuickView?: (product: Product) => void; view: "grid" | "list" }) {
  if (products.length === 0) {
    return <EmptyState title="No products matched" description="Try removing a filter, searching another category or requesting a custom quote." />;
  }

  return (
    <motion.div layout className={view === "grid" ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3" : "grid gap-5"}>
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <motion.div key={product.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }}>
            <ProductCard product={product} onQuickView={onQuickView} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
