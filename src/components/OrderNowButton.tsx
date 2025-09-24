'use client';

import { useCart } from '@/contexts/CartContext';
import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function OrderNowButton({ product }: { product: Product }) {
  const { addToCart, cartItems } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const handleOrderNow = () => {
    // Check if the product is already in the cart
    const isProductInCart = cartItems.some(item => item.id === product.id);

    if (!isProductInCart) {
        addToCart(product);
    }

    toast({
      variant: 'success',
      title: 'تم تجهيز طلبك!',
      description: 'سيتم توجيهك لصفحة الدفع مباشرة.',
    });
    
    // Add a small delay to ensure cart is updated before navigating
    setTimeout(() => {
        router.push('/checkout');
    }, 100);
  };

  return (
    <Button onClick={handleOrderNow} size="lg" className="w-full">
      <Rocket className="me-2 h-5 w-5" />
      اطلب الآن
    </Button>
  );
}
