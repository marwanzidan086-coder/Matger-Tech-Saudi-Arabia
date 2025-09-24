'use client';

import { useCart } from '@/contexts/CartContext';
import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function OrderNowButton({ product }: { product: Product }) {
  const { addToCart, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const handleOrderNow = () => {
    // 1. Clear the cart to ensure only this item is in it.
    clearCart();
    
    // 2. Add the current product to the now-empty cart.
    addToCart(product);
    
    // 3. Immediately redirect to the checkout page.
    // The checkout page is already designed to handle a cart with items.
    toast({
      variant: 'success',
      title: 'تم تجهيز طلبك!',
      description: 'سيتم توجيهك لصفحة الدفع مباشرة.',
    });
    
    router.push('/checkout');
  };

  return (
    <Button onClick={handleOrderNow} size="lg" className="w-full">
      <Rocket className="me-2 h-5 w-5" />
      اطلب الآن
    </Button>
  );
}
