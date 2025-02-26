'use client'
import { useState, useEffect } from 'react';

export default function Fluid_animation() {
const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">

      <iframe
        src="/fluid-animation/index.html"
        className={`w-full h-full border-none transition-opacity duration-300 ${
          iframeLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        scrolling="yes"
        onLoad={() => setIframeLoaded(true)}
      />
    </div>
  );
}