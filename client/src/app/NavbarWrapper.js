'use client';

import { useNavbar } from './NavbarContext';
import Navbar from '../components/navbar';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NavbarWrapper() {
  const { showNavbar } = useNavbar();
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle visibility based on path and scroll
  useEffect(() => {
    const isHomePage = pathname === '/' || pathname === '';
    
    if (isHomePage) {
      // For home page, show navbar based on scroll position
      const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      
      // Initial check
      handleScroll();
      
      // Add scroll listener
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // For other pages, always show navbar
      setIsVisible(true);
    }
  }, [pathname]);

  // Handle navigation
  const handleNavigate = (route) => {
    setIsNavigating(true);
    
    // Update the URL without a page reload
    const newPath = route === 'home' ? '/' : `/${route}`;
    router.push(newPath);
    
    // Reset navigation state
    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
  };

  // Determine if we should show the navbar
  const shouldShowNavbar = showNavbar || isVisible;

  if (!shouldShowNavbar) return null;

  return (
    <Navbar 
      alwaysShow={true}
      onNavigate={handleNavigate}
    />
  );
}