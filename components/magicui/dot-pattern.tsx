"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;   // horizontal spacing between dots
  height?: number;  // vertical spacing between dots
  x?: number;       // x-offset for the whole pattern
  y?: number;       // y-offset for the whole pattern
  cx?: number;      // x-offset for each dot
  cy?: number;      // y-offset for each dot
  cr?: number;      // radius of each dot
  className?: string;
  glow?: boolean;   // enable glow animation effect
  [key: string]: unknown;
}

/**
 * DotPattern Component
 *
 * Renders an SVG dot pattern that fills its container.
 * Optionally animates dots with a glowing effect.
 *
 * Usage:
 * ```tsx
 * <DotPattern glow width={20} height={20} />
 * ```
 */
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate total dots needed to fill container area
  const cols = Math.ceil(dimensions.width / width);
  const rows = Math.ceil(dimensions.height / height);
  const totalDots = cols * rows;

  // Create array of dot info with position and random animation timings
  const dots = Array.from({ length: totalDots }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: col * width + cx + x,
      y: row * height + cy + y,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    };
  });

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {dots.map(({ x, y, delay, duration }) => (
        <motion.circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          className="text-neutral-400/80"
          initial={glow ? { opacity: 0.4, scale: 1 } : undefined}
          animate={
            glow
              ? {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1],
                }
              : undefined
          }
          transition={
            glow
              ? {
                  duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
      ))}
    </svg>
  );
}
