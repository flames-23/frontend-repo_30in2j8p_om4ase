import { ArrowRight, GraduationCap, User } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-14">
          <div className="w-full md:w-7/12">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/50 px-3 py-1 text-xs text-indigo-700">
              <GraduationCap size={16} />
              BCA Student Portfolio
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Hi, I'm <span className="text-indigo-600">Your Name</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Passionate about building clean, user-friendly applications. I’m a
              BCA student focused on web development, data structures, and
              problem solving.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-700 shadow-sm hover:border-gray-400"
              >
                <User size={18} /> Contact Me
              </a>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="relative mx-auto aspect-square w-72 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-lg sm:w-80">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/90 backdrop-blur">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-24 w-24 rounded-full bg-indigo-100 ring-4 ring-white" />
                  <p className="text-sm font-medium text-indigo-600">BCA • 2025</p>
                  <p className="mt-1 text-lg font-semibold text-gray-800">
                    Aspiring Full‑Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
