import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ question, answer, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div 
      className="bg-black/30 rounded-lg mb-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="w-full p-4 flex items-center justify-between focus:outline-none"
        onClick={toggleAccordion}
        style={{ borderLeft: `4px solid ${color}` }}
      >
        <span className="font-semibold text-start text-white">{question}</span>
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: color }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-0 px-4 pb-4 bg-black/20">
              <p className='font-normal text-start text-slate-100'>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionItem;