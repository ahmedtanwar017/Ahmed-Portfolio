"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "HOME", href: "#hero", id: "hero" },
  { name: "ABOUT", href: "#about", id: "about" },
  { name: "EXPERIENCE", href: "#experience", id: "experience" },
  { name: "PROJECTS", href: "#projects", id: "projects" },
];

const mobileLinks = [
  ...links,
  { name: "CONTACT", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const ticking = useRef(false);

  /* ================= ULTRA SMOOTH ACTIVE SECTION ================= */
  const handleScroll = useCallback(() => {
    if (ticking.current) return;

    ticking.current = true;
    requestAnimationFrame(() => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "hero";

      for (const link of mobileLinks) {
        const section = document.getElementById(link.id);
        if (section && scrollPos >= section.offsetTop) {
          current = link.id;
        }
      }

      setActive((prev) => (prev === current ? prev : current));
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#060b16]/80 backdrop-blur-xl border-b border-cyan-500/10">
      {/* HUD Scan Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-pulse" />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <button
          onClick={() => (window.location.href = "/")}
          className="group flex items-center gap-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="relative h-4 w-4 rounded-full border border-cyan-400/40"
          >
            <div className="absolute inset-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          </motion.div>

          <h1 className="font-mono text-lg tracking-[0.2em] text-cyan-300 group-hover:text-cyan-200 transition">
            <span className="text-purple-400">[</span>
            AHMED
            <span className="text-purple-400">]</span>
            <span className="text-green-400 ml-1 animate-pulse">_</span>
          </h1>
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex gap-10 text-xs font-mono tracking-widest relative">
          {links.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={link.href}
                className={`transition-colors ${
                  active === link.id
                    ? "text-cyan-300"
                    : "text-zinc-400 hover:text-cyan-200"
                }`}
              >
                &lt;{link.name}&gt;
              </a>

              {active === link.id && (
                <motion.span
                  layoutId="nav-glow"
                  className="absolute -bottom-3 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* ================= HIRE ME BUTTON ================= */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-md
                     font-mono text-xs tracking-widest
                     text-cyan-300 border border-cyan-400/40
                     bg-cyan-400/5 backdrop-blur
                     shadow-[0_0_15px_rgba(34,211,238,0.25)]
                     hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]
                     hover:text-cyan-200 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          HIRE ME
        </motion.a>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden w-10 h-10 border border-cyan-500/30 rounded-md flex flex-col items-center justify-center gap-1.5"
        >
          <motion.span animate={isOpen ? { rotate: 45, y: 6 } : {}} className="h-[2px] w-6 bg-cyan-400" />
          <motion.span animate={isOpen ? { opacity: 0 } : {}} className="h-[2px] w-6 bg-cyan-400" />
          <motion.span animate={isOpen ? { rotate: -45, y: -6 } : {}} className="h-[2px] w-6 bg-cyan-400" />
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#060b16]/95 backdrop-blur-xl border-t border-cyan-500/10"
          >
            <ul className="py-6 flex flex-col items-center gap-6 font-mono">
              {mobileLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      active === link.id
                        ? "text-cyan-300"
                        : "text-zinc-400 hover:text-cyan-200"
                    }`}
                  >
                    <span className="text-green-400 mr-2">$</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="px-6 py-3 border-t border-cyan-500/10 text-xs font-mono text-cyan-400/70">
              $ SYSTEM STATUS: <span className="text-green-400">ONLINE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
