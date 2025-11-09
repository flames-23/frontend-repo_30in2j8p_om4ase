import { Code2, Cpu, Globe2 } from "lucide-react";

const skills = [
  { icon: Code2, title: "Frontend", items: ["React", "Tailwind", "Vite"] },
  { icon: Cpu, title: "Core CS", items: ["DSA", "OOP", "DBMS"] },
  { icon: Globe2, title: "Tools", items: ["Git", "Postman", "Figma"] },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              About Me
            </h2>
            <p className="mt-4 text-gray-600">
              I'm a Bachelor of Computer Applications student who loves turning
              ideas into interactive experiences. I enjoy learning new
              technologies and building projects that solve real problems.
            </p>
            <p className="mt-3 text-gray-600">
              Currently exploring full‑stack development with a strong focus on
              clean UI, accessible design, and efficient code.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 text-indigo-600">
                  <Icon size={20} />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  {items.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
