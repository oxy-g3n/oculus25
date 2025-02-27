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
      <div className="w-full pt-10 pb-16 p-10 flex flex-col items-center min-h-screen bg-black/50">
        <h1 className="text-5xl grad font-bold mb-12 bg-clip-text text-transparent font-['Aref_Ruqaa_Ink']">
          Events
        </h1>
        <div className="flex flex-row gap-4 flex-wrap mb-14">
          <button
            className={`custom-btn btn-9 pointer-events-auto font-['Aref_Ruqaa_Ink'] text-2xl moving-border ${
              selected === "All" ? "selected" : ""
            }`}
            onClick={() => setSelected("All")}
          >
            All
          </button>
          <button
            className={`custom-btn btn-9 pointer-events-auto font-['Aref_Ruqaa_Ink'] text-2xl moving-border ${
              selected === "Pre - Event" ? "selected" : ""
            }`}
            onClick={() => setSelected("Pre - Event")}
          >
            Pre - Events
          </button>
          <button
            className={`custom-btn btn-9 pointer-events-auto font-['Aref_Ruqaa_Ink'] text-2xl ${
              selected === "Technical" ? "selected" : ""
            }`}
            onClick={() => setSelected("Technical")}
          >
            Technical
          </button>
          <button
            className={`custom-btn btn-9 pointer-events-auto font-['Aref_Ruqaa_Ink'] text-2xl ${
              selected === "Fun" ? "selected" : ""
            }`}
            onClick={() => setSelected("Fun")}
          >
            Fun
          </button>
          <button
            className={`custom-btn btn-9 pointer-events-auto font-['Aref_Ruqaa_Ink'] text-2xl ${
              selected === "Cultural" ? "selected" : ""
            }`}
            onClick={() => setSelected("Cultural")}
          >
            Cultural
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 max-w-[1400px] place-items-center ">
            {filteredEvents.map((event, index) => {
              return <EventCard key={index} event={event} />;
            })}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default EventsLayout;
