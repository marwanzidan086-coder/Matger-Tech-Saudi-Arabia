'use client';

import { useOrder } from '@/contexts/OrderContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PackageSearch } from 'lucide-react';
import { useIsMounted } from '@/hooks/use-is-mounted';

export default function OrdersPage() {
  const { orders } = useOrder();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <div className="text-center py-10">جاري تحميل الطلبات...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center">
        طلباتي
      </h1>
      {orders.length === 0 ? (
        <div className="text-center py-10">
          <PackageSearch className="mx-auto h-24 w-24 text-muted-foreground" />
          <p className="mt-4 text-lg text-muted-foreground">لا يوجد لديك طلبات سابقة.</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
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
                <Accordion type="single" collapsible>
                  <AccordionItem value="items">
                    <AccordionTrigger>عرض تفاصيل الطلب</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 mt-2">
                        {order.items.map((item) => (
                          <li key={item.id} className="flex justify-between">
                            <span>{item.name} x {item.quantity}</span>
                            <span>{(item.price * item.quantity).toFixed(2)} ج.م</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                  <span>الإجمالي</span>
                  <span>{order.total.toFixed(2)} ج.م</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
