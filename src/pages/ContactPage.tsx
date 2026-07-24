import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Seo } from "../components/common/Seo";
import { QuoteWizard } from "../components/quote/QuoteWizard";
import { business, isPlaceholderContact } from "../config/business";

export default function ContactPage() {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: isPlaceholderContact(business.phone)
        ? "Phone placeholder"
        : [business.phoneDisplay, ...business.alternatePhones.map((item) => item.display)].join(" | "),
    },
    { icon: MessageCircle, label: "WhatsApp", value: isPlaceholderContact(business.whatsapp) ? "WhatsApp placeholder" : business.whatsappDisplay },
    { icon: Mail, label: "Email", value: isPlaceholderContact(business.email) ? "Email placeholder" : business.email },
    { icon: MapPin, label: "Address", value: isPlaceholderContact(business.address) ? "Address placeholder" : business.address },
  ];

  return (
    <>
      <Seo title="Contact and Quote" path="/contact" />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-6xl font-semibold">Request a manufacturing quote.</h1>
          <p className="mt-5 max-w-2xl text-white/70">All contact fields are editable in the central business configuration file.</p>
        </div>
      </section>
      <section className="bg-ivory py-16">
        <div className="luxury-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card p-5">
                <Icon className="h-6 w-6 text-gold-500" />
                <h2 className="mt-3 font-semibold text-forest-950">{label}</h2>
                <p className="mt-1 text-sm text-forest-900/65">{value}</p>
              </div>
            ))}
          </aside>
          <QuoteWizard />
        </div>
      </section>
    </>
  );
}
