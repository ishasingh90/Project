"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function FadeIn({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {["left-[-10%] top-[-15%]", "right-[-8%] top-[5%]", "left-[30%] bottom-[-20%]"]
        .map((pos, idx) => (
          <motion.div
            key={idx}
            className={`absolute h-72 w-72 rounded-full bg-violet-500/20 blur-3xl ${pos}`}
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8 + idx * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
    </div>
  );
}
