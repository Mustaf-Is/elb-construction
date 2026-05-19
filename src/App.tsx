import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import { seo } from "./content/seo";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function App() {
  useRevealOnScroll();

  useEffect(() => {
    document.title = seo.title;

    const descriptionMeta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (descriptionMeta) {
      descriptionMeta.content = seo.description;
    }

    const canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = seo.canonicalUrl;
      document.head.appendChild(link);
      return;
    }
    canonical.href = seo.canonicalUrl;
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
