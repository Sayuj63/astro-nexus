"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
    handleShuffle: () => void;
    testimonial: string;
    position: string;
    id: number;
    author: string;
}

export function TestimonialCard({
    handleShuffle,
    testimonial,
    position,
    id,
    author
}: TestimonialCardProps) {
    const dragRef = React.useRef(0);
    const isFront = position === "front";

    return (
        <motion.div
            style={{
                zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
            }}
            animate={{
                rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
                x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
            }}
            drag={true}
            dragElastic={0.35}
            dragListener={isFront}
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
            onDragStart={(e: any) => {
                dragRef.current = e.clientX;
            }}
            onDragEnd={(e: any) => {
                if (dragRef.current - e.clientX > 150) {
                    handleShuffle();
                }
                dragRef.current = 0;
            }}
            transition={{ duration: 0.35 }}
            className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-none border border-white/20 bg-black/40 p-8 shadow-xl backdrop-blur-md ${isFront ? "cursor-grab active:cursor-grabbing" : ""
                }`}
        >
            <div className="pointer-events-none mx-auto h-24 w-24 rounded-full border border-white/30 bg-white/5 flex items-center justify-center">
                <span className="text-3xl">✨</span>
            </div>
            <p className="text-center text-base italic text-white/70 font-light leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                "{testimonial}"
            </p>
            <p className="text-center text-sm font-light text-white/90 tracking-wide">
                {author}
            </p>
        </motion.div>
    );
}
