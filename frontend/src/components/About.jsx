export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          About Me
        </h2>

        <p className="mt-6 text-gray-600 text-center text-lg leading-relaxed">
          I am a Full-Stack Developer who enjoys building clean and scalable
          web applications. I focus on writing simple, readable code and
          creating smooth user experiences.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
