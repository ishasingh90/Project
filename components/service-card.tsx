import { Service } from "@/data/site-data";
import { FiArrowUpRight } from "react-icons/fi";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-300/40 hover:shadow-glow">
      <service.icon className="mb-5 text-2xl text-accent-300" />
      <h3 className="mb-3 font-serif text-2xl">{service.title}</h3>
      <p className="mb-4 text-zinc-300">{service.description}</p>
      <ul className="mb-5 space-y-2 text-sm text-zinc-400">
        {service.features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
      <div className="flex items-center justify-between text-sm">
        <span className="text-accent-300">{service.price}</span>
        <button className="inline-flex items-center gap-1 text-zinc-200 transition group-hover:text-accent-300">
          Explore <FiArrowUpRight />
        </button>
      </div>
    </article>
  );
}
