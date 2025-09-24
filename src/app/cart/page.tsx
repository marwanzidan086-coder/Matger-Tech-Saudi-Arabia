'use client';

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useIsMounted } from '@/hooks/use-is-mounted';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, total } = useCart();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <div className="text-center py-10">جاري تحميل السلة...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center">
        سلة التسوق
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
          <p className="mt-4 text-lg text-muted-foreground">سلة التسوق فارغة.</p>
          <Button asChild className="mt-6">
            <Link href="/">العودة إلى المتجر</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>المنتجات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <div className="flex items-center gap-4">
                        <Image
                          src={(item.images && item.images.length > 0) ? item.images[0] : 'https://placehold.co/80x80/EEE/31343C?text=?'}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                          data-ai-hint="product image"
                        />
                        <div className="flex-grow">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.price.toFixed(2)} ر.س</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="w-16 text-center"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            aria-label="إزالة المنتج"
                          >
                            <Trash2 className="h-5 w-5 text-destructive" />
                          </Button>
                        </div>
                      </div>
                      <Separator className="my-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>ملخص الطلب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>الإجمالي الفرعي</span>
                  <span>{total.toFixed(2)} ر.س</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>الإجمالي</span>
                  <span>{total.toFixed(2)} ر.س</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" size="lg">
                  <Link href="/checkout">المتابعة للدفع</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
