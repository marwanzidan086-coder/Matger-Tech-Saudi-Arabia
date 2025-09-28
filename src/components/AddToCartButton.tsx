
'use client';

import { useCart } from '@/contexts/CartContext';
import { type Product } from '@/lib/types';
import { Button, ButtonProps } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps extends ButtonProps {
  product: Product;
  iconOnly?: boolean;
  text?: string;
}

export function AddToCartButton({ product, size, variant, iconOnly = false, text = "أضف إلى السلة", ...props }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      variant: 'success',
      title: 'تمت الإضافة للسلة بنجاح!',
    });
  };

  if (iconOnly) {
    return (
        <Button onClick={handleAddToCart} size={size || "lg"} variant={variant || "outline"} aria-label={text} {...props}>
            <ShoppingCart className="h-5 w-5" />
        </Button>
    )
  }

  return (
    <Button onClick={handleAddToCart} size={size || "lg"} variant={variant || "outline"} className="w-full" {...props}>
      <ShoppingCart className="me-2 h-5 w-5" />
      {text}
    </Button>
  );
}
