"use client"

import { useParams } from 'next/navigation';
import events from '../../../data/eventsData';

const EventDetailsPage = () => {
  const params = useParams();
  const id = params?.id;
  const event = events.find((event) => event.id === id);
  return (
    <>
        <div className='flex items-center justify-center w-full h-full min-h-screen relative pb-12'>
            <div className='border-2 flex justify-center items-center w-full max-w-3xl h-[400px] overflow-hidden'>
                <img
                    className='w-full h-full object-cover bg-no-repeat'
                    src={event.bg_img}
                    alt={event.name}
                />
            </div>
        </div>
    </>
    
);
}

export default EventDetailsPage;