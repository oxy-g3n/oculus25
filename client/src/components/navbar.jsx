"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SlideAnimation } from "./animations/SlideAnimation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ alwaysShow = false }) {
    const [open, setOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [clickedItem, setClickedItem] = useState(null);

    // Handle scroll visibility - only for landing page
    useEffect(() => {
        if (alwaysShow) {
            setShowNav(true);
            return;
        }

        const handleScroll = () => {
            const vh = window.innerHeight;
            if (window.scrollY >= vh) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [alwaysShow]);

    // Handle scroll lock when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open]);

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/events", label: "Events" },
        { href: "/sponsors", label: "Sponsors" },
        { href: "/schedule", label: "Schedule" },
        { href: "/contact-us", label: "Contact Us" }
    ];

    const menuItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeIn"
            }
        }
    };

    const handleItemClick = async (e, href) => {
        e.preventDefault();
        setClickedItem(href);
        
        // Wait for animations to complete
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Close menu and reset clicked state
        setOpen(false);
        setClickedItem(null);
        
        // Navigate to the page
        window.location.href = href;
    };

    return (
        <>
            <div className={`fixed top-4 right-4 z-[1002] transition-opacity duration-300 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <motion.button
                    className="relative bg-black/10 backdrop-blur-sm rounded-full p-2 hover:bg-black/20 transition-all duration-300 group border border-white/30"
                    onClick={() => setOpen(!open)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-amber-200/30 to-purple-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                            rotate: open ? 180 : 0,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut"
                        }}
                    />
                    <AnimatePresence mode="wait">
                        {open ? (
                            <motion.div
                                key="gold"
                                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1, 
                                    rotateY: 0,
                                }}
                                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                transition={{ 
                                    duration: 0.4,
                                    ease: "easeOut"
                                }}
                                className="relative"
                            >
                                <motion.div
                                    animate={{ 
                                        y: [0, -4, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image
                                        src="/assets/gold_gradient_O.png"
                                        alt="Menu Open"
                                        width={45}
                                        height={45}
                                        className="w-auto h-auto drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                                    />
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="white"
                                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1, 
                                    rotateY: 0,
                                }}
                                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                transition={{ 
                                    duration: 0.4,
                                    ease: "easeOut"
                                }}
                                className="relative"
                            >
                                <motion.div
                                    animate={{ 
                                        y: [0, -4, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image
                                        src="/assets/white_O_cropped.png"
                                        alt="Menu Closed"
                                        width={45}
                                        height={45}
                                        className="w-auto h-auto mr-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            <SlideAnimation isOpen={open}>
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-black/5 to-transparent">
                    <div className="space-y-8 md:space-y-12 -translate-x-8 md:-translate-x-16">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                variants={menuItemVariants}
                                initial="closed"
                                animate={open ? "open" : "closed"}
                                transition={{ delay: index * 0.1 }}
                                className="relative w-64 md:w-80 group"
                            >
                                <Link
                                    href={item.href}
                                    className={`block relative text-3xl md:text-4xl text-white font-['Aref_Ruqaa_Ink'] group-hover:text-amber-300 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-all duration-300
                                        ${clickedItem === item.href ? 'scale-95 opacity-50' : ''}`}
                                    onClick={(e) => handleItemClick(e, item.href)}
                                >
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 rounded-lg"
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                    />
                                    <span className="relative z-10 block py-3 px-8 group-hover:tracking-wider transition-all duration-300">
                                        {item.label}
                                    </span>
                                    <motion.div
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-amber-200/0 via-amber-300/70 to-amber-200/0 group-hover:w-full transition-all duration-300"
                                    />
                                    {clickedItem === item.href && (
                                        <motion.div
                                            className="absolute inset-0 bg-amber-300/20 rounded-lg"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ 
                                                scale: [1, 1.2],
                                                opacity: [0.8, 0],
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeOut"
                                            }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SlideAnimation>
        </>
    );
}