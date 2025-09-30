'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingOverlay from '@/components/LoadingOverlay';

// This context is now just for showing/hiding the overlay.
// The logic is self-contained within the provider.
const LoadingContext = createContext<undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // This is a simple implementation that uses Next.js's built-in hooks.
    // However, for route change events, we need a different approach
    // as `useRouter().events` is not available in App Router.
    // A common pattern is to use a top-level component that wraps navigation.
    // For now, we will simulate the behavior based on pathname changes,
    // which works for Link clicks.
    
    // The previous implementation was flawed because it didn't wait for the page to load.
    // The best way to handle this in App Router is to use a layout component that
    // listens to navigation events. A simpler, yet effective, approach is to
    // just hide the loading state when the new page's content (represented by `children`)
    // has rendered.

    // Let's create a better hook. We'll show the loader on click and hide on path change.
    // This is still not perfect but better than timeouts.
    const handleAnchorClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const anchor = target.closest('a');
        
        // Check if it's a client-side navigation link and not an external link or a hash link
        if (anchor && anchor.href && new URL(anchor.href).origin === location.origin && anchor.target !== '_blank' && !anchor.href.includes('#')) {
             if (anchor.href !== window.location.href) {
                setIsLoading(true);
             }
        }
    };

    // When the path changes, the new page is rendering, so we hide the loader.
    useEffect(() => {
        setIsLoading(false);
    }, [pathname]);


    document.addEventListener('click', handleAnchorClick);

    return () => {
        document.removeEventListener('click', handleAnchorClick);
    };
  }, [pathname]);

  return (
    <LoadingContext.Provider value={undefined}>
      {isLoading && <LoadingOverlay />}
      {children}
    </LoadingContext.Provider>
  );
};

// We don't need to export a useLoading hook if components don't need to trigger it manually.
export const useLoading = () => {
  const context = useContext(LoadingContext);
  // The context can be undefined, and that's okay now.
  // We are not providing any functions to the components.
  return {};
};
