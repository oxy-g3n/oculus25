'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/full_white_transparent.png";
// import chirag from "../../../../../../../swaraj31/Downloads/aladdin_oculus25/chirag.jpg"
import logo2 from "../../../public/assets/white_O_cropped.png";
import ContactCard from '../../components/contact/ContactCard';
import { NewLink } from '../../components/contact/NewLink';

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust the scroll threshold as needed
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
        <div className={`fixed top-4 md:top-8 left-4 md:left-8 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/">
                <Image 
                    src={logo} 
                    alt="logo" 
                    width={200} 
                    height={55}
                    className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
                />
            </Link>
        </div>
        
        <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="w-full min-h-screen relative overflow-x-hidden select-none"
        >
            <div className="w-full h-screen fixed inset-0">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    {/* <Image 
                        src={chirag} 
                        alt="background" 
                        fill 
                        // className="object-cover"
                        priority
                    /> */}

                    <div className="fixed inset-0 w-full h-screen">
                            <iframe
                            src="/fluid-animation/index2.html"
                            className="w-full h-full border-none"
                            scrolling="no"
                            />
                        </div>
                    <div className="fixed inset-0 w-full h-screen">
                   
      </div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </motion.div>
            </div>
            
            <motion.div 
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 text-white p-4 sm:p-6 md:p-12 mt-16 sm:mt-20 md:mt-32"
            >
                <div className="w-full max-w-3xl pl-4 sm:pl-6 md:pl-8 lg:pl-12">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight font-['Aref_Ruqaa_Ink'] mb-8 sm:mb-10 md:mb-12">
                        Contact Us
                    </h1>
                    
                    <div className='w-full space-y-6 sm:space-y-8 md:space-y-12'>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className=""
                        >
                            <ContactCard />
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="bg-black/30 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/30 hover:border-yellow-500"
                        >
                            <NewLink />
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ 
                        opacity: 0, 
                        scale: 0.3,
                        x: '-100vw',
                        y: '-50vh',
                        rotate: -15
                    }}
                    animate={{ 
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: [0, -10, 0],
                        rotate: [-2, 2, -2]
                    }}
                    transition={{ 
                        opacity: { duration: 1, ease: "easeOut" },
                        scale: { duration: 1.2, ease: "easeOut" },
                        x: { duration: 1.5, ease: "easeOut" },
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 },
                        rotate: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }
                    }}
                    className="fixed lg:right-[20%] right-0 lg:top-[30%] top-[30%] lg:-translate-y-1/2 -translate-y-1/2 z-0 hidden lg:block select-none"

                >
                    <Image
                        src={logo2}
                        alt="Aladdin and Jasmine"
                        width={400} 
                        height={400}
                        className="w-[400px] h-auto opacity-100 mix-blend-soft-light contrast-[190%] brightness-[185%]"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    </>)
}