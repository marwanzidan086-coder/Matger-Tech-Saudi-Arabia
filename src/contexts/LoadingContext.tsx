'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingOverlay from '@/components/LoadingOverlay';

const LoadingContext = createContext<undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const [previousPath, setPreviousPath] = useState(pathname);

  // Effect to handle the start of navigation
  useEffect(() => {
    // This is a simplified way to detect navigation start in App Router
    // without relying on router events which are not available.
    // If the pathname changes, it means navigation has started from a previous path.
    if (pathname !== previousPath) {
      setIsLoading(true);
      setPreviousPath(pathname);
    }
  }, [pathname, previousPath]);

  // Effect to handle the end of navigation
  useEffect(() => {
    // This effect runs when the children (the new page) have been rendered.
    // We can consider this the "end" of the loading cycle.
    setIsLoading(false);
  }, [children]); // Depending on `children` to detect when the new page content is ready

  return (
    <LoadingContext.Provider value={undefined}>
      {isLoading && <LoadingOverlay />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  return {};
};
