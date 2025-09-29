import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-137',
  name: 'مزيل الوبر متعدد الأستخدام',
  slug: 'multi-use-lint-remover',
  description: `جهاز كهربائي قابل للشحن لإزالة الوبر والزغب من الملابس والأثاث. يتميز برأس من الستانلس ستيل وخزان شفاف سهل التنظيف.###FEATURES###- محرك قوي وشفط سريع.
- رأس ستانلس ستيل يغطي مساحة كبيرة.
- قابل للشحن ويعمل لمدة 40-50 دقيقة.
- خزان شفاف لجمع الوبر.
- تصميم حماية مزدوج يحافظ على القماش.###DETAILS###- المادة: ستانلس ستيل + بلاستيك
- الشحن: كابل USB`,
  price: 65.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
