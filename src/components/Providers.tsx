'use client';

import * as React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { OrderProvider } from '@/contexts/OrderContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <WishlistProvider>
          <OrderProvider>{children}</OrderProvider>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
