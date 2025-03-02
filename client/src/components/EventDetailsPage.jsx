"use client"

import { useState } from 'react';
import AccordionItem from '../components/AccordionItem';
import events from '../data/eventsData';

const EventDetailsPage = ({id}) => {
  const event = events.find((event) => event.id === id);

  const [selected, setSelected] = useState('Summary');


  if (!event) {
    return <div className="text-center text-white">Event not found</div>;
  }

  return (
    <div className='w-full min-h-screen relative pb-12'>
      <div className='w-full h-[400px] overflow-hidden'>
        <img className='w-full h-full object-cover bg-no-repeat' src={event.bg_img} alt='event' />
      </div>
      <div className='w-full -mt-48 lg:-mt-52 filter-causer relative pt-12'>
        <div className='x-container'>
          <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
            <div className='flex flex-row gap-2 items-center'>
              <img src={event.img_front} alt="hackathon logo" className="w-32 lg:w-48" />
              <div className='flex flex-col items-center lg:items-start'>
                <h1 className='text-lg lg:text-4xl font-bold text-white'>{event.title}</h1>
                <p className='text-md lg:text-2xl text-white text-center'>
                  {event.category[0]} • {event.eventDate.month} {event.eventDate.year}
                </p>
              </div>
            </div>
            <a type='button' href={event.registrationUrl} style={{ backgroundColor: event.color }} className={`event-btn register`}>
              Register
            </a>
          </div>
        </div>
      </div>
      <div className='x-container mt-5'>
        <div className='flex flex-row gap-4 flex-wrap mb-6 justify-center lg:justify-start'>
          {['Summary', 'Rules', 'FAQs'].map((tab) => (
            <button
              key={tab}
              className={`event-btn ${selected === tab ? `selected` : 'bg-slate-800'}`}
              style={{ backgroundColor: selected === tab ? event.color : null }}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className='w-full text-slate-100 lg:max-w-[70%] text-md font-semibold'>
          {selected === "Summary" && event.summary}
          {selected === "FAQs" && (
            <div className='lg:max-w-[90%] w-full'>
              {event.faq.map((faq, index) => (
                <AccordionItem key={index} index={index} question={faq.question} answer={faq.answer} color={event.color} />
              ))}
            </div>
          )}
          {selected === "Rules" && (
            <ul>
              {event.rules.map((rule, index) => (
                <li key={index} className='py-2 flex items-center'>
                  <span className="mr-2">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="circle-check"
                      className={`svg-inline--fa fa-circle-check`}
                      style={{ color: event.color, width: '20px' }}
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                    </svg>
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
