"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { Meteors } from "@/components/ui/meteors";

const testimonials = [
    {
        id: 1,
        testimonial: "AstroNexus transformed my understanding of astrology. The AI readings are incredibly accurate and insightful.",
        author: "Sarah M. - Spiritual Guide"
    },
    {
        id: 2,
        testimonial: "I've tried many astrology apps, but AstroNexus stands out. The cosmic visualizations are breathtaking.",
        author: "David L. - Astrology Enthusiast"
    },
    {
        id: 3,
        testimonial: "The daily horoscopes are spot-on. It's like having a personal astrologer in my pocket.",
        author: "Emma R. - Life Coach"
    }
];

export default function TestimonialsSection() {
    const [positions, setPositions] = useState(["front", "middle", "back"]);

    const handleShuffle = () => {
        const newPositions = [...positions];
        newPositions.unshift(newPositions.pop()!);
        setPositions(newPositions);
    };

    return (
        <section className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
            {/* Meteors Background */}
            <Meteors number={30} />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="mb-4">
                        <span className="block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                            What Our
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl font-normal italic leading-[1.1] mt-1 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Cosmic Community Says
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-white/50 mt-6 font-light">
                        Join thousands who've discovered their cosmic path
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid place-content-center">
                    <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                {...testimonial}
                                handleShuffle={handleShuffle}
                                position={positions[index]}
                            />
                        ))}
                    </div>
                </div>

                {/* Instruction */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 text-sm text-white/40 font-light"
                >
                    Drag the cards to explore more testimonials
                </motion.p>
            </div>
        </section>
    );
}
