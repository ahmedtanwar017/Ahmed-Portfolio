"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRef, useMemo } from "react";

export default function Hero() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    const count = 320;
    for (let i = 0; i < count; i++) {
      temp.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 26,
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 26
        )
      );
    }
    return temp;
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center
                 bg-gradient-to-br from-[#020617] via-[#040b1f] to-[#00030a]
                 overflow-hidden px-6 pb-10"
    >
      {/* CYBER GLOW LAYER */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,255,0.15),transparent_65%)]" />

      {/* 3D PARTICLES */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 15], fov: 75 }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[10, 10, 10]} intensity={1.4} />

        <Points ref={pointsRef} positions={particles} stride={3} frustumCulled>
          <PointMaterial
            size={0.16}
            color="#00f6ff"
            sizeAttenuation
            depthWrite={false}
            transparent
          />
        </Points>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.18}
        />

        <Preload all />
      </Canvas>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-3xl text-center px-4"
      >
        <p className="text-cyan-300 text-lg md:text-xl font-medium tracking-widest">
          INITIALIZING PROFILE
        </p>

        <h1
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mt-2
                     drop-shadow-[0_0_25px_rgba(0,255,255,0.35)]"
        >
          Ahmed <span className="text-cyan-400">Tanwar</span>
        </h1>

        <p className="text-2xl md:text-3xl text-zinc-300 mt-3 font-semibold">
          Engineering Digital Intelligence.
        </p>

        <p className="mt-6 text-md md:text-lg text-zinc-400">
          Full-stack developer focused on building secure, scalable, and
          performance-driven systems using modern web technologies.
          <span className="text-cyan-400 font-semibold"> #CyberDeveloper</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="px-8 py-3 rounded-md
                       bg-cyan-500/10 text-cyan-300
                       border border-cyan-400/50
                       hover:bg-cyan-400 hover:text-black
                       transition-all duration-300
                       shadow-[0_0_35px_rgba(0,255,255,0.45)]"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-3 rounded-md
                       border border-zinc-600 text-zinc-300
                       hover:border-cyan-400 hover:text-cyan-400
                       transition-all"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
