'use client'

import { useState, useEffect, Suspense } from 'react';
import LoadingState from '../../components/LoadingState';
import useNavigationWithLoading from '../../hooks/useNavigationWithLoading';

export default function PlaygroundPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { createClickHandler } = useNavigationWithLoading();

  // Prevent scrolling on the body when this component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Ensure loading shows for at least 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  // If still loading, show the loading state
  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <Suspense fallback={<LoadingState />}>
      <div className="fixed inset-0 w-full h-full bg-black">
        <button 
          onClick={createClickHandler('/')}
          className="absolute top-4 left-4 z-10 px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-600 transition-colors"
        >
          Back to Home
        </button>
        
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
    </Suspense>
  );
} 