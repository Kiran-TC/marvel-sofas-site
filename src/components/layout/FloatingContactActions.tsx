import { MessageCircle, PhoneCall } from "lucide-react";
import { business, isPlaceholderContact } from "../../config/business";
import { useUserStore } from "../../store/useUserStore";
import { getWhatsAppUrl, buildWhatsAppMessage } from "../../utils/whatsapp";

export function FloatingContactActions() {
  const openQuote = useUserStore((state) => state.openQuote);
  const whatsappUrl = getWhatsAppUrl(buildWhatsAppMessage({}));

  return (
    <div className="fixed bottom-5 right-4 z-50 hidden flex-col gap-3 md:flex">
      <button className="btn-primary shadow-soft" type="button" onClick={() => openQuote()}>
        Quote
      </button>
      {whatsappUrl ? (
        <a className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-white shadow-soft" href={whatsappUrl} aria-label="Open WhatsApp enquiry">
          <MessageCircle className="h-5 w-5" />
        </a>
      ) : (
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-white/70 shadow-soft" type="button" title="Add WhatsApp number in business config">
          <MessageCircle className="h-5 w-5" />
        </button>
      )}
      <a
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest-950 shadow-soft"
        href={isPlaceholderContact(business.phone) ? "/contact" : `tel:${business.phone}`}
        aria-label="Call Marvel Sofa's"
      >
        <PhoneCall className="h-5 w-5" />
      </a>
    </div>
  );
}
