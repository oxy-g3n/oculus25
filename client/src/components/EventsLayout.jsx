"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import eventsData from "../data/eventsData";

const events = eventsData;

export default function EventsComponent() {
  const [selectedType, setSelectedType] = useState("All");
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const filteredEvents =
    selectedType === "All"
      ? events
      : events.filter((event) => event.type === selectedType);

  const handleEventClick = (formUrl) => {
    window.location.href = formUrl;
  };

  const handleClick = (id) =>{
    setTimeout(() => {
      window.location.href = `/event/${id}`;
  }, 600); 
  }

  return (
    <div className="w-full min-h-screen bg-black/50 p-4 md:p-8">
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-arabic"
      >
        Events
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-16">
        {["All", "PRE", "TECHNICAL", "FUN", "CULTURAL"].map((type) => (
          <motion.button
            key={type}
            onClick={() => setSelectedType(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`pointer-events-auto px-4 md:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base border-2 ${
              selectedType === type
                ? "bg-yellow-500 border-yellow-600 text-black"
                : "bg-black border-yellow-600/50 text-yellow-500 hover:border-yellow-500"
            }`}
          >
            {type === "PRE" ? "Pre-Events" : type}
          </motion.button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="perspective-1000 pointer-events-auto"
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <motion.div
              className="relative w-full aspect-square cursor-pointer preserve-3d transition-all duration-500"
              animate={{ rotateY: hoveredEvent === event.id ? 180 : 0 }}
              onClick={() => handleEventClick(event.formUrl)}
            >
              {/* Front of the card */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border-2 border-yellow-600/30">
                <div className="relative h-full w-full">
                  <img 
                    src={event.frontImage} 
                    alt={event.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute bottom-0 w-full p-6">
                      <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                        {event.name}
                      </h3>
                      <p className="text-yellow-400/70 text-sm">{event.type}</p>
                      <div className="mt-4 text-yellow-400/50 text-sm">
                        Tap to see details
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of the card */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden rotate-y-180 border-2 border-yellow-600/30">
                <img 
                  src={event.backImage} 
                  alt={`${event.name} details`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/85 p-6">
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold text-yellow-500 mb-3">
                      {event.name}
                    </h3>
                    <p className="text-yellow-400/70 text-sm mb-2">
                      {event.date} | {event.time}
                    </p>
                    <p className="text-yellow-400/70 text-sm mb-4">{event.location}</p>
                    <p className="text-yellow-400/90 text-sm mb-4">
                      {event.description}
                    </p>
                    <motion.button
                      className="px-4 py-2 bg-yellow-500 text-black rounded-full text-sm hover:bg-yellow-600 transition-colors font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Register Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// import events from "../data/eventsData";

// export default function EventsComponent() {
//     return (
//         <div className="flex flex-col justify-between items-center w-auto h-screen">
//             {events.map((event, index) => (
//                 <div key={index} className="flex flex-row items-center w-full space-y-4">
//                 <div className="flex items-center justify-center w-1/4 h-96 bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-4">
//                     <div>
//                         <h1 className="text-2xl font-bold">{event.name}</h1>
//                         <p>{event.date}</p>
//                         <p>{event.time}</p>
//                         <p>{event.location}</p>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center w-3/4 h-96 bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-4">
//                     <div>
//                         <h1 className="text-2xl font-bold">Event Description</h1>
//                         <p>{event.description}</p>
//                         <p>Event Video</p>
//                     </div>
//                 </div>
//             </div>
//             ))}
//         </div>
//     );
// }

// import events from "../data/eventsData";

// export default function EventsComponent() {
//     return (
//         <div className="grid grid-cols-4 gap-4 w-full h-screen p-8">
//             {events.map((event, index) => (
//                 <div key={index} className="grid grid-cols-4 col-span-4 gap-4">
//                     <div className="col-span-1 flex flex-col items-center justify-center h-96 bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-4">
//                         <h1 className="text-2xl font-bold">{event.name}</h1>
//                         <p>{event.date}</p>
//                         <p>{event.time}</p>
//                         <p>{event.location}</p>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
//                     </div>
//                     <div className="col-span-2 flex flex-col items-center justify-center h-96 bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-4">
//                         <h1 className="text-2xl font-bold">Event Description</h1>
//                         <p>{event.description}</p>
//                         <p>Event Video</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
