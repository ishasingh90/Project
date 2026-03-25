import { ReactNode } from "react";

export function SectionHeading({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-accent-300">Radhika Agency</p>
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-zinc-300">{subtitle}</p>}
      </div>
      {actions}
    </div>
  );
}
