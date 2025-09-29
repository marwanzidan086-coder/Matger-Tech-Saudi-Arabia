import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-139',
  name: 'طقم غلاية على قاعدة مع ابريق شاي هدية',
  slug: 'kettle-and-teapot-set',
  description: `طقم شاي متكامل من DENX يتكون من غلاية كهربائية 2 لتر وإبريق شاي زجاجي 0.8 لتر على قاعدة تسخين مزدوجة. مثالي للاستخدام العائلي والضيوف.###FEATURES###- غلاية كهربائية سعة 2 لتر.
- إبريق شاي زجاجي 0.8 لتر مع مصفاة.
- قاعدة تسخين مزدوجة.
- زر تشغيل وإيقاف بلمسة واحدة.
- وظيفة الحفاظ على الشاي دافئًا.###DETAILS###- الماركة: DENX
- الموديل: DX1788
- القوة: 1800 واط
- السعة: 2 لتر (غلاية) + 0.8 لتر (إبريق)`,
  price: 150.00,
  category: 'home',
  warranty: 'عامين',
};

export default product;
