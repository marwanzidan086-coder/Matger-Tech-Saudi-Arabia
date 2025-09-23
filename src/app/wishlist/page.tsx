'use client';

import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useToast } from '@/hooks/use-toast';

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const isMounted = useIsMounted();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast({
      title: 'تمت إضافة المنتج إلى السلة',
      variant: 'success'
    });
  };

  if (!isMounted) {
    return <div className="text-center py-10">جاري تحميل المفضلة...</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center">
        قائمة المفضلة
      </h1>
      {wishlistItems.length === 0 ? (
        <div className="text-center py-10">
          <Heart className="mx-auto h-24 w-24 text-muted-foreground" />
          <p className="mt-4 text-lg text-muted-foreground">قائمة المفضلة فارغة.</p>
          <Button asChild className="mt-6">
            <Link href="/">تصفح المنتجات</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm flex flex-col">
              <Link href={`/products/${item.slug}`} className="block">
                <div className="relative w-full aspect-square bg-card">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    data-ai-hint="product image"
                  />
                </div>
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg flex-grow">
                  <Link href={`/products/${item.slug}`}>{item.name}</Link>
                </h3>
                <p className="text-primary font-semibold my-2">{item.price.toFixed(2)} ج.م</p>
                <div className="flex gap-2 mt-auto">
                    <Button onClick={() => handleAddToCart(item)} className="w-full">
                        <ShoppingCart className="me-2 h-4 w-4" />
                        أضف للسلة
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => removeFromWishlist(item.id)}>
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
