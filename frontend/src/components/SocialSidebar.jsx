"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourusername" },
  { name: "Instagram", icon: <Instagram size={20} />, href: "https://instagram.com/yourusername" },
  { name: "Mail", icon: <Mail size={20} />, href: "mailto:your@email.com" },
];

export default function SocialSidebar() {
  return (
    <div className="fixed right-6 bottom-0 z-[150] hidden lg:flex flex-col items-center gap-6">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex flex-col gap-7 mb-4"
      >
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.1 }}
            className="text-zinc-500 hover:text-cyan-400 transition-all duration-300 relative group"
            title={social.name}
          >
            {/* Subtle Glow behind icon on hover */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">{social.icon}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Vertical Decorative Line - Matching your theme */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "120px" }}
        transition={{ delay: 2, duration: 1 }}
        className="w-[1px] bg-gradient-to-t from-violet-600 via-cyan-500 to-transparent opacity-50"
      />
    </div>
  );
}