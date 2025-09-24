'use client';

import { useCart } from '@/contexts/CartContext';
import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function OrderNowButton({ product }: { product: Product }) {
  const { addToCart, clearCart, cartItems } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOrderNow = async () => {
    setIsLoading(true);
    
    // This is a new approach.
    // 1. Clear the cart to ensure only the "Order Now" item is present.
    // 2. Add the desired product to the cart.
    // 3. Immediately navigate to checkout.
    
    await new Promise<void>((resolve) => {
        clearCart();
        // The cart clearing and adding is synchronous in the reducer, 
        // but we'll wait for the next render cycle to be safe.
        setTimeout(() => {
            addToCart(product);
            resolve();
        }, 50); // A small delay to ensure state propagation
    });

    toast({
      variant: 'success',
      title: 'تم تجهيز طلبك!',
      description: 'سيتم توجيهك لصفحة الدفع مباشرة.',
    });
    
    // The navigation should now work reliably.
    router.push('/checkout');
    // No need to set loading to false as we are navigating away.
  };

  return (
    <Button onClick={handleOrderNow} size="lg" className="w-full" disabled={isLoading}>
      <Rocket className="me-2 h-5 w-5" />
      {isLoading ? 'جاري التجهيز...' : 'اطلب الآن'}
    </Button>
  );
}
