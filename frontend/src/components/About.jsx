"use client";

import React, { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import Image from "next/image";

/* =========================================================
   CLEAN PARTICLES
========================================================= */
function AboutParticles() {
  const ref = useRef(null);
  const positions = useMemo(() => {
    const count = 250;
    const array = new Float32Array(count * 3);
    for (let i = 0; i < array.length; i++) array[i] = (Math.random() - 0.5) * 25;
    return array;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial size={0.08} color="#22d3ee" transparent opacity={0.2} depthWrite={false} sizeAttenuation />
      </Points>
    </group>
  );
}

export default function About() {
  const skills = ["React", "Next.js", "Node.js", "MongoDB", "Three.js", "Tailwind"];

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-[#030014] px-6 lg:px-12 py-20">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 12] }}>
          <Suspense fallback={null}>
            <AboutParticles />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* ================= LEFT SIDE: BIO (4 Cols) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="space-y-3">
              <span className="text-xs font-black tracking-[0.4em] text-cyan-400 uppercase">Architecture</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Bridging <span className="text-cyan-400 italic">Logic</span> & Design
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed">
                Full-Stack Engineer based in Mumbai. I specialize in building highly scalable applications where performance meets fluid user interaction.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-4 py-1.5 text-[10px] font-bold text-white border border-white/10 bg-white/5 rounded-full uppercase tracking-widest backdrop-blur-sm">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ================= CENTER: YOUR IMAGE (4 Cols) ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-t from-cyan-500/50 to-violet-600/50 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
              
              {/* Image Container */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-2xl border border-white/20 bg-[#030014]">
                <Image 
                  src="/ahmed.jpeg" 
                  alt="Ahmed Tanwar" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Decorative Corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-violet-500" />
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE: EDUCATION (4 Cols) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <span className="text-xs font-black tracking-[0.4em] text-violet-500 uppercase">Education Path</span>
            
            <div className="space-y-4">
              {[
                {
                  title: "B.E. Computer Engineering",
                  sub: "Mumbai University",
                  date: "2022 — 2026",
                  active: true
                },
                {
                  title: "Higher Secondary",
                  sub: "Maharashtra Board",
                  date: "2020 — 2022",
                  active: false
                }
              ].map((edu, idx) => (
                <div key={idx} className="relative p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-white/10 transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.title}</h3>
                    <div className={`h-2 w-2 rounded-full mt-2 ${edu.active ? 'bg-cyan-500 shadow-[0_0_10px_#22d3ee]' : 'bg-zinc-800'}`} />
                  </div>
                  <p className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">{edu.sub}</p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-2">{edu.date}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
               <span className="h-[1px] flex-1 bg-white/10" />
               <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">End Logs</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}