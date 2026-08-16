import { useState } from "react";
import { assetPath } from "../../utils/assetPath";

const swatches = [
  { name: "Premium fabric", colour: "#c9b9a5", filter: "sepia(0.18) saturate(0.9) brightness(1.04)" },
  { name: "Velvet", colour: "#2c6f52", filter: "sepia(0.65) saturate(1.75) hue-rotate(92deg) brightness(0.76)" },
  { name: "Leather finish", colour: "#8b532d", filter: "sepia(0.85) saturate(1.9) hue-rotate(344deg) brightness(0.8)" },
  { name: "Textured upholstery", colour: "#73736e", filter: "grayscale(0.65) saturate(0.72) brightness(0.88)" },
  { name: "Neutral tones", colour: "#ece5d8", filter: "sepia(0.18) saturate(0.45) brightness(1.08)" },
  { name: "Bold colours", colour: "#1e4e8c", filter: "sepia(0.85) saturate(2.1) hue-rotate(176deg) brightness(0.78)" },
];

export function MaterialSwatches() {
  const [selected, setSelected] = useState(swatches[0]);
  const previewImage = assetPath("/assets/catalogue/ivory-flared-sofa-01.webp");

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="eyebrow">Material Experience</p>
        <h3 className="mt-3 font-display text-4xl font-semibold text-forest-950">Explore upholstery directions.</h3>
        <p className="mt-4 text-forest-900/68">
          This visual demonstrator changes the sofa colour on screen only. Actual colours and textures may vary. Final upholstery is confirmed using physical samples.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {swatches.map((swatch) => (
            <button
              key={swatch.name}
              className={`flex items-center gap-3 rounded-lg border p-3 text-left text-sm font-semibold transition ${selected.name === swatch.name ? "border-gold-500 bg-gold-100" : "border-forest-900/10 bg-white"}`}
              type="button"
              onClick={() => setSelected(swatch)}
            >
              <span className="h-8 w-8 rounded-full border border-forest-900/10" style={{ backgroundColor: swatch.colour }} />
              {swatch.name}
            </button>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white via-ivory to-stonewarm/60 p-5 shadow-soft sm:p-8">
        <div className="flex min-h-[340px] items-center justify-center rounded-md border border-forest-900/8 bg-white sm:min-h-[430px]">
          <img
            src={previewImage}
            alt={`${selected.name} sofa colour preview`}
            className="relative z-10 w-full max-w-3xl object-contain transition duration-500"
            style={{ filter: selected.filter }}
          />
        </div>
        <div className="pointer-events-none absolute inset-5 rounded-md opacity-[0.18] mix-blend-multiply sm:inset-8" style={{ backgroundColor: selected.colour }} />
        <div className="absolute bottom-10 left-10 rounded-full bg-white/92 px-4 py-2 text-sm font-semibold text-forest-950 shadow-soft">
          {selected.name}
        </div>
      </div>
    </div>
  );
}
