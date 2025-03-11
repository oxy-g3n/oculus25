'use client'
import { useState, useEffect } from 'react';

export default function Fluid_animation() {
  const [isMounted, setIsMounted] = useState(false);

  // Only render the iframe on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      {isMounted ? (
        <iframe
          src="/fluid-animation/index.html"
          className="w-full h-full border-none"
          scrolling="yes"
        />
      ) : (
        // Placeholder with same dimensions while server-side rendering
        <div className="w-full h-full bg-black"></div>
      )}
    </div>
  );
}