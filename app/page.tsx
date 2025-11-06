'use client'

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import TechStack from '../components/TechStack';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <TechStack />
      <CTASection />
      <Footer />
    </>
  );
}
