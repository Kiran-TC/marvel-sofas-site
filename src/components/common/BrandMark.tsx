import { useId } from "react";
import { business } from "../../config/business";

/** Crop the original brand card to the round emblem and its projecting ears. */
export function BrandMark({ className = "", title }: { className?: string; title?: string }) {
  const clipId = `brand-mark-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="94 24 242 228" className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <defs>
        <clipPath id={clipId}>
          <circle cx="215" cy="138" r="110" />
          <path d="M98 94 Q115 70 155 82 L174 105 Q138 125 113 110 Z M258 83 Q305 70 332 94 L317 111 Q286 123 257 106 Z" />
        </clipPath>
      </defs>
      <image href={business.logo} width="470" height="290" clipPath={`url(#${clipId})`} />
    </svg>
  );
}
