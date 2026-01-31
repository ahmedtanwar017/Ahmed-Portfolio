"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

// --- 3D ANIMATION LOGIC ---

function AnimatedBackground() {
  const ref = useRef();
  
  const sphere = useMemo(() => {
    const count = 2000; // Increased count for more "sparkle"
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 15;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#22d3ee" // Electric Cyan
          size={0.07}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// --- UI COMPONENTS ---

const StatusBadge = () => (
  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-xl mb-8">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
    </span>
    <span className="text-[10px] font-black tracking-[0.25em] text-cyan-200 uppercase">
      Available for new projects
    </span>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#030014] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. ATMOSPHERIC LIGHTING (The "Attractive" Glow) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* 2. BACKGROUND CANVAS */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <AnimatedBackground />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* 3. ARCHITECTURAL OVERLAY (Neon Grid) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(#22d3ee 0.5px, transparent 0.5px), linear-gradient(90deg, #22d3ee 0.5px, transparent 0.5px)`,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      />

      {/* 4. HERO CONTENT */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <StatusBadge />
        
        <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-none">
          Ahmed <br className="md:hidden" />
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.5)]">
             Tanwar
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed mb-10 font-medium">
          "Building digital interfaces that bridge the gap between <span className="text-cyan-400 font-bold">imagination</span> and <span className="text-violet-400 font-bold">reality</span>."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            Let's Talk
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white font-bold border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all">
            Download CV
          </button>
        </div>
      </div>

      {/* 5. DESIGN ACCENT: Side markers */}
      <div className="absolute left-10 bottom-10 hidden xl:flex items-center gap-4 rotate-[-90deg] origin-left">
        <span className="text-[10px] font-mono text-cyan-500/50 tracking-[0.5em] uppercase">Portfolio v2.0</span>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyan-500/50 to-transparent" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </div>
    </section>
  );
}