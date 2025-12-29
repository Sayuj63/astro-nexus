'use client';

import { useEffect } from 'react';
import StaggeredMenu from '@/components/ui/StaggeredMenu';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ZodiacSection from '@/components/ZodiacSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingChatWidget from '@/components/FloatingChatWidget';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#' },
  { label: 'Features', ariaLabel: 'View our features', link: '#features' },
  { label: 'Zodiac', ariaLabel: 'Choose your zodiac sign', link: '#zodiac' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

export default function Home() {
  useEffect(() => {
    let lenis: any = null;

    const initLenis = () => {
      const Lenis = require('lenis').default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        touchMultiplier: 2,
      });

      // Expose lenis to window for other components to control
      (window as any).lenis = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
        (window as any).lenis = null;
      }
    };
  }, []);

  return (
    <>
      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
        logoText="ASTRONEXUS"
        accentColor="#ffffff"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        colors={['#1a1a1a', '#000000']}
        isFixed={true}
        displaySocials={true}
        displayItemNumbering={false}
      />
      <main className="min-h-screen bg-black text-white">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="zodiac">
          <ZodiacSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </main>
      <Footer />
      <FloatingChatWidget />
    </>
  );
}

