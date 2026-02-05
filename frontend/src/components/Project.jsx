"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Face Attendance System",
      tech: ["React", "Django", "ML"],
      description:
        "AI based attendance system using face recognition. Real-time detection, automated reports and admin dashboard integration.",
      image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797",
    },
    {
      title: "Tour & Travel Platform",
      tech: ["MERN", "Tailwind", "Auth"],
      description:
        "Complete travel booking website with packages, authentication, admin panel and responsive UI.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "E-Commerce Store",
      tech: ["React", "Node", "MongoDB"],
      description:
        "Full stack ecommerce platform with cart system, payment integration and order tracking.",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    },
    {
      title: "Portfolio Website",
      tech: ["Next.js", "Framer Motion"],
      description:
        "Personal portfolio with modern animations, smooth UI and interactive design components.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#030014] px-6 lg:px-12 py-20"
    >
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-black tracking-[0.4em] text-cyan-400 uppercase">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mt-3">
            Featured <span className="text-cyan-400 italic">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-10 items-center"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="lg:col-span-5 space-y-5">
                    <span className="text-xs font-black tracking-[0.4em] text-violet-500 uppercase">
                      Project 0{index + 1}
                    </span>

                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-base text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-1.5 text-[10px] font-bold text-white border border-white/10 bg-white/5 rounded-full uppercase tracking-widest backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-1.5 bg-gradient-to-t from-cyan-500/50 to-violet-600/50 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />

                      <div className="relative w-full max-w-[500px] h-[280px] overflow-hidden rounded-2xl border border-white/20 bg-[#030014]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-violet-500" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:col-span-7 flex justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-1.5 bg-gradient-to-t from-cyan-500/50 to-violet-600/50 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />

                      <div className="relative w-full max-w-[500px] h-[280px] overflow-hidden rounded-2xl border border-white/20 bg-[#030014]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-violet-500" />
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-5">
                    <span className="text-xs font-black tracking-[0.4em] text-violet-500 uppercase">
                      Project 0{index + 1}
                    </span>

                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-base text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-1.5 text-[10px] font-bold text-white border border-white/10 bg-white/5 rounded-full uppercase tracking-widest backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="
      relative group
      px-8 py-4
      rounded-full
      border border-cyan-500/30
      bg-cyan-500/10
      text-cyan-300
      font-semibold
      tracking-wider
      transition-all duration-300
      hover:bg-cyan-500/20
      hover:border-cyan-400
      hover:text-white
      overflow-hidden
    "
          >
            <span className="relative z-10 flex items-center gap-2">
              View More Projects on GitHub
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>

            {/* Glow Effect */}
            <div
              className="
      absolute inset-0
      bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-cyan-500/0
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
    "
            />
          </a>
        </div>
      </div>
    </section>
  );
}
