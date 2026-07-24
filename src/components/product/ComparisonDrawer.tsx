import { X } from "lucide-react";
import { products } from "../../data/products";
import { useUserStore } from "../../store/useUserStore";

export function ComparisonDrawer() {
  const comparison = useUserStore((state) => state.comparison);
  const clearComparison = useUserStore((state) => state.clearComparison);
  const selected = products.filter((product) => comparison.includes(product.id));
  if (selected.length === 0) return null;

  const rows = [
    ["Category", (id: string) => products.find((product) => product.id === id)?.subcategory ?? ""],
    ["Configuration", (id: string) => products.find((product) => product.id === id)?.configurationOptions.join(", ") ?? ""],
    ["Seating", (id: string) => products.find((product) => product.id === id)?.seatingCapacity?.join(", ") ?? "Custom"],
    ["Upholstery", (id: string) => products.find((product) => product.id === id)?.upholsteryOptions.join(", ") ?? ""],
    ["Recliner option", (id: string) => (products.find((product) => product.id === id)?.reclinerAvailable ? "Available to discuss" : "Not shown")],
    ["Customisation", (id: string) => (products.find((product) => product.id === id)?.customisable ? "Available" : "Contact manufacturer")],
    ["Room suitability", (id: string) => products.find((product) => product.id === id)?.roomTypes.join(", ") ?? ""],
  ] as const;

  return (
    <aside className="fixed bottom-4 left-4 z-[60] max-h-[72vh] w-[calc(100%-2rem)] overflow-auto rounded-lg border border-white/15 bg-forest-950 p-4 text-white shadow-soft lg:w-[760px]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="eyebrow">Compare</p>
          <h2 className="font-display text-2xl font-semibold">Up to three products</h2>
        </div>
        <button className="rounded-full p-2 hover:bg-white/10" type="button" onClick={clearComparison} aria-label="Clear comparison">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="min-w-[620px] overflow-hidden rounded-lg border border-white/10">
        <div className="compare-grid grid" style={{ "--compare-count": selected.length } as React.CSSProperties}>
          <div className="bg-white/10 p-3 text-sm font-semibold">Field</div>
          {selected.map((product) => (
            <div key={product.id} className="bg-white/10 p-3 text-sm font-semibold">
              {product.name}
            </div>
          ))}
          {rows.map(([label, getValue]) => (
            <div className="contents" key={label}>
              <div className="border-t border-white/10 p-3 text-sm text-gold-100">{label}</div>
              {selected.map((product) => (
                <div key={`${label}-${product.id}`} className="border-t border-white/10 p-3 text-sm text-white/70">
                  {getValue(product.id)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
