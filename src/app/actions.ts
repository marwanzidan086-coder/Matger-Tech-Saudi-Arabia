
'use server';

import { z } from 'zod';
import { siteConfig } from '@/config/site';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { Review } from '@/lib/types';


// --- Order Actions ---

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
  
    // **CRITICAL CHANGE FOR TWILIO SANDBOX**
    // The Sandbox only allows pre-approved template messages. We will use a simple one.
    // To use a full Twilio account and custom messages, this body should be changed.
    const messageBody = `Your order ${orderNumber} has been received.`;

    /*
    const originalMessageBody = `
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
    */

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

  if (!accountSid || !authToken || !twilioPhoneNumber) {
    let missingVars = [];
    if (!accountSid) missingVars.push('TWILIO_ACCOUNT_SID');
    if (!authToken) missingVars.push('TWILIO_AUTH_TOKEN');
    if (!twilioPhoneNumber) missingVars.push('TWILIO_PHONE_NUMBER');
    console.error('Twilio credentials are not configured correctly in .env file.');
    return { success: false, message: `متغيرات البيئة التالية مفقودة في إعدادات Vercel: ${missingVars.join(', ')}` };
  }
  
  if (!accountSid.startsWith('AC')) {
    return { success: false, message: 'خطأ في إعدادات Twilio: يبدو أن "TWILIO_ACCOUNT_SID" غير صحيح. يرجى التحقق منه في Vercel.' };
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

        if (responseData.code === 20003) { // Authentication Error
             userMessage = 'فشل المصادقة: تحقق من قيم TWILIO_ACCOUNT_SID و TWILIO_AUTH_TOKEN في إعدادات Vercel.';
        } else if (responseData.code === 21211) { // Invalid 'From' number
            userMessage = `خطأ في قناة الإرسال: تأكد من أن رقم Twilio (${twilioPhoneNumber}) مهيأ لإرسال رسائل واتساب. إذا كنت تستخدم Sandbox، تأكد من إتمام خطوات الربط.`;
        } else if (responseData.code === 21614) { // 'To' number is not a valid WhatsApp user
            userMessage = `رقم المستلم (${toNumber}) غير صحيح أو غير مسجل في واتساب. تأكد من صحة الرقم في ملف siteConfig.ts.`;
        } else if (responseData.code === 63018) { // Sandbox message failure
            userMessage = 'فشل إرسال رسالة Sandbox. يرجى التأكد من تفعيل Sandbox لرقم المتجر والانضمام إليه من رقمك الشخصي بإرسال كلمة الانضمام المخصصة.';
        } else if (responseData.message && responseData.message.includes('find a Channel with the specified From address')) {
            userMessage = `خطأ في قناة الإرسال: تأكد من أن رقم Twilio (${twilioPhoneNumber}) مهيأ لإرسال رسائل واتساب. إذا كنت تستخدم Sandbox، تأكد من إتمام خطوات الربط.`;
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


// --- Review Actions ---

const reviewSchema = z.object({
  productId: z.string().min(1),
  author: z.string().min(2, 'الاسم مطلوب'),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, 'يجب أن يحتوي التعليق على 10 أحرف على الأقل'),
});

export async function addReview(data: Omit<Review, 'id' | 'createdAt'> & { productId: string }) {
  const validation = reviewSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, message: 'بيانات المراجعة غير صالحة.' };
  }
  try {
    const { productId, ...reviewData } = validation.data;
    const docRef = await addDoc(collection(db, 'products', productId, 'reviews'), {
      ...reviewData,
      createdAt: serverTimestamp(),
    });
    return { success: true, reviewId: docRef.id };
  } catch (error) {
    console.error('Error adding review to Firestore: ', error);
    return { success: false, message: 'حدث خطأ أثناء إضافة المراجعة.' };
  }
}
