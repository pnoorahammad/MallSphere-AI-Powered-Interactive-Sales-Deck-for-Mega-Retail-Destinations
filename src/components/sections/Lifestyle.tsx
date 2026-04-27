"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Lifestyle = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="lifestyle" ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h3 className="text-gold tracking-[0.3em] text-xs uppercase mb-6 text-center">The Experience</h3>
        <h2 className="text-4xl md:text-7xl font-playfair text-white text-center leading-tight">
          Beyond Shopping. <br /> <span className="italic text-gold">A Way of Life.</span>
        </h2>
      </div>

      <div className="relative h-[600px] w-full max-w-[1400px] mx-auto rounded-3xl overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
          <Image
            src="/interior-hall.png"
            alt="Luxury Lifestyle"
            fill
            className="object-cover brightness-50"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {[
              { title: "Gourmet Dining", desc: "Michelin-starred concepts from world-renowned chefs." },
              { title: "Private Concierge", desc: "Tailored white-glove services for our premium members." },
              { title: "Events & Culture", desc: "A rotating calendar of fashion shows and art exhibitions." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-black/40 backdrop-blur-md p-8 border border-white/10 rounded-2xl hover:bg-black/60 transition-all group"
              >
                <h4 className="text-gold font-playfair text-xl mb-4 group-hover:translate-x-2 transition-transform">{card.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
