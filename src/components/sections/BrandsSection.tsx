// src/components/sections/BrandsSection.tsx
// Interactive brand showcase

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface Brand {
  id: string;
  name: string;
  category: string;
  icon: string;
  color: string;
}

const brands: Brand[] = [
  { id: "1", name: "Luxury Fashion", category: "Haute Couture", icon: "👗", color: "from-pink-500 to-rose-500" },
  { id: "2", name: "Fine Dining", category: "Culinary", icon: "🍽️", color: "from-amber-500 to-orange-500" },
  { id: "3", name: "Premium Tech", category: "Innovation", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { id: "4", name: "Wellness", category: "Health & Beauty", icon: "💅", color: "from-purple-500 to-pink-500" },
  { id: "5", name: "Entertainment", category: "Cinema & Arts", icon: "🎬", color: "from-red-500 to-pink-500" },
  { id: "6", name: "Sports", category: "Athletic Wear", icon: "⚽", color: "from-green-500 to-emerald-500" },
  { id: "7", name: "Jewelry", category: "Precious Metals", icon: "💎", color: "from-yellow-500 to-amber-500" },
  { id: "8", name: "Home & Living", category: "Lifestyle", icon: "🏠", color: "from-indigo-500 to-blue-500" },
];

export default function BrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="brands" className="relative py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Curated Brand Portfolio
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A carefully selected collection of the world&apos;s most prestigious brands
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative h-48"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 group-hover:border-luxury-gold/50 transition-all duration-300 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-center items-center text-center">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {brand.icon}
                </motion.div>

                {/* Brand Name */}
                <h3 className="text-white font-semibold mb-2">{brand.name}</h3>

                {/* Category */}
                <p className="text-white/50 text-sm">{brand.category}</p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 h-1 w-6 bg-luxury-gold origin-center"
                />
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-all rounded-bl-lg"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-luxury-gold mb-2">500+</p>
            <p className="text-white/60">Total Brand Partners</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-luxury-gold mb-2">85%</p>
            <p className="text-white/60">Retailer Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-luxury-gold mb-2">24/7</p>
            <p className="text-white/60">Dedicated Support</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-luxury-gold text-luxury-black font-semibold rounded-full hover:shadow-glow-lg transition-all duration-300 hover:scale-105 inline-block">
            Become a Brand Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
}
