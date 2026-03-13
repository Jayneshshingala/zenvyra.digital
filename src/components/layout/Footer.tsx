"use client";

import Link from "next/link";
import { ZenvyraLogo } from "@/components/ui/ZenvyraLogo";
import { motion } from "framer-motion";

const FOOTER_LINKS = {
  Services: [
    { label: "Social Media Marketing", href: "#services" },
    { label: "FPV Drone Videography", href: "#services" },
    { label: "Video Editing", href: "#services" },
    { label: "Event Production", href: "#services" },
    { label: "Graphic Design", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Work", href: "#work" },
    { label: "Results", href: "#metrics" },
    { label: "Contact", href: "#contact" },
  ],
};

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/zenvyradigital", icon: "📷" },
  { label: "YouTube", href: "https://youtube.com/@zenvyradigital", icon: "▶️" },
  { label: "TikTok", href: "https://tiktok.com/@zenvyradigital", icon: "🎵" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-space-black)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "80px clamp(20px, 5vw, 80px) 40px",
      }}
      aria-label="Site Footer"
    >
      {/* Constellation dots */}
      <div className="star-field" aria-hidden="true" style={{ opacity: 0.5 }} />

      <div className="container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 60,
            marginBottom: 64,
          }}
        >
          {/* Brand Column */}
          <div>
            <ZenvyraLogo size={32} />
            <p
              style={{
                marginTop: 20,
                color: "var(--color-text-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                maxWidth: 320,
              }}
            >
              Full-service digital solutions agency. We scale brands to orbit
              through social media mastery, cinematic video production, and
              data-driven growth strategies.
            </p>
            {/* Social Links */}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,127,245,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(59,127,245,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <span role="img" aria-hidden="true">{s.icon}</span>
                </a>
              ))}
            </div>
            {/* CTA */}
            <a
              href="tel:+918320594829"
              className="btn-primary"
              style={{ display: "inline-flex", marginTop: 28, fontSize: "0.85rem", padding: "12px 22px" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call +91 8320594829
            </a>
          </div>


          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: 20,
                }}
              >
                {category}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: "var(--color-text-secondary)",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "var(--color-text-secondary)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Zenvyra Digital. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  fontSize: "0.78rem",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
