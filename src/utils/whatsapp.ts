import { business, isPlaceholderContact } from "../config/business";
import type { Product } from "../types/product";
import type { QuoteFormValues } from "../types/quote";

export const buildWhatsAppMessage = (input: {
  product?: Product | { id?: string; name?: string };
  city?: string;
  configuration?: string;
  category?: string;
}) => {
  const productName = input.product?.name ?? "a custom furniture enquiry";
  const productReference = input.product?.id ?? "not selected";
  const city = input.city?.trim() || "[City]";
  const configuration = input.configuration?.trim() || "[Configuration]";
  return `Hello Marvel Sofa's, I would like a quotation for ${productName}. Product reference: ${productReference}. I am located in ${city}. My preferred configuration is ${configuration}. Please contact me regarding customisation and pricing.`;
};

export const getWhatsAppUrl = (message: string) => {
  if (isPlaceholderContact(business.whatsapp)) return undefined;
  const phone = business.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const buildQuoteMessage = (values: QuoteFormValues, reference: string) =>
  [
    `Hello Marvel Sofa's, I would like to request a quotation.`,
    ``,
    `Reference: ${reference}`,
    `Name: ${values.fullName}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email || "Not provided"}`,
    `City: ${values.city}`,
    `Product: ${values.product || "Custom furniture enquiry"}`,
    `Category: ${values.productCategory || "Not selected"}`,
    `Seating requirement: ${values.seatingRequirement || "Not provided"}`,
    `Room dimensions: ${values.roomDimensions || "Not provided"}`,
    `Upholstery preference: ${values.upholsteryPreference || "Not decided"}`,
    `Colour preference: ${values.colourPreference || "Not decided"}`,
    `Budget range: ${values.budgetRange || "Not provided"}`,
    `Quantity: ${values.quantity}`,
    `Project type: ${values.projectType}`,
    `Preferred contact: ${values.preferredContact}`,
    `Timeline: ${values.deliveryTimeline || "Not provided"}`,
    `Notes: ${values.additionalNotes || "None"}`,
    ``,
    `Please contact me with the next steps.`,
  ].join("\n");

export const getSmsUrl = (message: string) => {
  if (isPlaceholderContact(business.phone)) return undefined;
  return `sms:${business.phone}?&body=${encodeURIComponent(message)}`;
};

export const getPhoneUrl = () => {
  if (isPlaceholderContact(business.phone)) return undefined;
  return `tel:${business.phone}`;
};

export const buildQuoteMailto = (values: QuoteFormValues, reference: string) => {
  if (isPlaceholderContact(business.email)) return undefined;
  const subject = encodeURIComponent(`Quotation enquiry ${reference} - ${values.fullName}`);
  const body = encodeURIComponent(buildQuoteMessage(values, reference));
  return `mailto:${business.email}?subject=${subject}&body=${body}`;
};
