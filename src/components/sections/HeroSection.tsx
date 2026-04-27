// src/components/sections/Hero.tsx
// Cinematic hero section with video background

"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      videoRef.current.muted = isMuted;
    }
  }, [isPlaying, isMuted]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="text-luxury-white">The Future of</span>{" "}
            <span className="bg-gradient-to-r from-luxury-gold via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Premium Shopping
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/80 max-w-2xl mb-12 font-light"
        >
          Experience a cinematic retail destination where luxury meets innovation.
          Immersive, interactive, unforgettable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <button className="px-8 py-4 bg-luxury-gold text-luxury-black font-semibold rounded-full hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
            Explore Experience
          </button>
          <button className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-full hover:bg-luxury-gold/10 transition-all duration-300">
            Schedule Demo
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-sm text-white/60">Scroll to explore</p>
            <ArrowDown className="w-5 h-5 text-luxury-gold" />
          </motion.div>
        </motion.div>

        {/* Video Controls */}
        <div className="absolute top-32 right-6 flex gap-2 z-20">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            <Play className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.29 5.71a1 1 0 0 0 0 1.42l13.58 13.58a1 1 0 1 0 1.42-1.42L7.71 5.71a1 1 0 0 0-1.42 0zM2 5l5 5H2V5zm10 0v7.59L9.41 10H8v4h1.41L12 11.59V5h-2zm9-1h-4.41L22 2v6h-2V5z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
