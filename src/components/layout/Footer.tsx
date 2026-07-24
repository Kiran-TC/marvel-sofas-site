import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { business, isPlaceholderContact } from "../../config/business";
import { collectionLinks } from "../../config/navigation";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="luxury-shell grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <img src={business.logo} alt={`${business.brandName} logo`} className="h-20 w-40 rounded-lg object-cover" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/68">
            Premium sofa and custom furniture manufacturing by SLV Industry's. Product names, contact details and testimonials are editable placeholders where source data is not supplied.
          </p>
          <Link className="btn-primary mt-6" to="/contact">
            Request a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <h3 className="font-semibold text-gold-100">Collections</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/68">
            {collectionLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-gold-100" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gold-100">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/68">
            {["About", "Manufacturing", "Projects", "Reviews", "FAQ", "Privacy", "Terms"].map((item) => (
              <li key={item}>
                <Link className="hover:text-gold-100" to={`/${item.toLowerCase() === "faq" ? "faq" : item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gold-100">Contact</h3>
          <div className="mt-4 space-y-4 text-sm text-white/70">
            <p className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 text-gold-300" />
              <span>
                {isPlaceholderContact(business.phone) ? "Phone placeholder" : business.phoneDisplay}
                {business.alternatePhones.map((item) => (
                  <span key={item.phone} className="block">
                    {item.display}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 text-gold-300" /> {isPlaceholderContact(business.email) ? "Email placeholder" : business.email}
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 text-gold-300" /> {isPlaceholderContact(business.address) ? "Address placeholder" : business.address}
            </p>
            <p>Business hours: {isPlaceholderContact(business.businessHours) ? "Placeholder" : business.businessHours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="luxury-shell flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {business.brandName}. Editable business information is kept in src/config/business.ts.</p>
          <a href={business.catalogueFile} className="hover:text-gold-100">
            View catalogue PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
