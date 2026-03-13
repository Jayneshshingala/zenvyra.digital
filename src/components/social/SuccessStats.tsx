"use client";

import { motion } from "framer-motion";

const STATS = [
  { label: "BRANDS SCALED", value: "50+", sub: "Across India & Global" },
  { label: "SATISFACTION", value: "99%", sub: "Video Production" },
  { label: "AD RECALL", value: "95%", sub: "Meta Marketing" },
];

export function SuccessStats() {
  return (
    <section className="py-24 container-tight">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
            <div className="text-4xl md:text-5xl font-black mb-2 text-white tabular-nums">
              {stat.value}
            </div>
            <div className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-1">
              {stat.label}
            </div>
            <div className="text-white/40 text-sm">
              {stat.sub}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
