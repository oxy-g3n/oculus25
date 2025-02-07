'use client'

export default function CustomHTMLPage() {
  return (
<<<<<<< HEAD
    <div style={{ overflow: "hidden", width: "100%", height: "600px" }}>
      <iframe
        src="/shooting-star/index.html"
        width="100%"
        height="600px"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
          height: "600px",
        }}
        scrolling="no"
      >
      </iframe>
=======
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      {/* Container for the iframe */}
      <div className="absolute inset-0 w-full h-[600px]">
        <iframe
          src="/shooting-star/index.html"
          className="w-full h-full border-none"
          scrolling="no"
        />
      </div>
      
      {/* Centered image container */}
      <div className="relative z-10 w-80" style={{
          transform: 'translate(0px, -91px)' // Adjust these values: X = -50px (left), Y = 20px (down)
        }}>
        <img 
          src="/assets/full_white_transparent.png"
          alt="Centered image"
          className="rounded-lg shadow-lg"
        />
      </div>
>>>>>>> origin/swaraj
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