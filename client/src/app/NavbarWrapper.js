'use client';

import { useNavbar } from './NavbarContext';
import { useNavigation } from './NavigationContext';
import Navbar from '../components/navbar';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NavbarWrapper() {
  const { showNavbar } = useNavbar();
  const { navigateTo } = useNavigation();
  const pathname = usePathname();
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

  // Handle navigation with loading state
  const handleNavigate = (route) => {
    const newPath = route === 'home' ? '/' : `/${route}`;
    navigateTo(newPath);
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