import EventsComponent from "../../components/EventsLayout";
import React from "react";
import Navbar from "../../components/navbar";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar alwaysShow={true} />
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
        <EventsComponent />
      </div>
    </div>
  );
}
