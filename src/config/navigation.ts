import type { ProductCategory } from "../types/product";

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Collections", href: "/catalogue", hasMegaMenu: true },
  { label: "Customise", href: "/customise" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const collectionLinks: { label: string; href: string; category: ProductCategory }[] = [
  { label: "Living Room Sofas", href: "/catalogue/living-room-sofas", category: "living-room-sofas" },
  { label: "L-Shaped & Sectionals", href: "/catalogue/l-shaped-sofas", category: "l-shaped-sofas" },
  { label: "Recliners", href: "/catalogue/recliners", category: "recliners" },
  { label: "Accent Chairs", href: "/catalogue/accent-lounge-chairs", category: "accent-lounge-chairs" },
  { label: "Dining Chairs", href: "/catalogue/dining-chairs", category: "dining-chairs" },
  { label: "Beds & Headboards", href: "/catalogue/upholstered-beds", category: "upholstered-beds" },
];
