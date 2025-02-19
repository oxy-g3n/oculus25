'use client'

import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import logo from '../../../public/assets/gold_gradient_O.png'
import logo2 from '../../../public/assets/TAN_gold_transparent.png'
import Image from "next/image";
import { useState } from 'react';

const Example = () => {
  return (
    <section className="grid place-content-center p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-amber-500"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const LogoTransition = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Image
        src={logo}
        width={150}
        height={150}
        alt="Gold gradient O logo"
        className={`relative translate-x-1 translate-y-1 bottom-10 left-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <Image
        src={logo2}
        width={150}
        height={150}
        alt="TAN gold logo"
        className={`absolute top-0 left-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <LogoTransition />
      
      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-[#EED45E] backdrop-blur">
        Oculus 2025
      </button>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-gradient-to-r from-[#EED45E] via-yellow-400 to-[#EED45E]" />
    </div>
  );
};

export default Example;