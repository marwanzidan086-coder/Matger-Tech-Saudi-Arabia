'use client';

import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export function OrderNowButton({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleOrderNow = () => {
    // 1. Add the product to the cart
    addToCart(product);

    // 2. Show a confirmation toast
    toast({
      title: 'تمت إضافة المنتج للسلة!',
      description: 'سيتم توجيهك الآن لإتمام الطلب.',
      variant: 'success',
    });
    
    // 3. Redirect to the checkout page
    router.push('/checkout');
  };

  return (
    <Button 
      onClick={handleOrderNow} 
      size="lg" 
      className="w-full text-lg font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-primary/50"
    >
      <Rocket className="me-2 h-5 w-5" />
      اطلب الآن
    </Button>
  );
}
