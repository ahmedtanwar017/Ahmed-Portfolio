"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import Image from "next/image";

export default function About() {
  const pointsRef = useRef();

  // Generate particles for About section
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
      id="about"
      className=" pt-10 relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050810] overflow-hidden px-6 py-24"
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

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-6xl flex flex-col md:flex-row items-center gap-12"
      >
        {/* LEFT: Text + Skills */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight glow mb-6">
            About Me
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
            I am a passionate Full-Stack Developer building <span className="text-cyan-400 font-semibold">clean, scalable, and high-performance web applications</span>. I write <span className="text-cyan-400 font-semibold">readable code</span>, implement <span className="text-cyan-400 font-semibold">modern UI/UX</span>, and create smooth user experiences.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Framer Motion",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-900 border border-cyan-400/20 rounded-full text-sm text-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Profile Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,255,255,0.3)] border-2 border-cyan-400/30">
            <Image
              src="/ahmed.jpeg"
              alt="My Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
