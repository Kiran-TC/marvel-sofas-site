import { ArrowRight, Hammer, Leaf, Ruler, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Seo } from "../components/common/Seo";
import { SectionHeading } from "../components/common/SectionHeading";
import { ProductCard } from "../components/product/ProductCard";
import { OurWorkGallery } from "../components/projects/OurWorkGallery";
import { MaterialSwatches } from "../components/forms/MaterialSwatches";
import { RoomVisualizer } from "../components/forms/RoomVisualizer";
import { SofaFinder } from "../components/forms/SofaFinder";
import { clientProjects } from "../data/clientProjects";
import { featuredProducts } from "../data/products";
import { useUserStore } from "../store/useUserStore";
import { assetPath } from "../utils/assetPath";

const trust = [
  { title: "Room-first sizing", text: "Each layout begins with the wall length, walking space and family seating style.", icon: Ruler },
  { title: "Finish guidance", text: "Leatherette, fabric, recliner and contrast detailing can be aligned before production.", icon: ShieldCheck },
  { title: "Factory execution", text: "Made-to-order sofas, sectionals and loungers are planned directly with the maker.", icon: Hammer },
  { title: "Practical comfort", text: "The build is tuned for everyday Indian homes: durable, easy to live with and refined.", icon: Leaf },
];

const clientImage = (id: string) => assetPath(`/assets/client-projects/marvel-installation-${id}.webp`);

const showcase = [
  {
    image: clientImage("31"),
    title: "Ivory sectional with raised headrests",
    tone: "Finished project",
  },
  {
    image: clientImage("27"),
    title: "Blue lounge set with matching ottomans",
    tone: "Bold colour story",
  },
  {
    image: clientImage("09"),
    title: "Formal lounge with coordinated centre seating",
    tone: "Villa living",
  },
  {
    image: clientImage("29"),
    title: "Warm family sectional with chaise",
    tone: "Modern neutral",
  },
];

const stats = [
  ["32", "project references"],
  ["Custom", "sofa size and layout planning"],
  ["Direct", "factory quotation support"],
];

export default function HomePage() {
  const openQuote = useUserStore((state) => state.openQuote);

  return (
    <div className="home-page">
      <Seo title="Premium Custom Sofas" path="/" image={clientImage("31")} />
      <section className="relative isolate overflow-hidden bg-forest-950 text-white">
        <motion.img
          src={clientImage("31")}
          alt="Marvel Sofa's ivory sectional sofa installed in a finished living room"
          className="absolute inset-0 h-full w-full object-cover object-[50%_54%] opacity-80"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,16,0.96)_0%,rgba(7,21,16,0.8)_38%,rgba(7,21,16,0.32)_72%,rgba(7,21,16,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-forest-950 to-transparent" />
        <div className="luxury-shell relative flex min-h-0 items-end pb-8 pt-24 sm:min-h-[88svh] sm:pt-32 sm:pb-14 lg:pb-16">
          <div className="w-full max-w-[22rem] sm:w-auto sm:max-w-4xl">
            <motion.p className="eyebrow text-gold-300" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              Marvel Sofa's by SLV Industry's
            </motion.p>
            <motion.h1 className="mt-5 max-w-[10ch] font-display text-5xl font-semibold leading-[0.88] sm:max-w-4xl sm:text-7xl lg:text-8xl" initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }}>
              Custom sofas for finished homes.
            </motion.h1>
            <motion.p className="mt-6 max-w-full text-base leading-7 text-white/78 sm:max-w-[34rem] sm:text-xl sm:leading-8" initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.22 }}>
              Sofas, sectionals and recliner lounges planned around real rooms, real families and the finish you want to show.
            </motion.p>
            <motion.div className="mt-8 grid w-full gap-3 sm:flex sm:w-auto sm:flex-wrap sm:gap-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.32 }}>
              <Link className="btn-primary w-full sm:w-auto" to="/catalogue">
                Explore Designs <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="btn-secondary w-full sm:w-auto" type="button" onClick={() => openQuote()}>
                WhatsApp Quote
              </button>
            </motion.div>
            <motion.div className="mt-6 sm:mt-10 grid max-w-3xl gap-3 grid-cols-3" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.42 }}>
              {stats.map(([value, label]) => (
                <div key={value} className="border-l border-gold-300/55 pl-4">
                  <p className="font-display text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-white/58">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="home-trust bg-ivory py-10 sm:py-12">
        <div className="luxury-shell grid grid-cols-2 gap-3 md:grid-cols-4">
          {trust.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-forest-900/10 bg-white p-3 sm:p-5 shadow-[0_16px_48px_rgba(7,21,16,0.06)]">
              <Icon className="h-7 w-7 text-gold-500" />
              <h2 className="mt-4 font-semibold text-forest-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-forest-900/62">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-installations bg-white py-16 sm:py-20">
        <div className="luxury-shell">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <SectionHeading
              eyebrow="Real installations"
              title="Rooms that feel ready to sit in, not just browse."
              description="Real Marvel Sofa's installations help customers compare scale, colour, cushion depth and how each layout settles into a finished home."
            />
            <p className="max-w-xl text-base leading-8 text-forest-900/62 lg:justify-self-end">
              Clean ivory lounges, bold blue sofa sets, warm sectionals and formal villa seating give every visitor a clear sense of what can be made for their own room.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <article className="group relative min-h-[260px] sm:min-h-[440px] overflow-hidden rounded-lg bg-forest-950 text-white shadow-soft lg:col-span-7">
              <img src={showcase[0].image} alt={showcase[0].title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/88 via-forest-950/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="eyebrow text-gold-300">{showcase[0].tone}</p>
                <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-[0.96] sm:text-5xl">{showcase[0].title}</h2>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {showcase.slice(1).map((item) => (
                <article key={item.title} className="group grid min-h-32 sm:min-h-48 grid-cols-[0.94fr_1.06fr] overflow-hidden rounded-lg border border-forest-900/10 bg-ivory shadow-[0_16px_54px_rgba(7,21,16,0.08)]">
                  <img src={item.image} alt={item.title} className="h-full min-h-32 sm:min-h-48 w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                  <div className="flex flex-col justify-end p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">{item.tone}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-forest-950">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="our-work" className="bg-forest-950 py-16 text-white sm:py-20">
        <div className="luxury-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Work"
              title="A gallery of sofa installations from real rooms."
              description={`${clientProjects.length} project references show sofas, sectionals and recliners in home settings, from compact lounges to larger villa rooms.`}
              light
            />
            <Link className="btn-secondary border-white/25 bg-white/5" to="/projects">
              View Our Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <OurWorkGallery projects={clientProjects} compact />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="luxury-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading eyebrow="Signature products" title="Comfort pieces that feel ready for a real home." description="Explore popular sofa directions, upholstery moods and seating layouts before starting a quotation." />
            <Link className="btn-ghost" to="/catalogue">Open full catalogue</Link>
          </div>
          <p className="mt-4 text-xs text-forest-900/60 sm:hidden">Swipe to explore designs →</p>
          <div className="mobile-card-rail mt-6 sm:mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
            <h2 className="mt-3 font-display text-5xl font-semibold leading-[0.98]">A premium look, built for practical living.</h2>
            <p className="mt-5 leading-8 text-white/70">
              Customers do not only buy a sofa shape. They compare how the lounge fills the room, how the headrest sits, where the chaise lands and whether the finish feels calm after everyday use.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8">
              {["Thoughtful proportions", "Comfortable back support", "Durable upholstery options", "Custom production", "Room-aware chaise placement", "Direct quotation flow"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4">{item}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={clientImage("30")} alt="Ivory sectional sofa with quilted side detail" className="h-48 w-full rounded-lg object-cover sm:h-full sm:min-h-96" />
            <img src={clientImage("19")} alt="Ivory sectional living room with centre table" className="mt-4 sm:mt-12 h-48 w-full rounded-lg object-cover sm:h-full sm:min-h-96" />
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
          <div className="home-process mt-6 sm:mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["Requirement consultation", "Space and measurement review", "Design and configuration", "Material selection", "Frame and structure production", "Upholstery and finishing", "Quality inspection", "Delivery coordination"].map((step, index) => (
              <div key={step} className="rounded-lg bg-white p-5 shadow-soft">
                <span className="text-sm font-semibold text-gold-500">0{index + 1}</span>
                <h3 className="mt-3 font-semibold text-forest-950">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-950 py-16 text-white sm:py-20">
        <div className="luxury-shell">
          <SectionHeading eyebrow="Before the quote" title="The important decisions are discussed before production starts." light />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Will it fit my room?", "Measurements, wall lengths and walking space are considered before the final seating layout is discussed."],
              ["Can I change colour?", "Material, colour and contrast details can stay open until the customer is ready to confirm the finish."],
              ["How do I start?", "A quick WhatsApp enquiry is enough to begin with room photos, reference images and preferred seating style."],
            ].map(([title, text]) => (
              <article key={title} className="dark-card p-6">
                <h3 className="font-display text-3xl font-semibold leading-tight">{title}</h3>
                <p className="mt-4 leading-7 text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-12 sm:py-16 lg:py-20">
        <div className="luxury-shell">
          <div className="relative overflow-hidden rounded-lg bg-forest-950 text-white shadow-soft">
            <img
              src={clientImage("20")}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-76"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/78 to-forest-950/18" />
            <div className="relative flex min-h-[340px] items-end p-6 sm:min-h-[260px] sm:min-h-[440px] sm:p-8 lg:min-h-[470px] lg:p-14">
              <div className="max-w-2xl">
                <p className="eyebrow">Custom project</p>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.96] sm:text-5xl lg:text-6xl">Have a Sofa Designed Around Your Space</h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/72 sm:text-base">
                  Send measurements, room photos and preferred seating style. The team can continue the quotation conversation on WhatsApp.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link className="btn-primary w-full sm:w-auto" to="/customise">Start Custom Enquiry</Link>
                  <button className="btn-secondary w-full px-5 text-center sm:w-auto" type="button" onClick={() => openQuote()}>Share Requirements on WhatsApp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
