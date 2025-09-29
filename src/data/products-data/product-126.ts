import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-126',
  name: 'مكيف صحراوي DLC 4 لتر',
  slug: 'dlc-4l-desert-cooler',
  description: `مبرد هواء من DLC يوفر تبريدًا فعالًا مع استهلاك طاقة منخفض. يتميز بسعة 4 لتر، 3 سرعات، وخاصية توزيع الهواء 360 درجة. مثالي للمنازل والمكاتب.###FEATURES###- سعة 4 لتر مع مكان لوضع الثلج.
- يعمل كمنقي ومرطب ومبرد للهواء.
- 3 مستويات لتدفق الهواء و 3 سرعات.
- توزيع هواء 360 درجة.
- تصميم أنيق مع عجلات لسهولة الحركة.###DETAILS###- الماركة: DLC
- السعة: 4 لتر
- القوة: 80 واط
- الأبعاد: 22 × 24 × 52 سم`,
  price: 180.00,
  category: 'home',
  warranty: 'عامين',
};

export default product;
