'use client';

import { useCart } from '@/contexts/CartContext';
import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function OrderNowButton({ product }: { product: Product }) {
  const { setOrderNowItem } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const handleOrderNow = () => {
    setOrderNowItem(product);

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
