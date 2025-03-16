'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState('20');
    const [isMobile, setIsMobile] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const scrollContainerRef = useRef(null);
    
    // Use intersection observer for animations
    const { ref: sectionRef, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    // Check if mobile on mount and on resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Schedule data
    const scheduleData = {
        '20': [
            {
                id: 'inaugration',
                title: 'Inauguration',
                time: '12:45 PM',
                venue: 'Main Auditorium',
                description: 'The grand opening ceremony of Oculus 2025.',
                banner: '/assets/gold_gradient_full_transparent.png',
                color: 'from-purple-600 to-indigo-600'
            },
            {
                id: 'tedx',
                title: 'TEDx',
                time: '4:00 PM',
                venue: '008',
                description: 'TEDxSPIT - A platform for sharing ideas and experiences that spark conversations and inspire change.',
                banner: '/assets/events/tedx/banner.png',
                color: 'from-amber-600 to-orange-600'
            },
            {
                id: 'wob',
                title: 'War of Branches',
                time: '7:00 PM',
                venue: 'SPJ/Adani Ground',
                description: 'War of Branches - The ultimate showdown between college branches.',
                banner: '/assets/events/wob/banner.png',
                color: 'from-blue-600 to-cyan-600'
            }
        ],
        '21': [
            {
                id: 'ipl-auction',
                title: 'IPL Auction',
                time: '1:00 PM - 4:00 PM',
                venue: 'Main Auditorium',
                description: 'Exciting auction event for the Indoor Premier League.',
                banner: '/assets/events/ipl/banner.png',
                color: 'from-green-600 to-emerald-600'
            },
            {
                id: 'carnival',
                title: 'Carnival',
                time: '6:00 PM',
                venue: 'SPJ/Adani Ground',
                description: 'A spectacular carnival featuring various fun activities and performances.',
                banner: '/assets/events/carnival/banner.png',
                color: 'from-pink-600 to-fuchsia-600'
            },
            {
                id: 'battle-of-bands',
                title: 'Battle of Bands (Sargam)',
                time: '6:00 PM - 9:00 PM',
                venue: 'Main Stage',
                description: 'Musical battle between talented bands showcasing their best performances.',
                banner: '/assets/events/sargam/banner.png',
                color: 'from-violet-600 to-purple-600'
            }
        ],
        '22': [
            {
                id: 'rangmanch-solo',
                title: 'Rangmanch Solo',
                time: '8:00 AM',
                venue: 'Main Auditorium',
                description: 'Solo theatrical performances showcasing individual talent.',
                banner: '/assets/events/rangmanch/banner.png',
                color: 'from-amber-600 to-yellow-600'
            },
            {
                id: 'rangmanch-team',
                title: 'Rangmanch Team',
                time: '9:00 AM',
                venue: 'Main Auditorium',
                description: 'Team theatrical performances showcasing group coordination and talent.',
                banner: '/assets/events/rangmanch/banner.png',
                color: 'from-amber-600 to-yellow-600'
            },
            {
                id: 'sargam-solo',
                title: 'Sargam Solo',
                time: '11:00 AM - 1:30 PM',
                venue: 'Main Auditorium',
                description: 'Solo singing competition showcasing individual vocal talents.',
                banner: '/assets/events/sargam/banner.png',
                color: 'from-amber-600 to-yellow-600'
            },
            {
                id: 'ipl-auction-2',
                title: 'IPL Auction',
                time: '12:00 PM',
                venue: 'Main Auditorium',
                description: 'Second round of the exciting IPL auction event.',
                banner: '/assets/events/ipl/banner.png',
                color: 'from-green-600 to-emerald-600'
            },
            {
                id: 'aej-solo',
                title: 'Aelaan-E-Jung Solo',
                time: '3:00 PM',
                venue: 'Dance Arena',
                description: 'Solo dance competition showcasing individual talent.',
                banner: '/assets/events/aej/banner.png',
                color: 'from-red-600 to-rose-600'
            },
            {
                id: 'aej-team',
                title: 'Aelaan-E-Jung Team',
                time: '6:30 PM',
                venue: 'Dance Arena',
                description: 'Team dance competition showcasing group performances.',
                banner: '/assets/events/aej/banner.png',
                color: 'from-red-600 to-rose-600'
            },
            {
                id: 'dj',
                title: 'DJ Night',
                time: '8:00 PM',
                venue: 'College Grounds',
                description: 'Dance the night away with amazing music by professional DJs.',
                banner: '/assets/events/pronite/image6.png',
                color: 'from-violet-600 to-purple-600'
            }
        ],
        '23': [
            {
                id: 'robo-sumo',
                title: 'Robo Sumo',
                time: '10:00 AM',
                venue: 'Robotics Lab',
                description: 'Robot wrestling competition where machines battle it out.',
                banner: '/assets/events/robo/banner.png',
                color: 'from-blue-600 to-indigo-600'
            },
            {
                id: 'robo-soccer',
                title: 'Robo Soccer',
                time: '12:00 PM',
                venue: 'Sports Ground',
                description: 'Exciting soccer matches played by robots.',
                banner: '/assets/events/robo/banner.png',
                color: 'from-green-600 to-emerald-600'
            },
            {
                id: 'line-following-robo',
                title: 'Line Following Robo',
                time: '2:00 PM',
                venue: 'Robotics Arena',
                description: 'Robots competing to follow complex line patterns accurately.',
                banner: '/assets/events/robo/banner.png',
                color: 'from-amber-600 to-yellow-600'
            },
            {
                id: 'pronite',
                title: 'ProNite',
                time: '7:00 PM',
                venue: 'Main Stage',
                description: 'The grand finale night with professional performances and celebrations.',
                banner: '/assets/events/pronite/banner.png',
                color: 'from-purple-600 to-fuchsia-600'
            }
        ]
    };

    // Handle day selection
    const handleDayClick = (day) => {
        setActiveDay(day);
        setShowMap(false);
        
        // Scroll to top of events container on day change
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    };

    // Toggle map view
    const toggleMapView = () => {
        setShowMap(!showMap);
        
        // Scroll to top when toggling map view
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    };

    // Fallback image handler
    const handleImageError = (e) => {
        e.target.src = "/assets/new_aladin.png";
    };

    // Mobile view component
    const MobileView = () => (
        <div className="flex flex-col h-full w-full">
            {/* Day selector and Map button */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-amber-500/30 bg-black/80 backdrop-blur-sm sticky top-0 z-20">
                <div className="flex space-x-1 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {['20', '21', '22', '23'].map((day) => (
                        <button
                            key={day}
                            onClick={() => handleDayClick(day)}
                            className={`relative px-3 py-1.5 rounded-full font-['Aref_Ruqaa_Ink'] text-base flex-shrink-0 ${
                                activeDay === day && !showMap
                                    ? 'bg-amber-500 text-black shadow-[0_0_10px_rgba(245,158,11,0.7)]' 
                                    : 'bg-amber-900/30 text-amber-200 border border-amber-500/40'
                            }`}
                        >
                            <span className="relative z-10">{day}</span>
                            {activeDay === day && !showMap && (
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 animate-pulse opacity-70"></span>
                            )}
                        </button>
                    ))}
                </div>
                <button
                    onClick={toggleMapView}
                    className={`px-3 py-1.5 rounded-full font-['Aref_Ruqaa_Ink'] text-base ${
                        showMap 
                            ? 'bg-amber-500 text-black shadow-[0_0_10px_rgba(245,158,11,0.7)]' 
                            : 'bg-amber-900/30 text-amber-200 border border-amber-500/40'
                    }`}
                >
                    <span className="relative z-10">Map</span>
                    {showMap && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 animate-pulse opacity-70"></span>
                    )}
                </button>
            </div>
            
            {/* Alert for tentative schedule */}
            {!showMap && <div className="px-4 pt-3"><ScheduleAlert /></div>}
            
            {/* Content area */}
            {showMap ? (
                /* Map View */
                <div 
                    ref={scrollContainerRef}
                    className="flex-1 overflow-y-auto bg-black"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <div className="py-3 bg-black border-b border-amber-500/30 text-center">
                        <h2 className="text-xl font-bold text-amber-300 font-['Aref_Ruqaa_Ink']">
                            Complete Timeline
                        </h2>
                    </div>
                    
                    <div className="px-4 pt-3">
                        <ScheduleAlert />
                    </div>
                    
                    <div className="p-4 space-y-6">
                        {Object.keys(scheduleData).map((day) => (
                            <div key={day} className="mb-6">
                                <h3 className="text-lg font-bold text-amber-300 font-['Aref_Ruqaa_Ink'] mb-3 border-b border-amber-500/30 pb-2">
                                    March {day}, 2025
                                </h3>
                                <div className="space-y-3">
                                    {scheduleData[day].map((event) => (
                                        <div 
                                            key={event.id}
                                            className="bg-black/70 rounded-lg overflow-hidden border border-amber-500/40 shadow-md"
                                        >
                                            <div className="flex items-center p-3">
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-base font-bold text-amber-300 font-['Aref_Ruqaa_Ink'] truncate">{event.title}</h4>
                                                    <p className="text-amber-200/80 text-sm truncate">
                                                        <i className="fas fa-map-marker-alt mr-1"></i> {event.venue}
                                                    </p>
                                                </div>
                                                <div className="ml-3 flex-shrink-0">
                                                    <span className="bg-amber-500 text-black px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">
                                                        {event.time.split(' - ')[0]}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Single Day View */
                <>
                    <div className="text-center my-3">
                        <h3 className="text-lg text-amber-200 font-['Noto_Naskh_Arabic']">
                            March {activeDay}, 2025
                        </h3>
                    </div>
                    
                    <div 
                        ref={scrollContainerRef}
                        className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {scheduleData[activeDay].map((event, index) => (
                            <div 
                                key={event.id}
                                className={`bg-black/40 rounded-lg overflow-hidden border border-amber-500/40 shadow-[0_0_15px_rgba(0,0,0,0.3)] transform transition-all duration-300 ${
                                    inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                                style={{ 
                                    transitionDelay: `${index * 150}ms`,
                                    animationDelay: `${index * 150}ms`
                                }}
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={event.banner}
                                        alt={event.title}
                                        onError={handleImageError}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 left-0 right-0 p-3 bg-black/60">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-bold text-amber-300 font-['Aref_Ruqaa_Ink'] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                                                {event.title}
                                            </h3>
                                            <span className="bg-amber-500/80 text-black px-2 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                                                {event.time.split(' - ')[0]}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-amber-200 font-['Noto_Naskh_Arabic']">
                                            <i className="fas fa-map-marker-alt mr-1"></i> {event.venue}
                                        </span>
                                        <span className="text-amber-200/70 text-sm">
                                            {event.time}
                                        </span>
                                    </div>
                                    <p className="text-amber-100/90 text-sm font-['Noto_Naskh_Arabic']">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );

    // Desktop view component
    const DesktopView = () => (
        <div className="flex h-full w-full">
            {/* Day selector sidebar */}
            <div className="w-64 bg-black/30 backdrop-blur-sm border-r border-amber-500/30 p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-amber-400 mb-6 font-['Aref_Ruqaa_Ink'] text-center">
                    March 2025
                </h3>
                
                <div className="space-y-3 flex-1">
                    {['20', '21', '22', '23'].map((day) => (
                        <button
                            key={day}
                            onClick={() => handleDayClick(day)}
                            className={`w-full py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden ${
                                activeDay === day && !showMap
                                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                                    : 'bg-amber-900/20 text-amber-200 hover:bg-amber-900/40 border border-amber-500/30'
                            }`}
                        >
                            <div className="relative z-10 flex items-center">
                                <span className="text-2xl font-['Aref_Ruqaa_Ink']">{day}</span>
                                <span className="ml-2 font-['Noto_Naskh_Arabic']">March</span>
                            </div>
                            {activeDay === day && !showMap && (
                                <div className="absolute inset-0 bg-amber-500 opacity-20 animate-pulse"></div>
                            )}
                        </button>
                    ))}
                </div>
                
                {/* Map button */}
                <button
                    onClick={toggleMapView}
                    className={`w-full py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden mt-4 ${
                        showMap
                            ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                            : 'bg-amber-900/20 text-amber-200 hover:bg-amber-900/40 border border-amber-500/30'
                    }`}
                >
                    <div className="relative z-10 flex items-center justify-center">
                        <span className="text-xl font-['Aref_Ruqaa_Ink']">Map</span>
                    </div>
                    {showMap && (
                        <div className="absolute inset-0 bg-amber-500 opacity-20 animate-pulse"></div>
                    )}
                </button>
                
                <div className="mt-auto pt-6 border-t border-amber-500/30 text-center">
                    <p className="text-amber-200 font-['Noto_Naskh_Arabic'] text-sm">
                        Oculus 2025
                    </p>
                    <p className="text-amber-400 font-['Aref_Ruqaa_Ink'] text-lg mt-1">
                        Arabian Nights
                    </p>
                </div>
            </div>
            
            {/* Events content */}
            <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto p-8 scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                {showMap ? (
                    /* Map View */
                    <div>
                        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-['Aref_Ruqaa_Ink'] mb-8">
                            Complete Event Timeline
                        </h2>
                        
                        <ScheduleAlert />
                        
                        {Object.keys(scheduleData).map((day) => (
                            <div key={day} className="mb-12">
                                <h3 className="text-3xl font-bold text-amber-300 font-['Aref_Ruqaa_Ink'] mb-6 border-b border-amber-500/30 pb-2">
                                    March {day}, 2025
                                </h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {scheduleData[day].map((event) => (
                                        <div 
                                            key={event.id}
                                            className="group bg-black/40 rounded-lg overflow-hidden border border-amber-500/40 shadow-[0_0_15px_rgba(0,0,0,0.3)] transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-1"
                                        >
                                            <div className="relative h-24 overflow-hidden">
                                                <img
                                                    src={event.banner}
                                                    alt={event.title}
                                                    onError={handleImageError}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60">
                                                    <h3 className="text-xl font-bold text-amber-300 font-['Aref_Ruqaa_Ink'] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:text-amber-200 transition-colors duration-300">
                                                        {event.title}
                                                    </h3>
                                                </div>
                                                <div className="absolute top-3 right-3">
                                                    <span className="bg-amber-500/80 text-black px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm shadow-lg">
                                                        {event.time.split(' - ')[0]}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-amber-200 font-['Noto_Naskh_Arabic']">
                                                        <i className="fas fa-map-marker-alt mr-1"></i> {event.venue}
                                                    </span>
                                                    <span className="text-amber-200/70 text-sm">
                                                        {event.time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Single Day View - original code */
                    <>
                        <div className="mb-6">
                            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-['Aref_Ruqaa_Ink']">
                                March {activeDay}, 2025
                            </h2>
                            <p className="text-amber-200 font-['Noto_Naskh_Arabic'] mt-2">
                                {scheduleData[activeDay].length} events scheduled
                            </p>
                        </div>
                        
                        <ScheduleAlert />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {scheduleData[activeDay].map((event, index) => (
                                <div 
                                    key={event.id}
                                    className={`group bg-black/40 rounded-lg overflow-hidden border border-amber-500/40 shadow-[0_0_15px_rgba(0,0,0,0.3)] transform transition-all duration-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-1 ${
                                        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                    style={{ 
                                        transitionDelay: `${index * 100}ms`,
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={event.banner}
                                            alt={event.title}
                                            onError={handleImageError}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60">
                                            <h3 className="text-2xl font-bold text-amber-300 font-['Aref_Ruqaa_Ink'] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:text-amber-200 transition-colors duration-300">
                                                {event.title}
                                            </h3>
                                        </div>
                                        <div className="absolute top-3 right-3">
                                            <span className="bg-amber-500/80 text-black px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm shadow-lg">
                                                {event.time.split(' - ')[0]}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-4">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-amber-200 font-['Noto_Naskh_Arabic']">
                                                <i className="fas fa-map-marker-alt mr-1"></i> {event.venue}
                                            </span>
                                            <span className="text-amber-200/70 text-sm">
                                                {event.time}
                                            </span>
                                        </div>
                                        <p className="text-amber-100/90 font-['Noto_Naskh_Arabic']">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );

    // Alert component
    const ScheduleAlert = () => {
        if (!showAlert) return null;
        
        return (
            <div className="bg-amber-500/90 text-black px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm mx-auto max-w-4xl mb-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                        <i className="fas fa-exclamation-triangle text-xl"></i>
                    </div>
                    <div className="flex-1">
                        <p className="font-['Noto_Naskh_Arabic'] font-medium">
                            The current Schedule is Tentative and might change. Please check back for updates.
                        </p>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                        <button 
                            onClick={() => setShowAlert(false)}
                            className="text-black hover:text-amber-900 transition-colors"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="relative h-screen bg-black overflow-hidden">
            {/* Fluid animation background - hide when in map view on mobile */}
            {!(isMobile && showMap) && (
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
            )}
            
            <div className="relative z-10 flex flex-col h-full">
                {/* Header - hide when in map view on mobile */}
                <div className={`py-6 px-4 md:px-8 text-center ${isMobile && showMap ? 'hidden' : 'block'}`}>
                    <h1 className="text-4xl pt-8 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 font-['Aref_Ruqaa_Ink'] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        Event Schedule
                    </h1>
                    <p className="text-amber-200 font-['Noto_Naskh_Arabic'] mt-2 max-w-2xl mx-auto">
                        Journey through four magical days of Oculus 2025, where each moment unfolds like a tale from the Arabian Nights.
                    </p>
                </div>
                
                {/* Main content - conditionally render based on screen size */}
                <div ref={sectionRef} className="flex-1 overflow-hidden">
                    {isMobile ? <MobileView /> : <DesktopView />}
                </div>
            </div>
        </div>
    );
}