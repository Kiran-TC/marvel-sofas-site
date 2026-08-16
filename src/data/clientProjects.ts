import type { ProductImage } from "../types/product";
import { assetPath } from "../utils/assetPath";

// Image credit/source: client-supplied Marvel Sofa's installation photos from
// /Users/vanasol/Downloads/sofa images/. No external stock images are used.
const imagePath = (id: string) => assetPath(`/assets/client-projects/marvel-installation-${id}.webp`);
const thumbPath = (id: string) => assetPath(`/assets/client-projects/marvel-installation-${id}-thumb.webp`);

export type ClientProject = {
  id: string;
  title: string;
  room: string;
  mood: string;
  image: string;
  thumb: string;
  alt: string;
};

const project = (id: string, title: string, room: string, mood: string, alt: string): ClientProject => ({
  id,
  title,
  room,
  mood,
  image: imagePath(id),
  thumb: thumbPath(id),
  alt,
});

export const clientProjects: ClientProject[] = [
  project("01", "Ivory Console Sofa", "Apartment lounge", "Console detail", "Ivory two seat sofa with built in side console details"),
  project("02", "Cream L-Shaped Lounge", "Family living room", "Calm neutral", "Cream L-shaped sofa set arranged around a centre table"),
  project("03", "Grey Sectional Profile", "Custom sectional", "Side profile", "Grey sectional sofa photographed from the side"),
  project("04", "Beige Recliner Lounge", "Living room", "Relaxed comfort", "Beige recliner sofa with matching lounge chair"),
  project("05", "Cream Sofa With Consoles", "Formal lounge", "Polished ivory", "Cream sofa with side consoles placed near a window"),
  project("06", "Twin Beige Sofa Room", "Residential living room", "Everyday comfort", "Two beige sofas arranged in a bright living room"),
  project("07", "Cognac Corner Lounge", "Living room", "Warm leather look", "Cognac corner sofa set in a living room"),
  project("08", "Silver Grey Three-Seater", "Compact lounge", "Clean modern", "Silver grey three seat sofa with slim legs"),
  project("09", "Teal Villa Lounge Set", "Villa lounge", "Statement room", "Teal sofa set with ottomans in a wood panelled villa lounge"),
  project("10", "Wine Chaise Sectional", "Family room", "Bold lounge", "Wine coloured sectional sofa with chaise and centre table"),
  project("11", "Slate Adjustable Sofa", "Modern lounge", "Slim profile", "Slate grey sofa with adjustable headrest style"),
  project("12", "Mustard Sectional Lounge", "Bright living room", "Colour statement", "Mustard yellow sectional sofa set in a spacious room"),
  project("13", "White Low Lounge Set", "Minimal living room", "Soft white", "White low profile lounge set with chaise"),
  project("14", "Tan Formal Sofa Set", "High-rise lounge", "Classic tan", "Tan sofa set arranged near a balcony window"),
  project("15", "Burgundy Chesterfield Sofa", "Statement seating", "Tufted classic", "Burgundy chesterfield style sofa with rolled arms"),
  project("16", "White Chaise Sectional", "Living room", "Open layout", "White sectional sofa with chaise and ottoman"),
  project("17", "Ivory Sectional Console", "Premium lounge", "Integrated console", "Ivory sectional sofa with central console and chaise"),
  project("18", "Brown Compact Sectional", "Custom corner", "Deep neutral", "Brown compact L-shaped sectional sofa"),
  project("19", "Cream Lounge With Ottomans", "Entertainment room", "Layered seating", "Cream sectional lounge with ottomans and centre table"),
  project("20", "Ivory Corner Sectional", "Living room", "Raised headrests", "Ivory corner sectional sofa with adjustable headrest styling"),
  project("21", "Teal Single Recliner", "Personal lounge", "Relax chair", "Teal single recliner chair beside a sofa"),
  project("22", "Camel Chaise Sectional", "Family lounge", "Warm custom", "Camel coloured sectional sofa with chaise and ottoman"),
  project("23", "Coffee Modular Sectional", "Large lounge", "Deep comfort", "Coffee brown modular sectional sofa with ottoman"),
  project("24", "Beige Corner Sofa Set", "Formal living room", "Balanced layout", "Beige corner sofa set with a glass table"),
  project("25", "Blush Sectional Top View", "Custom room", "Layout planning", "Blush sectional sofa photographed from above"),
  project("26", "Ivory Workshop Sectional", "Custom sectional", "Factory reference", "Ivory sectional sofa in a workshop space"),
  project("27", "Blue Lounge Set", "Bright living room", "Bold blue", "Blue sofa set with matching ottomans and cushions"),
  project("28", "Ivory Corner Lounge", "Family living room", "Soft neutral", "Ivory corner sofa set in a home living room"),
  project("29", "Taupe Family Sectional", "Family lounge", "Warm minimal", "Taupe sectional sofa with chaise and matching table"),
  project("30", "Quilted Ivory Sectional", "Premium custom", "Detail finish", "Ivory sectional sofa with quilted side detailing"),
  project("31", "Ivory Raised-Headrest Lounge", "Premium living room", "Showpiece layout", "Ivory sectional sofa with raised headrests against wood panelling"),
  project("32", "Client Handover Lounge", "Finished home", "Scale reference", "Family seated on an ivory sectional sofa in a finished room"),
];

export const featuredClientProjects = clientProjects.filter((item) =>
  ["31", "20", "09", "27", "29", "19"].includes(item.id),
);

export const projectImages: ProductImage[] = clientProjects.map((item) => ({
  src: item.image,
  thumb: item.thumb,
  alt: item.alt,
}));
