import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { useUserStore } from "../../store/useUserStore";

export function RecentlyViewed({ excludeId }: { excludeId?: string }) {
  const recentlyViewed = useUserStore((state) => state.recentlyViewed);
  const items = recentlyViewed
    .filter((id) => id !== excludeId)
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean)
    .slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section className="luxury-shell py-14">
      <h2 className="font-display text-4xl font-semibold text-forest-950">Recently viewed</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) =>
          product ? (
            <Link key={product.id} to={`/product/${product.slug}`} className="card overflow-hidden">
              <img src={product.images[0].thumb ?? product.images[0].src} alt="" className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <p className="text-sm font-semibold text-forest-950">{product.name}</p>
                <p className="mt-1 text-xs text-forest-900/55">{product.subcategory}</p>
              </div>
            </Link>
          ) : null,
        )}
      </div>
    </section>
  );
}
