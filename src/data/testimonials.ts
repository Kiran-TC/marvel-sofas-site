import { assetPath } from "../utils/assetPath";

export type Testimonial = {
  id: string;
  customerName: string;
  location: string;
  productCategory: string;
  rating: number;
  text: string;
  verified: boolean;
  sample: boolean;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    customerName: "Customer name placeholder",
    location: "Location placeholder",
    productCategory: "Custom sectional sofa",
    rating: 5,
    sample: true,
    verified: false,
    image: assetPath("/assets/projects/factory-sectional-stone-01.webp"),
    text: "Sample testimonial - replace with verified customer review. The custom layout matched our room plan and the team helped us choose a calmer upholstery tone.",
  },
  {
    id: "sample-2",
    customerName: "Customer name placeholder",
    location: "Location placeholder",
    productCategory: "Recliner lounge",
    rating: 4,
    sample: true,
    verified: false,
    image: assetPath("/assets/projects/factory-ivory-recliner-lounge-01.webp"),
    text: "Sample testimonial - replace with verified customer review. The recliner configuration felt comfortable during selection and the finish direction suited our home.",
  },
  {
    id: "sample-3",
    customerName: "Customer name placeholder",
    location: "Location placeholder",
    productCategory: "Bedroom headboard",
    rating: 5,
    sample: true,
    verified: false,
    text: "Sample testimonial - replace with verified customer review. The made-to-order headboard approach helped us discuss proportions before finalising the room.",
  },
];
