import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-55',
  name: 'جراب متين ضدد المياة بضمان عامين',
  slug: 'durable-waterproof-pouch',
  description: `لا تخف على جوالك في الماء بعد الآن! هذا الجراب المتين يطفو على سطح الماء ويحميه حتى عمق 30 مترًا، مع إمكانية استخدام الشاشة والتصوير بوضوح تام.###FEATURES###- يطفو فوق الماء ويمنع الجوال من الغرق.
- مقاوم للماء حتى عمق 30 مترًا (IP68).
- يمكن استخدام الشاشة والتصوير من خلاله.
- محكم الإغلاق وتمنع دخول الموية والغبار.
- يناسب أغلب أنواع الجوالات بدون مشاكل.###DETAILS###- معيار الحماية: IP68
- أقصى عمق للماء: 30 متر
- الخامة: PVC ناعم وقوي
- الوزن: 100 جرام`,
  price: 49.99,
  images: [
    "https://i.ibb.co/KxGgzL1X/image-1.jpg",
    "https://i.ibb.co/V1pNVDV/image-2.jpg",
    "https://i.ibb.co/fzh9H3kZ/image-3.jpg",
    "https://i.ibb.co/F4Kv3Vj4/image-4.jpg"
  ],
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
