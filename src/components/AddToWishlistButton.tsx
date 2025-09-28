
'use client';

import { useWishlist } from '@/contexts/WishlistContext';
import { type Product } from '@/lib/types';
import { Button, ButtonProps } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useIsMounted } from '@/hooks/use-is-mounted';

interface AddToWishlistButtonProps extends ButtonProps {
  product: Product;
  iconOnly?: boolean;
}


export function AddToWishlistButton({ product, size, iconOnly = false, ...props }: AddToWishlistButtonProps) {
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
  
  const text = isInWishlist ? 'إزالة من المفضلة' : 'أضف إلى المفضلة';

  if (iconOnly) {
    return (
        <Button onClick={handleToggleWishlist} variant="outline" size={size || "icon"} aria-label={text} {...props}>
            <Heart className={`h-5 w-5 transition-colors ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
    )
  }

  return (
    <Button
      onClick={handleToggleWishlist}
      variant="outline"
      size={size || "lg"}
      className="w-full"
      {...props}
    >
      <Heart className={`me-2 h-5 w-5 transition-colors ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`} />
      {text}
    </Button>
  );
}
