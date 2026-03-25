export function ProjectCard({ project }: { project: { title: string; niche: string; category: string; impact: string } }) {
  return (
    <article className="glass group relative overflow-hidden rounded-2xl p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      <p className="relative mb-2 text-xs uppercase tracking-[0.2em] text-accent-300">{project.category}</p>
      <h3 className="relative mb-2 font-serif text-2xl">{project.title}</h3>
      <p className="relative text-zinc-300">{project.niche}</p>
      <p className="relative mt-6 text-sm text-zinc-200">{project.impact}</p>
    </article>
  );
}
