'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import LoadingOverlay from '@/components/LoadingOverlay';
import { useIsMounted } from '@/hooks/use-is-mounted';

type LoadingContextType = {
  isTransitioning: boolean;
  startTransition: React.TransitionStartFunction;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

function NavigationEvents() {
  const pathname = usePathname();
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMounted) return;

    const handleLinkClick = (event: MouseEvent) => {
      let target = event.target as HTMLElement;
      while (target && target.tagName !== 'A') {
        target = target.parentElement as HTMLElement;
      }

      if (target && target.tagName === 'A') {
        const a = target as HTMLAnchorElement;
        const href = a.getAttribute('href');

        if (href && href.startsWith('/') && href !== window.location.pathname) {
          const isProductLink = href.startsWith('/products/');
          const isProductCardLink = a.closest('[data-product-card-link]') !== null;
          
          if (!isProductLink || !isProductCardLink) {
             setIsLoading(true);
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };

  }, [isMounted, pathname]);

  return isLoading ? <LoadingOverlay /> : null;
}

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isPending, startTransition] = useTransition();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startGlobalTransition: React.TransitionStartFunction = (callback) => {
    setIsTransitioning(true);
    startTransition(() => {
      callback();
    });
  };
  
  useEffect(() => {
    if (!isPending) {
        setIsTransitioning(false);
    }
  }, [isPending]);


  return (
    <LoadingContext.Provider value={{ isTransitioning, startTransition: startGlobalTransition }}>
      {children}
      <React.Suspense fallback={null}>
        <NavigationEvents />
      </React.Suspense>
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
