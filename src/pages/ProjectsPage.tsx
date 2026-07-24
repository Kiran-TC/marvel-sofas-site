import { Seo } from "../components/common/Seo";
import { projectCards } from "../data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Seo title="Projects and Installations" path="/projects" image="/assets/projects/factory-sectional-stone-01.webp" />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">Projects</p>
          <h1 className="mt-4 font-display text-6xl font-semibold">Real project visuals and labelled concepts.</h1>
          <p className="mt-5 max-w-2xl text-white/70">Cards using supplied WhatsApp images are marked as factory-made project images. Other cards remain labelled as concepts until verified client details are supplied.</p>
        </div>
      </section>
      <section className="bg-ivory py-16">
        <div className="luxury-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectCards.map((project) => (
            <article key={project.id} className="card overflow-hidden">
              <img src={project.image} alt={project.title} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">{project.label}</p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-forest-950">{project.title}</h2>
                <p className="mt-1 text-sm font-semibold text-forest-900/55">{project.type}</p>
                <p className="mt-3 text-sm leading-6 text-forest-900/65">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
