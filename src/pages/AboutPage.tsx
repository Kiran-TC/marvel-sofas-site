import { Seo } from "../components/common/Seo";
import { SectionHeading } from "../components/common/SectionHeading";
import { business } from "../config/business";
import { assetPath } from "../utils/assetPath";

export default function AboutPage() {
  const pillars = ["Luxury living", "Timeless design", "Quality modular furniture", "Products built to last", "Practical functions", "High-grade material conversations", "Responsible manufacturing mindset", "Direct manufacturer customisation"];
  return (
    <>
      <Seo title="About the Manufacturer" path="/about" />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">{business.companyName}</p>
            <h1 className="mt-4 font-display text-6xl font-semibold">A manufacturer-led furniture brand.</h1>
          </div>
          <p className="text-lg leading-8 text-white/70">This page turns the catalogue's themes into a grounded brand story without inventing founding years, factory numbers or unsupported claims.</p>
        </div>
      </section>
      <section className="bg-ivory py-20">
        <div className="luxury-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <img src={assetPath("/assets/catalogue/material-wall-01.webp")} alt="Marvel Sofa's upholstery material display" className="h-full min-h-[520px] rounded-lg object-cover shadow-soft" />
          <div>
            <SectionHeading eyebrow="Design philosophy" title="Furniture shaped around comfort, proportion and use." />
            <p className="mt-6 leading-8 text-forest-900/68">Marvel Sofa's presents sofas, recliners, dining chairs, beds, headboards and custom furniture as practical luxury pieces. The strongest advantage is direct manufacturer customisation: customers can discuss scale, material direction, seating, finish and room fit before quotation.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar) => <div key={pillar} className="rounded-lg bg-white p-4 font-semibold text-forest-950 shadow-sm">{pillar}</div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="luxury-shell grid gap-6 md:grid-cols-3">
          {["Quality philosophy", "Sustainability approach", "Manufacturer advantages"].map((title) => (
            <article key={title} className="card p-6">
              <h2 className="font-display text-3xl font-semibold text-forest-950">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-forest-900/65">Use this block for verified workshop details, supplier notes and process images when available. Current copy stays intentionally conservative.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
