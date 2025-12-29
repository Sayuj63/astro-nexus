'use client';

import React from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

const Features = () => {
  // Minimalist black and white images for the parallax effect
  const images = [
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
    <section className="bg-black text-white">
      {/* Zoom Parallax Effect */}
      <ZoomParallax images={images} />

      {/* Features Grid */}
      <div className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Features Heading - Hero Style */}
          <div className="text-center mb-20">
            <h2 className="mb-4">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                Unlock Your
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl font-normal italic leading-[1.1] mt-1 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cosmic Potential
              </span>
            </h2>
            <p className="text-sm md:text-base text-white/50 mt-6 max-w-2xl mx-auto font-light">
              Discover powerful features designed to guide your celestial journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Astrologer Feature */}
            <div className="bg-black border border-white/10 rounded-none p-8 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-normal mb-4 text-center tracking-wide">AI Astrologer</h3>
              <p className="text-sm text-gray-400 leading-relaxed text-center font-light">
                Chat with our advanced AI astrologer for personalized readings and cosmic guidance tailored to your unique birth chart.
              </p>
            </div>

            {/* Zodiac Insights Feature */}
            <div className="bg-black border border-white/10 rounded-none p-8 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-normal mb-4 text-center tracking-wide">Zodiac Insights</h3>
              <p className="text-sm text-gray-400 leading-relaxed text-center font-light">
                Explore detailed zodiac profiles, compatibility reports, and daily horoscopes with stunning cosmic visualizations.
              </p>
            </div>

            {/* Cosmic Journey Feature */}
            <div className="bg-black border border-white/10 rounded-none p-8 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-normal mb-4 text-center tracking-wide">Cosmic Journey</h3>
              <p className="text-sm text-gray-400 leading-relaxed text-center font-light">
                Embark on an interactive space adventure through animated star maps and immersive celestial experiences.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 font-normal rounded-none transition-all duration-300 text-sm tracking-widest uppercase">
              Start Your Reading
            </button>

            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black font-normal rounded-none transition-all duration-300 text-sm tracking-widest uppercase">
              Explore Zodiac Signs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;