"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
};

export default function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { x: 0, y: 38, scale: 1 },
    left: { x: -45, y: 0, scale: 1 },
    right: { x: 45, y: 0, scale: 1 },
    scale: { x: 0, y: 12, scale: 0.9 },
  };

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, ...offsets[direction] }
      }
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
