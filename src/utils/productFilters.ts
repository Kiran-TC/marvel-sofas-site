import type { Product, ProductFilters } from "../types/product";

export const defaultFilters: ProductFilters = {
  query: "",
  categories: [],
  configurations: [],
  seating: [],
  upholstery: [],
  styles: [],
  colours: [],
  reclinerAvailability: "all",
  customisable: "all",
  roomTypes: [],
};

export const productSearchText = (product: Product) =>
  [
    product.name,
    product.category,
    product.subcategory,
    product.shortDescription,
    product.description,
    ...product.tags,
    ...product.configurationOptions,
    ...product.upholsteryOptions,
    ...product.colourFamilies,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const intersects = (values: string[] | undefined, selected: string[]) =>
  selected.length === 0 || Boolean(values?.some((value) => selected.includes(value)));

export const filterProducts = (products: Product[], filters: ProductFilters) => {
  const query = filters.query.trim().toLowerCase();
  return products.filter((product) => {
    if (query && !productSearchText(product).includes(query)) return false;
    if (filters.categories.length && !filters.categories.includes(product.category)) return false;
    if (!intersects(product.configurationOptions, filters.configurations)) return false;
    if (!intersects(product.seatingCapacity, filters.seating)) return false;
    if (!intersects(product.upholsteryOptions, filters.upholstery)) return false;
    if (!intersects(product.tags, filters.styles.map((style) => style.toLowerCase()))) return false;
    if (!intersects(product.colourFamilies, filters.colours)) return false;
    if (!intersects(product.roomTypes, filters.roomTypes)) return false;
    if (filters.reclinerAvailability === "yes" && !product.reclinerAvailable) return false;
    if (filters.reclinerAvailability === "no" && product.reclinerAvailable) return false;
    if (filters.customisable === "yes" && !product.customisable) return false;
    if (filters.customisable === "no" && product.customisable) return false;
    return true;
  });
};

export const sortProducts = (items: Product[], sort: string) => {
  const products = [...items];
  if (sort === "latest") return products.sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
  if (sort === "category") return products.sort((a, b) => a.category.localeCompare(b.category));
  if (sort === "name-asc") return products.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "name-desc") return products.sort((a, b) => b.name.localeCompare(a.name));
  return products.sort((a, b) => Number(b.featured) - Number(a.featured));
};

export const getFilterOptions = (products: Product[]) => ({
  configurations: [...new Set(products.flatMap((product) => product.configurationOptions))].sort(),
  seating: [...new Set(products.flatMap((product) => product.seatingCapacity ?? []))].sort(),
  upholstery: [...new Set(products.flatMap((product) => product.upholsteryOptions))].sort(),
  colours: [...new Set(products.flatMap((product) => product.colourFamilies))].sort(),
  roomTypes: [...new Set(products.flatMap((product) => product.roomTypes))].sort(),
  styles: ["Modern", "Minimal", "Luxury", "Classic", "Contemporary"],
});

export const recommendProducts = (
  products: Product[],
  answers: { type?: string; size?: string; upholstery?: string; style?: string },
) => {
  const typeMap: Record<string, string[]> = {
    "Standard sofa": ["living-room-sofas", "two-seater-sofas", "three-seater-sofas"],
    "L-shaped sofa": ["l-shaped-sofas", "corner-sectional-sofas", "modular-sofas"],
    Recliner: ["recliners", "recliner-sofa-sets", "theatre-recliners"],
    "Accent chair": ["accent-lounge-chairs"],
    "Dining chair": ["dining-chairs"],
    "Bed or headboard": ["bedroom-cots", "upholstered-beds", "designer-headboards"],
  };
  const preferredCategories = answers.type ? typeMap[answers.type] ?? [] : [];
  return products
    .map((product) => {
      let score = 0;
      if (preferredCategories.includes(product.category)) score += 5;
      if (answers.upholstery && product.upholsteryOptions.includes(answers.upholstery)) score += 2;
      if (answers.style && productSearchText(product).includes(answers.style.toLowerCase())) score += 1;
      if (answers.size === "Compact" && product.seatingCapacity?.some((seat) => seat.includes("1") || seat.includes("2"))) score += 2;
      if (answers.size === "Large" && product.seatingCapacity?.some((seat) => seat.includes("5+") || seat.includes("Custom"))) score += 2;
      return { product, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ product }) => product);
};
