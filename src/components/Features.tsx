'use client';

import React from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

const Features = () => {
  // Lenis initialization moved back to global scope in page.tsx


  // Cosmic-themed images for the parallax effect
  const cosmicImages = [
    {
      src: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Earth from space - AI Astrologer',
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Deep space nebula - Zodiac Insights',
    },
    {
      src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Milky Way galaxy - Cosmic Journey',
    },
    {
      src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Constellation patterns',
    },
    {
      src: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Planetary alignment',
    },
    {
      src: 'https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Cosmic aurora',
    },
    {
      src: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Star field',
    },
  ];

  return (
    <section className="bg-deep-space text-white">
      {/* Features Introduction */}
      <div className="relative flex h-[50vh] items-center justify-center">
        {/* Radial spotlight effect */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-gradient-to-r from-electric-purple/10 via-transparent to-transparent blur-[30px]"
        />

        <div className="text-center space-y-6 z-10 relative">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-electric-purple via-magenta-pink to-neon-blue bg-clip-text text-transparent">
            Explore Our Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the cosmic powers that await you in the ASTRONEXUS universe
          </p>
        </div>
      </div>

      {/* Zoom Parallax Effect */}
      <ZoomParallax images={cosmicImages} />

      {/* Features Grid */}
      <div className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Astrologer Feature */}
            <div className="bg-deep-space/80 backdrop-blur-sm border border-soft-violet/20 rounded-2xl p-8 hover:border-soft-violet/40 transition-all duration-300 hover:shadow-lg hover:shadow-soft-violet/10">
              <div className="w-16 h-16 bg-electric-purple/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-electric-purple mb-4 text-center">AI Astrologer</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Chat with our advanced AI astrologer for personalized readings and cosmic guidance tailored to your unique birth chart.
              </p>
            </div>

            {/* Zodiac Insights Feature */}
            <div className="bg-deep-space/80 backdrop-blur-sm border border-magenta-pink/20 rounded-2xl p-8 hover:border-magenta-pink/40 transition-all duration-300 hover:shadow-lg hover:shadow-magenta-pink/10">
              <div className="w-16 h-16 bg-magenta-pink/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-magenta-pink mb-4 text-center">Zodiac Insights</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Explore detailed zodiac profiles, compatibility reports, and daily horoscopes with stunning cosmic visualizations.
              </p>
            </div>

            {/* Cosmic Journey Feature */}
            <div className="bg-deep-space/80 backdrop-blur-sm border border-neon-blue/20 rounded-2xl p-8 hover:border-neon-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10">
              <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-neon-blue mb-4 text-center">Cosmic Journey</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                Embark on an interactive space adventure through animated star maps and immersive celestial experiences.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <button className="px-10 py-4 bg-gradient-to-r from-electric-purple to-magenta-pink hover:from-electric-purple/80 hover:to-magenta-pink/80 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-electric-purple/25 hover:scale-105 text-lg">
              Start Your Reading
            </button>

            <button className="px-10 py-4 border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-deep-space font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/25 text-lg">
              Explore Zodiac Signs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;