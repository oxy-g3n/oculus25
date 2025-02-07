import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar(){
    const [open,setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY>100){
                setOpen(true);
            }
            else{
                setOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            {open ? (
                <>
                    <nav 
                    className={`fixed top-0 left-0 w-full bg-black text-white transition-all duration-300 rounded-lg shadow-lg ${
                        open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}>
                        <ul className="flex items-center justify-center bg-gradient-to-r from-purple-800 to-blue-800 text-white h-20">
                            <li className="p-4">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="p-4">
                                <Link href="/events">Events</Link>
                            </li>
                            <li className="p-4">
                                <Link href="/sponsors">Sponsors</Link>
                            </li>
                            <li className="p-4">
                                <Link href="/schedule">Schedule</Link>
                            </li>
                            <li className="p-4">
                                <Link href="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <div></div>
            )}
        </>
    );
    
}