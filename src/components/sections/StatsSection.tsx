// src/components/sections/StatsSection.tsx
// Animated statistics section

"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 50, label: "Premium Brands", suffix: "+" },
  { value: 25, label: "Million Annual Visitors" },
  { value: 500, label: "Retail Outlets" },
  { value: 100, label: "Events per Year", suffix: "+" },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      className="relative py-24 bg-luxury-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            By The Numbers
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A world-class shopping destination trusted by millions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 group-hover:border-luxury-gold/30 transition-all duration-300" />

              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Counter */}
                <div className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-luxury-gold to-amber-400 bg-clip-text text-transparent">
                    <StatCounter value={stat.value} />
                  </span>
                  {stat.suffix && (
                    <span className="text-luxury-gold">{stat.suffix}</span>
                  )}
                </div>

                {/* Label */}
                <p className="text-white/70 font-medium text-lg">{stat.label}</p>

                {/* Animated bottom line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="mt-4 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-6">
            Join thousands of satisfied retailers and property managers
          </p>
          <button className="px-8 py-3 bg-luxury-gold/10 border border-luxury-gold text-luxury-gold font-semibold rounded-full hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300">
            View Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Component to handle counter animation
function StatCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let start = 0;
    const end = value;
    const duration = 2500;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      if (ref.current) {
        ref.current.textContent = Math.floor(start).toLocaleString();
      }
    }, 50);

    return () => clearInterval(counter);
  }, [value]);

  return <span ref={ref}>0</span>;
}
