"use client";

import { motion } from "framer-motion";

const brands = [
  "ROLEX", "GUCCI", "PRADA", "LOUIS VUITTON", "CHANEL", "DIOR", "HERMÈS", "CARTIER"
];

export const Brands = () => {
  return (
    <section id="brands" className="py-24 bg-black overflow-hidden border-b border-white/5">
      <div className="px-6 mb-16 max-w-7xl mx-auto">
        <h3 className="text-gold tracking-[0.3em] text-xs uppercase mb-4">World-Class Portfolio</h3>
        <h2 className="text-3xl md:text-5xl font-playfair text-white">Home to the Icons.</h2>
      </div>

      <div className="relative flex">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-playfair text-white/10 hover:text-gold transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
