'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import LoadingOverlay from '@/components/LoadingOverlay';

type LoadingContextType = {
  showLoader: (callback: () => void) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = useCallback((callback: () => void) => {
    setIsLoading(true);
    setTimeout(() => {
      callback();
      // Hide loader after a delay to allow page to start rendering
      setTimeout(() => setIsLoading(false), 500);
    }, 300); // Short delay to show overlay
  }, []);

  return (
    <LoadingContext.Provider value={{ showLoader }}>
      {isLoading && <LoadingOverlay />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
