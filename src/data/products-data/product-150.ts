import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-150',
  name: 'عربة تخزين منزلقة من اربعة أدوار',
  slug: '4-tier-sliding-storage-cart',
  description: `عربة تخزين متحركة بأربع أدوار, تصميم نحيف يناسب الزوايا والمساحات الضيقة في المطبخ أو الحمام. مصنوعة من بلاستيك قوي ومقاومة للماء.###FEATURES###- توفر تخزين مرتب في المساحات الضيقة.
- أربع أدوار واسعة.
- عجلات لسهولة الحركة.
- مناسبة للمطبخ, الحمام, أو غرفة الأطفال.
- مقاومة للماء وسهلة التنظيف.###DETAILS###- الخامة: بلاستيك قوي
- الأبعاد: 103 × 54 × 13 سم
- عدد الأدوار: 4`,
  price: 90.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
