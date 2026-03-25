export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <article className="glass rounded-2xl p-6">
      <p className="mb-5 text-zinc-200">“{quote}”</p>
      <p className="font-medium text-accent-300">{name}</p>
      <p className="text-sm text-zinc-400">{role}</p>
    </article>
  );
}
