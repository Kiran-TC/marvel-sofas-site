import type { QuoteFormValues, QuoteResult } from "../types/quote";
import { buildQuoteMailto, buildWhatsAppMessage, getWhatsAppUrl } from "../utils/whatsapp";

export const submitQuote = async (values: QuoteFormValues): Promise<QuoteResult> => {
  await new Promise((resolve) => window.setTimeout(resolve, 450));
  const reference = `MS-${Date.now().toString(36).toUpperCase()}`;

  // This project intentionally sends enquiries through WhatsApp and email links.
  const whatsappMessage = buildWhatsAppMessage({
    product: { name: values.product, id: values.product },
    city: values.city,
    category: values.productCategory,
    configuration: values.seatingRequirement,
  });

  return {
    reference,
    whatsappUrl: getWhatsAppUrl(whatsappMessage),
    mailtoUrl: buildQuoteMailto(values, reference),
  };
};
