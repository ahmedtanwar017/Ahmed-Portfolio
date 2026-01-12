export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get in Touch
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          I’m currently open to work opportunities. You can reach me via email or connect with me on social platforms.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:ahmed@example.com"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/ahmed"
            target="_blank"
            className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ahmed"
            target="_blank"
            className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
