// src/components/layout/Footer.tsx
// Premium footer component

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Security", href: "#" },
        { label: "Enterprise", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API", href: "#" },
        { label: "Support", href: "#" },
        { label: "Community", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-luxury-black/80 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-serif mb-4">
              <span className="bg-gradient-to-r from-luxury-gold to-amber-400 bg-clip-text text-transparent">
                MallSphere
              </span>
            </h3>
            <p className="text-white/60 max-w-md">
              Revolutionizing the shopping mall experience with AI-powered,
              cinematic interactive platforms for premium destinations.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full border border-white/10 text-white/60 hover:text-luxury-gold hover:border-luxury-gold transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div>
              <h4 className="text-sm font-semibold text-luxury-gold mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:hello@mallsphere.com"
                  className="flex items-center gap-3 text-white/60 hover:text-luxury-gold transition-colors"
                >
                  <Mail size={16} />
                  <span className="text-sm">hello@mallsphere.com</span>
                </a>
                <a
                  href="tel:+1-800-MALL-SPHERE"
                  className="flex items-center gap-3 text-white/60 hover:text-luxury-gold transition-colors"
                >
                  <Phone size={16} />
                  <span className="text-sm">+1 (800) MALL-SPHERE</span>
                </a>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    San Francisco, CA
                    <br />
                    New York, NY
                    <br />
                    Dubai, UAE
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-luxury-gold mb-4">
                Status
              </h4>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  All systems operational
                </div>
                <div className="text-xs">
                  <p>99.99% Uptime SLA</p>
                  <p>Last incident: 47 days ago</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-luxury-gold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-luxury-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} MallSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
