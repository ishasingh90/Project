import Link from "next/link";
import { FadeIn, FloatingOrbs } from "@/components/animations";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { projects, services, stats, testimonials, valueProps } from "@/data/site-data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <FloatingOrbs />
        <div className="section-shell relative py-24 md:py-32">
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent-300">High-end Freelancing Agency</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
              We Build Digital Experiences That Convert
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-zinc-300">
              Radhika designs and engineers elite digital products across web, apps, software, AI video, and social growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-700">
                Get Started
              </Link>
              <Link href="/portfolio" className="glass rounded-full px-6 py-3 text-sm font-medium text-zinc-100">
                View Work
              </Link>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, idx) => (
              <FadeIn key={stat.label} delay={idx * 0.1}>
                <div className="glass rounded-2xl p-5">
                  <p className="text-3xl font-semibold text-accent-300">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-300">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading title="Services Crafted for Scale" subtitle="Premium execution across the full digital lifecycle." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <FadeIn key={service.title} delay={idx * 0.08}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading title="Why Choose Us" />
        <div className="grid gap-4 md:grid-cols-2">
          {valueProps.map((item) => (
            <div key={item} className="glass rounded-2xl p-5 text-lg">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading title="Portfolio Preview" subtitle="Selected work delivering measurable business outcomes." actions={<Link href="/portfolio" className="text-accent-300">See all projects →</Link>} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading title="Client Testimonials" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 pt-8">
        <div className="glass rounded-3xl p-8 text-center md:p-12">
          <h2 className="font-serif text-4xl">Let’s Build Something Amazing Together</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-300">From strategy to launch, we turn bold ideas into high-performing digital experiences.</p>
          <Link href="/contact" className="mt-7 inline-flex rounded-full bg-accent-500 px-6 py-3 text-white hover:bg-accent-700">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
