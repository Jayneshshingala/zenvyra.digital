"use client";

import { motion } from "framer-motion";
import { OdometerCounter } from "./OdometerCounter";

const PLATFORM_STATS = [
  {
    platform: "Instagram & TikTok",
    icon: "📸",
    metric: "1.4M+",
    detail: "Followers across platforms",
    color: "#e5383b",
  },
  {
    platform: "YouTube Channel",
    icon: "▶️",
    metric: "188K+",
    detail: "Subscribers managed",
    color: "#f59e0b",
  },
  {
    platform: "Viral Content",
    icon: "🚀",
    metric: "500M+",
    detail: "Total content views",
    color: "#3B7FF5",
  },
];

export function MetricsSection() {
  return (
    <section
      id="metrics"
      className="section"
      style={{
        background: "var(--color-space-deep)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Growth Metrics & Social Proof"
    >
      {/* Star field */}
      <div className="star-field" aria-hidden="true" />

      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(59,127,245,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
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
            Proven Growth
          </span>
          <h2 className="text-display" style={{ marginBottom: 16 }}>
            The Numbers{" "}
            <span className="gradient-text">Don't Lie</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.05rem",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Real growth. Real follower counts. Real subscribers. This is the
            track record we bring to your brand.
          </p>
        </motion.div>

        {/* Odometer Counters */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 96,
          }}
          aria-label="Key performance metrics"
        >
          <OdometerCounter
            target={1400000}
            suffix="M+"
            label="Total Followers Scaled"
            sublabel="Across Instagram & TikTok"
            accent="#e5383b"
          />
          <OdometerCounter
            target={188000}
            suffix="K+"
            label="YouTube Subscribers"
            sublabel="Channels managed & grown"
            accent="#f59e0b"
          />
          <OdometerCounter
            target={500}
            suffix="M+"
            label="Content Views"
            sublabel="Total across all platforms"
            accent="#3B7FF5"
          />
          <OdometerCounter
            target={98}
            suffix="%"
            label="Client Satisfaction"
            sublabel="Based on campaign results"
            accent="#06b6d4"
          />
        </div>

        {/* Platform Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {PLATFORM_STATS.map((stat, i) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card glass-card-hover"
              style={{
                borderRadius: 20,
                padding: "32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: stat.color,
                  opacity: 0.07,
                  filter: "blur(40px)",
                }}
              />
              <div style={{ fontSize: "2rem", marginBottom: 12 }} role="img" aria-label={stat.platform}>
                {stat.icon}
              </div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: stat.color,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {stat.metric}
              </div>
              <div style={{ fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>
                {stat.platform}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginTop: 80,
            textAlign: "center",
            padding: "48px",
            background: "rgba(59,127,245,0.04)",
            border: "1px solid rgba(59,127,245,0.12)",
            borderRadius: 24,
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              fontStyle: "italic",
              color: "var(--color-text-primary)",
              lineHeight: 1.7,
              maxWidth: 700,
              margin: "0 auto 24px",
            }}
          >
            &ldquo;Zenvyra Digital didn&apos;t just grow our numbers—they built a
            community. Our Instagram went from 12K to 180K followers in 8 months.
            Pure excellence.&rdquo;
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3B7FF5, #7c3aed)",
              }}
            />
            <div>
              <div style={{ fontWeight: 700, color: "var(--color-text-primary)" }}>
                Arjun Mehta
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                Founder, TechVista India
              </div>
            </div>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
