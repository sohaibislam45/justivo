import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import History from "@/components/home/History";
import Features from "@/components/home/Features";

import Testimonial from "@/components/home/Testimonial";
import InfoMarquee from "@/components/home/InfoMarquee";
import CaseStudies from "@/components/home/CaseStudies";
import Team from "@/components/home/Team";
import ActionBanner from "@/components/home/ActionBanner";
import StatsList from "@/components/home/StatsList";
import InternsAndContact from "@/components/home/InternsAndContact";
import News from "@/components/home/News";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <History />
        <InternsAndContact />
        <InfoMarquee />
        <Testimonial />
        <CaseStudies />
        <Team />
        <ActionBanner />
        <StatsList />
        <News />
      </main>
      <Footer />
    </div>
  );
}
