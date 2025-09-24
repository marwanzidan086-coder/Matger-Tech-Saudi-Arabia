'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCart } from '@/contexts/CartContext';
import { useOrder } from '@/contexts/OrderContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { sendOrderViaWhatsApp } from '@/app/actions';

const checkoutSchema = z.object({
  name: z.string().min(3, 'يجب أن يكون الاسم 3 أحرف على الأقل'),
  phone: z.string().regex(/^(\+9665|05)\d{8}$/, 'رقم الجوال غير صالح. يجب أن يبدأ بـ 05 أو +9665'),
  phone2: z.string().optional(),
  region: z.string().min(2, 'المنطقة مطلوبة'),
  city: z.string().min(2, 'المدينة مطلوبة'),
  address: z.string().min(10, 'يجب أن يكون العنوان 10 أحرف على الأقل'),
  notes: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

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
    defaultValues: {
      phone: '+966'
    }
  });

  useEffect(() => {
    if (isMounted && cartItems.length === 0) {
      router.replace('/cart');
    }
  }, [isMounted, cartItems, router]);
  
  if (!isMounted || cartItems.length === 0) {
    return <div className="text-center py-10">جاري التحميل...</div>;
  }

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    const result = await sendOrderViaWhatsApp({
      ...data,
      governorate: data.region, // Map region to governorate for the action
      cartItems,
      total,
    });

    if (!result.success) {
      toast({
        title: 'خطأ في إرسال الطلب',
        description: result.message,
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    const orderNumber = result.orderNumber;
    const orderDate = result.orderDate;

    if (!orderNumber || !orderDate) {
        toast({
            title: 'خطأ',
            description: 'لم يتم إنشاء رقم الطلب بشكل صحيح.',
            variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
    }

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
                  <Label htmlFor="phone">رقم الجوال الأساسي</Label>
                  <Input id="phone" {...register('phone')} dir="ltr" />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="phone2">رقم جوال إضافي (اختياري)</Label>
                  <Input id="phone2" {...register('phone2')} dir="ltr" />
                  {errors.phone2 && <p className="text-sm text-destructive mt-1">{errors.phone2.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="region">المنطقة</Label>
                  <Input id="region" {...register('region')} />
                  {errors.region && <p className="text-sm text-destructive mt-1">{errors.region.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="city">المدينة</Label>
                  <Input id="city" {...register('city')} />
                  {errors.city && <p className="text-sm text-destructive mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <Label htmlFor="address">العنوان (الحي، الشارع، رقم المبنى)</Label>
                  <Textarea id="address" {...register('address')} />
                  {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
                </div>
                <div>
                  <Label htmlFor="notes">تفاصيل إضافية للطلب (اختياري)</Label>
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
                  <p className="font-mono">{(item.price * item.quantity).toFixed(2)} ج.م</p>
                </div>
              ))}
              <div className="border-t border-border my-4"></div>
              <div className="flex justify-between font-bold text-xl">
                <p>الإجمالي</p>
                <p className="font-mono">{total.toFixed(2)} ج.م</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
