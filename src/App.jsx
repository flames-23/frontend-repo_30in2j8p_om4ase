import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Rocket, User, FolderGit2, Mail } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple sticky navbar */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold">
            <Rocket className="text-indigo-600" size={20} />
            BCA Portfolio
          </a>
          <div className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#about" className="hover:text-gray-900 inline-flex items-center gap-1">
              <User size={16} /> About
            </a>
            <a href="#projects" className="hover:text-gray-900 inline-flex items-center gap-1">
              <FolderGit2 size={16} /> Projects
            </a>
            <a href="#contact" className="hover:text-gray-900 inline-flex items-center gap-1">
              <Mail size={16} /> Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-gray-900"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-gray-900" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#contact" className="hover:text-gray-900" aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
