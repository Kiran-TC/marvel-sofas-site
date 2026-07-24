export type ProductCategory =
  | "living-room-sofas"
  | "three-seater-sofas"
  | "two-seater-sofas"
  | "l-shaped-sofas"
  | "corner-sectional-sofas"
  | "modular-sofas"
  | "recliners"
  | "recliner-sofa-sets"
  | "theatre-recliners"
  | "accent-lounge-chairs"
  | "dining-chairs"
  | "bedroom-cots"
  | "upholstered-beds"
  | "designer-headboards"
  | "office-sofas"
  | "custom-furniture";

export type ProductImage = {
  src: string;
  thumb?: string;
  alt: string;
  cataloguePage?: number;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  marketingNameEditable?: boolean;
  modelCode?: string;
  category: ProductCategory;
  subcategory?: string;
  shortDescription: string;
  description: string;
  images: ProductImage[];
  features: string[];
  upholsteryOptions: string[];
  colourFamilies: string[];
  configurationOptions: string[];
  seatingCapacity?: string[];
  roomTypes: string[];
  customisable: boolean;
  featured: boolean;
  newArrival?: boolean;
  reclinerAvailable?: boolean;
  specifications: ProductSpecification[];
  cataloguePage?: number;
  tags: string[];
};

export type Category = {
  id: ProductCategory;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  href: string;
  roomTypes: string[];
};

export type ProductFilters = {
  query: string;
  categories: ProductCategory[];
  configurations: string[];
  seating: string[];
  upholstery: string[];
  styles: string[];
  colours: string[];
  reclinerAvailability: "all" | "yes" | "no";
  customisable: "all" | "yes" | "no";
  roomTypes: string[];
};
