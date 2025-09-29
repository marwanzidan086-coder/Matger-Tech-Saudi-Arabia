import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-138',
  name: 'موقد غاز 5 عين للتخييم',
  slug: '5-burner-camping-gas-stove',
  description: `موقد غاز قوي ومحمول من DLC بخمس شعلات وقدرة 18500 واط. مثالي للرحلات والمطابخ. يتميز بإشعال إلكتروني وتصميم قابل للطي مع حقيبة حمل.###FEATURES###- 5 شعلات للتحكم الدقيق.
- قدرة 18500 واط لتسخين فوري.
- إشعال إلكتروني سريع وآمن.
- تصميم قابل للطي لسهولة التخزين.
- يأتي مع خرطوم غاز وحقيبة حماية.###DETAILS###- الماركة: dlc
- القدرة: 18500 واط
- عدد الشعلات: 5
- الإشعال: إلكتروني`,
  price: 199.00,
  category: 'home',
  warranty: 'عامين',
};

export default product;
