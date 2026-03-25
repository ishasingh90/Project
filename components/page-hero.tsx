import { FadeIn } from "./animations";

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section-shell py-20">
      <FadeIn>
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent-300">Premium Digital Agency</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-zinc-300">{subtitle}</p>
      </FadeIn>
    </section>
  );
}
