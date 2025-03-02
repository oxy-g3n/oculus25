import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from "framer-motion";

const ContactCard = ({ text, number }) => {
    return (
        <div className="flex flex-col items-center gap-6 w-full p-4 md:p-6">
            <div className="w-full">
                <Card
                    title="Sphurti Asawa"
                    subtitle="+91 88284 22842"
                    description="General Secretary Stcu"
                    Icon={FiUser}

                    isMain={true}
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-6">
                <Card
                    title="Vivek (Director) "
                    subtitle="+91 89287 31857"
                    description="Director @oculus"
                    Icon={FiUser}
                />
                <Card
                    title="Arya Patkar"
                    subtitle="+91 84199 19062"
                    description="Finance Secretary Stcu"
                    Icon={FiUser}
                />
                <Card
                    title="Mandar Dumbre"
                    subtitle="+91 93728 43787"
                    description="Technical Secretary Stcu"
                    Icon={FiUser}
                />
                <Card
                    title="Aishwarya Bichave"
                    subtitle="+91 85910 69045"
                    description="Ladies' Representative"
                    Icon={FiUser}
                />
                <Card
                    title="Soumorup Chakrabarti"
                    subtitle="+91 88280 90474"
                    description="Cultural Secretary Stcu"
                    Icon={FiUser}
                />
                <Card
                    title="Samrith Shetty"
                    subtitle="+91 93222 41530"
                    description="Cultural Secretary Stcu"
                    Icon={FiUser}
                />
            </div>
        </div>
    );
};

const Card = ({ title, subtitle, description, Icon, isMain }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);    
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <motion.div
            className={`relative group cursor-pointer ${isMain ? 'bg-gradient-to-tr from-amber-950/40 to-purple-900/40' : 'bg-black/60'} 
                backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden
                hover:border-white/20 transition-all duration-300`}
            onClick={() => copyToClipboard(subtitle.replace(/\s/g, ''))}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 to-purple-300/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
            />
            
            <div className="relative z-10 p-4 md:p-5">
                <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${isMain ? 'bg-amber-200/20' : 'bg-white/10'} 
                        group-hover:bg-amber-200/20 transition-colors duration-300`}>
                        {!copied ? (
                            <Icon className={`text-xl md:text-2xl ${isMain ? 'text-amber-200' : 'text-white/80'} 
                                group-hover:text-amber-200 transition-colors duration-300`} />
                        ) : (
                            <CheckCircleIcon className="text-xl md:text-2xl text-amber-200 animate-bounce" />
                        )}
                    </div>
                    
                    <div className="flex flex-col">
                        <h3 className={`font-['Aref_Ruqaa_Ink'] text-lg md:text-xl text-white 
                            group-hover:text-amber-200 transition-colors duration-300 
                            group-hover:tracking-wider ${copied ? 'text-amber-200' : ''}`}>
                            {copied ? 'Phone Number Copied!' : title}
                        </h3>
                        {description && !copied && (
                            <p className="text-white/60 text-sm mt-0.5 group-hover:text-white/80 transition-colors duration-300">
                                {description}
                            </p>
                        )}
                        {!copied && (
                            <p className="text-white/70 group-hover:text-amber-200/90 transition-colors duration-300 
                                text-sm md:text-base mt-1 font-['Aref_Ruqaa_Ink']">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-200/0 via-amber-200/70 to-amber-200/0"
                initial={{ width: "0%" }}
                animate={{ width: copied ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
};

export default ContactCard;
