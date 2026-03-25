import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Contact",
  description: "Start your next digital project with Radhika Agency."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s Talk About Your Next Big Move"
        subtitle="Tell us about your project goals and we’ll craft a high-performance digital plan tailored to your business."
      />

      <section className="section-shell grid gap-6 pb-16 md:grid-cols-5">
        <form className="glass rounded-2xl p-6 md:col-span-3">
          <h2 className="mb-6 font-serif text-3xl">Contact Form</h2>
          <div className="space-y-4">
            <input
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-accent-300"
              placeholder="Your Name"
              name="name"
            />
            <input
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-accent-300"
              placeholder="Your Email"
              name="email"
              type="email"
            />
            <textarea
              className="h-40 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-accent-300"
              placeholder="Tell us about your project"
              name="message"
            />
            <button type="submit" className="rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-700">
              Send Message
            </button>
          </div>
        </form>

        <aside className="glass rounded-2xl p-6 md:col-span-2">
          <h3 className="font-serif text-2xl">Connect</h3>
          <p className="mt-3 text-zinc-300">Email: hello@radhika.agency</p>
          <p className="text-zinc-300">Phone: +1 (555) 010-9421</p>
          <div className="mt-7 space-y-2 text-accent-300">
            <a href="#">LinkedIn</a>
            <a href="#" className="block">Instagram</a>
            <a href="#" className="block">X / Twitter</a>
            <a href="#" className="block">Behance</a>
          </div>
        </aside>
      </section>
    </>
  );
}
