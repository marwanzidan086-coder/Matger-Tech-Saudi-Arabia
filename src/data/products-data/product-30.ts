import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-30',
  name: 'كافر جوال وباوربنك لحماية أيفون 13 pro max',
  slug: 'iphone-13-pro-max-power-bank-case',
  description: `لا تشيل هم البطارية أو حماية جوالك بعد اليوم! هذا الكفر المبتكر يجمع بين الحماية القوية والباور بانك المدمج، ليمنح جهازك الآيفون 13 Pro Max عمرًا أطول ومظهرًا أنيقًا.###FEATURES###- بطارية مدمجة بسعة 6800mAh.
- تصميم نحيف وأنيق وخفيف الوزن.
- يشحن الجهاز لاسلكيًا بلمسة واحدة.
- يحمي الجوال من الصدمات والخدوش.
- شاشة LED لعرض مستوى الشحن.###DETAILS###- السعة: 6800mAh
- متوافق مع: iPhone 13 Pro Max (6.7 انش)
- الخامة: ABS + TPU
- نوع البطارية: ليثيوم بوليمر`,
  price: 169.99,
  category: 'electronics',
};

export default product;
