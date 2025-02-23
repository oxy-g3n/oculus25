"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const SlideAnimation = ({ children, isOpen }) => {
    const backgroundVariants = {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1,
            transition: { duration: 0.2 }
        },
        exit: { 
            opacity: 0,
            transition: { delay: 0.2, duration: 0.2 }
        }
    };

    const contentVariants = {
        initial: { x: "100%" },
        animate: { 
            x: 0,
            transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 30
            }
        },
        exit: { 
            x: "100%",
            transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 30
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="background"
                    variants={backgroundVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="fixed top-0 left-0 w-full h-full z-[1001] overflow-hidden"
                    style={{
                        "--bg-overlay": "rgba(0, 0, 0, 0.7)",
                        "--bg-blend-mode": "multiply",
                        "--bg-opacity": "1",
                        "--bg-filter": "brightness(0.7) contrast(1.1)"
                    }}
                >
                    <div className="page-background" />
                    
                    {/* Logo Container - Top left position */}
                    <div className="absolute top-6 left-6 z-20">
                        <div className="p-3 bg-transparent">
                            <Image
                                src="/assets/full_white_transparent.png"
                                alt="Oculus Logo"
                                width={150}
                                height={37}
                                className="w-auto h-auto"
                                priority
                            />
                        </div>
                    </div>

                    <motion.div
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="relative h-full w-full z-10"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}; 