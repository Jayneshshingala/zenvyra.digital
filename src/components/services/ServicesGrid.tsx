"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "wedding",
    icon: "💍",
    tag: "Premium",
    title: "Wedding Shooting & Editing",
    description:
      "Capturing your most precious moments with cinematic precision. High-end storytelling for your special day.",
    stat: "4K",
    statLabel: "Cinematic Delivery",
    accent: "#E5383B",
    large: true,
  },
  {
    id: "reels",
    icon: "📱",
    tag: "High-ROI",
    title: "Reel / Short Shooting & Editing",
    description:
      "Viral-ready vertical content engineered for algorithm mastery and maximum engagement.",
    stat: "99%",
    statLabel: "Satisfaction Rate",
    accent: "#3B7FF5",
    large: false,
  },
  {
    id: "digital",
    icon: "🚀",
    tag: "Growth",
    title: "Digital Marketing",
    description:
      "Comprehensive strategy to scale your brand presence across all digital touchpoints.",
    stat: "50+",
    statLabel: "Brands Scaled",
    accent: "#7c3aed",
    large: false,
  },
  {
    id: "meta",
    icon: "🎯",
    tag: "Meta Ads",
    title: "Meta Marketing (FB/IG Ads)",
    description:
      "Precision targeting and high-converting ad sets on Facebook and Instagram for maximum ROI.",
    stat: "95%",
    statLabel: "Ad Recall",
    accent: "#06b6d4",
    large: false,
  },
  {
    id: "creative",
    icon: "✦",
    tag: "Agency",
    title: "Full Creative Agency",
    description:
      "Your end-to-end partner for all things branding, design, and content production.",
    stat: "360°",
    statLabel: "Brand Coverage",
    accent: "#f59e0b",
    large: false,
  },
];


function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-cursor
      style={{
        gridRow: service.large ? "span 2" : "span 1",
        gridColumn: service.large ? "span 2" : "span 1",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 24,
        padding: service.large ? "48px" : "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        cursor: "none",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        backdropFilter: "blur(12px)",
      }}
      whileHover={{
        scale: 1.02,
        borderColor: `${service.accent}40`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${service.accent}15`,
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: service.accent,
          opacity: 0.06,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div>
        {/* Tag */}
        <span
          style={{
            display: "inline-block",
            padding: "4px 12px",
            background: `${service.accent}18`,
            border: `1px solid ${service.accent}30`,
            borderRadius: 9999,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: service.accent,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          {service.tag}
        </span>

        {/* Icon + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <span
            style={{
              fontSize: service.large ? "2.5rem" : "1.8rem",
              filter: "drop-shadow(0 0 12px rgba(255,255,255,0.2))",
            }}
            role="img"
            aria-label={service.title}
          >
            {service.icon}
          </span>
          <h3
            style={{
              fontSize: service.large ? "clamp(1.4rem, 3vw, 2.2rem)" : "clamp(1.1rem, 2vw, 1.4rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {service.title}
          </h3>
        </div>

        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: service.large ? "1rem" : "0.9rem",
            lineHeight: 1.7,
            maxWidth: service.large ? 520 : "none",
          }}
        >
          {service.description}
        </p>
      </div>

      {/* Stat badge */}
      <div
        style={{
          marginTop: 32,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: service.large ? "3rem" : "2rem",
              fontWeight: 800,
              color: service.accent,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {service.stat}
          </div>
          <div
            style={{
              fontSize: "0.78rem",
              color: "var(--color-text-muted)",
              marginTop: 4,
            }}
          >
            {service.statLabel}
          </div>
        </div>

        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: `1.5px solid ${service.accent}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: service.accent,
            transition: "background 0.3s",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M7 7h10v10"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--color-space-black)" }}
      aria-label="Our Services"
    >
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-electric)",
              fontWeight: 700,
              display: "block",
              marginBottom: 12,
            }}
          >
            What We Do
          </span>
          <h2 className="text-display" style={{ maxWidth: 700 }}>
            Full-Spectrum{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p
            style={{
              marginTop: 16,
              color: "var(--color-text-secondary)",
              fontSize: "1.05rem",
              maxWidth: 560,
              lineHeight: 1.65,
            }}
          >
            From zero to viral — every service engineered for measurable growth.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "280px",
            gap: 20,
          }}
          aria-label="Services bento grid"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
