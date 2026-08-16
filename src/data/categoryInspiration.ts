import type { ProductCategory } from "../types/product";

export type CategoryInspirationImage = {
  title: string;
  image: string;
  sourceUrl: string;
  credit: string;
  alt: string;
};

const unsplash = (id: string) => `https://unsplash.com/photos/${id}/download?force=true&w=1200`;
const source = (id: string) => `https://unsplash.com/photos/${id}`;

// Internet inspiration image credits:
// Photos are loaded from Unsplash photo download URLs and each item stores the
// photographer/source page for attribution. These are design mood references,
// not Marvel Sofa's completed client projects.
export const categoryInspirations: Partial<Record<ProductCategory, CategoryInspirationImage[]>> = {
  "living-room-sofas": [
    {
      title: "Warm Leather Lounge",
      image: unsplash("umAXneH4GhA"),
      sourceUrl: source("umAXneH4GhA"),
      credit: "Photo by Spacejoy on Unsplash",
      alt: "Living room with tan leather sectional sofa",
    },
    {
      title: "Calm Apartment Sofa",
      image: unsplash("mcL2f-J74GY"),
      sourceUrl: source("mcL2f-J74GY"),
      credit: "Photo by armin djuhic on Unsplash",
      alt: "Apartment living room with sofa and warm decor",
    },
    {
      title: "Soft Modern Seating",
      image: unsplash("Z4_CjYX1mj4"),
      sourceUrl: source("Z4_CjYX1mj4"),
      credit: "Photo by Bofu Shaw on Unsplash",
      alt: "Modern living room with soft sofa and natural light",
    },
  ],
  "l-shaped-sofas": [
    {
      title: "Open Sectional Room",
      image: unsplash("9z9Uq4u5whg"),
      sourceUrl: source("9z9Uq4u5whg"),
      credit: "Photo by Franco Debartolo on Unsplash",
      alt: "Modern living room with sectional sofa and wide window",
    },
    {
      title: "Relaxed Corner Layout",
      image: unsplash("JXFBzeZwqx8"),
      sourceUrl: source("JXFBzeZwqx8"),
      credit: "Photo by Lotus Design N Print on Unsplash",
      alt: "Living room with L-shaped sofa and warm neutral styling",
    },
    {
      title: "Bright Sectional Lounge",
      image: unsplash("yxO8YG082v8"),
      sourceUrl: source("yxO8YG082v8"),
      credit: "Photo by Aalo Lens on Unsplash",
      alt: "Modern living room with sectional sofa and large window",
    },
  ],
  recliners: [
    {
      title: "Personal Lounge Chair",
      image: unsplash("TkmajGxAtmg"),
      sourceUrl: source("TkmajGxAtmg"),
      credit: "Photo by Spencer Plouzek on Unsplash",
      alt: "Comfort lounge chair in a refined interior",
    },
    {
      title: "Reading Chair Corner",
      image: unsplash("-jdYdugsLHQ"),
      sourceUrl: source("-jdYdugsLHQ"),
      credit: "Photo by Costa Live on Unsplash",
      alt: "Comfortable chair setup for a reading corner",
    },
    {
      title: "Soft Recliner Mood",
      image: unsplash("KL_xnnjbRgs"),
      sourceUrl: source("KL_xnnjbRgs"),
      credit: "Photo by Clay Banks on Unsplash",
      alt: "Soft lounge chair in a calm home interior",
    },
  ],
  "accent-lounge-chairs": [
    {
      title: "Green Accent Chair",
      image: unsplash("jiujwN-iJQs"),
      sourceUrl: source("jiujwN-iJQs"),
      credit: "Photo by Aleksandra Dementeva on Unsplash",
      alt: "Green velvet armchair used as an accent chair",
    },
    {
      title: "Compact Reading Seat",
      image: unsplash("BUjgjzzAEoQ"),
      sourceUrl: source("BUjgjzzAEoQ"),
      credit: "Photo by The IOP on Unsplash",
      alt: "Accent lounge chair beside a small table",
    },
    {
      title: "Layered Lounge Corner",
      image: unsplash("DmfVdT2ZCS0"),
      sourceUrl: source("DmfVdT2ZCS0"),
      credit: "Photo by Franco Debartolo on Unsplash",
      alt: "Lounge chair in a layered interior corner",
    },
  ],
  "dining-chairs": [
    {
      title: "Formal Dining Set",
      image: unsplash("STEJrM1oXdM"),
      sourceUrl: source("STEJrM1oXdM"),
      credit: "Photo by Yuhei Abe Studio on Unsplash",
      alt: "Dining table with upholstered chairs in a formal room",
    },
    {
      title: "Studio Dining Chairs",
      image: unsplash("AG81hQM0rXw"),
      sourceUrl: source("AG81hQM0rXw"),
      credit: "Photo by Costa Live on Unsplash",
      alt: "Dining room table with coordinated chairs",
    },
    {
      title: "Modern Dining Mood",
      image: unsplash("urH155LONWs"),
      sourceUrl: source("urH155LONWs"),
      credit: "Photo by Clay Banks on Unsplash",
      alt: "Modern dining room with upholstered chair styling",
    },
  ],
  "upholstered-beds": [
    {
      title: "Neutral Bedroom",
      image: unsplash("ZR102ZpCsGA"),
      sourceUrl: source("ZR102ZpCsGA"),
      credit: "Photo by Ahmed Nishaath on Unsplash",
      alt: "Neutral bedroom with upholstered bed styling",
    },
    {
      title: "Soft Headboard Setting",
      image: unsplash("xElCI6haG60"),
      sourceUrl: source("xElCI6haG60"),
      credit: "Photo by Guillaume Didelet on Unsplash",
      alt: "Bedroom with soft headboard and layered bedding",
    },
    {
      title: "Warm Bed Room",
      image: unsplash("CMQoWyJlIJE"),
      sourceUrl: source("CMQoWyJlIJE"),
      credit: "Photo by Lucas de Moura on Unsplash",
      alt: "Warm bedroom interior with bed and headboard styling",
    },
  ],
};
