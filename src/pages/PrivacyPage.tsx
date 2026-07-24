import { Seo } from "../components/common/Seo";

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" path="/privacy" />
      <section className="bg-ivory px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-soft">
          <p className="eyebrow">Placeholder</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-forest-950">Privacy policy</h1>
          <p className="mt-5 leading-8 text-forest-900/68">
            This is an editable privacy policy placeholder. Replace it with counsel-reviewed language before launch, especially for WhatsApp, email, analytics or future contact integrations.
          </p>
        </div>
      </section>
    </>
  );
}
