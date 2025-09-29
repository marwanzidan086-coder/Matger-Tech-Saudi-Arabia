import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-129',
  name: 'قطاعة خضروات يدوية',
  slug: 'manual-vegetable-slicer',
  description: `أداة مطبخ متعددة الاستخدامات لتقطيع الخضار بأشكال حلزونية مختلفة. تأتي مع 7 شفرات متنوعة وحاوية للتخزين. آمنة وسهلة التنظيف.###FEATURES###- تقطع الخضار بأشكال حلزونية.
- 7 شفرات لأشكال تقطيع مختلفة.
- قاعدة شفط للتثبيت.
- آمنة للغسل في غسالة الصحون.
- خالية من BPA.###DETAILS###- الماركة: جينريك
- المادة: بلاستيك + ستانلس ستيل
- الوزن: 1.5 كجم`,
  price: 85.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
