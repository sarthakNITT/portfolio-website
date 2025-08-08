"use client"

import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import ComingUpSection from '@/components/sections/coming-up-section';
import JourneySection from '@/components/sections/journey-section';
import CollaborateSection from '@/components/sections/collaborate-section';
import FooterSection from '@/components/sections/footer-section';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <JourneySection />
      <ComingUpSection />
      <CollaborateSection />
      <FooterSection />
    </main>
  );
}