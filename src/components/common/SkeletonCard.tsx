export function SkeletonCard() {
  return (
    <div className="card overflow-hidden" aria-hidden="true">
      <div className="h-64 animate-pulse bg-forest-900/10" />
      <div className="space-y-3 p-5">
        <div className="h-4 w-24 animate-pulse rounded bg-forest-900/10" />
        <div className="h-6 w-3/4 animate-pulse rounded bg-forest-900/10" />
        <div className="h-4 w-full animate-pulse rounded bg-forest-900/10" />
      </div>
    </div>
  );
}
