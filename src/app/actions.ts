
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

function buildOrderMessage(data: z.infer<typeof orderSchema>) {
    const {
        name,
        phone,
        phone2,
        governorate,
        city,
        address,
        notes,
        cartItems,
        total,
        shippingCost,
    } = data;
    
    const orderNumber = `MATG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const orderDate = new Date().toLocaleDateString('en-CA');
    const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const productLines = cartItems
      .map(
        (item) =>
          `- ${item.name} (الكمية: ${item.quantity}) - السعر: ${item.price.toFixed(2)}`
      )
      .join('\n');
    const fullAddress = `${address}, ${city}, ${governorate}`;
  
    const messageBody = `
طلب جديد من *${siteConfig.name}*

*رقم الطلب:* ${orderNumber}
*تاريخ الطلب:* ${orderDate}

*بيانات العميل:*
*الاسم:* ${name}
*الجوال الأساسي:* ${phone}
*جوال إضافي:* ${phone2 || 'لا يوجد'}
*العنوان:* ${fullAddress}
*تفاصيل إضافية:* ${notes || 'لا يوجد'}

*المنتجات:*
${productLines}

*إجمالي المنتجات:* ${subTotal.toFixed(2)}
*سعر الشحن:* ${shippingCost.toFixed(2)}
--------------------
*الإجمالي النهائي:* ${total.toFixed(2)}
    `.trim();

    return { messageBody, orderNumber, orderDate };
}


export async function sendOrderViaWhatsApp(data: z.infer<typeof orderSchema>) {
  const validation = orderSchema.safeParse(data);

  if (!validation.success) {
    console.error("Validation errors:", validation.error.issues);
    return { success: false, message: 'بيانات الطلب غير صالحة أو ناقصة.' };
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !twilioPhoneNumber || !accountSid.startsWith('AC')) {
    console.error('Twilio credentials are not configured correctly in .env file.');
    return { success: false, message: 'خدمة إرسال الطلبات غير مهيأة. يرجى مراجعة صاحب المتجر لتكوين الإعدادات.' };
  }

  const { messageBody, orderNumber, orderDate } = buildOrderMessage(validation.data);
  const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

  try {
    for (const toNumber of siteConfig.whatsappNumbers) {
      const body = new URLSearchParams();
      // Format `To` and `From` numbers exactly as Twilio expects for WhatsApp
      body.append('To', `whatsapp:${toNumber.startsWith('+') ? toNumber : `+${toNumber}`}`);
      body.append('From', `whatsapp:${twilioPhoneNumber.startsWith('+') ? twilioPhoneNumber : `+${twilioPhoneNumber}`}`);
      body.append('Body', messageBody);

      const response = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Twilio API Error:', responseData);
        let userMessage = `خطأ من Twilio: ${responseData.message || 'حدث خطأ غير معروف.'}`;
        if (responseData.code === 21211) {
            userMessage = "رقم Twilio الذي تحاول الإرسال منه غير صالح أو غير مهيأ. تحقق من الرقم في ملف .env أو في حساب Twilio.";
        } else if (responseData.code === 21614) {
            userMessage = 'رقم المستلم غير صحيح أو غير مسجل في واتساب. تأكد من صحة الرقم في ملف siteConfig.';
        } else if (responseData.code === 63018) {
            userMessage = 'فشل إرسال رسالة Sandbox. يرجى التأكد من تفعيل Sandbox لرقم المتجر والانضمام إليه من رقمك الشخصي بإرسال كلمة الانضمام المخصصة.';
        } else if (response.status === 401) {
            userMessage = 'فشل المصادقة: تحقق من بيانات Twilio (SID / AUTH TOKEN) في ملف .env.';
        }
        return { success: false, message: userMessage };
      }
    }

    return { success: true, orderNumber, orderDate };

  } catch (err: any) {
    console.error('Fetch Error:', err);
    return { success: false, message: `حدث خطأ أثناء محاولة الاتصال بـ Twilio: ${err.message}` };
  }
}
