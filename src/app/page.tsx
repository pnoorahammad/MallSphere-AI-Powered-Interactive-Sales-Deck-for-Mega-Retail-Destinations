import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import BrandsSection from "@/components/sections/BrandsSection";
import EventsSection from "@/components/sections/EventsSection";
import LeasingSection from "@/components/sections/LeasingSection";
import CTASection from "@/components/sections/CTASection";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <BrandsSection />
      <EventsSection />
      <LeasingSection />
      <CTASection />
      <AIAssistant />
    </main>
  );
}
