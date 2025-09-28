import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-43',
  name: 'budi power bank 20000',
  slug: 'budi-power-bank-20000',
  description: `طاقة إضافية في جيبك! باور بانك Budi بسعة 20,000 مللي أمبير وشحن سريع هو الحل الموثوق للحفاظ على أجهزتك مشحونة طوال اليوم. صغير، أنيق، وقوي.###FEATURES###- سعة بطارية كبيرة 20,000mAh.
- يدعم الشحن السريع.
- منفذين USB لشحن جهازين في نفس الوقت.
- تصميم صغير وسهل الحمل.
- متوافق مع أغلب الجوالات والأجهزة.###DETAILS###- الماركة: budi
- الضمان: عامين
- السعة: 20,000 مللي أمبير
- عدد المنافذ: 2 منفذ USB
- يدعم الشحن السريع`,
  price: 129.99,
  category: 'electronics',
  warranty: 'عامين',
};

export default product;
