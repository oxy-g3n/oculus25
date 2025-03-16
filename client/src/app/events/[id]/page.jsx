"use client"

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import events from '../../../data/eventsData';

const EventDetailsPage = () => {
    const { id } = useParams();
    const event = events.find(event => event.id === id);
    const [selectedTab, setSelectedTab] = useState('Summary');
    const [openFaq, setOpenFaq] = useState(null);

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-lg text-white font-['Aref_Ruqaa_Ink']">Event not found</div>
            </div>
        );
    }

    const { primary: primaryColor = "#D4AF37", secondary: secondaryColor = "#8B4513" } = event.colorTheme || {};

    return (
        <main className="min-h-screen bg-black">
            {/* Banner Section */}
            <section className="relative h-[300px] md:h-[400px]">
                {/* Back Button */}
                <div className="absolute top-4 left-4 z-50">
                    <Link href="/events">
                        <button className="bg-black/50 text-white px-4 py-2 rounded-lg border border-amber-500/70 
                                         hover:bg-amber-500/40 transition-all duration-300 font-['Aref_Ruqaa_Ink'] text-sm">
                            ← Back
                        </button>
                    </Link>
                </div>

                {/* Banner Image */}
                <div className="absolute inset-0">
                    <img src={event.banner} alt={event.name} 
                         className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>
                </div>

                {/* Event Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="container mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <img src={event.frontImage} alt={event.name} 
                                 className="w-24 md:w-28" />
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white font-['Aref_Ruqaa_Ink']"
                                    style={{ textShadow: `0 0 10px ${primaryColor}` }}>
                                    {event.name}
                                </h1>
                                <p className="text-base md:text-lg mt-1 font-['Noto_Naskh_Arabic']"
                                   style={{ color: primaryColor }}>
                                    {event.type} • {event.month} 2024
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-wrap justify-center">
                            {event.gallery && (
                                <Link href={`/events/${event.id}/gallery`}>
                                    <button
                                        className="px-6 py-2 text-base font-semibold rounded-lg
                                                shadow-md transition-all transform hover:scale-105
                                                text-center font-['Aref_Ruqaa_Ink'] border-2
                                                relative"
                                        style={{ 
                                            borderColor: primaryColor,
                                            color: 'white',
                                            backgroundColor: primaryColor,
                                            boxShadow: `0 0 25px ${primaryColor}80`
                                        }}>
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                                            </svg>
                                            View Gallery
                                        </span>
                                    </button>
                                </Link>
                            )}
                            {event.formUrl && (
                                event.id === 'tedx' ? (
                                    <>
                                        <a href={event.formUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 text-base font-semibold rounded-lg
                                                    shadow-md transition-all transform hover:scale-105 text-white
                                                    text-center font-['Aref_Ruqaa_Ink']"
                                        style={{ 
                                            backgroundColor: primaryColor,
                                            boxShadow: `0 0 20px ${primaryColor}40`
                                        }}>
                                            Register (Outside SPIT)
                                        </a>
                                        <a href={event.formUrl2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 text-base font-semibold rounded-lg
                                                    shadow-md transition-all transform hover:scale-105 text-white
                                                    text-center font-['Aref_Ruqaa_Ink']
                                                    border-2"
                                        style={{ 
                                            borderColor: primaryColor,
                                            color: primaryColor,
                                            boxShadow: `0 0 20px ${primaryColor}40`
                                        }}>
                                            Register (SPIT)
                                        </a>
                                    </>
                                ) : (
                                    <a href={event.formUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 text-base font-semibold rounded-lg
                                                shadow-md transition-all transform hover:scale-105 text-white
                                                text-center font-['Aref_Ruqaa_Ink']"
                                    style={{ 
                                        backgroundColor: primaryColor,
                                        boxShadow: `0 0 20px ${primaryColor}40`
                                    }}>
                                        Register
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-6">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 md:gap-6 mb-6 max-w-[600px] mx-auto sm:mx-0">
                    {['Summary', 'Rules', 'FAQs'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-3 sm:px-5 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300
                                      font-['Aref_Ruqaa_Ink'] border-2
                                      hover:scale-105 hover:shadow-lg flex-1 sm:flex-none
                                      bg-black/30 backdrop-blur-sm`}
                            style={{
                                borderColor: '#9370DB',
                                color: selectedTab === tab ? 'white' : '#9370DB',
                                backgroundColor: selectedTab === tab ? 'rgba(147, 112, 219, 0.5)' : 'transparent',
                                boxShadow: selectedTab === tab 
                                    ? '0 0 25px rgba(147, 112, 219, 0.6)' 
                                    : '0 0 15px rgba(147, 112, 219, 0.3)',
                                transform: `translateY(${selectedTab === tab ? '-2px' : '0'})`,
                                minWidth: '80px',
                                maxWidth: '120px'
                            }}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-[#1a1f2e]/90 rounded-lg p-3 sm:p-4 text-white max-w-[900px] mx-auto
                              transition-all duration-300 hover:bg-[#1a1f2e]
                              hover:shadow-xl hover:shadow-black/20"
                     style={{ 
                         borderLeft: `4px solid ${primaryColor}`,
                         boxShadow: `0 4px 20px rgba(0,0,0,0.2)`,
                     }}>
                    {/* Summary Content */}
                    {selectedTab === 'Summary' && (
                        <p className="text-sm leading-relaxed text-gray-200 transition-colors duration-300
                                    hover:text-white">
                            {event.description}
                        </p>
                    )}

                    {/* Rules Content */}
                    {selectedTab === 'Rules' && (
                        <div className="flex flex-col items-center justify-center py-4">
                            {event.rule_book ? (
                                <>
                                    <a 
                                        href={`/assets/events/${event.id}/rules.pdf`}
                                        download={`${event.name}_Rules.pdf`}
                                        className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg
                                                 transition-all duration-300 transform hover:scale-105
                                                 text-center font-['Aref_Ruqaa_Ink'] border-2
                                                 bg-black/30 backdrop-blur-sm"
                                        style={{ 
                                            borderColor: '#9370DB',
                                            color: '#9370DB',
                                            boxShadow: '0 0 20px rgba(147, 112, 219, 0.4)'
                                        }}
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                            className="w-5 h-5 md:w-6 md:h-6"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        <span className="text-sm sm:text-base font-semibold">Download Rules PDF</span>
                                    </a>
                                    <p className="mt-4 text-sm text-gray-300 text-center">
                                        Click the button above to download the complete rules for {event.name}.
                                    </p>
                                </>
                            ) : event.rules ? (
                                <div className="w-full max-w-3xl">
                                    <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: '#9370DB' }}>
                                        Rules for {event.name}
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {event.rules.map((rule, index) => (
                                            <li key={index} className="text-sm text-gray-200">
                                                {rule}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p className="text-sm text-gray-300 text-center">
                                    Rules for this event are not available at the moment.
                                </p>
                            )}
                        </div>
                    )}

                    {/* FAQs Content */}
                    {selectedTab === 'FAQs' && (
                        <div className="space-y-2">
                            {event.faq?.map((faq, index) => (
                                <div key={index} 
                                     className="border border-gray-700 rounded-lg overflow-hidden
                                              transition-all duration-300 hover:border-opacity-100
                                              hover:shadow-lg"
                                     style={{ 
                                         borderColor: openFaq === index ? primaryColor : undefined,
                                         boxShadow: openFaq === index 
                                             ? `0 4px 12px ${primaryColor}20` 
                                             : 'none'
                                     }}>
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full p-2 sm:p-3 flex items-center justify-between text-left
                                                 bg-black/20 transition-all duration-300
                                                 hover:bg-black/40">
                                        <span className="text-xs sm:text-sm font-medium pr-2 sm:pr-4 transition-colors duration-300"
                                              style={{ 
                                                  color: openFaq === index ? primaryColor : 'white',
                                              }}>
                                            {faq.question}
                                        </span>
                                        <svg
                                            className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke={openFaq === index ? primaryColor : 'white'}>
                                            <path strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="2" 
                                                  d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden
                                                   ${openFaq === index ? 'max-h-60 sm:max-h-48' : 'max-h-0'}`}>
                                        <p className="p-2 sm:p-3 text-xs sm:text-sm text-gray-300 transition-colors duration-300
                                                    hover:text-white">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default EventDetailsPage;