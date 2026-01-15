"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Preload } from "@react-three/drei";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as THREE from "three";
import { useRef, useMemo, Suspense } from "react";

function InteractivePoints() {
  const pointsRef = useRef();
  
  // Memoize positions so they aren't recalculated on re-renders
  const particlePositions = useMemo(() => {
    const count = 1000; // Increased density for a "smoother" look
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 40;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    // Use low-frequency math for "buttery" movement
    pointsRef.current.rotation.x = Math.sin(t / 12) * 0.08;
    pointsRef.current.rotation.y = Math.cos(t / 18) * 0.08;
  });

  return (
    <Points ref={pointsRef} positions={particlePositions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#00f6ff"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth out the scroll progress to prevent "jittery" parallax
  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(smoothYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#020617] overflow-hidden px-6"
    >
      {/* 1. BACKGROUND GRID - Simplified for performance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: `linear-gradient(#00f6ff 1px, transparent 1px), linear-gradient(90deg, #00f6ff 1px, transparent 1px)`, 
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }} 
        />
      </div>

      {/* 2. 3D CANVAS - Optimized DPR and alpha */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas 
          camera={{ position: [0, 0, 20], fov: 50 }}
          dpr={[1, 2]} // Performance cap for 4k monitors
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <InteractivePoints />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* 3. MAIN CONTENT - Added will-change and smooth y */}
      <motion.div
        style={{ y, opacity, willChange: "transform, opacity" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 max-w-5xl text-center"
      >
        <motion.div
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.4em", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-cyan-400 text-xs md:text-sm font-bold uppercase mb-6"
        >
          — Software Architect —
        </motion.div>

        <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.85] mb-8 select-none">
          AHMED <br />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
              TANWAR
            </span>
            <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed"
        >
          Engineering <span className="text-white">high-performance</span> digital systems 
          with precision architecture and fluid user experiences.
        </motion.p>

        {/* BUTTON GROUP */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="group relative px-12 py-4 bg-cyan-500 text-[#020617] font-bold uppercase text-[10px] tracking-[0.2em] rounded-full overflow-hidden transition-shadow hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
          >
            <span className="relative z-10">Initialize Project</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02, color: "#fff" }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            className="px-12 py-4 border border-zinc-800 text-zinc-400 font-bold uppercase text-[10px] tracking-[0.2em] rounded-full transition-colors hover:bg-white/5"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      {/* 4. HUD / METRICS - Stabilized animations */}
      <div className="absolute bottom-10 inset-x-10 flex justify-between items-end z-20 pointer-events-none select-none">
        <div className="hidden md:flex flex-col gap-3">
          <div className="w-24 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Build_v2.0.4 // 2024</span>
        </div>
        
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800/50 backdrop-blur-sm"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.2em]">Systems_Nominal</span>
        </motion.div>
    </div>
    </section>
  );
}