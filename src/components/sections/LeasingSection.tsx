// src/components/sections/LeasingSection.tsx
// Leasing opportunities and contact form

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { inquiriesAPI } from "@/lib/api";

interface LeaseType {
  id: string;
  type: string;
  minArea: number;
  maxArea: number;
  pricePerSqft: number;
  features: string[];
}

const leaseTypes: LeaseType[] = [
  {
    id: "1",
    type: "Ground Floor Retail",
    minArea: 1000,
    maxArea: 10000,
    pricePerSqft: 250,
    features: [
      "Prime foot traffic",
      "Large storefront",
      "Flexible layouts",
      "Restaurant permitted",
    ],
  },
  {
    id: "2",
    type: "Upper Level Retail",
    minArea: 500,
    maxArea: 5000,
    pricePerSqft: 150,
    features: [
      "High visibility",
      "Quality tenants",
      "Ample parking",
      "Easy accessibility",
    ],
  },
  {
    id: "3",
    type: "Food & Beverage",
    minArea: 1500,
    maxArea: 8000,
    pricePerSqft: 200,
    features: [
      "Kitchen facilities",
      "Seating areas",
      "Premium location",
      "Late-night access",
    ],
  },
  {
    id: "4",
    type: "Office Space",
    minArea: 2000,
    maxArea: 15000,
    pricePerSqft: 100,
    features: [
      "Professional setting",
      "Conference rooms",
      "High-speed internet",
      "Flexible terms",
    ],
  },
];

export default function LeasingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    spaceType: "",
    squareFootage: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await inquiriesAPI.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        type: formData.spaceType || "Other",
        message: formData.message || "",
        squareFootage: formData.squareFootage ? Number(formData.squareFootage) : undefined,
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          spaceType: "",
          squareFootage: "",
          message: "",
        });
      }, 3000);
    } catch (err: unknown) {
      const message =
        typeof err === "object" && err !== null && "error" in err
          ? String((err as { error: unknown }).error)
          : err instanceof Error
            ? err.message
            : "Failed to submit inquiry. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="leasing" className="relative py-24 bg-luxury-black">
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
            Leasing Opportunities
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Premium retail and office spaces available for partnership
          </p>
        </motion.div>

        {/* Space Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {leaseTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl border border-white/10 hover:border-luxury-gold/50 bg-gradient-to-br from-white/5 to-white/0 transition-all duration-300"
            >
              {/* Type */}
              <h3 className="text-white font-semibold mb-4 group-hover:text-luxury-gold transition-colors">
                {type.type}
              </h3>

              {/* Size Range */}
              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                <p className="text-sm text-white/70 mb-1">Space Size</p>
                <p className="text-white font-semibold">
                  {type.minArea.toLocaleString()} - {type.maxArea.toLocaleString()} sqft
                </p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-luxury-gold font-bold text-lg">
                  ${type.pricePerSqft}/sqft
                </p>
                <p className="text-white/50 text-xs">Annual rate</p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {type.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <CheckCircle className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Schedule a Consultation
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
                <p className="text-white font-semibold text-lg">
                  Thank you for your inquiry!
                </p>
                <p className="text-white/60 mt-2">
                  Our leasing team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitError && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {submitError}
                  </div>
                )}
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="spaceType"
                    value={formData.spaceType}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-luxury-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select Space Type</option>
                    {leaseTypes.map((type) => (
                      <option key={type.id} value={type.type}>
                        {type.type}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="squareFootage"
                    placeholder="Desired Square Footage"
                    value={formData.squareFootage}
                    onChange={handleChange}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Additional Information (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-luxury-gold focus:outline-none transition-colors resize-none"
                />

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-luxury-gold text-luxury-black font-semibold rounded-lg hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
