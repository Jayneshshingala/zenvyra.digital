"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface VideoScrubSectionProps {
  title: string;
  subtitle: string;
  description: string;
  accent?: string;
  videoSrc?: string;
  placeholderGradient?: string;
  milestones?: { time: number; caption: string }[];
  id?: string;
}

export function VideoScrubSection({
  title,
  subtitle,
  description,
  accent = "#3B7FF5",
  videoSrc,
  placeholderGradient = "linear-gradient(135deg, #0d0d2e 0%, #1a0a2e 50%, #0a1a3e 100%)",
  milestones = [],
  id,
}: VideoScrubSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return;

    const scrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Update progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${self.progress * 100}%`;
          }

          // Video scrubbing
          if (video && video.readyState >= 2) {
            video.currentTime = self.progress * video.duration;
          }

          // Milestone captions
          if (captionRef.current && milestones.length > 0) {
            const progress = self.progress;
            const total = video?.duration || 10;
            const currentTime = progress * total;

            let currentCaption = "";
            for (const m of milestones) {
              if (currentTime >= m.time) currentCaption = m.caption;
            }
            captionRef.current.textContent = currentCaption;
          }
        },
      },
    });

    return () => {
      scrubTl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, [milestones]);

  return (
    <section
      ref={sectionRef}
      id={id}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "var(--color-space-black)",
      }}
      aria-label={`${title} showcase`}
    >
      {/* Video or Placeholder */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          /* Animated placeholder when no video is provided */
          <div
            style={{
              width: "100%",
              height: "100%",
              background: placeholderGradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Motion graphics placeholder */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at center, rgba(59,127,245,0.15) 0%, transparent 65%)",
                animation: "nebula-shift 8s ease infinite",
              }}
            />
            {/* Grid */}
            <div className="grid-overlay" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
            {/* Center icon */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "5rem",
                  filter: "drop-shadow(0 0 30px rgba(59,127,245,0.5))",
                  animation: "float 3s ease-in-out infinite",
                  marginBottom: 24,
                }}
              >
                🎬
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Swap with your video file
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(to bottom, rgba(7,7,15,0.3) 0%, rgba(7,7,15,0.1) 40%, rgba(7,7,15,0.7) 100%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Content Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(24px, 4vw, 60px)",
        }}
      >
        {/* Labels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background: `${accent}20`,
              border: `1px solid ${accent}40`,
              borderRadius: 9999,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: accent,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {subtitle}
          </span>
          <h2
            className="text-section"
            style={{ color: "#fff", marginBottom: 12, maxWidth: 600 }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "rgba(240,240,255,0.75)",
              maxWidth: 500,
              lineHeight: 1.65,
              fontSize: "0.95rem",
              marginBottom: 24,
            }}
          >
            {description}
          </p>

          {/* Scroll caption */}
          {milestones.length > 0 && (
            <div
              ref={captionRef}
              style={{
                fontSize: "0.85rem",
                color: accent,
                fontWeight: 600,
                letterSpacing: "0.04em",
                minHeight: "1.4em",
                transition: "opacity 0.3s",
              }}
              aria-live="polite"
            />
          )}
        </motion.div>

        {/* Progress bar */}
        <div
          style={{
            marginTop: 24,
            height: 2,
            background: "rgba(255,255,255,0.12)",
            borderRadius: 1,
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <div
            ref={progressBarRef}
            style={{
              height: "100%",
              width: "0%",
              background: accent,
              borderRadius: 1,
              transition: "none",
              boxShadow: `0 0 8px ${accent}`,
            }}
          />
        </div>

        <div
          style={{
            marginTop: 8,
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <span>Scroll to explore</span>
          <span>↓ Continue</span>
        </div>
      </div>
    </section>
  );
}
