import { SlidersHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ProductFilters } from "../../types/product";
import { FilterSidebar } from "./FilterSidebar";

export function MobileFilterSheet({ filters, setFilters }: { filters: ProductFilters; setFilters: (filters: ProductFilters) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn-ghost lg:hidden" type="button" onClick={() => setOpen(true)}>
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div className="fixed inset-0 z-[88] bg-forest-950/70 p-3 backdrop-blur lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="ml-auto h-full max-w-md overflow-auto rounded-lg bg-ivory p-5" initial={{ x: 60 }} animate={{ x: 0 }} exit={{ x: 60 }}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-3xl text-forest-950">Filters</h2>
                <button className="rounded-full p-2 hover:bg-forest-900/5" type="button" onClick={() => setOpen(false)} aria-label="Close filters">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <FilterSidebar filters={filters} setFilters={setFilters} mobile />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
