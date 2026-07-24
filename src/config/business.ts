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
  email: "EDIT_EMAIL@example.com",
  address: "EDIT_ADDRESS",
  googleMapsUrl: "EDIT_GOOGLE_MAPS_URL",
  businessHours: "EDIT_BUSINESS_HOURS",
  catalogueFile: "/assets/documents/slv-industries-marvel-sofas-catalogue.pdf",
  logo: "/assets/brand/marvel-sofas-logo-card.webp",
  socialLinks: {
    instagram: "EDIT_INSTAGRAM_URL",
    facebook: "EDIT_FACEBOOK_URL",
    youtube: "EDIT_YOUTUBE_URL",
    linkedin: "EDIT_LINKEDIN_URL",
  },
};

export const isPlaceholderContact = (value: string) =>
  value.startsWith("EDIT_") || value.includes("example.com");
