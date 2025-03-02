'use client';

import React from "react";
import EventsLayout from "../../components/EventsLayout";

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background iframe */}
      <div className="fixed inset-0 w-full h-screen">
        <iframe
          src="/fluid-animation/index2.html"
          className="w-full h-full border-none"
          scrolling="no"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: "all"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative" style={{ pointerEvents: "none" }}>
        <div style={{ pointerEvents: "auto" }}>
          <EventsLayout />
        </div>
      </div>
    </div>
  );
}
