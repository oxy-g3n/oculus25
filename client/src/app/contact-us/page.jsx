'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";
// import backImage from "../../../public/assets/navbar_back_new.jpg";
import logo from "../../../public/assets/full_white_transparent.png"; // Make sure this path is correct
import { motion } from "framer-motion";
import { NewLink } from '../../components/contact/NewLink';
import ContactCard from '../../components/contact/ContactCard';
import aladinJasmine from "../../../public/assets/new_aladin.png";

export default function ContactPage() {
    return (
        <div 
            style={{
                "--bg-overlay": "rgba(0, 0, 0, 0.7)",
                "--bg-blend-mode": "normal",
                "--bg-opacity": "1",
                "--bg-filter": "none"
            }}
            className="min-h-screen relative"
        >
            <div className="page-background" />
            <Navbar alwaysShow={true}/>
            
            <div className="fixed top-4 md:top-8 left-4 md:left-8 z-50">
                <Link href="/">
                    <Image 
                        src={logo} 
                        alt="logo" 
                        width={200} 
                        height={55}
                        className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
                    />
                </Link>
            </div>
            
            <motion.div 
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 text-white p-4 sm:p-6 md:p-12 mt-16 sm:mt-20 md:mt-32"
            >
                <div className="w-full max-w-3xl pl-4 sm:pl-6 md:pl-8 lg:pl-12">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight font-['Aref_Ruqaa_Ink'] mb-8 sm:mb-10 md:mb-12">
                        Contact Us
                    </h1>
                    
                    <div className='w-full space-y-6 sm:space-y-8 md:space-y-12'>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className=""
                        >
                            <ContactCard />
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="bg-black/30 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/30"
                        >
                            <NewLink />
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ 
                        opacity: 0, 
                        scale: 0.3,
                        x: '-100vw',
                        y: '-50vh',
                        rotate: -15
                    }}
                    animate={{ 
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: [0, -10, 0],
                        rotate: [-2, 2, -2]
                    }}
                    transition={{ 
                        opacity: { duration: 1, ease: "easeOut" },
                        scale: { duration: 1.2, ease: "easeOut" },
                        x: { duration: 1.5, ease: "easeOut" },
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 },
                        rotate: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }
                    }}
                    className="fixed right-[0.1%] top-[30%] -translate-y-1/2 z-0 hidden lg:block"
                >
                    <Image
                        src={aladinJasmine}
                        alt="Aladdin and Jasmine"
                        width={700}
                        height={700}
                        className="w-[700px] h-auto opacity-90 mix-blend-soft-light contrast-[90%] brightness-[85%]"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}