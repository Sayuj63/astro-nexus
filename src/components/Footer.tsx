"use client";
import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    Twitter,
    Github,
    Linkedin,
    Star,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function Footer() {
    const footerLinks = [
        {
            title: "Explore",
            links: [
                { label: "Daily Horoscope", href: "#" },
                { label: "Birth Chart", href: "#" },
                { label: "Compatibility", href: "#" },
                { label: "Zodiac Signs", href: "#zodiac" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Blog", href: "#" },
                { label: "FAQs", href: "#" },
                { label: "Support", href: "#" },
                {
                    label: "AI Chat",
                    href: "#",
                    pulse: true,
                },
            ],
        },
    ];

    const contactInfo = [
        {
            icon: <Mail size={18} className="text-white/60" />,
            text: "cosmic@astronexus.com",
            href: "mailto:cosmic@astronexus.com",
        },
        {
            icon: <Phone size={18} className="text-white/60" />,
            text: "+1 (555) 123-4567",
            href: "tel:+15551234567",
        },
        {
            icon: <MapPin size={18} className="text-white/60" />,
            text: "San Francisco, CA",
        },
    ];

    const socialLinks = [
        { icon: <Twitter size={20} />, label: "Twitter", href: "https://twitter.com" },
        { icon: <Github size={20} />, label: "GitHub", href: "https://github.com" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com" },
    ];

    return (
        <footer className="bg-black/10 relative h-fit rounded-none overflow-hidden">
            <div className="max-w-7xl mx-auto p-14 z-40 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
                    {/* Brand section */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <Star className="text-white w-8 h-8 fill-white" />
                            <span className="text-white text-3xl font-bold tracking-tight">AstroNexus</span>
                        </div>
                        <p className="text-sm leading-relaxed text-white/60 font-light">
                            Discover your cosmic journey through AI-powered astrology and celestial insights.
                        </p>
                    </div>

                    {/* Footer link sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label} className="relative">
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-white transition-colors font-light text-sm"
                                        >
                                            {link.label}
                                        </a>
                                        {link.pulse && (
                                            <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact section */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    {item.icon}
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-white/60 hover:text-white transition-colors font-light text-sm"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="text-white/60 hover:text-white transition-colors font-light text-sm">
                                            {item.text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-white/10 my-8" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    {/* Social icons */}
                    <div className="flex space-x-6 text-white/40">
                        {socialLinks.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="hover:text-white transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-center md:text-left text-white/60 font-light">
                        &copy; {new Date().getFullYear()} AstroNexus. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Text hover effect */}
            <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
                <TextHoverEffect text="ASTRONEXUS" className="z-50" />
            </div>

            <FooterBackgroundGradient />
        </footer>
    );
}

export default Footer;
