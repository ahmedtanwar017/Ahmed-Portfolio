"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ finishLoading }) {
  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 3000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-[200] bg-[#030014] flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center">
        {/* Animated Symbol */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-32 h-32 flex items-center justify-center"
        >
          {/* Rotating Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-t-cyan-500 border-r-transparent border-b-violet-500 border-l-transparent rounded-full"
          />
          
          <div className="text-5xl font-black flex gap-1 tracking-tighter">
            <motion.span 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              A
            </motion.span>
            <motion.span 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            >
              T
            </motion.span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="mt-10 w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "linear" }}
            className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
          />
        </div>
      </div>
    </div>
  );
}