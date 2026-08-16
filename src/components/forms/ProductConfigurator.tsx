import { useMemo, useState } from "react";
import { useUserStore } from "../../store/useUserStore";
import { assetPath } from "../../utils/assetPath";

const options = {
  sofaType: ["Standard sofa", "L-shaped sofa", "Sectional", "Recliner sofa"],
  seats: ["2", "3", "4", "5+", "Custom"],
  lShape: ["Left", "Right", "Not required"],
  recliner: ["No recliner", "Single recliner", "Multiple recliners"],
  fabric: ["Premium fabric", "Velvet", "Leather finish", "Leatherette", "Not decided"],
  colour: ["Ivory", "Stone", "Tan", "Forest", "Blue", "Custom"],
  arm: ["Straight arm", "Soft wide arm", "Slim arm"],
  backrest: ["Fixed", "Adjustable headrest", "High back"],
  leg: ["Black metal", "Gold accent", "Wood tone", "Hidden base"],
  extras: ["Storage", "Cup holder", "Headrest", "None"],
};

const clientImage = (id: string) => assetPath(`/assets/client-projects/marvel-installation-${id}.webp`);

const previewByColour: Record<string, string> = {
  Ivory: clientImage("31"),
  Stone: clientImage("03"),
  Tan: clientImage("14"),
  Forest: clientImage("09"),
  Blue: clientImage("27"),
  Custom: clientImage("20"),
};

const formatLabel = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());

export function ProductConfigurator() {
  const openQuote = useUserStore((state) => state.openQuote);
  const [selected, setSelected] = useState({
    sofaType: options.sofaType[0],
    seats: options.seats[1],
    lShape: options.lShape[2],
    recliner: options.recliner[0],
    fabric: options.fabric[0],
    colour: options.colour[0],
    arm: options.arm[0],
    backrest: options.backrest[0],
    leg: options.leg[0],
    extras: options.extras[3],
    dimensions: "",
  });

  const complexity = useMemo(() => {
    let score = 1;
    if (selected.sofaType !== "Standard sofa") score += 1;
    if (selected.seats === "5+" || selected.seats === "Custom") score += 1;
    if (selected.recliner !== "No recliner") score += 1;
    if (selected.extras !== "None") score += 1;
    return score >= 4 ? "High" : score >= 3 ? "Medium" : "Standard";
  }, [selected]);

  const set = (key: keyof typeof selected, value: string) => setSelected((current) => ({ ...current, [key]: value }));
  const previewImage = previewByColour[selected.colour] ?? previewByColour.Ivory;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(options).map(([key, values]) => (
          <label key={key} className="label">
            {formatLabel(key)}
            <select className="input mt-2" value={selected[key as keyof typeof selected]} onChange={(event) => set(key as keyof typeof selected, event.target.value)}>
              {values.map((value) => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </label>
        ))}
        <label className="label md:col-span-2">
          Approximate dimensions
          <input className="input mt-2" value={selected.dimensions} onChange={(event) => set("dimensions", event.target.value)} placeholder="Example: 10 ft wall, 7 ft chaise side" />
        </label>
        <label className="label md:col-span-2">
          Upload room image
          <input className="input mt-2 pt-3" type="file" accept="image/*" />
        </label>
      </div>
      <aside className="sticky top-28 h-fit rounded-lg bg-forest-950 p-6 text-white shadow-soft">
        <p className="eyebrow">Live summary</p>
        <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-lg bg-white/10">
          <img src={previewImage} alt={`${selected.colour} sofa preview`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-forest-950">
            {selected.colour} direction
          </span>
        </div>
        <dl className="mt-5 space-y-3 text-sm">
          {Object.entries(selected).map(([key, value]) => (
            <div key={key} className="flex justify-between gap-4 border-b border-white/10 pb-2">
              <dt className="text-white/55">{formatLabel(key)}</dt>
              <dd className="text-right font-semibold">{value || "Not supplied"}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4 pt-2">
            <dt className="text-white/55">Manufacturing complexity</dt>
            <dd className="font-semibold text-gold-100">{complexity}</dd>
          </div>
        </dl>
        <p className="mt-5 text-xs text-white/55">Final price is determined after confirming dimensions, material and configuration.</p>
        <button className="btn-primary mt-5 w-full" type="button" onClick={() => openQuote()}>
          Request configuration quote
        </button>
      </aside>
    </div>
  );
}
