// src/hooks/useScrollAnimation.ts
// Hook for scroll-triggered animations using GSAP

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (
  config: gsap.TweenVars = {}
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Default scroll animation
    const defaultConfig = {
      trigger: element,
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      markers: false,
      ...config,
    };

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ...defaultConfig,
    });

    return () => {
      animation.kill();
    };
  }, [config]);

  return ref;
};

// Hook for parallax scroll effect
export const useParallax = (strength: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const parallaxElement = ref.current;

    gsap.to(parallaxElement, {
      y: () => -window.innerHeight * strength,
      scrollTrigger: {
        trigger: parallaxElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  }, [strength]);

  return ref;
};

// Hook for revealing elements on scroll
export const useRevealOnScroll = (
  delay: number = 0,
  duration: number = 0.8
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [delay, duration]);

  return ref;
};

// Hook for text reveal animation
export const useTextReveal = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const text = ref.current.innerText;
    ref.current.innerHTML = text
      .split("")
      .map((char) => `<span class="inline-block">${char}</span>`)
      .join("");

    gsap.fromTo(
      ref.current.querySelectorAll("span"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return ref;
};

// Hook for counter animation
export const useCounter = (end: number, duration: number = 2) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value: end,
      duration,
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText = Math.floor(counter.value).toLocaleString();
        }
      },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        once: true,
      },
    });
  }, [end, duration]);

  return ref;
};

// Hook for stagger list animation
export const useStaggerList = (staggerAmount: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const items = ref.current.querySelectorAll(":scope > *");

    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: staggerAmount,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [staggerAmount]);

  return ref;
};
