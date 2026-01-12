"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRef, useMemo } from "react";

export default function Hero() {
  const pointsRef = useRef();

  // Generate particles once
  const particles = useMemo(() => {
    const temp = [];
    const count = 300;
    for (let i = 0; i < count; i++) {
      temp.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 25
        )
      );
    }
    return temp;
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050810] overflow-hidden px-6 pb-10"
    >
      {/* 3D PARTICLES */}
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 0, 15], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <Points ref={pointsRef} positions={particles} stride={3} frustumCulled>
          <PointMaterial
            size={0.15}
            color="#00ffff"
            sizeAttenuation
            depthWrite={false}
            transparent
          />
        </Points>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.15}
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
        {/* Greeting */}
        <p className="text-cyan-400 text-lg md:text-xl font-medium">Hi, my name is</p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mt-2 glow">
          Ahmed Tanwar
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-zinc-400 mt-2 font-semibold">
          Crafting Experiences, Not Just Code.
        </p>

        {/* Description */}
        <p className="mt-6 text-md md:text-lg text-zinc-400">
          "I'm a full-stack developer passionate about building scalable web applications. 
          With expertise in JavaScript and Python, I create robust backends and seamless integrations. 
          Currently, I focus on crafting innovative, user-centric solutions that make an impact." <span className="text-cyan-400 font-semibold">#CodeEnthusiast</span>
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="px-8 py-3 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-400/40 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.3)]"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-3 rounded-md border border-zinc-600 text-zinc-300 hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
