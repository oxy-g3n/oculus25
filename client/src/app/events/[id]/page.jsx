"use client"

import { useParams } from 'next/navigation';
import { useState } from 'react';
import events from '../../../data/eventsData';

const EventDetailsPage = () => {
  const params = useParams();
  const id = params?.id;
  const event = events.find((event) => event.id === id);
  const [selected, setSelected] = useState('Summary');

  return (
    <>
        
        <div className='w-full min-h-screen relative pb-12'>
            <div className='w-full h-[350px] overflow-hidden'>
                <img
                className='w-full h-full object-cover bg-no-repeat'
                src={event.bg_img}
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
                    <div className='w-full text-white z-20 lg:max-w-[70%] text-md font-semibold'>
                        {selected == "Summary" ? event.description : ""}
                    </div>
                </div>
            </div>
        </div>
    </>
    
);
}

export default EventDetailsPage;