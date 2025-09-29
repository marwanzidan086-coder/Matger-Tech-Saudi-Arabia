import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-56',
  name: 'منفاخ هواء كهربائي لاسلكي شفط و طرد',
  slug: 'denx-wireless-air-blower',
  description: `وظيفة شفط وطرد قوية لتنظيف فعال. مناسب للمنزل، المكتب والسيارة.###FEATURES###- بطارية ليثيوم 21 فولت.
- قوة 550 واط لتنظيف فعال.
- تصميم يدوي مريح وسهل الاستخدام.
- خامة بلاستيك متينة.###DETAILS###- الموديل: DX2532
- الماركة: DENX
- القوة: 550 واط
- نوع البطارية: ليثيوم 3C1300
- الجهد الكهربائي: 220-240 فولت
- التردد: 50/60 هرتز`,
  price: 249.99,
  category: 'electronics',
  warranty: 'عامين',
};

export default product;
