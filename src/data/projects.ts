import { assetPath } from "../utils/assetPath";

const clientImage = (id: string) => assetPath(`/assets/client-projects/marvel-installation-${id}.webp`);

export const projectCards = [
  {
    id: "ivory-headrest-sectional",
    title: "Ivory Headrest Sectional",
    label: "Completed home installation",
    type: "Premium living room",
    image: clientImage("31"),
    description: "A clean ivory sectional with raised headrests, slim legs and a warm wall-panel backdrop.",
  },
  {
    id: "blue-family-lounge",
    title: "Blue Family Lounge Set",
    label: "Completed home installation",
    type: "Living room lounge",
    image: clientImage("27"),
    description: "A bold blue seating set with matching ottomans and contrast cushions for a bright room.",
  },
  {
    id: "formal-villa-lounge",
    title: "Formal Villa Lounge",
    label: "Completed home installation",
    type: "Villa lounge",
    image: clientImage("09"),
    description: "Dark green lounge seating, ottomans and centre table styling for a more formal room.",
  },
  {
    id: "warm-chaise-sectional",
    title: "Warm Chaise Sectional",
    label: "Completed home installation",
    type: "Family living room",
    image: clientImage("29"),
    description: "A neutral chaise-end sectional that keeps the room open while adding generous seating.",
  },
  {
    id: "console-sectional",
    title: "Console Sectional Detail",
    label: "Workshop-ready installation",
    type: "Custom sectional",
    image: clientImage("30"),
    description: "A quilted side detail and broad chaise layout for customers comparing premium finishes.",
  },
  {
    id: "client-handover-lounge",
    title: "Client Handover Lounge",
    label: "Finished customer room",
    type: "Residential lounge",
    image: clientImage("32"),
    description: "A finished ivory sectional shown with the family, useful for scale and seating reference.",
  },
];
