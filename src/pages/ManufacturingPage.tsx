import { Seo } from "../components/common/Seo";
import { assetPath } from "../utils/assetPath";

const timeline = [
  ["Consultation", "The room size, seating count, sofa type and preferred comfort level are discussed before the design direction is fixed."],
  ["Layout Planning", "Chaise side, corner placement, console needs and recliner requirements are aligned with the way the room will be used."],
  ["Frame Construction", "The sofa structure is prepared around the confirmed proportions and support expectations for the final layout."],
  ["Support System", "Seat depth, back support and everyday comfort are balanced before foam and upholstery finishing begins."],
  ["Foam And Cushioning", "Cushion feel, headrest height and lounge comfort are tuned around the selected sofa style."],
  ["Upholstery Cutting", "The selected fabric, leatherette or leather-finish direction is cut around the final shape and visible details."],
  ["Stitching", "Panel lines, quilting, piping and contrast details are finished according to the approved style."],
  ["Assembly", "Modules, legs, consoles and moving sections are fitted together before the final inspection."],
  ["Quality Inspection", "The finished sofa is checked for alignment, upholstery finish and comfort before handover coordination."],
  ["Delivery Coordination", "Delivery timing and site access are confirmed so the sofa reaches the room with the right handling plan."],
];

export default function ManufacturingPage() {
  return (
    <>
      <Seo title="Manufacturing Process" path="/manufacturing" />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">Manufacturing</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] sm:text-6xl">Craftsmanship from requirement to finish.</h1>
          <p className="mt-5 max-w-2xl text-white/70">Every order begins with a room conversation and moves through proportion, comfort, finish and delivery coordination.</p>
        </div>
      </section>
      <section className="bg-ivory py-20">
        <div className="luxury-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="sticky top-28 h-fit">
            <img src={assetPath("/assets/client-projects/marvel-installation-30.webp")} alt="Ivory sectional sofa with quilted detail" className="rounded-lg shadow-soft" />
          </div>
          <ol className="space-y-5">
            {timeline.map(([item, description], index) => (
              <li key={item} className="grid gap-4 rounded-lg bg-white p-5 shadow-sm sm:grid-cols-[80px_1fr]">
                <span className="font-display text-5xl text-gold-500">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-display text-3xl font-semibold text-forest-950">{item}</h2>
                  <p className="mt-2 text-sm leading-6 text-forest-900/65">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
