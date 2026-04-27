// src/components/sections/CTASection.tsx
// Call to action section

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-luxury-navy via-luxury-black to-luxury-navy overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block mb-6"
        >
          <div className="p-4 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full">
            <Sparkles className="w-8 h-8 text-luxury-gold" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
        >
          Ready to Transform Your Experience?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
        >
          Join hundreds of leading retailers and property managers who are already
          revolutionizing their customer experience with MallSphere&apos;s innovative platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-luxury-gold text-luxury-black font-semibold rounded-full hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-full hover:bg-luxury-gold/10 transition-all duration-300"
          >
            Schedule Demo
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 justify-center text-white/60 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-luxury-gold">✓</span> No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-luxury-gold">✓</span> 30-day free trial
          </div>
          <div className="flex items-center gap-2">
            <span className="text-luxury-gold">✓</span> 24/7 Support
          </div>
        </motion.div>
      </div>
    </section>
  );
}
