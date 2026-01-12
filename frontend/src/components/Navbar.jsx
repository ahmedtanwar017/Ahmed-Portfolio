"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "HOME", href: "#hero", id: "hero" },
  { name: "ABOUT", href: "#about", id: "about" },
  { name: "EXPERIENCE", href: "#experience", id: "experience" },
  { name: "PROJECTS", href: "#projects", id: "projects" },
  { name: "CONTACT", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  /* ================= ACTIVE SECTION (SMOOTH + STABLE) ================= */
  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY + 140;
    let current = "hero";

    for (const link of links) {
      const section = document.getElementById(link.id);
      if (section && scrollPos >= section.offsetTop) {
        current = link.id;
      }
    }

    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ================= LOGO CLICK REFRESH ================= */
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0f1c]/90 backdrop-blur-md border-b border-cyan-500/20">
      {/* Top Scan Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <button
          onClick={handleLogoClick}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
          </span>

          <h1 className="font-mono font-bold text-lg tracking-widest text-cyan-300 group-hover:text-cyan-200 transition">
            <span className="text-purple-400">[</span>
            AHMED
            <span className="text-purple-400">]</span>
            <span className="text-green-400 ml-1 animate-pulse">_</span>
          </h1>
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex gap-8 text-xs font-mono tracking-widest">
          {links.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={link.href}
                className={`transition-all duration-300 ${
                  active === link.id
                    ? "text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                    : "text-zinc-400 hover:text-cyan-200"
                }`}
              >
                <span className="text-purple-400">&lt;</span>
                {link.name}
                <span className="text-purple-400">&gt;</span>
              </a>

              <span
                className={`absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-purple-500 transform transition-all duration-300 origin-left ${
                  active === link.id
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden w-10 h-10 border border-cyan-500/30 rounded-md flex flex-col items-center justify-center gap-1.5 transition hover:border-cyan-400"
          aria-label="Open Menu"
        >
          <span
            className={`h-[2px] w-6 bg-cyan-400 transition ${
              isOpen && "rotate-45 translate-y-2"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-cyan-400 transition ${
              isOpen && "opacity-0"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-cyan-400 transition ${
              isOpen && "-rotate-45 -translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0f1c]/95 border-t border-cyan-500/20 overflow-hidden"
          >
            <ul className="py-6 flex flex-col items-center gap-6 font-mono text-sm tracking-widest">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition ${
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

            <div className="px-6 py-3 border-t border-cyan-500/20 text-xs text-cyan-400/70 font-mono">
              <span className="text-green-400">$</span> SYSTEM: ONLINE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
