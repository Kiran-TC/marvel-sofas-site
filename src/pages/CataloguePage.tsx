import { Grid2X2, List, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/common/Seo";
import { FilterSidebar } from "../components/catalogue/FilterSidebar";
import { MobileFilterSheet } from "../components/catalogue/MobileFilterSheet";
import { ProductGrid } from "../components/product/ProductGrid";
import { ProductQuickView } from "../components/product/ProductQuickView";
import { categories } from "../data/categories";
import { products } from "../data/products";
import type { Product, ProductCategory, ProductFilters } from "../types/product";
import { defaultFilters, filterProducts, sortProducts } from "../utils/productFilters";

export default function CataloguePage() {
  const { category } = useParams();
  const categoryParam = category as ProductCategory | undefined;
  const [filters, setFilters] = useState<ProductFilters>({
    ...defaultFilters,
    categories: categoryParam ? [categoryParam] : [],
  });
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [visible, setVisible] = useState(12);
  const [quickView, setQuickView] = useState<Product>();

  const filtered = useMemo(() => sortProducts(filterProducts(products, filters), sort), [filters, sort]);
  const activeCategory = categories.find((item) => item.id === categoryParam);
  const shown = filtered.slice(0, visible);

  return (
    <>
      <Seo title={activeCategory ? activeCategory.title : "Catalogue"} path={category ? `/catalogue/${category}` : "/catalogue"} />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">Complete catalogue</p>
          <h1 className="mt-4 font-display text-6xl font-semibold">{activeCategory?.title ?? "Product Catalogue"}</h1>
          <p className="mt-5 max-w-2xl text-white/70">
            Browse extracted catalogue references with search, filters, comparison and quote actions. Prices and final specifications are intentionally quotation-based.
          </p>
        </div>
      </section>
      <section className="bg-ivory py-8">
        <div className="luxury-shell">
          <div className="flex gap-2 overflow-auto pb-3">
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-900 shadow-sm" to="/catalogue" onClick={() => setFilters(defaultFilters)}>
              All
            </Link>
            {categories.map((item) => (
              <Link key={item.id} className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-900 shadow-sm" to={item.href}>
                {item.shortTitle}
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[290px_1fr]">
            <div className="hidden lg:block">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-forest-950">{filtered.length} products found</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {filters.categories.map((item) => <span key={item} className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">{item}</span>)}
                    {filters.query ? <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">Search: {filters.query}</span> : null}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <MobileFilterSheet filters={filters} setFilters={setFilters} />
                  <button className="btn-ghost" type="button" onClick={() => setFilters(defaultFilters)}><RotateCcw className="h-4 w-4" /> Reset</button>
                  <select className="input w-44" value={sort} onChange={(event) => setSort(event.target.value)}>
                    <option value="featured">Featured</option>
                    <option value="latest">Latest</option>
                    <option value="category">Category</option>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                  </select>
                  <button className="rounded-full bg-white p-3 text-forest-950" type="button" onClick={() => setView("grid")} aria-label="Grid view"><Grid2X2 className="h-5 w-5" /></button>
                  <button className="rounded-full bg-white p-3 text-forest-950" type="button" onClick={() => setView("list")} aria-label="List view"><List className="h-5 w-5" /></button>
                </div>
              </div>
              <ProductGrid products={shown} view={view} onQuickView={setQuickView} />
              {visible < filtered.length ? (
                <div className="mt-8 text-center">
                  <button className="btn-primary" type="button" onClick={() => setVisible((current) => current + 9)}>Load more</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <ProductQuickView product={quickView} onClose={() => setQuickView(undefined)} />
    </>
  );
}
