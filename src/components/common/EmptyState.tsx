import { SearchX } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-dashed border-forest-900/20 bg-white/70 p-10 text-center">
      <SearchX className="mx-auto h-10 w-10 text-gold-500" aria-hidden="true" />
      <h3 className="mt-4 font-display text-3xl font-semibold text-forest-950">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-forest-900/65">{description}</p>
    </div>
  );
}
