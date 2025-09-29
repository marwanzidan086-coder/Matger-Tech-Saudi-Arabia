import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-124',
  name: 'مكيف صحراوي Denx 4 لتر',
  slug: 'denx-4l-desert-cooler',
  description: `مبرد هواء صحراوي من Denx بقدرة 80 واط وخزان مياه 4 لتر. يوفر تبريدًا فعالًا مع 3 سرعات وخاصية ترطيب الجو. يأتي مع ريموت كنترول وعجلات لسهولة الحركة.###FEATURES###- تبريد فعال مع استهلاك طاقة منخفض (80 واط).
- 3 سرعات للتحكم في قوة الهواء.
- خزان مياه 4 لتر.
- خاصية ترطيب الجو.
- ريموت كنترول ومؤقت تشغيل.
- تصميم رفيع وصوت هادئ.###DETAILS###- الماركة: Denx
- الموديل: DX2539
- القوة: 80 واط
- السعة: 4 لتر`,
  price: 160.00,
  category: 'home',
  warranty: 'عامين',
};

export default product;
