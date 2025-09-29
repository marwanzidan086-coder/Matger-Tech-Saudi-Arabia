import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-94',
  name: 'ماكينة تلميع السيارات',
  slug: 'car-polishing-machine',
  description: `ماكينة تلميع سيارات لاسلكية وخفيفة الوزن، مع 8 سرعات متغيرة ومجموعة ملحقات متكاملة لتلميع السيارات والخشب وإزالة الصدأ.###FEATURES###- خفيفة وسهلة الحمل، تعمل بالبطارية.
- محرك نحاسي 380 واط.
- نظام تلميع اهتزازي يحافظ على الطلاء.
- 8 سرعات قابلة للتعديل.
- نظام تبريد بالهواء.###DETAILS###- الماركة: جينيريك
- عدد القطع: 19 قطعة
- البطارية: 1300mAh
- السرعة: 2800-5500 دورة بالدقيقة`,
  price: 329.99,
  category: 'electronics',
  warranty: '14 يوم',
};

export default product;
