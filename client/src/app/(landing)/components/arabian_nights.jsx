'use client';

import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

export default function ArabianNights() {
    const router = useRouter();
    // Fallback image for when event images don't exist yet
    const fallbackImage = "/assets/new_aladin.png";
    const [showTapIndicator, setShowTapIndicator] = useState(true);
    
    // Use intersection observer for lazy loading the section
    const { ref: sectionRef, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const eventSets = [
        {
            id: "aej",
            title: "Aelaan-E-Jung",
            description: "The ultimate dance competition where rhythm meets tradition.",
            image: "/assets/events/aej/image1.png"
        },
        {
            id: "carnival",
            title: "Carnival",
            description: "A spectacular fashion event showcasing style and creativity.",
            image: "/assets/events/carnival/image1.png"
        },
        {
            id: "pronite",
            title: "Pronite",
            description: "Mesmerizing performances by renowned artists and bands.",
            image: "/assets/events/pronite/image1.png"
        },
        {
            id: "wob",
            title: "War of Branches",
            description: "A cultural showdown between college branches through music and dance.",
            image: "/assets/events/wob/image1.png"
        },
        // {
        //     id: "ipl",
        //     title: "IPL Auction",
        //     description: "Strategic bidding for cricket stars in this thrilling competition.",
        //     image: "/assets/events/ipl/image1.png"
        // },
        {
            id: "techrace",
            title: "Techrace",
            description: "An exhilarating treasure hunt across the mystical city of Mumbai.",
            image: "/assets/events/techrace/banner.png"
        },
        // {
        //     id: "vsm",
        //     title: "Virtual Stock Market",
        //     description: "Test your trading skills in this virtual financial challenge.",
        //     image: "/assets/events/vsm/image1.png"
        // },
    ];

    const scrollContainerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const rafRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Handle image error fallback
    const handleImageError = (e) => {
        e.target.src = fallbackImage;
    };

    // Simple and efficient scroll progress update
    const updateScrollProgress = () => {
        if (!scrollContainerRef.current) return;
        
        const container = scrollContainerRef.current;
        const progress = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
        setScrollProgress(progress);
    };

    // Update scroll progress on scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            // Use requestAnimationFrame to limit updates for better performance
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            
            rafRef.current = requestAnimationFrame(() => {
                updateScrollProgress();
            });
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            container.removeEventListener('scroll', handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    // Handle mouse down event
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    // Handle mouse move event
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Handle mouse up event
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Add mouse leave event to stop dragging if mouse leaves the container
    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    // Add cleanup for mouse events
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDragging, startX, scrollLeft]);

    // Handle card tap
    const handleCardTap = () => {
        setShowTapIndicator(false);
    };

    return (
        <section 
            ref={sectionRef}
            className="flex flex-col items-center justify-center h-screen bg-black overflow-hidden relative"
        >
            {/* Fluid animation background */}
            <iframe
                src="/fluid-animation/index2.html"
                className="w-full h-full border-none"
                scrolling="no"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    pointerEvents: "none",
                    zIndex: 0,
                    opacity: 0.7
                }}
            />
            
            {/* Background image - commented out for potential future use */}
            {/* <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('/assets/chirag2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.7,
                    zIndex: 0
                }}
            /> */}
            
            <div className="relative z-10 flex flex-col items-center w-full px-4 h-full">
                <h2 className="text-3xl md:text-5xl font-bold grad font-['Aref_Ruqaa_Ink'] mb-1 md:mb-2 pb-2 text-center">
                    Arabian Nights
                </h2>
                <div className="max-w-4xl text-center px-2 md:px-4 mb-2 md:mb-3">
                    <p className="text-sm md:text-lg font-['Noto_Naskh_Arabic'] leading-relaxed text-amber-200">
                        Experience the magic and mystery of the Arabian Nights at the 7th Edition of Oculus, 2025.
                        Where technology meets tradition in a spectacular fusion of culture and innovation.
                    </p>
                </div>

                {/* Image Scroller Container - Simplified for better performance */}
                <div className="w-full flex-1 max-w-[98vw] mx-auto min-h-0 relative">
                    <div 
                        ref={scrollContainerRef}
                        className="h-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                        style={{
                            WebkitOverflowScrolling: 'touch',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                            userSelect: 'none'
                        }}
                        onMouseDown={handleMouseDown}
                        onScroll={() => {
                            // Mark as scrolling to prevent other interactions
                            setIsScrolling(true);
                            
                            // Clear any existing timeout
                            if (window.scrollTimeout) {
                                clearTimeout(window.scrollTimeout);
                            }
                            
                            // Set a timeout to mark scrolling as done
                            window.scrollTimeout = setTimeout(() => {
                                setIsScrolling(false);
                            }, 100);
                        }}
                    >
                        <div className="flex gap-4 md:gap-8 p-2 md:p-4 min-w-max h-full">
                            {eventSets.map((event, index) => (
                                <div
                                    key={event.id}
                                    className="group h-full flex flex-col"
                                >
                                    <div 
                                        className="relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform duration-300 hover:scale-105 h-[90%] border border-amber-500/40"
                                        onClick={handleCardTap}
                                    >
                                        <div className="relative h-full w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] flex items-center justify-center bg-black/40">
                                            {/* Optimized image loading */}
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                onError={handleImageError}
                                                className="max-h-full max-w-full object-contain p-1"
                                                loading={index < 2 ? "eager" : "lazy"}
                                            />
                                            
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                                                <h3 className="text-2xl md:text-3xl font-semibold text-amber-400 mb-4 font-['Aref_Ruqaa_Ink']">
                                                    {event.title}
                                                </h3>
                                                <p className="text-lg text-amber-200 font-['Noto_Naskh_Arabic']">
                                                    {event.description}
                                                </p>
                                            </div>
                                            
                                            {/* Tap indicator for mobile - show on all cards */}
                                            {showTapIndicator && (
                                                <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <div className="absolute bottom-8 bg-amber-800/90 text-amber-100 px-4 py-2 rounded-full text-sm font-['Noto_Naskh_Arabic'] font-bold shadow-[0_0_10px_rgba(245,158,11,0.5)] border border-amber-500/70">
                                                        Tap
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* View All Events Card */}
                            <div 
                                className="h-full flex flex-col"
                            >
                                <div 
                                    onClick={() => {
                                        handleCardTap();
                                        router.push('/events');
                                    }}
                                    className="group relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform duration-300 hover:scale-105 h-[90%] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] cursor-pointer border border-amber-500/40"
                                >
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-8 transform transition-transform duration-300 group-hover:scale-105">
                                            <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4 font-['Aref_Ruqaa_Ink'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                                Discover More
                                            </h3>
                                            <p className="text-xl text-amber-200 font-['Noto_Naskh_Arabic'] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                                Explore all our magical events
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Enhanced Progress Bar */}
                <div className="w-full max-w-[98vw] mt-2 mb-1">
                    <div className="h-2 bg-amber-900/30 rounded-full overflow-hidden backdrop-blur-sm">
                        <div 
                            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-150 ease-out"
                            style={{ 
                                width: `${Math.min(Math.max(scrollProgress, 0), 100)}%`,
                                boxShadow: '0 0 8px rgba(245,158,11,0.5)'
                            }}
                        />
                    </div>
                    <div className="flex justify-end text-xs text-amber-500/70 mt-1 px-1">
                        <span>{Math.round(scrollProgress)}%</span>
                    </div>
                </div>

                {/* Mobile-friendly instruction */}
                <div className="mt-1 mb-2 text-amber-300 flex items-center">
                    <span className="hidden md:inline font-['Noto_Naskh_Arabic']">Drag to explore</span>
                    <span className="md:hidden font-['Noto_Naskh_Arabic']">Swipe to explore</span>
                </div>
            </div>

        </section>
    );
} 