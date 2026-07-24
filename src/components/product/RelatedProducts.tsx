import type { Product } from "../../types/product";
import { products } from "../../data/products";
import { ProductCard } from "./ProductCard";

export function RelatedProducts({ product }: { product: Product }) {
  const related = products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3);
  if (related.length === 0) return null;
  return (
    <section className="luxury-shell py-16">
      <h2 className="font-display text-4xl font-semibold text-forest-950">Similar products</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {related.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
