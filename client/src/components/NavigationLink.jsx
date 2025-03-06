'use client';

import { useNavigation } from '../app/NavigationContext';

export default function NavigationLink({ href, className, children, onClick, ...props }) {
  const { navigateTo } = useNavigation();
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Navigate with loading state
    navigateTo(href);
  };
  
  return (
    <a 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
} 