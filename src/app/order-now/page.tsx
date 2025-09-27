'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { Loader2, Truck, ShoppingBag } from 'lucide-react';
import { sendOrderViaWhatsApp } from '@/app/actions';
import { useOrder } from '@/contexts/OrderContext';
import { type CartItem, type Product } from '@/lib/types';
import Link from 'next/link';
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

function OrderNowContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addOrder } = useOrder();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const price = searchParams.get('price');
    const images = searchParams.get('images');
    const slug = searchParams.get('slug');
    const description = searchParams.get('description');
    const category = searchParams.get('category');

    if (id && name && price && images && slug && description && category) {
      setProduct({
        id,
        name,
        price: parseFloat(price), // FIX: Ensure price is a number
        images: JSON.parse(images),
        slug,
        description,
        category
      });
    } else {
      // If product data is missing, redirect to home
      router.replace('/');
    }
  }, [searchParams, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  if (!product) {
    return <div className="flex items-center justify-center min-h-[60vh]"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  const singleCartItem: CartItem = { ...product, quantity: 1 };
  const subTotal = product.price;
  const finalTotal = subTotal + siteConfig.shippingCost;

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    const result = await sendOrderViaWhatsApp({
      ...data,
      cartItems: [singleCartItem],
      total: finalTotal,
      shippingCost: siteConfig.shippingCost,
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

    const { orderNumber, orderDate } = result;

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
      items: [singleCartItem],
      total: finalTotal,
      status: 'قيد المراجعة',
    });

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
          اطلب الآن
        </h1>
        <p className="text-muted-foreground mt-2">منتج رائع على وشك أن يكون لك!</p>
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
                  <Input id="phone2" {...register('phone2')} dir="ltr" placeholder="05xxxxxxxx"/>
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
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> جاري الإرسال...</>
                  ) : ( 'إرسال الطلب وتأكيده' )}
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
              <div className="flex justify-between items-center gap-4">
                <div className="relative w-16 h-16 rounded-md overflow-hidden">
                    <Image src={(product.images && product.images.length > 0) ? product.images[0] : 'https://placehold.co/80x80/EEE/31343C?text=?'} alt={product.name} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-muted-foreground">
                     <Link href={`/products/${product.slug}`} className="hover:underline">
                        تغيير المنتج
                     </Link>
                  </p>
                </div>
                <p className="font-mono text-sm">{subTotal.toFixed(2)} ر.س</p>
              </div>
              <Separator />
               <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                    <p>إجمالي المنتج</p>
                    <p className="font-mono">{subTotal.toFixed(2)} ر.س</p>
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


export default function OrderNowPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
      <OrderNowContent />
    </Suspense>
  )
}
