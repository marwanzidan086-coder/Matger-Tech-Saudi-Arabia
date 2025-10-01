'use server';

import { z } from 'zod';
import { siteConfig } from '@/config/site';

const orderSchema = z.object({
  name: z.string().min(1, 'الاسم مطلوب'),
  phone: z.string().min(1, 'رقم الهاتف مطلوب'),
  phone2: z.string().optional(),
  governorate: z.string().min(1, 'المنطقة مطلوبة'),
  city: z.string().min(1, 'المدينة مطلوبة'),
  address: z.string().min(1, 'العنوان مطلوب'),
  notes: z.string().optional(),
  cartItems: z.array(z.any()),
  total: z.number(),
  shippingCost: z.number(),
});

function generateOrderNumber() {
  return `MATG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

function buildOrderMessage(
  orderData: z.infer<typeof orderSchema> & { orderNumber: string; orderDate: string }
) {
  const subTotal = orderData.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const productLines = orderData.cartItems
    .map(
      (item) =>
        `- ${item.name} (الكمية: ${item.quantity}) - السعر: ${item.price.toFixed(2)}`
    )
    .join('\n');

  const fullAddress = `${orderData.address}, ${orderData.city}, ${orderData.governorate}`;

  return `
طلب جديد من *${siteConfig.name}*

*رقم الطلب:* ${orderData.orderNumber}
*تاريخ الطلب:* ${orderData.orderDate}

*بيانات العميل:*
*الاسم:* ${orderData.name}
*الجوال الأساسي:* ${orderData.phone}
*جوال إضافي:* ${orderData.phone2 || 'لا يوجد'}
*العنوان:* ${fullAddress}
*تفاصيل إضافية:* ${orderData.notes || 'لا يوجد'}

*المنتجات:*
${productLines}

*إجمالي المنتجات:* ${subTotal.toFixed(2)}
*سعر الشحن:* ${orderData.shippingCost.toFixed(2)}
--------------------
*الإجمالي النهائي:* ${orderData.total.toFixed(2)}
  `.trim();
}

export async function sendOrderViaWhatsApp(data: z.infer<typeof orderSchema>) {
  const validation = orderSchema.safeParse(data);

  if (!validation.success) {
    console.error("Validation errors:", validation.error.issues);
    return { success: false, message: 'بيانات الطلب غير صالحة أو ناقصة.' };
  }

  const SID = process.env.TWILIO_ACCOUNT_SID;
  const TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const FROM = process.env.TWILIO_PHONE_NUMBER;

  if (!SID || !TOKEN || !FROM || SID.startsWith('ACxxx')) {
    console.error('Twilio credentials are not configured correctly in .env file.');
    return { success: false, message: 'خدمة إرسال الطلبات غير مهيأة. يرجى مراجعة صاحب المتجر لتكوين الإعدادات.' };
  }
  
  const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${SID}/Messages.json`;

  try {
    const orderNumber = generateOrderNumber();
    const orderDate = new Date().toLocaleDateString('en-CA');
    const messageBody = buildOrderMessage({
        ...validation.data,
        orderNumber,
        orderDate,
    });

    for (const to of siteConfig.whatsappNumbers) {
      // Ensure numbers are in the correct E.164 format: whatsapp:+[number]
      const formattedTo = `whatsapp:${to.startsWith('+') ? to : `+${to}`}`;
      const formattedFrom = `whatsapp:${FROM.startsWith('+') ? FROM : `+${FROM}`}`;
      
      const requestBody = {
        To: formattedTo,
        From: formattedFrom,
        Body: messageBody
      };

      const response = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${SID}:${TOKEN}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(requestBody)
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Twilio API Error:', responseData);
        let userMessage = `خطأ من Twilio: ${responseData.message}`;

        if (responseData.code === 21211) { 
             userMessage = 'رقم Twilio الذي تحاول الإرسال منه غير صالح أو غير مهيأ. تحقق من الرقم في ملف .env أو في حساب Twilio.';
        } else if (responseData.code === 21614) {
            userMessage = 'رقم المستلم غير صحيح أو غير مسجل في واتساب. تأكد من صحة الرقم في ملف siteConfig.';
        } else if (responseData.code === 63018) {
            userMessage = 'فشل إرسال رسالة Sandbox. يرجى التأكد من تفعيل Sandbox لرقم المتجر والانضمام إليه من رقمك الشخصي بإرسال كلمة الانضمام المخصصة.';
        } else if (responseData.status === 401) {
            userMessage = 'فشل المصادقة: تحقق من بيانات Twilio (SID / AUTH TOKEN) في ملف .env.';
        }

        return { success: false, message: userMessage };
      }
    }

    return { success: true, orderNumber, orderDate };
  } catch (err) {
    console.error('Unexpected error in sendOrderViaWhatsApp:', err);
    const errorMessage = (err as Error).message;
    return { success: false, message: `حدث خطأ غير متوقع أثناء إرسال الطلب: ${errorMessage}` };
  }
}
