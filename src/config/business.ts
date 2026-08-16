import { assetPath } from "../utils/assetPath";

export const business = {
  brandName: "Marvel Sofa's",
  companyName: "SLV Industry's",
  tagline: "Premium sofas and custom furniture, thoughtfully manufactured by SLV Industry's.",
  phone: "+919008494210",
  phoneDisplay: "+91 90084 94210",
  alternatePhones: [
    {
      phone: "+918884309152",
      display: "+91 88843 09152",
    },
  ],
  whatsapp: "+919008494210",
  whatsappDisplay: "+91 90084 94210",
  email: "",
  address: "",
  googleMapsUrl: "",
  businessHours: "",
  catalogueFile: assetPath("/assets/documents/slv-industries-marvel-sofas-catalogue.pdf"),
  logo: assetPath("/assets/brand/marvel-sofas-logo-card.webp"),
  socialLinks: {
    instagram: "",
    facebook: "",
    youtube: "",
    linkedin: "",
  },
};

export const isPlaceholderContact = (value: string) =>
  !value.trim() || value.startsWith("EDIT_") || value.includes("example.com");
