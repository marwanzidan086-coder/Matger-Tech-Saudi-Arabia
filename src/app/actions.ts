'use server';

import { z } from 'zod';
import { siteConfig } from '@/config/site';

const orderSchema = z.object({
  name: z.string().min(1, 'الاسم مطلوب'),
  address: z.string().min(1, 'العنوان مطلوب'),
  notes: z.string().optional(),
  cartItems: z.array(z.any()),
  total: z.number(),
});

function generateOrderNumber() {
  return `MATG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

function buildOrderMessage(
  orderData: z.infer<typeof orderSchema> & { orderNumber: string; orderDate: string }
) {
  const productLines = orderData.cartItems
    .map(
      (item) =>
        `- ${item.name} (الكمية: ${item.quantity}) - السعر: ${item.price.toFixed(2)} د.م`
    )
    .join('\n');

  return `
طلب جديد من *${siteConfig.name}*

*رقم الطلب:* ${orderData.orderNumber}
*تاريخ الطلب:* ${orderData.orderDate}

*بيانات العميل:*
*الاسم:* ${orderData.name}
*العنوان:* ${orderData.address}
*ملاحظات:* ${orderData.notes || 'لا يوجد'}

*المنتجات:*
${productLines}

*الإجمالي:* ${orderData.total.toFixed(2)} د.م
  `.trim();
}

export async function sendOrderViaWhatsApp(data: z.infer<typeof orderSchema>) {
  const validation = orderSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, message: 'بيانات غير صالحة.' };
  }

  const { name, address, notes, cartItems, total } = validation.data;

  const orderNumber = generateOrderNumber();
  const orderDate = new Date().toLocaleDateString('en-CA');

  const messageBody = buildOrderMessage({
    ...validation.data,
    orderNumber,
    orderDate,
  });

  const SID = process.env.TWILIO_ACCOUNT_SID || process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
  const TOKEN = process.env.TWILIO_AUTH_TOKEN || process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
  const FROM = process.env.TWILIO_PHONE_NUMBER || process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER;

  if (!SID || !TOKEN || !FROM) {
    return { success: false, message: 'بيانات اعتماد Twilio غير مكتملة.' };
  }
  
  const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${SID}/Messages.json`;

  try {
    for (const to of siteConfig.whatsappNumbers) {
      const form = new URLSearchParams();
      form.append('To', `whatsapp:${to}`);
      form.append('From', `whatsapp:${FROM}`);
      form.append('Body', messageBody);
      
      const response = await fetch(twilioUrl, {
        method: 'POST',
        body: form,
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${SID}:${TOKEN}`).toString('base64'),
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Twilio Error:', errorData);

        if (errorData.code === 21211) {
             return { success: false, message: 'رقم Twilio غير صالح.' };
        }
        if (errorData.code === 63018) {
            return { success: false, message: 'فشل إرسال رسالة Sandbox. يرجى التأكد من تفعيل Sandbox لرقم المتجر.' };
        }
        throw new Error(`Twilio API Error: ${errorData.message}`);
      }
    }

    return { success: true, orderNumber, orderDate };
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error).message;
    if (errorMessage.includes('Authenticate')) {
      return { success: false, message: 'فشل المصادقة: تحقق من بيانات Twilio (SID / AUTH TOKEN).' };
    }
    return { success: false, message: 'حدث خطأ أثناء إرسال الرسالة عبر واتساب.' };
  }
}
