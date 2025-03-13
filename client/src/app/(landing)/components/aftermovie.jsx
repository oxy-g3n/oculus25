'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Aftermovie() {
    const [isMounted, setIsMounted] = useState(false);

    // Set mounted state on client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center bg-black">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full max-w-6xl mx-auto px-4"
            >
                <h2 className="text-4xl md:text-5xl text-center font-bold mb-12 font-['Aref_Ruqaa_Ink'] text-amber-500 drop-shadow-[0_0_25px_rgba(255,215,0,0.2)]">
                    Oculus 2023 Aftermovie
                </h2>
                <div className="relative aspect-video w-full">
                    {isMounted ? (
                        <iframe
                            className="absolute inset-0 w-full h-full rounded-lg shadow-2xl"
                            src="https://www.youtube.com/embed/W8asaoyvgNY"
                            title="Oculus 2024 Aftermovie"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        // Placeholder during server-side rendering
                        <div className="absolute inset-0 w-full h-full rounded-lg shadow-2xl bg-black/50 flex items-center justify-center">
                            <div className="text-amber-500 text-xl">Loading Video...</div>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
} 