import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ContactCard = ({ text, number }) => {
    return (
            <div className="flex flex-col items-center gap-4 w-full">
                <div className="h-full w-1/2 max-md:w-full flex">
                    <Card
                        title="Vivek (Director) "
                        subtitle="+91 89287 31857"
                        Icon={FiUser}
                    />
                </div>
                <div className="h-full w-full flex items-center max-md:flex-col gap-4">
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
                </div>
                <div className="h-full w-full flex items-center max-md:flex-col gap-4">
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
                </div>
                <div className="h-full w-full flex items-center max-md:flex-col gap-4">
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
            className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white cursor-pointer"
            onClick={() => copyToClipboard(subtitle.replace(/\s/g, ''))}
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${copied ? "from-green-500 to-green-800" : "from-primary-purple to-[#61269E]"} translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300`} />

            <Icon className={`absolute z-10 -top-12 -right-12 text-9xl text-slate-100 ${copied ? "group-hover:text-green-300" : "group-hover:text-secondary-purple"} group-hover:rotate-12 transition-transform duration-300`} />
            {!copied ?
                (<Icon className="mb-2 text-2xl text-primary-purple group-hover:text-white transition-colors relative z-10 duration-300" />)
                :
                (<CheckCircleIcon className="mb-2 text-2xl text-green-600 group-hover:text-white transition-colors relative z-10 duration-300" />)
            }
            {copied ?
                (
                    <>
                        <h3 className="font-medium text-lg text-green-600 group-hover:text-white relative z-10 duration-300">
                            Phone Number Copied!
                        </h3>
                        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300 opacity-0">
                            {subtitle}
                        </p>
                    </>
                )
                :
                (<>
                    <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
                        {title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                        {subtitle}
                    </p>
                </>)}
        </div>
    );
};

export default ContactCard;
