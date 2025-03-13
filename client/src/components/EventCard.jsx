"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTap = (id) => {
    setIsFlipped(false);
    setTimeout(() => {
      window.location.href = `/events/${id}`;
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="perspective-[2000px] pointer-events-auto h-[300px] w-[250px] m-10 mb-20"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => handleTap(event.id)}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.3
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "center center"
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(1px)",
            willChange: "transform"
          }}
        >
          <img
            src={event.frontImage}
            alt={event.name}
            className="w-full h-full object-contain rounded-lg"
            style={{ willChange: "transform" }}
          />
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)",
            willChange: "transform"
          }}
        >
          <img
            src={event.backImage}
            alt={event.name}
            className="w-full h-full object-contain rounded-lg"
            style={{ willChange: "transform" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
