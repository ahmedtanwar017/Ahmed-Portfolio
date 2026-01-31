"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Aptclouds Software Solutions",
      duration: "Jan 2025 - Present",
      skills: ["MERN Stack", "Backend APIs", "Cloud Deployment"],
      description:
        "Architecting full-stack web applications with a focus on scalable backend infrastructure and high-performance React components.",
      isCurrent: true,
    },
    {
      role: "Web Development Intern",
      company: "Tech Startup",
      duration: "Jun 2024 - Dec 2024",
      skills: ["React", "Tailwind CSS", "REST APIs"],
      description:
        "Developed responsive user interfaces and optimized frontend performance. Integrated complex RESTful services into modular components.",
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen flex items-center overflow-hidden bg-[#030014] px-6 lg:px-20 py-24">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT: SECTION HEADER (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-black tracking-[0.5em] text-cyan-400 uppercase italic">Timeline</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                Work <br /> <span className="text-cyan-400">History.</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-medium">
              A chronological log of my professional journey in software engineering and system architecture.
            </p>
            
            {/* STATS DECO */}
            <div className="pt-10 hidden lg:block">
               <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">System status</div>
               <div className="flex items-center gap-2 mt-2">
                 <div className="h-1 w-12 bg-cyan-500/50" />
                 <div className="h-1 w-4 bg-zinc-800" />
                 <div className="h-1 w-2 bg-zinc-800" />
               </div>
            </div>
          </motion.div>

          {/* RIGHT: CARDS (8 Cols) */}
          <div className="lg:col-span-8 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-4 bottom-4 w-[1px] bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent" />

            <div className="space-y-12 pl-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Node */}
                  <div className={`absolute -left-[45.5px] top-2 h-3 w-3 rounded-full border-2 border-[#030014] transition-all duration-500 z-10 
                    ${exp.isCurrent ? 'bg-cyan-500 shadow-[0_0_15px_#22d3ee]' : 'bg-zinc-800'}`} 
                  />

                  {/* Glass Card */}
                  <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500">
                    
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-bold text-violet-400 uppercase tracking-widest mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                      {exp.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="text-[9px] font-black uppercase tracking-widest text-white/40 border border-white/5 px-2 py-1 rounded bg-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Deco Corner */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="text-[8px] font-mono text-cyan-500/30">0{index + 1}_LOG</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}