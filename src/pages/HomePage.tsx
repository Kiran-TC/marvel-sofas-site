import { ArrowDown, ArrowRight, Hammer, Leaf, Ruler, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Seo } from "../components/common/Seo";
import { SectionHeading } from "../components/common/SectionHeading";
import { CategoryCard } from "../components/catalogue/CategoryCard";
import { ProductCard } from "../components/product/ProductCard";
import { MaterialSwatches } from "../components/forms/MaterialSwatches";
import { RoomVisualizer } from "../components/forms/RoomVisualizer";
import { SofaFinder } from "../components/forms/SofaFinder";
import { categories } from "../data/categories";
import { featuredProducts } from "../data/products";
import { testimonials } from "../data/testimonials";
import { useUserStore } from "../store/useUserStore";

const trust = [
  { title: "Made to Order", text: "Configurations are discussed around your room, layout and seating needs.", icon: Ruler },
  { title: "Premium Materials", text: "Material options stay editable until physical samples are confirmed.", icon: ShieldCheck },
  { title: "Custom Configurations", text: "Sofa type, chaise placement, recliner options and finishes can be planned.", icon: Hammer },
  { title: "Direct from Manufacturer", text: "The enquiry flow is designed for quotation conversations with SLV Industry's.", icon: Leaf },
];

export default function HomePage() {
  const openQuote = useUserStore((state) => state.openQuote);

  return (
    <>
      <Seo title="Premium Custom Sofas" path="/" image="/assets/projects/factory-sectional-stone-01.webp" />
      <section className="relative min-h-screen overflow-hidden bg-forest-950 text-white">
        <motion.img
          src="/assets/projects/factory-sectional-stone-01.webp"
          alt="Marvel Sofa's factory-made stone sectional sofa installation"
          className="absolute inset-0 h-full w-full object-cover opacity-72"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/72 to-forest-950/10" />
        <div className="luxury-shell relative flex min-h-screen items-center pb-20 pt-32">
          <div className="max-w-3xl">
            <motion.p className="eyebrow" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Marvel Sofa's by SLV Industry's</motion.p>
            <motion.h1 className="mt-5 font-display text-6xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl" initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }}>
              Crafted for the Way You Live
            </motion.h1>
            <motion.p className="mt-6 max-w-xl text-lg leading-8 text-white/76" initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.22 }}>
              Premium sofas and custom furniture, thoughtfully manufactured by SLV Industry's.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.32 }}>
              <Link className="btn-primary" to="/catalogue">Explore Collection <ArrowRight className="h-4 w-4" /></Link>
              <button className="btn-secondary" type="button" onClick={() => openQuote()}>Request a Custom Quote</button>
            </motion.div>
          </div>
          <a href="#collections" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-white/70 md:flex">
            <ArrowDown className="h-4 w-4 animate-bounce" /> Scroll
          </a>
        </div>
      </section>

      <section className="bg-ivory py-12">
        <div className="luxury-shell grid gap-4 md:grid-cols-4">
          {trust.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-forest-900/10 bg-white p-5">
              <Icon className="h-7 w-7 text-gold-500" />
              <h2 className="mt-4 font-semibold text-forest-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-forest-900/62">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="bg-ivory py-20">
        <div className="luxury-shell">
          <SectionHeading eyebrow="Featured collections" title="Catalogue categories, arranged for browsing." description="Each collection uses imagery extracted from the supplied catalogue or real Marvel Sofa's project images." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="luxury-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading eyebrow="Signature products" title="Editable marketing names for catalogue references." description="Product data avoids fake prices, dimensions and warranty claims." />
            <Link className="btn-ghost" to="/catalogue">Open full catalogue</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="luxury-shell">
          <SofaFinder />
        </div>
      </section>

      <section className="bg-forest-950 py-20 text-white">
        <div className="luxury-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Craftsmanship story</p>
            <h2 className="mt-3 font-display text-5xl font-semibold">Quality-focused furniture for practical, lasting rooms.</h2>
            <p className="mt-5 leading-8 text-white/70">
              The catalogue speaks about aesthetic stitching, selected elements, comfort, durability, and practical functionality. This section keeps that language grounded: each quote can confirm materials, structure, foam and final finish before production.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Thoughtful design", "Comfort", "Durability", "Upholstery choices", "Custom production", "Reduced waste mindset"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4">{item}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/catalogue/material-wall-01.webp" alt="Marvel Sofa's material display from catalogue" className="h-full min-h-96 rounded-lg object-cover" />
            <img src="/assets/catalogue/quilted-grey-closeup-01.webp" alt="Grey quilted upholstery close-up" className="mt-12 h-full min-h-96 rounded-lg object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="luxury-shell">
          <MaterialSwatches />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="luxury-shell">
          <RoomVisualizer />
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="luxury-shell">
          <SectionHeading eyebrow="Manufacturing process" title="From requirement to delivery coordination." />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {["Requirement consultation", "Space and measurement review", "Design and configuration", "Material selection", "Frame and structure production", "Upholstery and finishing", "Quality inspection", "Delivery coordination"].map((step, index) => (
              <div key={step} className="rounded-lg bg-white p-5 shadow-soft">
                <span className="text-sm font-semibold text-gold-500">0{index + 1}</span>
                <h3 className="mt-3 font-semibold text-forest-950">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-950 py-20 text-white">
        <div className="luxury-shell">
          <SectionHeading eyebrow="Reviews" title="Sample testimonials ready for replacement." light />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.id} className="dark-card p-6">
                <p className="text-sm text-gold-100">{item.sample ? "Sample testimonial - replace with verified customer review" : "Customer review"}</p>
                <p className="mt-4 leading-7 text-white/70">{item.text}</p>
                <p className="mt-5 font-semibold">{item.customerName}</p>
                <p className="text-sm text-white/45">{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="luxury-shell rounded-lg bg-[url('/assets/brand/contact-card-background.webp')] bg-cover bg-center p-8 text-white shadow-soft lg:p-14">
          <div className="max-w-2xl">
            <p className="eyebrow">Custom project</p>
            <h2 className="mt-3 font-display text-5xl font-semibold">Have a Sofa Designed Around Your Space</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="btn-primary" to="/customise">Start Custom Enquiry</Link>
              <button className="btn-secondary" type="button" onClick={() => openQuote()}>Share Your Requirements on WhatsApp</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
