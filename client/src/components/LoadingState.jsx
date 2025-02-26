import { motion } from "framer-motion";

export default function LoadingState() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-500"></div>
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-amber-500/20 backdrop-blur-sm"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 