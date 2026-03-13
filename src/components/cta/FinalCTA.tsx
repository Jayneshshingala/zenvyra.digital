"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="section bg-nebula"
      style={{ position: "relative", overflow: "hidden", textAlign: "center" }}
      aria-label="Contact — Get a Free Strategy Call"
    >
      {/* Star field */}
      <div className="star-field" aria-hidden="true" />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(229,56,59,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: "rgba(229,56,59,0.1)",
              border: "1px solid rgba(229,56,59,0.25)",
              borderRadius: 9999,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--color-crimson)",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Direct Access
          </span>

          <h2
            className="text-display"
            style={{ marginBottom: 20 }}
          >
            Ready to{" "}
            <span className="gradient-text-warm">Scale?</span>
          </h2>

          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: 520,
              margin: "0 auto 48px",
              lineHeight: 1.65,
            }}
          >
            One call. One conversation with a real strategist. We&apos;ll map
            out a growth roadmap for your brand — completely free.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            <a
              href="tel:+918320594829"
              className="btn-primary"
              style={{ padding: "20px 40px", fontSize: "1.05rem", gap: 10 }}
              aria-label="Call Zenvyra Digital — Free strategy call"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now — Free Strategy Call
            </a>
            <a
              href="mailto:zenvyradigital.info@gmail.com"
              className="btn-secondary"
              style={{ padding: "20px 40px", fontSize: "1.05rem" }}
            >
              Send a Message
            </a>
          </div>


          {/* Trust Signals */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              "✓ No commitment",
              "✓ Response within 2 hours",
              "✓ Strategist, not a salesperson",
            ].map((trust) => (
              <span
                key={trust}
                style={{
                  fontSize: "0.82rem",
                  color: "var(--color-text-muted)",
                }}
              >
                {trust}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
