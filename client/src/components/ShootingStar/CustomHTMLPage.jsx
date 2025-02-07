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
      
      {/* Centered image container */}
      <div className="relative z-50 w-96" style={{
          transform: 'translate(0px, 0px)' // Adjust these values: X = -50px (left), Y = 20px (down)
        }}>
        <img 
          src="/assets/gold_gradient_full_transparent_cropped.png"
          alt="Centered image"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}



// 'use client';

// export default function CustomHTMLPage() {
//   return (
//     <div style={{ overflow: 'hidden', width: '100%', height: '600px' }}>
//       <iframe
//         src="/shooting-star/index.html"
//         width="100%"
//         height="600px"
//         style={{
//           border: 'none',
//           overflow: 'hidden',
//           width: '100%',
//           height: '600px',
//         }}
//         scrolling="no"
//       ></iframe>
//     </div>
//   );
// }