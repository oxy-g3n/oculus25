import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ContactCard = ({ text, number }) => {
    return (
        <div className="flex flex-col items-center gap-6 w-full p-4">
            <div className="w-full lg:w-1/2 flex">
                <Card
                    title="Vivek (Director) "
                    subtitle="+91 89287 31857"
                    Icon={FiUser}
                />
            </div>
            
            {/* Other cards - Stack in columns on mobile, 2 per row on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                <Card
                    title="Sphurti Asawa (General Secretary Stcu)"
                    subtitle="+91 88284 22842"
                    Icon={FiUser}
                />
                <Card
                    title="Arya Patkar (Finance Secretary Stcu)"
                    subtitle="+91 84199 19062"
                    Icon={FiUser}
                />
                <Card
                    title="Mandar Dumbre (Technical Secretary Stcu)"
                    subtitle="+91 93728 43787"
                    Icon={FiUser}
                />
                <Card
                    title="Aishwarya Bichave (Ladies' Reprensentative)"
                    subtitle="+91 85910 69045"
                    Icon={FiUser}
                />
                <Card
                    title="Soumorup Chakrabarti (Cultural Secretary Stcu)"
                    subtitle="+91 88280 90474"
                    Icon={FiUser}
                />
                <Card
                    title="Samrith Shetty (Cultural Secretary Stcu)"
                    subtitle="+91 93222 41530"
                    Icon={FiUser}
                />
            </div>
        </div>
    );
};

const Card = ({ title, subtitle, Icon }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Revert after 1 second
    };

    return (
        <div
            className="w-full h-30 p-4 md:p-6 rounded-lg border-[1px] border-slate-300 relative overflow-hidden group bg-white cursor-pointer 
            hover:shadow-xl hover:border-[#3DACF2] hover:-translate-y-1 transition-all duration-300 ease-out"
            onClick={() => copyToClipboard(subtitle.replace(/\s/g, ''))}
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${
                copied 
                ? "from-green-500 to-green-800" 
                : "from-[#3DACF2] via-[#1a5585] to-[#3DACF2]"
            } translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500`} />
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30">
                <div className="absolute inset-0 transform -skew-x-12">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-genie-glow to-transparent animate-genie-shine" />
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-white/5 group-hover:animate-shimmer" />

            <Icon className={`absolute z-10 -top-12 -right-12 text-9xl text-slate-100 ${
                copied 
                ? "group-hover:text-green-300/50" 
                : "group-hover:text-[#3DACF2]/50"
            } group-hover:rotate-12 transition-all duration-500 group-hover:scale-110`} />
            
            <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    {!copied ? (
                        <Icon className="mb-1 text-2xl md:text-3xl text-[#3DACF2] group-hover:text-white transition-colors duration-300 group-hover:rotate-6" />
                    ) : (
                        <CheckCircleIcon className="mb-1 text-2xl md:text-3xl text-green-600 group-hover:text-white transition-colors duration-300 animate-bounce" />
                    )}
                    {copied ? (
                        <h3 className="font-bold text-base md:text-lg text-green-600 group-hover:text-white relative z-10 duration-300">
                            Phone Number Copied!
                        </h3>
                    ) : (
                        <h3 className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-white relative z-10 duration-300 group-hover:translate-x-1 transition-transform line-clamp-2">
                            {title}
                        </h3>
                    )}
                </div>
                
                {copied ? (
                    <p className="text-slate-400 group-hover:text-[#3DACF2] relative z-10 duration-300 opacity-0">
                        {subtitle}
                    </p>
                ) : (
                    <p className="text-slate-500 group-hover:text-[#3DACF2] relative z-10 duration-300 font-bold pl-8 md:pl-10 text-sm md:text-base group-hover:translate-x-1 transition-transform">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactCard;
