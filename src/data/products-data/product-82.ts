import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-82',
  name: 'ماكينة القفز الذكية للتنحيف',
  slug: 'smart-jumping-rope-machine',
  description: `جهاز قفز حبل ذكي يعمل بالريموت كنترول، مع 10 إعدادات سرعة وشاشة LCD. طريقة ممتعة لممارسة التمارين في المنزل.###FEATURES###- تحكم عن بعد بالريموت.
- 10 إعدادات سرعة قابلة للتعديل.
- شحن يكفي لأكثر من 60 يومًا.
- شاشة LCD كبيرة لعرض التقدم.
- دوران ثابت 360 درجة بدون صوت.
- مناسب لجميع الأعمار.###DETAILS###- الماركة: جينيريك
- المادة: بلاستيك PP متين
- الحجم: 13 × 13 × 8 سم
- الطاقة: بطارية قابلة للشحن`,
  price: 179.99,
  category: 'health',
  warranty: '14 يوم',
};

export default product;
