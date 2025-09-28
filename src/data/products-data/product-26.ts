import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-26',
  name: 'ساعة سمارت Ultra T8',
  slug: 'smart-watch-ultra-t8',
  description: `كن دائمًا مميزًا مع ساعة سمارت Ultra T8! بتصميمها العصري وشاشتها الكبيرة عالية الدقة، يمكنك التحكم في جوالك، متابعة صحتك، واستقبال إشعاراتك بكل أناقة وسهولة.###FEATURES###- شاشة كبيرة 1.96 بوصة عالية الدقة.
- أزرار من الجهتين بتصميم عصري.
- استقبال جميع الإشعارات والمكالمات.
- قياس نبضات القلب، أكسجين الدم، وضغط الدم.
- تدعم الشحن اللاسلكي.###DETAILS###- الأبعاد: 49*44*12 سم
- الشاشة: 1.96 inch HD screen
- البلوتوث: BT 3.5 / 5.0
- البطارية: 320 مللي أمبير`,
  price: 199.99,
  category: 'health',
};

export default product;
