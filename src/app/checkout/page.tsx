'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCart } from '@/contexts/CartContext';
import { useOrder } from '@/contexts/OrderContext';
import { sendOrderViaWhatsApp } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useIsMounted } from '@/hooks/use-is-mounted';

const checkoutSchema = z.object({
  name: z.string().min(3, 'يجب أن يكون الاسم 3 أحرف على الأقل'),
  address: z.string().min(10, 'يجب أن يكون العنوان 10 أحرف على الأقل'),
  notes: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

function generateOrderNumber() {
  return `MATG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCart();
  const { addOrder } = useOrder();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMounted = useIsMounted();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });
  
  if (!isMounted || cartItems.length === 0) {
    if (isMounted && cartItems.length === 0) {
        router.replace('/cart');
    }
    return <div className="text-center py-10">جاري التحميل...</div>;
  }

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    // NOTE: Temporarily disable WhatsApp sending to avoid fetch errors
    // You can re-enable this when Twilio credentials are set up.
    const orderNumber = generateOrderNumber();
    const orderDate = new Date().toLocaleDateString('en-CA');

    addOrder({
      id: orderNumber,
      date: orderDate,
      items: cartItems,
      total,
      status: 'قيد المراجعة',
    });
    clearCart();
    toast({
      title: 'تم إرسال طلبك بنجاح!',
      description: `رقم طلبك هو: ${orderNumber}`,
      variant: 'success',
    });
    router.push('/orders');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center">
        الدفع
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>معلومات التوصيل</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input id="name" {...register('name')} />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="address">العنوان الكامل</Label>
                  <Textarea id="address" {...register('address')} />
                  {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
                </div>
                <div>
                  <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
                  <Textarea id="notes" {...register('notes')} />
                </div>
              </CardContent>
              <CardFooter>
                 <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    'إرسال الطلب'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>ملخص طلبك</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">الكمية: {item.quantity}</p>
                  </div>
                  <p className="font-mono">{(item.price * item.quantity).toFixed(2)} د.م</p>
                </div>
              ))}
              <div className="border-t border-border my-4"></div>
              <div className="flex justify-between font-bold text-xl">
                <p>الإجمالي</p>
                <p className="font-mono">{total.toFixed(2)} د.م</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
