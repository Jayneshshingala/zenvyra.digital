"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "CLIENT ONE", "CLIENT TWO", "CLIENT THREE", "CLIENT FOUR", "CLIENT FIVE",
  "CLIENT SIX", "CLIENT SEVEN", "CLIENT EIGHT", "CLIENT NINE", "CLIENT TEN"
];

export function LogoSlider() {
  return (
    <section className="py-12 bg-black/40 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden group">
        <motion.div
          className="flex gap-12 md:gap-24 items-center px-4"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="text-white/20 text-xl md:text-2xl font-black tracking-widest hover:text-white/60 transition-colors uppercase"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
