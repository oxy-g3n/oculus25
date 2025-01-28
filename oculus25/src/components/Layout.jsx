import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <button
          className="p-4 bg-gray-800 text-white w-full md:w-auto"
          onClick={toggleNavbar}
        >
          {isNavbarVisible ? "Close Menu" : "Open Menu"}
        </button>
        {isNavbarVisible && <Navbar />}
      </header>

      <main className="flex-1 flex items-center justify-center mt-16 mb-16 px-4">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;