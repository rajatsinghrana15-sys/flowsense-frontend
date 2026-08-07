import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import FeaturesAndSuccess from "../components/FeaturesAndSuccess";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesAndSuccess />
      <Footer />
    </div>
  );
};

export default HomePage;
