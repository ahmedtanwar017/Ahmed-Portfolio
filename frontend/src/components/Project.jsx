"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Face Attendance System",
      description:
        "A web-based face recognition attendance system using MERN stack.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Tour & Travel Website",
      description:
        "A full-stack tour booking platform with user authentication.",
      tech: ["Next.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce application with cart and payment integration.",
      tech: ["React", "Tailwind", "Stripe"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Projects
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-gray-600">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-block mt-6 text-sm font-medium underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
