"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Aptclouds Software Solutions",
      duration: "Jan 2025 - Present",
      description:
        "Working on full-stack web applications using MERN stack. Focused on backend APIs, frontend React components, and cloud deployment.",
    },
    {
      role: "Intern - Web Development",
      company: "Tech Startup",
      duration: "Jun 2024 - Dec 2024",
      description:
        "Built responsive web applications, integrated REST APIs, and optimized frontend performance using React and Tailwind.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Experience
        </h2>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="border-l-2 border-indigo-600 pl-6 relative"
            >
              <span className="absolute -left-3 top-2 w-6 h-6 bg-indigo-600 rounded-full"></span>

              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-indigo-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
