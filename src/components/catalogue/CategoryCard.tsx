import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Category } from "../../types/product";
import { products } from "../../data/products";

export function CategoryCard({ category }: { category: Category }) {
  const count = products.filter((product) => product.category === category.id || (category.id === "l-shaped-sofas" && product.category === "corner-sectional-sofas")).length;
  return (
    <Link to={category.href} className="group flex h-full flex-col overflow-hidden rounded-lg border border-forest-900/10 bg-white shadow-[0_20px_58px_rgba(7,21,16,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[16/10] bg-gradient-to-br from-ivory to-stonewarm/55 p-2">
        <img src={category.image} alt="" className="h-full w-full rounded-md object-contain transition duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{count} catalogue references</p>
        <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-forest-950">{category.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-forest-900/62">{category.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-700">
          Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
