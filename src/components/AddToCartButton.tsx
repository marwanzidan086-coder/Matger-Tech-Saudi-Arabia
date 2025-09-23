'use client';

import { useCart } from '@/contexts/CartContext';
import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      variant: 'success',
      title: 'تمت الإضافة بنجاح!',
      description: (
        <div className="flex gap-4 mt-2">
          <Button asChild size="sm">
            <Link href="/cart">الانتقال إلى السلة</Link>
          </Button>
          <Button variant="secondary" size="sm">
            متابعة التسوق
          </Button>
        </div>
      ),
    });
  };

  return (
    <Button onClick={handleAddToCart} size="lg" className="flex-1">
      <ShoppingCart className="me-2 h-5 w-5" />
      أضف إلى السلة
    </Button>
  );
}
