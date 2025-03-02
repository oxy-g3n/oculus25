"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  //   const handleTap = (id) => {
  //     setIsFlipped(false);
  //     setTimeout(() => {
  //       window.location.href = `/event/${id}`;
  //     }, 600);
  //   };

  const handleTap = (id) => {
    setIsFlipped(false);
    setTimeout(() => {
      window.location.href = `/events/${id}`;
    }, 600);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      onTap={() => {handleTap(event.id)}}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="perspective-1000 pointer-events-auto h-[300px] w-[250px] m-10 mb-20"
    >
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d transition-all duration-100"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.img
          src={event.frontImage}
          alt={event.name}
          className="w-full object-contain absolute backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={event.backImage}
          alt={event.name}
          className="w-full object-contain absolute"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
