'use client';

import { useCallback } from 'react';
import { useNavigation } from '../app/NavigationContext';

/**
 * A hook that provides navigation with loading state
 * @returns {Object} Navigation utilities
 */
export default function useNavigationWithLoading() {
  const { navigateTo, isNavigating } = useNavigation();
  
  /**
   * Navigate to a path with loading state
   * @param {string} path - The path to navigate to
   */
  const navigate = useCallback((path) => {
    navigateTo(path);
  }, [navigateTo]);
  
  /**
   * Create a click handler for navigation
   * @param {string} path - The path to navigate to
   * @returns {Function} Click handler function
   */
  const createClickHandler = useCallback((path) => {
    return (e) => {
      e.preventDefault();
      navigateTo(path);
    };
  }, [navigateTo]);
  
  return {
    navigate,
    createClickHandler,
    isNavigating
  };
} 