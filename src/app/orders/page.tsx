'use client';

import { useOrder } from '@/contexts/OrderContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PackageSearch, Trash2, Clock } from 'lucide-react';
import { useIsMounted } from '@/hooks/use-is-mounted';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const getSmartStatus = (createdAt: number): string => {
    const orderHour = new Date(createdAt).getHours();
    // Check if order time is between 10 AM (10) and 4 PM (16)
    if (orderHour >= 10 && orderHour < 16) {
        return "سيتم التواصل معك اليوم وسيتم شحن الاوردر غدا";
    } else {
        return "سيتم التواصل معك خلال 24 ساعه القادمه وسيتم شحن الاوردر بعد تاكيد الطلب مباشره";
    }
}


export default function OrdersPage() {
  const { orders, clearOrders } = useOrder();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <div className="text-center py-10">جاري تحميل الطلبات...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">
          طلباتي
        </h1>
      </div>
      {orders.length === 0 ? (
        <div className="text-center py-10">
          <PackageSearch className="mx-auto h-24 w-24 text-muted-foreground" />
          <p className="mt-4 text-lg text-muted-foreground">لا يوجد لديك طلبات سابقة.</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-start mb-6">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="gap-2">
                    <Trash2 className="h-4 w-4" />
                    مسح كل الطلبات
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>هل أنت متأكد؟</AlertDialogTitle>
                    <AlertDialogDescription>
                      سيتم حذف جميع طلباتك بشكل نهائي. لا يمكن التراجع عن هذا الإجراء.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>إلغاء</AlertDialogCancel>
                    <AlertDialogAction onClick={clearOrders}>
                      تأكيد الحذف
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
          </div>

          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-mono">{order.id}</CardTitle>
                    <CardDescription>{new Date(order.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                  </div>
                  <Badge>{order.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {order.status === 'قيد المراجعة' && (
                    <div className="mb-4 p-3 rounded-md bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-3">
                        <Clock className="h-5 w-5" />
                        <p className="text-sm font-medium">{getSmartStatus(order.createdAt)}</p>
                    </div>
                )}
                <Accordion type="single" collapsible>
                  <AccordionItem value="items">
                    <AccordionTrigger>عرض تفاصيل الطلب</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-2">
                        {order.items.map((item) => (
                          <li key={item.id} className="flex justify-between">
                            <span>{item.name} x {item.quantity}</span>
                            <span>{(item.price * item.quantity).toFixed(2)} ر.س</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                  <span>الإجمالي</span>
                  <span>{order.total.toFixed(2)} ر.س</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
