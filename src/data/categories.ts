import type { Category } from "../types/product";
import { assetPath } from "../utils/assetPath";

export const categories: Category[] = [
  {
    id: "living-room-sofas",
    title: "Living Room Sofas",
    shortTitle: "Sofas",
    description: "Comfort-led seating for everyday living rooms, formal lounges and family spaces.",
    image: assetPath("/assets/catalogue/blue-horizon-sofa-01.webp"),
    href: "/catalogue/living-room-sofas",
    roomTypes: ["Living room", "Apartment", "Villa"],
  },
  {
    id: "l-shaped-sofas",
    title: "L-Shaped & Sectional Sofas",
    shortTitle: "Sectionals",
    description: "Extended lounge layouts with chaise, corner and modular options for large rooms.",
    image: assetPath("/assets/projects/factory-sectional-stone-01.webp"),
    href: "/catalogue/l-shaped-sofas",
    roomTypes: ["Living room", "Villa", "Home theatre"],
  },
  {
    id: "recliners",
    title: "Recliners",
    shortTitle: "Recliners",
    description: "Manual and electric-feel comfort concepts for individual relaxation and media rooms.",
    image: assetPath("/assets/catalogue/azure-recliner-chair-01.webp"),
    href: "/catalogue/recliners",
    roomTypes: ["Bedroom", "Home theatre", "Lounge"],
  },
  {
    id: "accent-lounge-chairs",
    title: "Accent & Lounge Chairs",
    shortTitle: "Accent Chairs",
    description: "Statement chairs, wing chairs and compact lounge pieces for layered interiors.",
    image: assetPath("/assets/catalogue/cognac-wing-chair-01.webp"),
    href: "/catalogue/accent-lounge-chairs",
    roomTypes: ["Living room", "Bedroom", "Office"],
  },
  {
    id: "dining-chairs",
    title: "Dining Chairs",
    shortTitle: "Dining",
    description: "Upholstered dining chairs with clean forms, soft backs and coordinated finishes.",
    image: assetPath("/assets/catalogue/dining-room-chair-set-01.webp"),
    href: "/catalogue/dining-chairs",
    roomTypes: ["Dining room", "Apartment", "Villa"],
  },
  {
    id: "upholstered-beds",
    title: "Beds & Headboards",
    shortTitle: "Beds",
    description: "Bedroom cots, upholstered bed bases and designer headboards made to order.",
    image: assetPath("/assets/catalogue/diamond-headboard-bed-01.webp"),
    href: "/catalogue/upholstered-beds",
    roomTypes: ["Bedroom", "Villa", "Apartment"],
  },
];
