"use client"

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import events from '../../../data/eventsData';

const EventDetailsPage = () => {
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

  return (
    <>
        
        <div className='w-full min-h-screen relative pb-12'>
            <div className='w-full h-[350px] overflow-hidden'>
                <img
                className='w-full h- object-cover bg-no-repeat -mt-20 left-0 z-10'
                src={`/images/events/${event.id}-web.png`}
                alt={event.name}
                />
            </div>
            <div className="absolute top-[200px] left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute top-[296px] left-0 w-full h-full bg-black"></div>
            <div className='w-full -mt-48 lg:-mt-52 filter-causer relative pt-12 pl-20'>
                <div className='x-container'>
                    <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
                        <div className='flex flex-row gap-2 items-center'>
                        <img src={event.frontImage} alt="hackathon logo" className="w-32 lg:w-48" />
                            <div className='flex flex-col items-center lg:items-start'>
                                <h1 className='text-lg lg:text-4xl font-bold text-white'>{event.name}</h1>
                                <p className='text-md lg:text-2xl text-white text-center'>{event.type} • {event.month} 2025</p>
                            </div>
                        </div>
                        {/* <a type='button' href={event.registrationUrl} style={{ backgroundColor: event.color }} className={`event-btn register`}>Register</a> */}
                    </div>
                </div>
            </div>
            {/* <div className="bg-gradient-to-b from-black/0 to-black h-20 -mt-10"></div> //attempt to make transparent gradient failed :( */}
            <div className='x-container mt-5 font-bold'>
                <div className='flex flex-row gap-4 flex-wrap mb-6 justify-center lg:justify-start pl-20'>
                    <button
                        className={`event-btn w-36 h-12 text-lg px-6 py-3 rounded-xl shadow-lg transition-colors transition-all transform hover:scale-110 ${
                            selected === 'Summary' ? 'bg-yellow-500 text-white' : 'bg-slate-800 text-gray-200'
                        }`}
                        // style={{ backgroundColor: selected === 'Summary' ? "yellow-500" : null }}
                        onClick={() => setSelected('Summary')}
                    >
                        Summary
                    </button>
                    <button
                        className={`event-btn w-36 h-12 text-lg px-6 py-3 rounded-xl shadow-lg transition-colors transition-all  transform hover:scale-110 ${
                            selected === 'Rules' ? 'bg-yellow-500 text-white' : 'bg-slate-800 text-gray-200'
                        }`}
                        // style={{ backgroundColor: selected === 'Rules' ? "yellow-500" : null }}
                        onClick={() => setSelected('Rules')}
                    >
                        Rules
                    </button>
                    <button
                        className={`event-btn w-36 h-12 text-lg px-6 py-3 rounded-xl shadow-lg transition-colors transition-all transform hover:scale-110 ${
                            selected === 'FAQs' ? 'bg-yellow-500 text-white' : 'bg-slate-800 text-gray-200'
                        }`}
                        // style={{ backgroundColor: selected === 'FAQs' ? "yellow-500" : null }}
                        onClick={() => setSelected('FAQs')}
                    >
                        FAQs
                    </button>

                    <div className='w-full text-white z-20 lg:max-w-[60%] text-md font-semibold'>
                        {selected === "Summary" && event.description}
                        {selected === "Rules" && (event.rules || "Rules")}
                        {selected === "FAQs" && (event.faqs || "FAQs")}
                    </div>
                    
                    {/* carousel baby! */}
                    <div className='-translate-y-[275px] lg:w-1/2 h-80 relative rounded-2xl overflow-hidden mt-6 lg:mt-0 mx-4 lg:mx-0 max-w-[400px] max-h-[300px] shadow-xl'>
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
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button 
                                onClick={nextSlide}
                                className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10'
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
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
                                        }`}
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