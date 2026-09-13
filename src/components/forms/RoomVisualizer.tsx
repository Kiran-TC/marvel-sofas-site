import { useState } from "react";
import { assetPath } from "../../utils/assetPath";

const modes = [
  { label: "Minimal", className: "from-white to-stonewarm", sofa: assetPath("/assets/catalogue/ivory-flared-sofa-01.webp") },
  { label: "Warm contemporary", className: "from-[#f4dfbd] to-[#8b532d]", sofa: assetPath("/assets/catalogue/terracotta-extended-sectional-01.webp") },
  { label: "Luxury", className: "from-forest-950 to-gold-700", sofa: assetPath("/assets/projects/factory-sectional-stone-01.webp") },
  { label: "Bold modern", className: "from-[#132c4a] to-[#d26a2e]", sofa: assetPath("/assets/catalogue/royal-blue-lounge-sofa-01.webp") },
];

export function RoomVisualizer() {
  const [mode, setMode] = useState(modes[0]);
  const [split, setSplit] = useState(52);
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-[260px] sm:min-h-[420px] overflow-hidden rounded-lg bg-gradient-to-br shadow-soft">
        <div className="absolute inset-0 bg-gradient-to-br from-stonewarm to-white" />
        <div className={`absolute inset-y-0 right-0 bg-gradient-to-br ${mode.className}`} style={{ width: `${split}%` }} />
        <div className="absolute inset-x-8 bottom-8 rounded-md border border-white/40 bg-white/30 p-4 backdrop-blur">
          <img src={mode.sofa} alt={`${mode.label} room sofa preview`} className="mx-auto max-h-64 object-contain" />
        </div>
        <input className="absolute bottom-5 left-8 right-8 accent-gold-500" type="range" min="25" max="80" value={split} onChange={(event) => setSplit(Number(event.target.value))} aria-label="Adjust before and after room split" />
      </div>
      <div>
        <p className="eyebrow">Room visualiser</p>
        <h3 className="mt-3 font-display text-4xl font-semibold text-forest-950">Switch the mood before you request a quote.</h3>
        <p className="mt-4 text-forest-900/68">This is a style preview, not exact augmented reality. Use it to choose an interior direction before sharing room dimensions.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-1">
          {modes.map((item) => (
            <button key={item.label} className={`rounded-lg border p-3 sm:p-4 text-left font-semibold ${mode.label === item.label ? "border-gold-500 bg-gold-100" : "border-forest-900/10 bg-white"}`} type="button" onClick={() => setMode(item)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
