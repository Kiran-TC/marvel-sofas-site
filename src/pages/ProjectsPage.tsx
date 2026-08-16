import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "../components/common/Seo";
import { SectionHeading } from "../components/common/SectionHeading";
import { OurWorkGallery } from "../components/projects/OurWorkGallery";
import { clientProjects, featuredClientProjects } from "../data/clientProjects";
import { assetPath } from "../utils/assetPath";

export default function ProjectsPage() {
  const heroProject = featuredClientProjects[0] ?? clientProjects[0];

  return (
    <>
      <Seo title="Our Work" path="/projects" image={assetPath("/assets/client-projects/marvel-installation-31.webp")} />
      <section className="relative isolate overflow-hidden bg-forest-950 pb-16 pt-32 text-white sm:pb-20">
        <img src={heroProject.image} alt="" className="absolute inset-0 h-full w-full object-cover object-[50%_58%] opacity-42" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/86 to-forest-950/24" />
        <div className="luxury-shell relative">
          <p className="eyebrow text-gold-300">Our Work</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.92] sm:text-7xl">
            Finished sofa installations, ready for your room conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
            Explore real Marvel Sofa's lounges across neutral sectionals, bold colour stories, recliner seating and formal living rooms.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" to="/customise">
              Start Custom Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <Link className="btn-secondary" to="/catalogue">
              Browse Catalogue
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-ivory py-16 sm:py-20">
        <div className="luxury-shell">
          <SectionHeading
            eyebrow="Gallery"
            title="A complete look at recent sofa references."
            description="Every room has a different wall length, light level and seating habit. These references make it easier to discuss proportion, colour and comfort before production."
          />
          <div className="mt-10">
            <OurWorkGallery projects={clientProjects} />
          </div>
        </div>
      </section>
    </>
  );
}
