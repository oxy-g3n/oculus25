'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Create the context
const NavbarContext = createContext();

// Create a provider component
export function NavbarProvider({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();
  
  // Update navbar visibility based on pathname
  useEffect(() => {
    // Always show navbar on pages other than home
    if (pathname !== '/' && pathname !== '') {
      setShowNavbar(true);
    }
  }, [pathname]);
  
  // Function to set navbar visibility
  const setNavbarVisibility = (isVisible) => {
    setShowNavbar(isVisible);
  };

  return (
    <NavbarContext.Provider value={{ showNavbar, setNavbarVisibility }}>
      {children}
    </NavbarContext.Provider>
  );
}

// Custom hook to use the navbar context
export function useNavbar() {
  return useContext(NavbarContext);
}