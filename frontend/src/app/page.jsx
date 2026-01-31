"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import About from "@/components/About";
import SocialSidebar from "@/components/SocialSidebar";
import Experience from "@/components/Experience";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-[#030014]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Hero />
            <About />
            <SocialSidebar />
            <Experience />
            {/* Add your other sections here with matching IDs */}
            <section id="about" className="h-screen flex items-center justify-center text-white">About Section</section>
            <section id="experience" className="h-screen flex items-center justify-center text-white">Experience Section</section>
            <section id="projects" className="h-screen flex items-center justify-center text-white">Projects Section</section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}