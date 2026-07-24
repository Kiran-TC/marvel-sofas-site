import { z } from "zod";

export const quoteSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email.").optional().or(z.literal("")),
  city: z.string().min(2, "Please enter your city."),
  product: z.string().optional(),
  productCategory: z.string().optional(),
  seatingRequirement: z.string().optional(),
  roomDimensions: z.string().optional(),
  upholsteryPreference: z.string().optional(),
  colourPreference: z.string().optional(),
  budgetRange: z.string().optional(),
  quantity: z.number().min(1, "Quantity must be at least 1."),
  projectType: z.enum(["Residential", "Commercial"]),
  preferredContact: z.enum(["Phone", "WhatsApp", "Email"]),
  deliveryTimeline: z.string().optional(),
  additionalNotes: z.string().optional(),
  consent: z.boolean().refine((value) => value, "Please confirm consent before sending the enquiry."),
});

export type QuoteSchemaValues = z.infer<typeof quoteSchema>;
