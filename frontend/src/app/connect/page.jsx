"use client";

import { useState } from "react";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("User Info:", formData);
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4 py-10">
      {/* Container: Changed max-w-lg to max-w-md for a tighter look, and rounded-lg for sharper corners */}
      <div className="w-full max-w-md bg-white/[0.03] border border-white/10 rounded-lg p-6 shadow-2xl backdrop-blur-xl transition-all hover:border-white/20">
        
        <h2 className="text-2xl text-white font-bold text-center mb-1 tracking-tight">
          Get In Touch
        </h2>

        <p className="text-zinc-500 text-xs text-center mb-6 uppercase tracking-widest">
          Secure Message Portal
        </p>

        {submitted ? (
          <div className="text-center py-10">
            <div className="text-cyan-400 text-lg font-medium mb-2">
              ✓ Message Received
            </div>
            <p className="text-zinc-400 text-sm">
              I'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1.5">
                <label className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 bg-black/40 text-white rounded-md outline-none border border-white/5 focus:border-cyan-500/50 focus:bg-black/60 transition-all text-sm"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 bg-black/40 text-white rounded-md outline-none border border-white/5 focus:border-cyan-500/50 focus:bg-black/60 transition-all text-sm"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Message</label>
              <textarea
                name="message"
                placeholder="How can I help?"
                className="w-full px-3 py-2 bg-black/40 text-white rounded-md outline-none border border-white/5 focus:border-cyan-500/50 focus:bg-black/60 transition-all text-sm resize-none"
                rows="4"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 mt-2 rounded-md font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                loading
                  ? "bg-zinc-800 cursor-not-allowed text-zinc-500"
                  : "bg-white text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              }`}
            >
              {loading ? "Processing..." : "Send Request"}
            </button>

            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="h-[1px] w-4 bg-zinc-800"></div>
              <p className="text-[9px] text-zinc-600 uppercase tracking-tighter">
                End-to-end encrypted
              </p>
              <div className="h-[1px] w-4 bg-zinc-800"></div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}