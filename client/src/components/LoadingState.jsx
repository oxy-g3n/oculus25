import { motion } from "framer-motion";

export default function LoadingState() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <div className="flex flex-col items-center">
        {/* Minimalist rotating loading spinner */}
        <div className="relative w-16 h-16">
          {/* Main rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full rounded-full border-2 border-amber-500/20 border-t-amber-500"
          />
        </div>
        
        {/* OCULUS text */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mt-4 text-amber-500 font-light tracking-widest text-xs"
        >
          OCULUS
        </motion.div>
      </div>
    </motion.div>
  );
} 