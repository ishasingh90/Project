import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/site-data";

export const metadata = {
  title: "Services",
  description: "Explore premium web, app, software, AI video, and social marketing services."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services Engineered for Growth"
        subtitle="Every offering is built with conversion, scalability, and design excellence in mind."
      />
      <section className="section-shell grid gap-6 pb-16 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="glass rounded-2xl p-7">
            <service.icon className="mb-4 text-2xl text-accent-300" />
            <h2 className="font-serif text-3xl">{service.title}</h2>
            <p className="mt-3 text-zinc-300">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {service.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <p className="mt-6 text-accent-300">{service.price}</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-accent-500 px-5 py-2 text-sm text-white hover:bg-accent-700">
              Get This Service
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
