"use client";

import { MallCanvas } from "@/components/three/MallCanvas";
import { motion } from "framer-motion";

export const Showcase = () => {
  return (
    <section id="showcase" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h3 className="text-gold tracking-[0.3em] text-xs uppercase mb-6">Digital Twin</h3>
          <h2 className="text-4xl md:text-6xl font-playfair text-white mb-8 leading-tight">
            Visualize the <br /> <span className="italic text-gold">Architecture of Tomorrow.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Our proprietary 3D platform allows investors and tenants to explore every square inch of the property in real-time. Experience the scale, the lighting, and the flow before a single stone is laid.
          </p>
          
          <ul className="space-y-4">
            {["Real-time Light Simulation", "Immersive VR Ready", "Interactive Leasing Map"].map((feature, i) => (
              <li key={i} className="flex items-center gap-4 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10"
        >
          <MallCanvas />
        </motion.div>
      </div>
    </section>
  );
};
