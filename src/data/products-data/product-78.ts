import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-78',
  name: 'سبورة رسم للاطفال 10 بوصة',
  slug: '10-inch-kids-drawing-tablet',
  description: `سبورة رسم إلكترونية بشاشة LCD ملونة حجم 10 بوصة، مثالية لتعليم الأطفال الرسم والكتابة دون فوضى الورق والأقلام.###FEATURES###- زر مسح سريع يمسح المحتوى بضغطة واحدة.
- قابلة لإعادة الاستخدام أكثر من 100 ألف مرة.
- شاشة LCD ملونة 10 إنش، بدون إشعاع وآمنة للعين.
- تصميم خفيف وسهل الحمل.
- هدية مثالية للأطفال.###DETAILS###- الأبعاد: 6.3 × 0.39 × 9.45 إنش.
- شاشة LCD بحجم 10 إنش.
- الوزن: 5 أونصات.`,
  price: 69.99,
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
