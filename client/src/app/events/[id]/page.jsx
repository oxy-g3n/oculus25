"use client"

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import events from '../../../data/eventsData';

const EventDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const event = events.find((event) => event.id === id);
  const [selected, setSelected] = useState('Summary');
  //Carousel useStates
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

//   functions to handle the carousel
   // Generate random Lorem Picsum images for the carousel --> replace with code to fetch images from our soon to be added carousel images folder
   useEffect(() => {
    const imageIds = [237, 244, 338, 433, 823, 1024, 1025];
    const images = imageIds.map(id => `https://picsum.photos/id/${id}/800/600`);
    setCarouselImages(images);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Get event colors or use default Arabian Nights theme
  const primaryColor = event?.colorTheme?.primary || "#D4AF37"; // Gold default
  const secondaryColor = event?.colorTheme?.secondary || "#8B4513"; // Saddle Brown default

  return (
    <>
        <div 
          className='w-full min-h-screen relative pb-12'
          style={{ 
            background: `linear-gradient(to bottom, ${secondaryColor}05, ${secondaryColor}40)`,
            backgroundAttachment: 'fixed'
          }}
        >
            {/* Simple back button */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/events">
                    <button 
                        className="bg-black/50 text-white px-5 py-2.5 rounded-lg border-2 border-amber-500/70 hover:bg-amber-500/40 transition-all duration-300 font-['Aref_Ruqaa_Ink'] text-lg shadow-lg hover:shadow-amber-500/30"
                        style={{
                            boxShadow: "0 0 10px rgba(0,0,0,0.5)"
                        }}
                    >
                        ← Back to Events
                    </button>
                </Link>
            </div>

            <div className='w-full h-[350px] overflow-hidden'>
                <img
                className='w-full h- object-cover bg-no-repeat -mt-40 left-0 z-10'
                src={`/assets/events/${event.id}/${event.id}-web.png`}
                alt={event.name}
                />
            </div>
            <div className="absolute top-[200px] left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute top-[296px] left-0 w-full h-full" style={{ background: `linear-gradient(to bottom, #000000, ${secondaryColor}90)` }}></div>
            
            <div className='w-full -mt-48 lg:-mt-52 filter-causer relative pt-12 pl-20'>
                <div className='x-container'>
                    <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
                        <div className='flex flex-row gap-2 items-center'>
                        <img src={event.frontImage} alt="hackathon logo" className="w-32 lg:w-48" />
                            <div className='flex flex-col items-center lg:items-start'>
                                <h1 className='text-lg lg:text-4xl font-bold text-white' 
                                    style={{ 
                                      textShadow: `0 0 10px ${primaryColor}`
                                    }}>{event.name}</h1>
                                <p className='text-md lg:text-2xl text-white text-center'
                                   style={{ color: primaryColor }}>{event.type} • {event.month} 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='x-container mt-5 font-bold'>
                <div className='flex flex-col pl-20'>
                    {/* Buttons row with Arabian style */}
                    <div className='flex flex-row gap-4 flex-wrap mb-6 justify-center lg:justify-start'>
                        <button
                            className={`event-btn w-36 h-12 text-lg px-6 py-3 rounded-xl shadow-lg transition-colors transition-all transform hover:scale-110 border-2 ${
                                selected === 'Summary' 
                                ? `bg-opacity-90 text-white border-${primaryColor}` 
                                : 'bg-slate-800 bg-opacity-50 text-gray-200 border-transparent'
                            }`}
                            style={{ 
                                backgroundColor: selected === 'Summary' ? primaryColor : '',
                                borderColor: selected === 'Summary' ? primaryColor : 'transparent',
                                boxShadow: selected === 'Summary' ? `0 0 15px ${primaryColor}80` : ''
                            }}
                            onClick={() => setSelected('Summary')}
                        >
                            Summary
                        </button>
                        <button
                            className={`event-btn w-36 h-12 text-lg px-6 py-3 rounded-xl shadow-lg transition-colors transition-all transform hover:scale-110 border-2 ${
                                selected === 'Rules' 
                                ? `bg-opacity-90 text-white border-${primaryColor}` 
                                : 'bg-slate-800 bg-opacity-50 text-gray-200 border-transparent'
                            }`}
                            style={{ 
                                backgroundColor: selected === 'Rules' ? primaryColor : '',
                                borderColor: selected === 'Rules' ? primaryColor : 'transparent',
                                boxShadow: selected === 'Rules' ? `0 0 15px ${primaryColor}80` : ''
                            }}
                            onClick={() => setSelected('Rules')}
                        >
                            Rules
                        </button>
                        <button
                            className={`event-btn w-36 h-12 text-lg px-6 py-3 rounded-xl shadow-lg transition-colors transition-all transform hover:scale-110 border-2 ${
                                selected === 'FAQs' 
                                ? `bg-opacity-90 text-white border-${primaryColor}` 
                                : 'bg-slate-800 bg-opacity-50 text-gray-200 border-transparent'
                            }`}
                            style={{ 
                                backgroundColor: selected === 'FAQs' ? primaryColor : '',
                                borderColor: selected === 'FAQs' ? primaryColor : 'transparent',
                                boxShadow: selected === 'FAQs' ? `0 0 15px ${primaryColor}80` : ''
                            }}
                            onClick={() => setSelected('FAQs')}
                        >
                            FAQs
                        </button>
                    </div>

                    {/* Content section with Arabian style */}
                    <div 
                        className='w-full text-white z-20 lg:max-w-[60%] text-md font-semibold mt-4 p-6 rounded-lg'
                        style={{ 
                            width: 'calc(55%)',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderLeft: `4px solid ${primaryColor}`,
                            boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 10px ${primaryColor}40`,
                            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5))`
                        }}
                    >
                        {selected === "Summary" && event.description}
                        {selected === "Rules" && (event.rules || "Rules")}
                        {selected === "FAQs" && (event.faqs || "FAQs")}
                    </div>
                    
                    {/* carousel with Arabian style */}
                    <div 
                        className='absolute top-[350px] right-20 h-80 w-[400px] rounded-2xl overflow-hidden shadow-xl'
                        style={{ 
                            boxShadow: `0 10px 25px rgba(0,0,0,0.5), 0 0 15px ${primaryColor}40`,
                            border: `2px solid ${primaryColor}80`
                        }}
                    >
                        <div className='relative w-full h-full'>
                            {carouselImages.map((image, index) => (
                                <div 
                                    key={index} 
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <img 
                                        src={image} 
                                        alt={`Carousel image ${index + 1}`} 
                                        className='w-full h-full object-cover rounded-2xl'
                                    />
                                </div>
                            ))}
                                
                            {/* Carousel controls */}
                            <button 
                                onClick={prevSlide}
                                className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10'
                                style={{ backgroundColor: `${secondaryColor}80` }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button 
                                onClick={nextSlide}
                                className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10'
                                style={{ backgroundColor: `${secondaryColor}80` }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                                
                            {/* Dots indicators */}
                            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10'>
                                {carouselImages.map((_, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-colors`}
                                        style={{ 
                                            backgroundColor: index === currentSlide ? primaryColor : 'rgba(255,255,255,0.5)'
                                        }}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
);
}

export default EventDetailsPage;