import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
