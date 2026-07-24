import { Seo } from "../components/common/Seo";
import { SectionHeading } from "../components/common/SectionHeading";
import { ProductConfigurator } from "../components/forms/ProductConfigurator";

export default function CustomisePage() {
  return (
    <>
      <Seo title="Design Your Sofa" path="/customise" />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">Customise</p>
          <h1 className="mt-4 font-display text-6xl font-semibold">Design Your Sofa</h1>
          <p className="mt-5 max-w-2xl text-white/70">Choose layout, seats, upholstery, colour family, arm style, backrest and optional functions before sending a quotation enquiry.</p>
        </div>
      </section>
      <section className="bg-ivory py-16">
        <div className="luxury-shell">
          <SectionHeading title="Configure the first conversation." description="The configurator does not calculate fake prices. Final price is determined after confirming dimensions, material and configuration." />
          <div className="mt-10"><ProductConfigurator /></div>
        </div>
      </section>
    </>
  );
}
