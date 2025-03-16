'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import eventsData from '../../../../data/eventsData';

export default function EventGalleryPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (params.id) {
      const foundEvent = eventsData.find(e => e.id === params.id);
      
      if (foundEvent && foundEvent.gallery) {
        setEvent(foundEvent);
        
        // Generate array of image paths based on the range
        const imageArray = [];
        for (let i = foundEvent.gallery.start; i <= foundEvent.gallery.end; i++) {
          imageArray.push(`${foundEvent.gallery.basePath}${i}.png`);
        }
        setImages(imageArray);
      } else {
        // Redirect if event doesn't exist or doesn't have a gallery
        router.push('/events');
      }
    }
  }, [params.id, router]);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div 
        className="relative h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${event.banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">{event.gallery.title}</h1>
            <p className="text-xl">{event.name} - {event.date}</p>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={() => router.push(`/events/${event.id}`)}
          className="mb-8 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
        >
          &larr; Back to Event Page
        </button>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((imageSrc, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(imageSrc)}
            >
              <Image
                src={imageSrc}
                alt={`${event.name} gallery image ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10 bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Gallery image fullscreen view"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
} 