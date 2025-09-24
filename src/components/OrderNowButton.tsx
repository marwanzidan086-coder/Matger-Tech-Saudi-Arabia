'use client';

import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function OrderNowButton({ product }: { product: Product }) {
  const router = useRouter();

  const handleOrderNow = () => {
    const params = new URLSearchParams();
    params.set('id', product.id);
    params.set('name', product.name);
    params.set('price', product.price.toString());
    // Pass only the first image
    params.set('image', product.images[0]);
    params.set('slug', product.slug);
    params.set('description', product.description);
    
    router.push(`/order-now?${params.toString()}`);
  };

  return (
    <Button 
      onClick={handleOrderNow} 
      size="lg" 
      className="w-full shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-primary/80"
    >
      <Rocket className="me-2 h-5 w-5" />
      اطلب الآن
    </Button>
  );
}
