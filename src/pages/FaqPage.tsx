import { Seo } from "../components/common/Seo";
import { faqs } from "../data/faqs";

export default function FaqPage() {
  return (
    <>
      <Seo title="FAQ" path="/faq" />
      <section className="bg-forest-950 pb-16 pt-32 text-white">
        <div className="luxury-shell">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-4 font-display text-6xl font-semibold">Frequently asked questions.</h1>
        </div>
      </section>
      <section className="bg-ivory py-16">
        <div className="luxury-shell max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg bg-white p-6 shadow-sm">
              <summary className="cursor-pointer font-display text-2xl font-semibold text-forest-950">{faq.question}</summary>
              <p className="mt-4 leading-7 text-forest-900/68">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
