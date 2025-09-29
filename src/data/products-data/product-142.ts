import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-142',
  name: 'قطاعة بطاطس يدوية',
  slug: 'manual-potato-cutter',
  description: `قطاعة بطاطس يدوية من الستانلس ستيل لتقطيع البطاطس والخضروات بسهولة. تأتي مع شفرتين لحجمين مختلفين وآمنة للاستخدام في غسالة الصحون.###FEATURES###- شفرات حادة تقطع البطاطس والخضار بسهولة.
- مقبض طويل ومريح.
- تعمل يدويًا بدون كهرباء.
- مصنوعة من ستانلس ستيل متين.
- تأتي مع شفرتين لحجمين مختلفين.###DETAILS###- الماركة: smart kitchen
- المادة: ستانلس ستيل
- تعليمات العناية: آمنة في غسالة الصحون`,
  price: 99.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
