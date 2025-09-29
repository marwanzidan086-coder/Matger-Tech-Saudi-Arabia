import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-100',
  name: 'رقع إطار الكفرات 10 قطع',
  slug: 'tire-puncture-repair-plugs-10pcs',
  description: `مجموعة من 10 براغي مطاطية لإصلاح ثقوب إطارات السيارات والشاحنات بنفسك بسرعة وسهولة دون الحاجة لفك الإطار.###FEATURES###- تصلح الكفر وأنت بمكانك.
- لا تسبب ضررًا للكفر أو تهريبًا في الهواء.
- سهلة الاستخدام.
- مصنوعة من مطاط قوي ومتين.
- مقاسان مختلفان لتناسب الثقوب الصغيرة والكبيرة.###DETAILS###- العدد: 10 قطع (5 صغيرة + 5 كبيرة)
- المقاسات: تصلح لثقوب 0.1mm – 5mm
- المادة: مطاط عالي الجودة`,
  price: 39.99,
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
