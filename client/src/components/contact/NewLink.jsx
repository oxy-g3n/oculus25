import React from "react";
import {
    SiAdobe,
    SiApple,
    SiFacebook,
    SiGoogle,
    SiLinkedin,
    SiShopify,
    SiSoundcloud,
    SiSpotify,
    SiTiktok,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import { motion } from "framer-motion";

export const NewLink = () => {
    return (
        <div className="p-4 md:p-6">
            <ClipPathLinks />
        </div>
    );
};

const ClipPathLinks = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center gap-6">
            <div className="grid grid-cols-1 w-full divide-y divide-white/30">
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30157.16831844859!2d72.836115!3d19.123178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1710524261737!5m2!1sen!2sin'
                    className='w-full h-[300px] rounded-lg'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="divide-y divide-white/30 w-full">
                <div className="grid grid-cols-1 text-white">
                    <TextBox Icon={SiGoogle} text={'Location'} href="https://www.google.com/maps?ll=19.123178,72.836115&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=1596119649840934506" />
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/30 text-white">
                    <LinkBox Icon={InstagramIcon} text={'o.c.u.l.u.s_s.p.i.t'} href="#" />
                    <LinkBox Icon={LinkedInIcon} text={'Oculus S.P.I.T.'} href="#" />
                    <LinkBox Icon={XIcon} text={'OculusSeesAll'} href="#" />
                </div>
                <div className="grid grid-cols-1 text-white">
                    <TextBox Icon={SiGoogle} text={'Email us at:'} href="#" />
                </div>
            </div>
        </div>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, text, href }) => {
    const [scope, animate] = useAnimate();

    return (
        <a
            className="cursor-pointer relative grid h-20 w-full place-content-center sm:h-28 md:h-32 group"
            onClick={() => {
                if (text === 'o.c.u.l.u.s_s.p.i.t') {
                    window.open("https://www.instagram.com/o.c.u.l.u.s_s.p.i.t/", "_blank");
                }
                else if (text === 'Oculus S.P.I.T.') {
                    window.open("https://www.linkedin.com/company/oculusseesall/", "_blank");
                }
                else {
                    window.open("https://twitter.com/oculusseesall?s=11&t=31V3U_6dN4dxqr_7A3vyaA", "_blank");
                }
            }}
        >
            <motion.div
                whileHover={{ 
                    scale: 1.1,
                    filter: "brightness(1.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative"
            >
                <Icon className="!text-2xl sm:!text-3xl lg:!text-4xl text-amber-300 transition-all duration-300" />
                <motion.div
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-amber-300/30 blur-md -z-10"
                />
            </motion.div>
        </a>
    );
};

const TextBox = ({ Icon, text, href }) => {
    return (
        <a
            onClick={() => {
                if (text === 'Location') {
                    window.open(href, "_blank");
                }
                else {
                    window.location.href = `mailto:oculus_thefest@spit.ac.in`
                }
            }}
            className="cursor-pointer relative grid h-20 w-full text-center font-semibold place-content-center sm:h-28 md:h-36"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex flex-col items-center sm:gap-2"
            >
                <span className={`text-2xl x2s:text-lg x1s:text-base font-bold text-amber-300 ${text === 'Location' ? ' flex items-center gap-1' : ''}`}>
                    {text}
                </span>
                <span className={`x2s:text-sm x1s:text-xs text-white/80 ${text === 'Location' ? "px-2" : ""}`}>
                    {text !== 'Location' ? "oculus_thefest@spit.ac.in" : "Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058"}
                </span>
            </motion.div>
        </a>
    );
};