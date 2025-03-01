"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import eventsData from "../data/eventsData.js";
import EventCard from "./EventCard";

const EventsLayout = () => {
  const [selected, setSelected] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  useEffect(() => {
    if (selected === "All") {
      setFilteredEvents(eventsData);
    } else {
      const filteredEvents = eventsData.filter((event) =>
        event.type.includes(selected)
      );
      setFilteredEvents(filteredEvents);
    }
  }, [selected]);

  return (
    <AnimatePresence>
      <div className="w-full pt-20 pb-16 p-10 flex flex-col items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto space-y-8">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg inline-block mx-auto">
            <h1 className="text-5xl grad font-bold bg-clip-text text-transparent font-['Aref_Ruqaa_Ink'] text-center">
              Events
            </h1>
          </div>
          
          <div className="flex flex-row gap-4 flex-wrap justify-center bg-black/30 backdrop-blur-sm p-4 rounded-lg">
            <button
              className={`custom-btn btn-9 font-['Aref_Ruqaa_Ink'] text-2xl moving-border ${
                selected === "All" ? "selected" : ""
              }`}
              onClick={() => setSelected("All")}
            >
              All
            </button>
            <button
              className={`custom-btn btn-9 font-['Aref_Ruqaa_Ink'] text-2xl moving-border ${
                selected === "Pre - Event" ? "selected" : ""
              }`}
              onClick={() => setSelected("Pre - Event")}
            >
              Pre - Events
            </button>
            <button
              className={`custom-btn btn-9 font-['Aref_Ruqaa_Ink'] text-2xl ${
                selected === "Technical" ? "selected" : ""
              }`}
              onClick={() => setSelected("Technical")}
            >
              Technical
            </button>
            <button
              className={`custom-btn btn-9 font-['Aref_Ruqaa_Ink'] text-2xl ${
                selected === "Fun" ? "selected" : ""
              }`}
              onClick={() => setSelected("Fun")}
            >
              Fun
            </button>
            <button
              className={`custom-btn btn-9 font-['Aref_Ruqaa_Ink'] text-2xl ${
                selected === "Cultural" ? "selected" : ""
              }`}
              onClick={() => setSelected("Cultural")}
            >
              Cultural
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto place-items-center">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default EventsLayout;
