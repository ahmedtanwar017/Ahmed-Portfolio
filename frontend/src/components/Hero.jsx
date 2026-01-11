export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-indigo-600">Ahmed</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Full-Stack Developer building modern web applications using
          MERN & Next.js.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
