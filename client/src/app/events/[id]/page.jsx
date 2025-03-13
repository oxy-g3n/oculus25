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
                        {event.id === 'tedx' ? (
                            <div className="flex gap-4">
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
                            </div>
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
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-6">
                {/* Navigation Tabs */}
                <div className="flex gap-6 mb-6 max-w-[600px]">
                    {['Summary', 'Rules', 'FAQs'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-8 py-3 text-base font-medium rounded-lg transition-all duration-300
                                      font-['Aref_Ruqaa_Ink'] border border-transparent
                                      hover:scale-105 hover:shadow-lg
                                      ${selectedTab === tab 
                                        ? 'text-white border-white/20' 
                                        : 'text-gray-400 hover:text-white hover:border-white/10'}`}
                            style={{
                                backgroundColor: selectedTab === tab ? primaryColor : 'rgba(0,0,0,0.3)',
                                boxShadow: selectedTab === tab 
                                    ? `0 0 20px ${primaryColor}40` 
                                    : 'none',
                                transform: `translateY(${selectedTab === tab ? '-2px' : '0'})`,
                                minWidth: '120px'
                            }}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-[#1a1f2e]/90 rounded-lg p-4 text-white max-w-[900px]
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
                        <ul className="space-y-2">
                            {event.rules?.map((rule, index) => (
                                <li key={index} className="flex items-start gap-2 transition-all duration-300
                                                         hover:translate-x-1">
                                    <span className="text-base mt-0.5" style={{ color: primaryColor }}>•</span>
                                    <span className="text-sm text-gray-200 transition-colors duration-300
                                                   hover:text-white">
                                        {rule}
                                    </span>
                                </li>
                            ))}
                        </ul>
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
                                        className="w-full p-3 flex items-center justify-between text-left
                                                 bg-black/20 transition-all duration-300
                                                 hover:bg-black/40">
                                        <span className="text-sm font-medium pr-4 transition-colors duration-300"
                                              style={{ 
                                                  color: openFaq === index ? primaryColor : 'white',
                                              }}>
                                            {faq.question}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
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
                                                   ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}>
                                        <p className="p-3 text-sm text-gray-300 transition-colors duration-300
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