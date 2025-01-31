import Link from "next/link"

export default function Navbar(){
    return (<>
        <nav>
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
    </>)
}