"use client";

export default function AboutSection() {
    return (
        <section className="min-h-[60vh] bg-black text-white flex items-center justify-center py-24 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div>
                    <h2 className="mb-4">
                        <span className="block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                            Where Ancient Wisdom
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl font-normal italic leading-[1.1] mt-1 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Meets Modern AI
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-white/50 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
                        AstroNexus brings together centuries of astrological tradition with cutting-edge artificial intelligence.
                        Our mission is to connect people worldwide with cosmic knowledge and help them align with
                        their stars for a more fulfilling life.
                    </p>
                </div>
            </div>
        </section>
    );
}
