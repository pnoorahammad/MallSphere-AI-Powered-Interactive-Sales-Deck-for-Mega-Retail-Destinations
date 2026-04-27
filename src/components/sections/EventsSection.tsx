// src/components/sections/EventsSection.tsx
// Events and entertainment showcase

"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { useRef } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  attendees: number;
  image: string;
  description: string;
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Fashion Week Showcase",
    date: "March 15, 2025",
    time: "7:00 PM",
    location: "Grand Atrium",
    type: "Fashion Show",
    attendees: 500,
    image: "👗",
    description: "Exclusive preview of Spring/Summer collections",
  },
  {
    id: "2",
    title: "International Food Festival",
    date: "March 22, 2025",
    time: "11:00 AM",
    location: "Food Court",
    type: "Culinary Event",
    attendees: 2000,
    image: "🍽️",
    description: "Cuisines from around the world",
  },
  {
    id: "3",
    title: "Tech Innovation Summit",
    date: "April 5, 2025",
    time: "10:00 AM",
    location: "Conference Center",
    type: "Conference",
    attendees: 800,
    image: "💻",
    description: "Future of retail technology",
  },
  {
    id: "4",
    title: "Live Music Concert",
    date: "April 12, 2025",
    time: "8:00 PM",
    location: "Grand Stage",
    type: "Concert",
    attendees: 3000,
    image: "🎵",
    description: "International music acts",
  },
];

export default function EventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="events" className="relative py-24 bg-gradient-to-b from-luxury-black to-luxury-navy overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Experience world-class entertainment and curated events throughout the year
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-luxury-gold/50 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
                {/* Top Image Section */}
                <div className="relative h-32 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden group-hover:from-white/20 transition-all duration-300">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {event.image}
                  </span>

                  {/* Event Type Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-luxury-gold text-luxury-black text-xs font-bold rounded-full"
                  >
                    {event.type}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-luxury-gold transition-colors">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-4">{event.description}</p>

                  {/* Details Grid */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <Calendar className="w-4 h-4 text-luxury-gold" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <MapPin className="w-4 h-4 text-luxury-gold" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <Users className="w-4 h-4 text-luxury-gold" />
                      <span>{event.attendees.toLocaleString()} expected attendees</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-2 bg-luxury-gold/10 border border-luxury-gold text-luxury-gold font-semibold rounded-lg group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-300 flex items-center justify-center gap-2">
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Events Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-full hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 inline-flex items-center gap-2">
            View All Events
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
