'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingOverlay from '@/components/LoadingOverlay';
import { useIsMounted } from '@/hooks/use-is-mounted';

const LoadingContext = createContext<undefined>(undefined);


// This is a client component that will handle the router events.
function NavigationEvents() {
  const pathname = usePathname();
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // This effect runs when the new page content has been rendered and the path changes.
    // We use this to hide the loader.
    setIsLoading(false);
  }, [pathname]);


  useEffect(() => {
    if (!isMounted) return;

    // This is a workaround to detect link clicks and show the loader,
    // as App Router doesn't have a stable `routeChangeStart` event yet.
    const handleLinkClick = (event: MouseEvent) => {
      let target = event.target as HTMLElement;
      // Traverse up the DOM tree to find an anchor tag
      while (target && target.tagName !== 'A') {
        target = target.parentElement as HTMLElement;
      }

      if (target && target.tagName === 'A') {
        const a = target as HTMLAnchorElement;
        const href = a.getAttribute('href');

        // Check if it's an internal link and not a link to the same page
        if (href && href.startsWith('/') && href !== window.location.pathname) {
           // Also check for aria-disabled, which is used on product cards during navigation
           if (a.getAttribute('aria-disabled') !== 'true') {
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

  // Render the loading overlay if loading is true
  return isLoading ? <LoadingOverlay /> : null;
}


export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LoadingContext.Provider value={undefined}>
      {children}
      {/* Suspense is required to make usePathname work correctly during navigation */}
      <React.Suspense fallback={null}>
        <NavigationEvents />
      </React.Suspense>
    </LoadingContext.Provider>
  );
};

// This hook is no longer needed to trigger the loader, but we keep it for consistency.
export const useLoading = () => {
  return {};
};
