import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", light }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl ${light ? "text-white" : "text-forest-950"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-sm leading-6 sm:text-base sm:leading-7 ${light ? "text-white/72" : "text-forest-900/68"}`}>{description}</p>
      ) : null}
    </div>
  );
}
