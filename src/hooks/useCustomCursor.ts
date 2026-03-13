"use client";

import { useEffect, useRef } from "react";

export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    // Hover effects
    const addHover = () => {
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.borderColor = "rgba(59, 127, 245, 0.9)";
    };
    const removeHover = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(59, 127, 245, 0.5)";
    };

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { dotRef, ringRef };
}
