// src/App.js
import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import Header from "./components/Header";
import HeaderArea from "./components/HeaderArea";
import Slides from "./components/Slides";
import FeatureArea from "./components/FeatureArea";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ClientSection from "./components/ClientSection";
import LogisticsSection from "./components/LogisticsSection";
import ProcessSection from "./components/ProcessSection";
import QuotationSection from "./components/QuotationSection";
import FaqSection from "./components/FaqSection";
import TestimonialSection from "./components/TestimonialSection";
import BlogSection from "./components/BlogSection";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import FooterSection from "./components/FooterSection";

import Preloader from "./components/Preloader";
import "animate.css/animate.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  // Effect for simulating loading and initializing WOW.js
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);

        // Adding a small delay before initializing WOW.js to ensure the page is ready
        setTimeout(() => {
          new WOW.WOW({
            live: false,
          }).init();
        }, 100); // Delay before WOW.js initialization
      }, 500); // Loading timeout duration
    };

    window.addEventListener("load", handleLoad);

    // Cleanup the listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Display the preloader while loading, then the main content
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Header />
          <HeaderArea />
          <Slides />
          <FeatureArea />
          <AboutSection />
          <ServiceSection />
          <LogisticsSection />
          <ProcessSection />
          <QuotationSection />
          <FaqSection />
          <TestimonialSection />
          <BlogSection />
          <Hero />
          <Services />
          <ClientSection />
          <FooterSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
