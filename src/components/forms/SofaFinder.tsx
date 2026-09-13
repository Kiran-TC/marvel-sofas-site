import { useMemo, useState } from "react";
import { products } from "../../data/products";
import { recommendProducts } from "../../utils/productFilters";
import { ProductCard } from "../product/ProductCard";

const steps = [
  { key: "type", question: "What type of product are you looking for?", options: ["Standard sofa", "L-shaped sofa", "Recliner", "Accent chair", "Dining chair", "Bed or headboard"] },
  { key: "size", question: "What is your space size?", options: ["Compact", "Medium", "Large", "Custom dimensions"] },
  { key: "upholstery", question: "Preferred upholstery?", options: ["Premium fabric", "Leather or leatherette", "Velvet", "Not decided"] },
  { key: "style", question: "Preferred style?", options: ["Modern", "Minimal", "Luxury", "Classic", "Contemporary"] },
] as const;

export function SofaFinder() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const recommendations = useMemo(() => recommendProducts(products, answers), [answers]);

  return (
    <div className="rounded-lg bg-forest-950 p-5 text-white shadow-soft lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Find your sofa</p>
          <h3 className="mt-3 font-display text-4xl font-semibold">A guided catalogue shortlist.</h3>
          <div className="mt-8 space-y-6">
            {steps.map((step, index) => (
              <div key={step.key} className={index === activeIndex ? "opacity-100" : "opacity-55"}>
                <button type="button" className="w-full min-h-11 text-left" aria-expanded={index === activeIndex} aria-controls={`finder-step-${step.key}`} onClick={() => setActiveIndex(index)}>
                  <span className="text-sm font-semibold text-gold-100">Step {index + 1}{answers[step.key] ? ` · ${answers[step.key]}` : ""}</span>
                  <span className="mt-1 block text-lg font-semibold">{step.question}</span>
                </button>
                <div id={`finder-step-${step.key}`} className={`mt-3 flex-wrap gap-2 ${index === activeIndex ? "flex" : "hidden sm:flex"}`}>
                  {step.options.map((option) => (
                    <button
                      key={option}
                      className={`rounded-full border px-4 py-2 text-sm transition ${answers[step.key] === option ? "border-gold-300 bg-gold-300 text-forest-950" : "border-white/15 text-white/75 hover:border-gold-300"}`}
                      type="button"
                      onClick={() => { setAnswers((current) => ({ ...current, [step.key]: option })); setActiveIndex(Math.min(index + 1, steps.length - 1)); }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/55">Final specifications are confirmed during quotation.</p>
        </div>
        <div className="mobile-card-rail grid gap-4 sm:grid-cols-2">
          {recommendations.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
