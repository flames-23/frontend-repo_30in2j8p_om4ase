import { Github, Link2 } from "lucide-react";

const projects = [
  {
    title: "Campus Connect",
    description:
      "A portal for students to share notes, events, and opportunities.",
    tech: ["React", "FastAPI", "MongoDB"],
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "CodeTrack",
    description:
      "A DSA practice tracker with streaks, tags, and progress charts.",
    tech: ["Vite", "Tailwind", "IndexedDB"],
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Portfolio Starter",
    description: "A clean, responsive template for student portfolios.",
    tech: ["React", "Framer Motion"],
    github: "https://github.com/",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-gray-600">
              A few things I've built recently.
            </p>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:border-gray-400 sm:inline-block"
          >
            View GitHub
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs text-indigo-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
                >
                  <Link2 size={16} /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
