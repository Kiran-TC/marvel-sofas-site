import type { QuoteFormValues, QuoteResult } from "../types/quote";
import { buildQuoteMailto, buildQuoteMessage, getPhoneUrl, getSmsUrl, getWhatsAppUrl } from "../utils/whatsapp";

export const submitQuote = async (values: QuoteFormValues): Promise<QuoteResult> => {
  await new Promise((resolve) => window.setTimeout(resolve, 450));
  const reference = `MS-${Date.now().toString(36).toUpperCase()}`;

  const message = buildQuoteMessage(values, reference);

  return {
    reference,
    message,
    whatsappUrl: getWhatsAppUrl(message),
    smsUrl: getSmsUrl(message),
    phoneUrl: getPhoneUrl(),
    mailtoUrl: buildQuoteMailto(values, reference),
  };
};
