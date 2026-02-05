"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#030014] flex items-center justify-center p-4"
    >
      {/* Box Container */}
      <div className="relative w-full max-w-md bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
        
        {/* Glow effect */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-[80px]" />
        
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-zinc-400 text-sm mb-6">
            Response time: Usually within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>

            <div>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>

            <div>
              <textarea
                required
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full py-3 rounded-xl font-bold tracking-wide transition-all duration-300 ${
                status === "success"
                  ? "bg-green-500 text-white"
                  : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {status === "idle" && "Send Message"}
              {status === "loading" && "Sending..."}
              {status === "success" && "Message Received!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
