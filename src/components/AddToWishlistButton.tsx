'use client';

import { useWishlist } from '@/contexts/WishlistContext';
import { type Product } from '@/lib/types';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useIsMounted } from '@/hooks/use-is-mounted';

export function AddToWishlistButton({ product }: { product: Product }) {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      setIsInWishlist(wishlistItems.some((item) => item.id === product.id));
    }
  }, [wishlistItems, product.id, isMounted]);

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: 'تمت الإزالة من المفضلة',
      });
    } else {
      addToWishlist(product);
      toast({
        title: 'تمت الإضافة إلى المفضلة',
        variant: 'success'
      });
    }
  };

  return (
    <Button
      onClick={handleToggleWishlist}
      variant="outline"
      size="lg"
      className="w-full"
    >
      <Heart className={`me-2 h-5 w-5 ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`} />
      {isInWishlist ? 'إزالة من المفضلة' : 'أضف إلى المفضلة'}
    </Button>
  );
}
