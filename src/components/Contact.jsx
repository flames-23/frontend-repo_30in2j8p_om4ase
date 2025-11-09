import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-gray-600">
          I'm open to internships, freelance work, and collaborations.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="h-28 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white shadow hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-indigo-600" size={18} />
                you@example.com
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-indigo-600" size={18} />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-indigo-600" size={18} />
                Your City, India
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 p-4 text-sm text-gray-700">
              Prefer email? Drop a line with your requirements and timeline. I'll
              reply within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
