"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-32 bg-gold text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl font-playfair mb-8 leading-tight">
            Ready to Claim Your <br /> Space in the Future?
          </h2>
          <p className="text-black/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Leasing opportunities for Phase 1 are now open. Join the world&apos;s most exclusive retail collective.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-black text-gold hover:bg-black/90 px-10 py-8 text-lg rounded-full font-medium tracking-wide">
              INQUIRE FOR LEASING
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black/10 px-10 py-8 text-lg rounded-full font-medium tracking-wide">
              DOWNLOAD PITCH DECK
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
