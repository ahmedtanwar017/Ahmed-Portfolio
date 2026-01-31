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

  // --- REFRESH LOGIC ---
  // This triggers a full page reload, causing the Loader to show again
  const handleRefresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  // Smooth scroll for internal links
  const handleScrollTo = (e, id) => {
    e.preventDefault();

    if (id === "hero") {
      window.history.pushState(null, "", "#hero");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    }

    setActive(id);
    setIsOpen(false);
  };

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

      setActive(current);
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className="fixed top-0 w-full z-[100]">
      {/* Background Glass Effect */}
      <div className="absolute inset-0 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5" />

      {/* Top Accent Glow Line */}
      <div className="relative h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

      <nav className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* ================= LOGO (REFRESH BUTTON) ================= */}
        <button
          onClick={handleRefresh}
          className="group flex items-center gap-3 outline-none cursor-pointer"
          title="Refresh Page"
        >
          <div className="relative h-10 w-10 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-xl border border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
            />
            <span className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
              A
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm tracking-[0.3em] text-white group-hover:text-cyan-400 transition-colors">
              AHMED
            </span>
            <span className="text-[10px] font-mono text-cyan-500 leading-none tracking-widest">
              TANWAR
            </span>
          </div>
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-2xl backdrop-blur-md">
          <ul className="flex gap-1 text-[11px] font-bold tracking-widest">
            {links.map((link) => (
              <li key={link.id} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`relative z-10 px-6 py-2 rounded-xl transition-all duration-300 block ${
                    active === link.id
                      ? "text-white"
                      : "text-zinc-500 hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </a>

                {active === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/40 rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= ACTION BUTTON ================= */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl
                     bg-gradient-to-r from-cyan-500 to-violet-600
                     text-white font-bold text-[11px] tracking-widest
                     shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                     transition-all duration-300"
        >
          CONNECT
        </motion.a>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden p-2 text-white outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 9 } : {}}
              className="w-full h-[2px] bg-cyan-400 block origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : {}}
              className="w-full h-[2px] bg-white block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -9 } : {}}
              className="w-full h-[2px] bg-cyan-400 block origin-center"
            />
          </div>
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#030014]/95 backdrop-blur-2xl border-b border-white/10"
          >
            <ul className="flex flex-col p-8 gap-8 items-center font-bold tracking-[0.3em] text-xs">
              {mobileLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`${active === link.id ? "text-cyan-400" : "text-white"}`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
