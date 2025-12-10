'use client';

import { useEffect } from 'react';
import CosmicHero from '@/components/CosmicHero';
import Features from '@/components/Features';

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
    <main className="min-h-screen bg-deep-space text-white">
      <CosmicHero />
      <Features />
    </main>
  );
}
