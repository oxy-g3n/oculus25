'use client'

import { useState, useEffect } from 'react';

export default function PlaygroundPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Prevent scrolling on the body when this component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <iframe
        src="/fluid-animation/index_gui_enabled.html"
        className={`w-full h-full border-0 transition-opacity duration-500 ${
          iframeLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIframeLoaded(true)}
        title="Oculus Fluid Playground"
        allowFullScreen
      />
    </div>
  );
} 