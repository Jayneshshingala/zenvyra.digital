"use client";

import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AntiGravityScene = dynamic(() => import("./AntiGravityScene").then(m => m.AntiGravityScene), {
  ssr: false,
});




export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--color-space-black)",
      }}
      aria-label="Hero — Anti-Gravity Digital Environment"
    >
      {/* Star field background */}
      <div className="star-field" aria-hidden="true" />

      {/* 3D Canvas Background */}
      <div
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
        aria-hidden="true"
      >
        <Suspense fallback={null}>
          <AntiGravityScene />
        </Suspense>
      </div>

      {/* Grid overlay */}
      <div
        className="grid-overlay"
        style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "100px clamp(20px, 5vw, 80px) 80px",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: 32, display: "inline-flex" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "rgba(59,127,245,0.1)",
              border: "1px solid rgba(59,127,245,0.3)",
              borderRadius: 9999,
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#3B7FF5",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#3B7FF5",
                boxShadow: "0 0 8px #3B7FF5",
                animation: "glow-pulse 2s ease infinite",
              }}
            />
            Powering Digital Growth
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-hero"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 900, marginBottom: 12 }}
        >
          <span style={{ color: "var(--color-text-primary)" }}>
            We Scale{" "}
          </span>
          <span className="gradient-text">Brands</span>
          <br />
          <span style={{ color: "var(--color-text-primary)" }}>
            to{" "}
          </span>
          <span className="gradient-text">Orbit</span>
          <span style={{ color: "var(--color-crimson)" }}>.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
            color: "var(--color-text-secondary)",
            maxWidth: 560,
            lineHeight: 1.65,
            marginBottom: 48,
            marginTop: 20,
          }}
        >
          Full-service digital solutions: Social Media Growth, FPV Drone
          Videography, Video Editing & Event Production.
          <strong style={{ color: "var(--color-text-primary)" }}>
            {" "}1.4M+ followers scaled.
          </strong>
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}
        >
          <a href="tel:+918320594829" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Now — Free Strategy Call
          </a>

          <a href="#services" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
            View Our Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 16, fontSize: "0.78rem", color: "var(--color-text-muted)" }}
        >
          Takes less than 30 seconds · Talk directly with a strategist · No commitment
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            position: "absolute",
            bottom: 48,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{
              width: 24,
              height: 40,
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: 12,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "6px 0",
            }}
          >
            <div style={{ width: 4, height: 8, borderRadius: 2, background: "var(--color-electric)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
