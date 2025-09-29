import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-104',
  name: 'خاتم تسبيح إلكتروني',
  slug: 'electronic-tasbeeh-ring',
  description: `خاتم تسبيح ذكي يتصل بالهاتف عبر البلوتوث لتتبع عدد التسبيحات وتذكيرك بأوقات الصلاة.###FEATURES###- يعمل مع تطبيق خاص.
- بلوتوث مدمج للتذكير بـ 5 أوقات للصلاة.
- زر مدمج لتتبع عدد التسبيحات.
- شاشة OLED لعرض الوقت والتسبيحات.
- بطارية تدوم 3 أيام.
- شحن سهل عبر USB.###DETAILS###- الماركة: جينيريك
- المقاس: 17
- البطارية: تدوم 3 أيام
- الشاشة: OLED 0.47 بوصة`,
  price: 119.99,
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
