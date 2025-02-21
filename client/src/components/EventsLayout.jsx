"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const events = [
  {
    id: "cube-open",
    name: "Cube Open",
    type: "FUN",
    date: "2025-03-02",
    location: "008 Hall, S.P.I.T.",
    time: "10:00 AM",
    description:
      "Mumbai's biggest speedcubing competition. Multiple categories, amazing prizes, and a chance to break records!",
    color: "from-yellow-400/75 to-orange-500/75",
    formUrl: "/events/cube-open",
  },
  {
    id: "carnival",
    name: "Carnival",
    type: "CULTURAL",
    date: "2025-03-01",
    location: "College Ground",
    time: "Whole Day",
    description:
      "Experience the magic of our cultural carnival with music, dance, and endless entertainment!",
    color: "from-purple-400/75 to-indigo-500/75",
    formUrl: "/events/carnival",
  },
  {
    id: "esports",
    name: "Esports",
    type: "FUN",
    date: "2025-03-03",
    location: "Lab Complex",
    time: "9:00 AM",
    description:
      "Compete in various gaming tournaments and prove your skills in the digital arena!",
    color: "from-blue-400/75 to-blue-600/75",
    formUrl: "/events/esports",
  },
  {
    id: "techrace",
    name: "TechRace",
    type: "PRE",
    date: "2025-02-28",
    location: "Mumbai",
    time: "4 hours",
    description:
      "Crack mind-bending clues, solve thrilling mysteries, and race across the city for a ₹75,000 prize pool! ",
    color: "from-green-400/75 to-emerald-600/75",
    formUrl: "/events/techrace",
  },
  {
    id: "funzone",
    name: "Funzone",
    type: "FUN",
    date: "2025-03-01",
    location: "College Campus",
    time: "All Day",
    description:
      "A zone full of exciting games, activities, and entertainment for everyone!",
    color: "from-pink-400/75 to-purple-600/75",
    formUrl: "/events/funzone",
  },
  {
    id: "sargam",
    name: "Sargam",
    type: "CULTURAL",
    date: "2025-03-02",
    location: "Auditorium",
    time: "6:00 PM",
    description:
      "A musical extravaganza featuring the best talents from across colleges!",
    color: "from-orange-400/75 to-red-500/75",
    formUrl: "/events/sargam",
  },
];

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

  return (
    <div className="w-full min-h-screen p-8">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-16">
        {["All", "PRE", "TECHNICAL", "FUN", "CULTURAL"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`pointer-events-auto px-6 py-2 rounded-full transition-all duration-300 ${
              selectedType === type
                ? "bg-purple-500 text-white"
                : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
            }`}
          >
            {type === "PRE" ? "Pre-Events" : type}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
              <div
                className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br ${event.color} p-1 `}
              >
                <div className="h-full w-full rounded-xl flex flex-col items-center justify-center p-6 relative">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {event.name}
                  </h3>
                  <p className="text-white/70 text-sm">{event.type}</p>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
                    Hover to see details
                  </div>
                </div>
              </div>

              {/* Back of the card */}
              <div className="absolute inset-0 backface-hidden rounded-2xl bg-black/90 p-6 rotate-y-180 border-2 border-purple-500/30">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {event.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-2">
                    {event.date} | {event.time}
                  </p>
                  <p className="text-white/70 text-sm mb-4">{event.location}</p>
                  <p className="text-white/90 text-sm mb-4">
                    {event.description}
                  </p>
                  <motion.button
                    className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <Link href = ""></Link> */}
                    Register Now
                  </motion.button>
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
