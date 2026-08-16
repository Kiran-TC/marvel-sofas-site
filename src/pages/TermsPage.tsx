import { Seo } from "../components/common/Seo";

export default function TermsPage() {
  return (
    <>
      <Seo title="Terms" path="/terms" />
      <section className="bg-ivory px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-soft">
          <p className="eyebrow">Terms</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-forest-950">Terms</h1>
          <div className="mt-6 space-y-5 leading-8 text-forest-900/68">
            <p>
              Catalogue products, internet inspiration images and customisation previews are used for design discussion. Final product details are confirmed directly with the manufacturer before production.
            </p>
            <p>
              Prices are available on request. A quotation may depend on dimensions, frame requirements, upholstery, recliner mechanism, transport, installation access and final finish selection.
            </p>
            <p>
              Custom furniture orders should be confirmed only after measurements, material direction, payment terms and delivery expectations are agreed with the business.
            </p>
            <p>
              Colours, fabric texture and screen previews can vary by device. Physical samples or direct confirmation should be used before finalising upholstery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
