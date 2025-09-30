import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-155',
  name: 'مجموعة صنع العصائر من دينكس',
  slug: 'denx-juice-maker-set',
  description: `مجموعة متكاملة من دينكس لصنع العصائر والسموذي. تعمل كخلاط وعصارة وطاحونة بقوة 400 واط. تأتي مع شفرات ستانلس ستيل وأكواب متعددة.###FEATURES###- قوة 400 واط لعصر سريع.
- شفرات ستانلس ستيل حادة.
- 3 في 1: خلاط, عصارة, طاحونة.
- حماية من الحرارة الزائدة.
- سهلة الفك والتركيب والتنظيف.###DETAILS###- الماركة: دينيكس
- القدرة: 400 واط
- الجهد: 220-240 فولت
- الخامة: ABS + PC + ستانلس ستيل`,
  price: 170.00,
  category: 'home',
  warranty: 'عامين',
};

export default product;
