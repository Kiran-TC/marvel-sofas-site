import { Seo } from "../components/common/Seo";
import { assetPath } from "../utils/assetPath";

const timeline = ["Consultation", "Sketching", "Frame construction", "Support system", "Foam and cushioning", "Upholstery cutting", "Stitching", "Assembly", "Quality inspection", "Packaging and delivery"];

export default function ManufacturingPage() {
  return (
    <>
      <Seo title="Manufacturing Process" path="/manufacturing" />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">Manufacturing</p>
          <h1 className="mt-4 font-display text-6xl font-semibold">Craftsmanship from requirement to finish.</h1>
          <p className="mt-5 max-w-2xl text-white/70">Workshop photography can be replaced when supplied. Current imagery uses catalogue and real project references only.</p>
        </div>
      </section>
      <section className="bg-ivory py-20">
        <div className="luxury-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="sticky top-28 h-fit">
            <img src={assetPath("/assets/projects/factory-sectional-chaise-01.webp")} alt="Factory-made sectional sofa installation" className="rounded-lg shadow-soft" />
          </div>
          <ol className="space-y-5">
            {timeline.map((item, index) => (
              <li key={item} className="grid gap-4 rounded-lg bg-white p-5 shadow-sm sm:grid-cols-[80px_1fr]">
                <span className="font-display text-5xl text-gold-500">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-display text-3xl font-semibold text-forest-950">{item}</h2>
                  <p className="mt-2 text-sm leading-6 text-forest-900/65">Replace this placeholder with verified workshop details. The quote process can confirm materials, dimensions and build sequence for each order.</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
