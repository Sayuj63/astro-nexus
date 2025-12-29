"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ZodiacSign {
    name: string;
    symbol: string;
    dateRange: string;
    gif: string;
    angle: number;
}

const zodiacSigns: ZodiacSign[] = [
    { name: 'Aries', symbol: '♈', dateRange: 'Mar 21 - Apr 19', gif: '/starsigns/aries.gif', angle: 0 },
    { name: 'Taurus', symbol: '♉', dateRange: 'Apr 20 - May 20', gif: '/starsigns/taurus.gif', angle: 30 },
    { name: 'Gemini', symbol: '♊', dateRange: 'May 21 - Jun 20', gif: '/starsigns/gemini.gif', angle: 60 },
    { name: 'Cancer', symbol: '♋', dateRange: 'Jun 21 - Jul 22', gif: '/starsigns/cancer.gif', angle: 90 },
    { name: 'Leo', symbol: '♌', dateRange: 'Jul 23 - Aug 22', gif: '/starsigns/leo.gif', angle: 120 },
    { name: 'Virgo', symbol: '♍', dateRange: 'Aug 23 - Sep 22', gif: '/starsigns/virgo.gif', angle: 150 },
    { name: 'Libra', symbol: '♎', dateRange: 'Sep 23 - Oct 22', gif: '/starsigns/libra.gif', angle: 180 },
    { name: 'Scorpio', symbol: '♏', dateRange: 'Oct 23 - Nov 21', gif: '/starsigns/scorpio.gif', angle: 210 },
    { name: 'Sagittarius', symbol: '♐', dateRange: 'Nov 22 - Dec 21', gif: '/starsigns/sagittarius.gif', angle: 240 },
    { name: 'Capricorn', symbol: '♑', dateRange: 'Dec 22 - Jan 19', gif: '/starsigns/capricorn.gif', angle: 270 },
    { name: 'Aquarius', symbol: '♒', dateRange: 'Jan 20 - Feb 18', gif: '/starsigns/aquarius.gif', angle: 300 },
    { name: 'Pisces', symbol: '♓', dateRange: 'Feb 19 - Mar 20', gif: '/starsigns/pisces.gif', angle: 330 },
];

const ZodiacSection = () => {
    const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
    const [hoveredSign, setHoveredSign] = useState<string | null>(null);

    const radius = 350; // Radius of the circle

    return (
        <section className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
            {/* Background Stars */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(100)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="mb-4">
                        <span className="block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                            Choose Your
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl font-normal italic leading-[1.1] mt-1 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Zodiac Sign
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-white/50 mt-6 font-light">
                        Read your daily horoscope and unlock cosmic insights
                    </p>
                </motion.div>

                {/* Circular Constellation Layout */}
                <div className="relative flex items-center justify-center min-h-[800px]">
                    {/* Center Display */}
                    <motion.div
                        className="absolute z-20 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {selectedSign ? (
                            <motion.div
                                key={selectedSign.name}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center relative"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedSign(null)}
                                    className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-30"
                                    aria-label="Close"
                                >
                                    <X className="w-4 h-4" />
                                </button>

                                <h3 className="text-4xl font-bold mb-2">{selectedSign.name}</h3>
                                <p className="text-white/60 text-sm mb-6">{selectedSign.dateRange}</p>
                                <div className="max-w-md px-6">
                                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                                        Your cosmic journey awaits. The stars have aligned to bring you guidance and wisdom for today.
                                    </p>
                                    <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 font-normal rounded-none transition-all duration-300 text-xs tracking-widest uppercase">
                                        Read Full Horoscope
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="text-center">
                                <div className="w-32 h-32 mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-4xl">✨</span>
                                </div>
                                <p className="text-white/40 text-sm">Select your sign</p>
                            </div>
                        )}
                    </motion.div>

                    {/* Zodiac Signs in Circle */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {zodiacSigns.map((sign, index) => {
                            const angleRad = (sign.angle * Math.PI) / 180;
                            const x = Math.cos(angleRad) * radius;
                            const y = Math.sin(angleRad) * radius;

                            return (
                                <motion.div
                                    key={sign.name}
                                    className="absolute"
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.8 + index * 0.1,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                >
                                    {/* Connection Line to Center */}
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 origin-left h-[1px] bg-white/10"
                                        style={{
                                            width: `${radius}px`,
                                            transform: `translate(-100%, -50%) rotate(${sign.angle + 180}deg)`,
                                        }}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: hoveredSign === sign.name || selectedSign?.name === sign.name ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Sign Button */}
                                    <motion.button
                                        onClick={() => setSelectedSign(sign)}
                                        onMouseEnter={() => setHoveredSign(sign.name)}
                                        onMouseLeave={() => setHoveredSign(null)}
                                        className={`relative group flex flex-col items-center gap-2 transition-all duration-300 ${selectedSign?.name === sign.name ? 'scale-110' : ''
                                            }`}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Glow Effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-white/20 blur-xl"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: hoveredSign === sign.name || selectedSign?.name === sign.name ? 0.6 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* GIF Container */}
                                        <div className={`relative w-16 h-16 border-2 rounded-full overflow-hidden transition-all duration-300 ${selectedSign?.name === sign.name
                                            ? 'border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]'
                                            : 'border-white/30 group-hover:border-white/60'
                                            }`}>
                                            <Image
                                                src={sign.gif}
                                                alt={sign.name}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>

                                        {/* Name */}
                                        <span className={`text-xs font-light tracking-wide transition-all duration-300 ${selectedSign?.name === sign.name
                                            ? 'text-white font-normal'
                                            : 'text-white/60 group-hover:text-white/90'
                                            }`}>
                                            {sign.name}
                                        </span>

                                        {/* Orbital Ring */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full border border-white/20"
                                            style={{ width: '80px', height: '80px', left: '-12px', top: '-12px' }}
                                            animate={{
                                                rotate: 360,
                                            }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 0.3 }}
                                        />
                                    </motion.button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Outer Orbit Ring */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <div
                            className="border border-white/20 rounded-full"
                            style={{ width: `${radius * 2 + 100}px`, height: `${radius * 2 + 100}px` }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ZodiacSection;
