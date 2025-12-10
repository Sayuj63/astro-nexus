'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Particles from '@/components/ui/particles';
import { AuroraText } from '@/components/ui/aurora-text';

const CosmicHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen relative'>
      {/* Particles Background */}
      <div className='absolute inset-0 z-0'>
        <Particles
          particleCount={400}
          particleSpread={12}
          speed={0.08}
          particleColors={['#a855f7', '#f472b6', '#22d3ee', '#c084fc', '#ffffff']} // Brighter cosmic colors + white
          moveParticlesOnHover={true}
          alphaParticles={false} // Solid particles for more brightness
          particleBaseSize={120}
          sizeRandomness={1.2}
          cameraDistance={20}
          disableRotation={false}
          className='w-full h-full'
        />
      </div>

      {/* Scroll Expansion Hero */}
      <div className='relative z-10'>
        <ScrollExpandMedia
          mediaType='video' // Now using your herovideo.mp4!
          mediaSrc='/herovideo.mp4' // Your cosmic video
          posterSrc='https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1920&auto=format&fit=crop' // Space poster for loading
          date='Discover Your Destiny'
          scrollToExpand='Scroll to Explore the Universe'
          textBlend={false}
        >
          {/* Content that appears after scroll expansion */}
          <div className='max-w-6xl mx-auto text-center space-y-12'>
            {/* Aurora Text Hero */}
            <div className='space-y-6'>
              <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter'>
                Welcome to{' '}
                <AuroraText
                  colors={['#8b5cf6', '#ec4899', '#06b6d4', '#a855f7']}
                  speed={1.5}
                >
                  ASTRONEXUS
                </AuroraText>
              </h1>

              <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
                Journey through the stars with our AI-powered astrology platform.
                Discover personalized insights, explore zodiac mysteries, and chat with
                our cosmic AI astrologer in this immersive space experience.
              </p>
            </div>
          </div>
        </ScrollExpandMedia>
      </div>
    </div>
  );
};

export default CosmicHero;