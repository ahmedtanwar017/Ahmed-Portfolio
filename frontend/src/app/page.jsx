"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import About from "@/components/About";
import SocialSidebar from "@/components/SocialSidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Project";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

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
            <Projects />
            <Footer />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}