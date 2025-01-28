import React from "react";
import { Link } from "react-router-dom";

//Demo Navbar

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/events" className="hover:underline">Events</Link></li>
        <li><Link to="/event-details" className="hover:underline">Event Details</Link></li>
        <li><Link to="/sponsors" className="hover:underline">Sponsors</Link></li>
        <li><Link to="/schedule" className="hover:underline">Schedule</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
        <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;
