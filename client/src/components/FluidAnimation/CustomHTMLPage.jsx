'use client'

export default function CustomHTMLPage() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      {/* Container for the iframe */}
      <div className="absolute inset-0 w-full h-screen">
        <iframe
          src="/fluid-animation/index.html"
          className="w-full h-full border-none"
          scrolling="yes"
        />
      </div>

      {/* Overlapping images container */}
      <div className="relative w-96">

        {/* First image */}

        <img 
          src="/assets/TAN_only_black.png"
          alt="TAN logo"
          className="absolute bottom-1 left-0 w-full rounded-3xl z-10"
        />
        {/* Second image overlapping the first */}
        <img 
          src="/assets/full_white_transparent.png"
          alt="White logo"
          className="absolute bottom-1 left-0 w-full rounded-3xl z-20"
        />
        
        

      </div>
    </div>
  );
} 