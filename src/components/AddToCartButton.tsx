'use client';

import { useCart } from '@/contexts/CartContext';
import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      variant: 'success',
      title: 'تمت الإضافة للسلة بنجاح!',
    });
  };

  return (
    <Button onClick={handleAddToCart} size="lg" className="w-full" variant="outline">
      <ShoppingCart className="me-2 h-5 w-5" />
      أضف إلى السلة
    </Button>
  );
}
