import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Category } from "../../types/product";
import { products } from "../../data/products";

export function CategoryCard({ category }: { category: Category }) {
  const count = products.filter((product) => product.category === category.id || (category.id === "l-shaped-sofas" && product.category === "corner-sectional-sofas")).length;
  return (
    <Link to={category.href} className="group relative min-h-[340px] overflow-hidden rounded-lg bg-forest-950 text-white shadow-soft">
      <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-76 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow">{count} catalogue references</p>
        <h3 className="mt-2 font-display text-4xl font-semibold">{category.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/72">{category.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-100">
          Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
