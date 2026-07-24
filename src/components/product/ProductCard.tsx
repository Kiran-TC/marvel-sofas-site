import { ArrowUpRight, CheckSquare, Heart, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { useUserStore } from "../../store/useUserStore";
import { cn } from "../../utils/cn";

type ProductCardProps = {
  product: Product;
  onQuickView?: (product: Product) => void;
};

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const favourites = useUserStore((state) => state.favourites);
  const comparison = useUserStore((state) => state.comparison);
  const toggleFavourite = useUserStore((state) => state.toggleFavourite);
  const toggleComparison = useUserStore((state) => state.toggleComparison);
  const openQuote = useUserStore((state) => state.openQuote);
  const isFavourite = favourites.includes(product.id);
  const inComparison = comparison.includes(product.id);

  return (
    <article className="group card flex h-full flex-col overflow-hidden">
      <Link to={`/product/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-stonewarm/35">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-forest-950/78 px-3 py-1 text-xs font-semibold text-gold-100 backdrop-blur">
          Price on request
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">{product.subcategory ?? product.category}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-forest-950">{product.name}</h3>
          </div>
          <button
            className={cn("rounded-full border p-2 transition", isFavourite ? "border-gold-500 bg-gold-100 text-gold-700" : "border-forest-900/10 text-forest-900/55 hover:text-gold-500")}
            type="button"
            onClick={() => toggleFavourite(product.id)}
            aria-label={isFavourite ? `Remove ${product.name} from favourites` : `Save ${product.name} to favourites`}
          >
            <Heart className={cn("h-5 w-5", isFavourite && "fill-current")} />
          </button>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-forest-900/65">{product.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.upholsteryOptions.slice(0, 2).map((option) => (
            <span key={option} className="rounded-full bg-forest-900/5 px-3 py-1 text-xs font-semibold text-forest-900/65">
              {option}
            </span>
          ))}
          {product.customisable ? <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">Customisable</span> : null}
        </div>
        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Link to={`/product/${product.slug}`} className="btn-ghost justify-between">
            View Details <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button className="btn-primary px-4" type="button" onClick={() => openQuote(product.id)}>
            Request Quote
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-forest-900/60">
          <button className="inline-flex items-center gap-2 font-semibold hover:text-gold-700" type="button" onClick={() => onQuickView?.(product)}>
            <CheckSquare className="h-4 w-4" /> Quick view
          </button>
          <button
            className={cn("inline-flex items-center gap-2 font-semibold hover:text-gold-700", inComparison && "text-gold-700")}
            type="button"
            onClick={() => toggleComparison(product.id)}
          >
            <Scale className="h-4 w-4" /> {inComparison ? "Comparing" : "Compare"}
          </button>
        </div>
      </div>
    </article>
  );
}
