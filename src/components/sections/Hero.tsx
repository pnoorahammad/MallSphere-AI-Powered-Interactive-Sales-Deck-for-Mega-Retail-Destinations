"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/hero-mall.png" // We'll need to move the generated image here
          alt="Luxe Mall Exterior"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-gold font-medium tracking-[0.3em] mb-4 text-sm md:text-base">
            REDEFINING THE RETAIL HORIZON
          </h2>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-playfair text-white mb-8 leading-[1.1]">
            Where Luxury <br /> <span className="italic text-gold">Meets Destiny.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Welcome to the world&apos;s most ambitious retail ecosystem. A global stage for icons, innovators, and dreamers.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
      </motion.div>
    </section>
  );
};
