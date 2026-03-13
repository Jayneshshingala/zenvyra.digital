"use client";

import { useEffect, useRef } from "react";
import { useCustomCursor } from "@/hooks/useCustomCursor";

export function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor();

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
        style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
        style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none" }}
      />
    </>
  );
}
