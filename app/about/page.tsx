import { PageHero } from "@/components/page-hero";
import { aboutPillars, stats } from "@/data/site-data";

export const metadata = {
  title: "About",
  description: "Learn about Radhika's mission, vision, and founder story."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Boutique Agency Built for Ambitious Brands"
        subtitle="We blend elegant design, modern engineering, and growth strategy to deliver premium digital experiences that generate real business outcomes."
      />

      <section className="section-shell grid gap-6 pb-16 md:grid-cols-3">
        {aboutPillars.map((item) => (
          <article key={item.title} className="glass rounded-2xl p-6">
            <h2 className="mb-3 font-serif text-2xl">{item.title}</h2>
            <p className="text-zinc-300">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section-shell pb-16">
        <div className="glass rounded-3xl p-8">
          <h3 className="font-serif text-3xl">By the Numbers</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-accent-300">{stat.value}</p>
                <p className="text-zinc-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
