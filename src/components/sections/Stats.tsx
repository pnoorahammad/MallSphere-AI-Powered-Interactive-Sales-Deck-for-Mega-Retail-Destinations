"use client";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-playfair text-gold">
      {count}{suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section id="stats" className="py-32 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {[
            { label: "Annual Visitors", value: 85, suffix: "M+" },
            { label: "Luxury Brands", value: 450, suffix: "+" },
            { label: "Total Square Feet", value: 12, suffix: "M" },
            { label: "Economic Impact", value: 4.2, suffix: "B" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-white/40 text-xs tracking-[0.2em] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
