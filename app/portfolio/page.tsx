import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/site-data";

export const metadata = {
  title: "Portfolio",
  description: "Browse agency projects across web, app, software, AI, and marketing categories."
};

const categories = ["All", "Web", "App", "Software", "AI", "Marketing"];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Proof of Performance"
        subtitle="A curated portfolio of high-impact products and campaigns delivered for modern brands."
      />
      <section className="section-shell pb-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-zinc-200">
              {category}
            </span>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
