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
  preferredContact: "WhatsApp" | "SMS" | "Phone" | "Email";
  deliveryTimeline?: string;
  additionalNotes?: string;
  consent: boolean;
};

export type QuoteResult = {
  reference: string;
  message: string;
  whatsappUrl?: string;
  smsUrl?: string;
  phoneUrl?: string;
  mailtoUrl?: string;
};
