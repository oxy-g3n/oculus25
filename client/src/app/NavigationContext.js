'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import LoadingState from '../components/LoadingState';

// Create the context
const NavigationContext = createContext();

// Create a provider component
export function NavigationProvider({ children }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to navigate with loading state
  const navigateTo = (path) => {
    // Show loading state
    setIsNavigating(true);
    
    // Delay navigation slightly to ensure loading state is visible
    setTimeout(() => {
      // Update the URL
      router.push(path);
      
      // Hide loading state after a minimum duration
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    }, 100);
  };

  // Reset navigation state when pathname changes
  useEffect(() => {
    // This will hide the loading state after navigation completes
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ isNavigating, navigateTo }}>
      {isNavigating && <LoadingState />}
      {children}
    </NavigationContext.Provider>
  );
}

// Custom hook to use the navigation context
export function useNavigation() {
  return useContext(NavigationContext);
} 