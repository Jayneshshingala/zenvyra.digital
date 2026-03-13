"use client";

import { motion } from "framer-motion";

export function ZenvyraLogo({ size = 24 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <motion.div
        className="text-white font-bold tracking-tighter"
        style={{
          fontSize: size,
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
          textShadow: "0 0 20px rgba(255,255,255,0.2)",
        }}
        whileHover={{ scale: 1.02 }}
      >
        <span className="text-white opacity-95">ZENVYRA</span>
        <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent ml-[2px]">
          .
        </span>
      </motion.div>
    </div>
  );
}


