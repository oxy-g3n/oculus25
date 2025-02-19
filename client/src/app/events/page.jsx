import EventsComponent from "../../components/EventsLayout";
import React from "react";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background iframe */}
      <div className="fixed inset-0 w-full h-screen">
        <iframe
          src="/fluid-animation/index2.html"
          className="w-full h-full border-none"
          scrolling="no"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-none">
        <div className="pt-12 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Events
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Discover and register for our exciting events
          </p>
        </div>
        <EventsComponent />
      </div>
    </div>
  );
}
