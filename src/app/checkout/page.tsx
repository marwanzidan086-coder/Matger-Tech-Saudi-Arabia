'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useOrder } from '@/contexts/OrderContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Loader2, Truck, ShoppingBag } from 'lucide-react';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { sendOrderViaWhatsApp } from '@/app/actions';
import { siteConfig } from '@/config/site';

const checkoutSchema = z.object({
  name: z.string().min(3, 'يجب أن يكون الاسم 3 أحرف على الأقل'),
  phone: z.string().regex(/^05\d{8}$/, 'رقم الجوال غير صالح. يجب أن يبدأ بـ 05 ويتكون من 10 أرقام'),
  phone2: z.string().regex(/^05\d{8}$/, 'رقم الجوال غير صالح. يجب أن يبدأ بـ 05 ويتكون من 10 أرقام').optional().or(z.literal('')),
  governorate: z.string().min(2, 'المنطقة مطلوبة'),
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
  
  const finalTotal = total + siteConfig.shippingCost;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema)
  });

  useEffect(() => {
    if (isMounted && cartItems.length === 0) {
      router.replace('/cart');
    }
  }, [isMounted, cartItems.length, router]);
  
  if (!isMounted || cartItems.length === 0) {
    return <div className="flex items-center justify-center min-h-[60vh]"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    const result = await sendOrderViaWhatsApp({
      ...data,
      cartItems,
      total: finalTotal,
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
      total: finalTotal,
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
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">
          إتمام الطلب
        </h1>
        <p className="text-muted-foreground mt-2">خطوة أخيرة لإرسال طلبك الرائع!</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-12">
        
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Truck className="h-6 w-6" />
                معلومات التوصيل
              </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="grid grid-cols-1 gap-y-4">
                <div>
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input id="name" {...register('name')} />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="phone">رقم الجوال الأساسي</Label>
                  <Input id="phone" {...register('phone')} dir="ltr" placeholder="05xxxxxxxx" />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="phone2">رقم جوال إضافي (اختياري)</Label>
                  <Input id="phone2" {...register('phone2')} dir="ltr" placeholder="05xxxxxxxx" />
                  {errors.phone2 && <p className="text-sm text-destructive mt-1">{errors.phone2.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="governorate">المنطقة</Label>
                  <Input id="governorate" {...register('governorate')} />
                  {errors.governorate && <p className="text-sm text-destructive mt-1">{errors.governorate.message}</p>}
                </div>
                 <div>
                  <Label htmlFor="city">المدينة</Label>
                  <Input id="city" {...register('city')} />
                  {errors.city && <p className="text-sm text-destructive mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <Label htmlFor="address">العنوان (الحي، الشارع، رقم المبنى)</Label>
                  <Input id="address" {...register('address')} />
                  {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
                </div>
                <div>
                  <Label htmlFor="notes">تفاصيل إضافية للطلب (اختياري)</Label>
                  <Input id="notes" {...register('notes')} />
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
                    'إرسال الطلب وتأكيده'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                  <ShoppingBag className="h-6 w-6" />
                  ملخص طلبك
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center gap-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden">
                       <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">الكمية: {item.quantity}</p>
                    </div>
                    <p className="font-mono text-sm">{(item.price * item.quantity).toFixed(2)} ر.س</p>
                  </div>
                ))}
              </div>
              <Separator />
               <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                    <p>إجمالي المنتجات</p>
                    <p className="font-mono">{total.toFixed(2)} ر.س</p>
                  </div>
                   <div className="flex justify-between">
                    <p>سعر الشحن</p>
                    <p className="font-mono">{siteConfig.shippingCost.toFixed(2)} ر.س</p>
                  </div>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <p>الإجمالي النهائي</p>
                <p className="font-mono">{finalTotal.toFixed(2)} ر.س</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
