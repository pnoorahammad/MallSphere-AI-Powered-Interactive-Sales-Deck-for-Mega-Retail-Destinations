"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Vision = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          backgroundPosition: "200% 0",
        },
        {
          backgroundPosition: "0% 0",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="vision"
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-black px-6 py-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-gold tracking-[0.4em] text-sm mb-12 uppercase">Our Manifest</h3>
        <h2 
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/20 to-white/10 bg-[length:200%_100%]"
        >
          We don&apos;t just build malls. <br />
          We create <span className="italic text-gold">cultural epicenters</span> that bridge the gap between imagination and reality.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
          {[
            { title: "SOPHISTICATION", desc: "Curated environments for the world&apos;s most discerning brands." },
            { title: "INNOVATION", desc: "Digital-first experiences integrated into physical spaces." },
            { title: "CONNECTION", desc: "A meeting point for global travelers and local trendsetters." }
          ].map((item, i) => (
            <div key={i} className="text-left border-l border-gold/30 pl-6">
              <h4 className="text-gold text-xs tracking-widest mb-4">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
