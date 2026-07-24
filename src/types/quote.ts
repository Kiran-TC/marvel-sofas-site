export type QuoteFormValues = {
  fullName: string;
  phone: string;
  email?: string;
  city: string;
  product?: string;
  productCategory?: string;
  seatingRequirement?: string;
  roomDimensions?: string;
  upholsteryPreference?: string;
  colourPreference?: string;
  budgetRange?: string;
  quantity: number;
  projectType: "Residential" | "Commercial";
  preferredContact: "Phone" | "WhatsApp" | "Email";
  deliveryTimeline?: string;
  additionalNotes?: string;
  consent: boolean;
};

export type QuoteResult = {
  reference: string;
  whatsappUrl?: string;
  mailtoUrl?: string;
};
