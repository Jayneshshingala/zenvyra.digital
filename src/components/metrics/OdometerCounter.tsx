"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface OdometerCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  sublabel?: string;
  accent?: string;
}

export function OdometerCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2.5,
  label,
  sublabel,
  accent = "#3B7FF5",
}: OdometerCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!numRef.current) return;

    const obj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: numRef.current,
      start: "top 80%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;

        gsap.to(obj, {
          val: target,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            if (numRef.current) {
              const formatted =
                target >= 1000000
                  ? (obj.val / 1000000).toFixed(1)
                  : target >= 1000
                  ? Math.floor(obj.val / 1000).toString()
                  : Math.floor(obj.val).toString();
              numRef.current.textContent = prefix + formatted;
            }
          },
        });
      },
    });

    return () => trigger.kill();
  }, [target, duration, prefix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: accent,
          fontVariantNumeric: "tabular-nums",
          display: "flex",
          alignItems: "baseline",
          gap: 2,
        }}
      >
        <span ref={numRef} aria-live="polite">
          {prefix}0
        </span>
        <span
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            fontWeight: 800,
            color: accent,
          }}
        >
          {suffix}
        </span>
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
          fontWeight: 700,
          color: "var(--color-text-primary)",
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--color-text-muted)",
            marginTop: 4,
          }}
        >
          {sublabel}
        </div>
      )}
    </motion.div>
  );
}
