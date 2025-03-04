import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ArabianNights() {
    const router = useRouter();
    // Fallback image for when event images don't exist yet
    const fallbackImage = "/assets/new_aladin.png"; // Using an existing image from assets
    // Add state for tap indicator
    const [showTapIndicator, setShowTapIndicator] = useState(true);

    const eventSets = [
        {
            id: "aej",
            title: "Aelaan-E-Jung",
            description: "The ultimate dance competition where rhythm meets tradition.",
            image: "/assets/events/aej/image1.jpg"
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
            image: "/assets/events/pronite/image1.jpg"
        },
        {
            id: "wob",
            title: "War of Branches",
            description: "A cultural showdown between college branches through music and dance.",
            image: "/assets/events/wob/image1.jpg"
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
            image: "/assets/events/techrace/image1.png"
        },
        // {
        //     id: "vsm",
        //     title: "Virtual Stock Market",
        //     description: "Test your trading skills in this virtual financial challenge.",
        //     image: "/assets/events/vsm/image1.png"
        // },
    ];

    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleImageError = (e) => {
        e.target.src = fallbackImage;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        // Reduced sensitivity for better control
        const walk = (x - startX) * 1.2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Handle touch end with snap scrolling
    const handleTouchEnd = () => {
        setIsDragging(false);
        
        // Implement snap scrolling to nearest card
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.querySelector('div[style*="scroll-snap-align"]')?.offsetWidth || 0;
            const gapWidth = 16; // Approximate gap between cards (4 * 4px from gap-4 md:gap-8)
            
            if (cardWidth) {
                const itemWidth = cardWidth + gapWidth;
                const scrollPosition = container.scrollLeft;
                const targetIndex = Math.round(scrollPosition / itemWidth);
                
                // Smooth scroll to the nearest card
                container.scrollTo({
                    left: targetIndex * itemWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Update scroll progress
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const progress = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
            setScrollProgress(progress);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Clean up event listeners
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const cleanup = () => setIsDragging(false);
        window.addEventListener('mouseup', cleanup);
        window.addEventListener('touchend', cleanup);

        return () => {
            window.removeEventListener('mouseup', cleanup);
            window.removeEventListener('touchend', cleanup);
        };
    }, []);

    // Remove the timer-based useEffect and replace with a function to handle card taps
    const handleCardTap = () => {
        setShowTapIndicator(false);
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-black overflow-hidden relative">
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
                <h2 className="text-3xl md:text-5xl font-bold grad font-['Aref_Ruqaa_Ink'] mb-2 md:mb-4 pb-3 text-center">
                    Arabian Nights
                </h2>
                <div className="max-w-4xl text-center px-2 md:px-4 mb-4 md:mb-6">
                    <p className="text-base md:text-xl font-['Noto_Naskh_Arabic'] leading-relaxed text-amber-200">
                        Experience the magic and mystery of the Arabian Nights at the 7th Edition of Oculus, 2025.
                        Where technology meets tradition in a spectacular fusion of culture and innovation.
                    </p>
                </div>

                {/* Image Scroller Container */}
                <div className="w-full flex-1 max-w-[95vw] mx-auto min-h-0">
                    <div 
                        ref={scrollContainerRef}
                        className={`h-full overflow-x-auto scrollbar-hide cursor-${isDragging ? 'grabbing' : 'grab'}`}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                            userSelect: 'none',
                            scrollBehavior: 'smooth'
                        }}
                    >
                        <div className="flex gap-4 md:gap-8 p-2 md:p-4 min-w-max h-full">
                            {eventSets.map((event) => (
                                <div
                                    key={event.id}
                                    className="group h-full flex flex-col scroll-snap-align-start"
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    <div 
                                        className="relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform duration-300 hover:scale-105 h-[85%] border border-amber-500/40"
                                        onClick={handleCardTap}
                                    >
                                        <div className="relative h-full w-[280px] sm:w-[350px] md:w-[450px] lg:w-[600px] flex items-center justify-center bg-black/40">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                onError={handleImageError}
                                                className="max-h-full max-w-full object-contain p-2"
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
                                            
                                            {/* Tap indicator for mobile */}
                                            {showTapIndicator && (
                                                <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <div className="bg-amber-400/40 rounded-full p-5 backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.7)] animate-[pulse_1.5s_ease-in-out_infinite]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                                        </svg>
                                                    </div>
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
                                className="h-full flex flex-col scroll-snap-align-start"
                                style={{ scrollSnapAlign: 'start' }}
                            >
                                <div 
                                    onClick={() => {
                                        handleCardTap();
                                        router.push('/events');
                                    }}
                                    className="group relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform duration-300 hover:scale-105 h-[85%] w-[280px] sm:w-[350px] md:w-[450px] lg:w-[600px] cursor-pointer border border-amber-500/40"
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
                
                {/* Progress Bar */}
                <div className="w-full max-w-[95vw] mt-2 mb-2">
                    <div className="h-1 bg-amber-900/30 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-amber-400 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${Math.min(Math.max(scrollProgress, 0), 100)}%` }}
                        />
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="mt-2 mb-4 text-amber-300 items-center">
                    <span className="font-['Noto_Naskh_Arabic']">Drag to explore</span>
                </div>
            </div>

        </section>
    );
} 