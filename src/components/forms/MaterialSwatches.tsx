import { useState } from "react";

const swatches = [
  { name: "Premium fabric", colour: "#c9b9a5" },
  { name: "Velvet", colour: "#2c6f52" },
  { name: "Leather finish", colour: "#8b532d" },
  { name: "Textured upholstery", colour: "#73736e" },
  { name: "Neutral tones", colour: "#ece5d8" },
  { name: "Bold colours", colour: "#1e4e8c" },
];

export function MaterialSwatches() {
  const [selected, setSelected] = useState(swatches[0]);
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
            <button key={swatch.name} className="flex items-center gap-3 rounded-lg border border-forest-900/10 bg-white p-3 text-left text-sm font-semibold" type="button" onClick={() => setSelected(swatch)}>
              <span className="h-8 w-8 rounded-full border border-forest-900/10" style={{ backgroundColor: swatch.colour }} />
              {swatch.name}
            </button>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-forest-950 p-8 shadow-soft">
        <img src="/assets/catalogue/silver-track-sofa-01.webp" alt="Sofa preview for selected material colour" className="h-full min-h-[360px] w-full object-contain mix-blend-luminosity" />
        <div className="absolute inset-0 opacity-45 mix-blend-multiply" style={{ backgroundColor: selected.colour }} />
        <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-forest-950">
          {selected.name}
        </div>
      </div>
    </div>
  );
}
