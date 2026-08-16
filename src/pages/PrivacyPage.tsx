import { Seo } from "../components/common/Seo";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" path="/privacy" />
      <section className="bg-ivory px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-soft">
          <p className="eyebrow">Privacy</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-forest-950">Privacy policy</h1>
          <div className="mt-6 space-y-5 leading-8 text-forest-900/68">
            <p>
              Marvel Sofa's uses enquiry details only to understand sofa, furniture, measurement and quotation requirements.
            </p>
            <p>
              Information shared through the site can include name, phone number, city, room dimensions, product preferences and optional notes. Reference photos are shared by the customer through WhatsApp or email after the enquiry is prepared.
            </p>
            <p>
              Enquiries are sent through customer-selected channels such as WhatsApp, SMS, phone or email. Those channels are governed by their own privacy practices.
            </p>
            <p>
              Customer details are not sold through this website. They are used for follow-up, quotation discussion, customisation guidance and delivery coordination where applicable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
