'use client';

import { useCart } from '@/contexts/CartContext';
import { type Product } from '@/lib/types';
import { Button, ButtonProps } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps extends ButtonProps {
  product: Product;
}

export function AddToCartButton({ product, size, variant, ...props }: AddToCartButtonProps) {
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
    <Button onClick={handleAddToCart} size={size || "lg"} variant={variant || "outline"} className="w-full" {...props}>
      <ShoppingCart className="me-2 h-5 w-5" />
      أضف إلى السلة
    </Button>
  );
}
