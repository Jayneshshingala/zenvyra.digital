"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ZenvyraLogo } from "../ui/ZenvyraLogo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#metrics", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <>
      {/* Desktop / Tablet Nav */}
      <motion.header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 clamp(20px, 4vw, 60px)",
        }}
        animate={{
          backgroundColor: scrolled
            ? "rgba(7, 7, 15, 0.85)"
            : "rgba(7, 7, 15, 0)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
          borderBottomColor: scrolled
            ? "rgba(255,255,255,0.07)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.4 }}
        className="border-b"
      >
        <nav
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Zenvyra Digital Home">
            <ZenvyraLogo />
          </Link>

          {/* Desktop Links */}
          <ul
            role="list"
            style={{
              display: "flex",
              gap: 36,
              listStyle: "none",
              alignItems: "center",
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: "rgba(240,240,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(240,240,255,0.7)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="tel:+918320594829"
            className="btn-primary"
            style={{ gap: 8, fontSize: "0.85rem", padding: "12px 22px" }}
            aria-label="Call Zenvyra Digital now"
          >
            <PhoneIcon />
            Call Now
          </a>


          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: 8,
              display: "none",
            }}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        style={{
          position: "fixed",
          top: 68,
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(7,7,15,0.97)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "24px clamp(20px, 4vw, 60px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:+918320594829"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "1rem" }}
            >
              <PhoneIcon />
              Call Now — Talk to a Strategist
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}
