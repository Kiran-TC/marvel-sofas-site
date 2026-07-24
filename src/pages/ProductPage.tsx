import { Heart, MessageCircle, Phone, Scale, Share2 } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/common/Seo";
import { ProductGallery } from "../components/product/ProductGallery";
import { RecentlyViewed } from "../components/product/RecentlyViewed";
import { RelatedProducts } from "../components/product/RelatedProducts";
import { faqs } from "../data/faqs";
import { products } from "../data/products";
import { business, isPlaceholderContact } from "../config/business";
import { useUserStore } from "../store/useUserStore";
import { buildWhatsAppMessage, getWhatsAppUrl } from "../utils/whatsapp";

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const addRecentlyViewed = useUserStore((state) => state.addRecentlyViewed);
  const openQuote = useUserStore((state) => state.openQuote);
  const toggleFavourite = useUserStore((state) => state.toggleFavourite);
  const toggleComparison = useUserStore((state) => state.toggleComparison);
  const favourites = useUserStore((state) => state.favourites);
  const inFavourite = product ? favourites.includes(product.id) : false;

  useEffect(() => {
    if (product) addRecentlyViewed(product.id);
  }, [product, addRecentlyViewed]);

  if (!product) {
    return (
      <section className="min-h-screen bg-ivory pt-32">
        <div className="luxury-shell">
          <h1 className="font-display text-5xl text-forest-950">Product not found.</h1>
          <Link className="btn-primary mt-6" to="/catalogue">Back to catalogue</Link>
        </div>
      </section>
    );
  }

  const whatsappUrl = getWhatsAppUrl(buildWhatsAppMessage({ product }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((image) => image.src),
    brand: { "@type": "Brand", name: business.brandName },
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock", description: "Price available on request" },
  };

  return (
    <>
      <Seo title={product.name} description={product.shortDescription} path={`/product/${product.slug}`} image={product.images[0].src} structuredData={structuredData} />
      <section className="bg-ivory pb-10 pt-24 sm:pt-28">
        <div className="luxury-shell">
          <div className="mb-6 text-sm text-forest-900/55">
            <Link to="/">Home</Link> / <Link to="/catalogue">Catalogue</Link> / <span>{product.name}</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <ProductGallery images={product.images} productName={product.name} />
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="eyebrow">{product.subcategory}</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-forest-950 sm:text-5xl">{product.name}</h1>
              {product.marketingNameEditable ? <p className="mt-2 text-xs text-forest-900/50">Editable marketing name - replace if an official model name is supplied.</p> : null}
              <p className="mt-5 text-lg leading-8 text-forest-900/68">{product.description}</p>
              <p className="mt-5 rounded-lg bg-gold-100 px-4 py-3 text-sm font-semibold text-gold-700">Price available on request</p>
              <div className="mt-6 grid gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="rounded-lg border border-forest-900/10 bg-white px-4 py-3 text-sm text-forest-900/70">{feature}</div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button className="btn-primary" type="button" onClick={() => openQuote(product.id)}>Request Quote</button>
                {whatsappUrl ? <a className="btn-ghost" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp enquiry</a> : <button className="btn-ghost" type="button" title="Add WhatsApp number in business config"><MessageCircle className="h-4 w-4" /> WhatsApp placeholder</button>}
                <a className="btn-ghost" href={isPlaceholderContact(business.phone) ? "/contact" : `tel:${business.phone}`}><Phone className="h-4 w-4" /> Phone enquiry</a>
                <a className="btn-ghost" href={business.catalogueFile}><Share2 className="h-4 w-4" /> View catalogue</a>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="btn-ghost" type="button" onClick={() => toggleFavourite(product.id)}><Heart className={`h-4 w-4 ${inFavourite ? "fill-current" : ""}`} /> Favourite</button>
                <button className="btn-ghost" type="button" onClick={() => toggleComparison(product.id)}><Scale className="h-4 w-4" /> Compare</button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="luxury-shell grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <InfoBlock title="Product overview">{product.description}</InfoBlock>
            <InfoBlock title="Features">{product.features.join(", ")}.</InfoBlock>
            <InfoBlock title="Material options">{product.upholsteryOptions.join(", ")}. Contact manufacturer for material options.</InfoBlock>
            <InfoBlock title="Dimensions and specifications">Final dimensions, upholstery, foam density and configuration will be confirmed during consultation.</InfoBlock>
            <InfoBlock title="Customisation possibilities">{product.configurationOptions.join(", ")}. Custom dimensions available.</InfoBlock>
            <InfoBlock title="Manufacturing process">Requirement consultation, space review, configuration, material selection, production, upholstery finishing, quality inspection and delivery coordination.</InfoBlock>
            <InfoBlock title="Care instructions">Use manufacturer-recommended upholstery care after material selection. Avoid harsh chemicals unless approved for the chosen fabric or leather finish.</InfoBlock>
            <InfoBlock title="Delivery and installation note">Delivery coordination and installation approach are confirmed after quotation, access review and final order details.</InfoBlock>
          </div>
          <div className="h-fit rounded-lg bg-ivory p-5">
            <h2 className="font-display text-3xl font-semibold text-forest-950">At a glance</h2>
            <dl className="mt-5 space-y-3 text-sm">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 border-b border-forest-900/10 pb-2">
                  <dt className="text-forest-900/55">{spec.label}</dt>
                  <dd className="text-right font-semibold text-forest-950">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.colourFamilies.map((colour) => <span key={colour} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-forest-900/65">{colour}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="luxury-shell">
          <h2 className="font-display text-4xl font-semibold text-forest-950">Product FAQs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="rounded-lg bg-white p-5">
                <summary className="cursor-pointer font-semibold text-forest-950">{faq.question}</summary>
                <p className="mt-3 text-sm leading-6 text-forest-900/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
      <RecentlyViewed excludeId={product.id} />

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-forest-900/10 bg-white p-2 shadow-soft md:hidden">
        <a className="btn-ghost rounded-md" href={isPlaceholderContact(business.phone) ? "/contact" : `tel:${business.phone}`}>Call</a>
        {whatsappUrl ? <a className="btn-ghost rounded-md" href={whatsappUrl}>WhatsApp</a> : <button className="btn-ghost rounded-md" type="button">WhatsApp</button>}
        <button className="btn-primary rounded-md" type="button" onClick={() => openQuote(product.id)}>Quote</button>
      </div>
    </>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article>
      <h2 className="font-display text-3xl font-semibold text-forest-950">{title}</h2>
      <p className="mt-3 leading-7 text-forest-900/68">{children}</p>
    </article>
  );
}
