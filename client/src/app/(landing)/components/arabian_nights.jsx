import { useState, useEffect } from 'react';

export default function ArabianNights() {
    // Fallback image for when event images don't exist yet
    const fallbackImage = "/assets/new_aladin.png"; // Using an existing image from assets

    const eventSets = [
        {
            id: "aej",
            title: "Aelaan-E-Jung",
            description: "The ultimate dance competition where rhythm meets tradition.",
            images: [
                "/assets/events/aej/image1.png",
                "/assets/events/aej/image2.png",
                "/assets/events/aej/image3.png"
            ]
        },
        {
            id: "carnival",
            title: "Carnival",
            description: "A spectacular fashion event showcasing style and creativity.",
            images: [
                "/assets/events/carnival/image1.png",
                "/assets/events/carnival/image2.png",
                "/assets/events/carnival/image3.png"
            ]
        },
        {
            id: "ipl",
            title: "IPL Auction",
            description: "Strategic bidding for cricket stars in this thrilling competition.",
            images: [
                "/assets/events/ipl/image1.png",
                "/assets/events/ipl/image2.png",
                "/assets/events/ipl/image3.png"
            ]
        },
        {
            id: "pronite",
            title: "Pronite",
            description: "Mesmerizing performances by renowned artists and bands.",
            images: [
                "/assets/events/pronite/image1.png",
                "/assets/events/pronite/image2.png",
                "/assets/events/pronite/image3.png"
            ]
        },
        {
            id: "techrace",
            title: "Techrace",
            description: "An exhilarating treasure hunt across the mystical city of Mumbai.",
            images: [
                "/assets/events/techrace/image1.png",
                "/assets/events/techrace/image2.png",
                "/assets/events/techrace/image3.png"
            ]
        },
        {
            id: "vsm",
            title: "Virtual Stock Market",
            description: "Test your trading skills in this virtual financial challenge.",
            images: [
                "/assets/events/vsm/image1.png",
                "/assets/events/vsm/image2.png",
                "/assets/events/vsm/image3.png"
            ]
        },
        {
            id: "wob",
            title: "War of Branches",
            description: "A cultural showdown between college branches through music and dance.",
            images: [
                "/assets/events/wob/image1.png",
                "/assets/events/wob/image2.png",
                "/assets/events/wob/image3.png"
            ]
        }
    ];

    // Image cycling state
    const [currentImageIndices, setCurrentImageIndices] = useState({
        aej: 0,
        carnival: 0,
        ipl: 0,
        pronite: 0,
        techrace: 0,
        vsm: 0,
        wob: 0
    });

    // Setup image cycling effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndices(prevIndices => {
                const newIndices = { ...prevIndices };
                
                // Update each event's current image index
                eventSets.forEach(event => {
                    const currentIndex = prevIndices[event.id];
                    const nextIndex = (currentIndex + 1) % event.images.length;
                    newIndices[event.id] = nextIndex;
                });
                
                return newIndices;
            });
        }, 3000); // Change image every 3 seconds
        
        return () => clearInterval(interval);
    }, []);

    // Handle image error by using fallback
    const handleImageError = (e) => {
        e.target.src = fallbackImage;
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-8 md:py-0 md:h-screen bg-black overflow-hidden relative">
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
            
            <div className="relative z-10 flex flex-col items-center w-full px-4">
                <h2 className="text-3xl md:text-5xl font-bold grad font-['Aref_Ruqaa_Ink'] mb-2 pb-4 md:mb-6 px-2 text-center">
                    Arabian Nights
                </h2>
                <div className="max-w-4xl text-center px-2 md:px-4 mb-6 md:mb-8">
                    <p className="text-base md:text-xl font-['Noto_Naskh_Arabic'] leading-relaxed text-amber-200">
                        Experience the magic and mystery of the Arabian Nights at Oculus 2025.
                        Where technology meets tradition in a spectacular fusion of culture and innovation.
                    </p>
                </div>

                {/* Image Scroller Container */}
                <div className="w-full h-[60vh] md:h-[70vh] max-w-[95vw] mx-auto">
                    <div className="h-full overflow-x-auto scrollbar-hide">
                        <div className="flex gap-4 md:gap-8 p-2 md:p-4 min-w-max h-full">
                            {eventSets.map((event) => (
                                <div
                                    key={event.id}
                                    className="group h-full flex flex-col"
                                >
                                    <div className="relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform duration-300 hover:scale-105 h-[85%]">
                                        {/* Cycling through images with a fade transition */}
                                        <div className="relative h-full w-[280px] sm:w-[350px] md:w-[450px] lg:w-[600px]">
                                            {event.images.map((img, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={img}
                                                    alt={`${event.title} - Image ${imgIndex + 1}`}
                                                    onError={handleImageError}
                                                    className={`absolute inset-0 h-full w-full object-cover cursor-pointer transition-opacity duration-1000 ${
                                                        currentImageIndices[event.id] === imgIndex ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                                />
                                            ))}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-4 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-1 md:mb-2 font-['Aref_Ruqaa_Ink'] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm md:text-lg text-amber-200 font-['Noto_Naskh_Arabic'] text-center max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[600px]">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Scroll hint - Desktop only */}
                <div className="hidden md:flex mt-4 text-amber-300 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-['Noto_Naskh_Arabic']">Scroll to explore magical events</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </div>
            
            {/* Touch indicator for mobile - No animation */}
            <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 text-amber-300 text-xs text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
                Swipe to explore
            </div>
        </section>
    );
} 