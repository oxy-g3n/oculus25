'use client';

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SponsorsPage() {
    const [activeIndex, setActiveIndex] = useState(null);
    
    // Use intersection observer for animations
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const { ref: contentRef, inView: contentInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Sponsor tiers with minimal design
    const sponsorTiers = [
        {
            name: "Diamond",
            color: "#3B82F6", // blue-500
            icon: "★"
        },
        {
            name: "Platinum",
            color: "#8B5CF6", // purple-500
            icon: "◆"
        },
        {
            name: "Gold",
            color: "#F59E0B", // amber-500
            icon: "▲"
        },
        {
            name: "Silver",
            color: "#94A3B8", // slate-400
            icon: "■"
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            {/* Fluid animation background */}
            <iframe
                src="/fluid-animation/index2.html"
                className="absolute inset-0 w-full h-full border-none"
                scrolling="no"
                style={{
                    pointerEvents: "none",
                    opacity: 0.4,
                    zIndex: 0
                }}
            />
            
            <div className="relative z-10 flex flex-col justify-between h-screen">
                {/* Header */}
                <header className="container mx-auto text-center">
                    <div 
                        ref={titleRef}
                        className={`md:pt-12 px-4 transition-all duration-1000 ease-out ${
                            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h1 className="text-5xl pb-8 md:text-7xl font-bold font-['Aref_Ruqaa_Ink'] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                            Sponsors
                        </h1>
                    </div>
                </header>
                
                {/* Main content */}
                <main className="flex-1 flex items-center">
                    <div className="container mx-auto">
                        <div 
                            ref={contentRef}
                            className={`px-6 text-center transition-all duration-1000 delay-300 ease-out ${
                                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="mb-12">
                                <p className="text-xl md:text-2xl text-white/80 font-['Noto_Naskh_Arabic'] mx-auto">
                                    Join the visionaries shaping the future at Oculus 2025
                                </p>
                            </div>
                            
                            <div className="flex flex-nowrap overflow-x-auto pb-8 space-x-6 snap-x justify-center">
                                {sponsorTiers.map((tier, index) => (
                                    <div 
                                        key={tier.name}
                                        className="snap-start flex-shrink-0 w-72 h-72 relative"
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    >
                                        <div 
                                            className="absolute inset-0 rounded-lg transition-all duration-500 ease-out flex flex-col justify-center items-center"
                                            style={{
                                                backgroundColor: 'rgba(0,0,0,0.3)',
                                                backdropFilter: 'blur(8px)',
                                                borderLeft: `2px solid ${tier.color}`,
                                                transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                                            }}
                                        >
                                            <div 
                                                className="text-6xl mb-4"
                                                style={{ color: tier.color }}
                                            >
                                                {tier.icon}
                                            </div>
                                            <h3 
                                                className="text-2xl font-bold font-['Aref_Ruqaa_Ink']"
                                                style={{ color: tier.color }}
                                            >
                                                {tier.name}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                
                {/* Footer */}
                <footer className="container mx-auto py-12 text-center">
                    <div className="px-6 flex flex-col items-center">
                        <p className="text-white/60 font-['Noto_Naskh_Arabic'] mb-6">
                            Sponsorship opportunities opening soon
                        </p>
                        <a 
                            href="mailto:sponsors@oculus2025.com"
                            className="px-8 py-3 border border-amber-500 text-amber-500 font-['Noto_Naskh_Arabic'] hover:bg-amber-500 hover:text-black transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}