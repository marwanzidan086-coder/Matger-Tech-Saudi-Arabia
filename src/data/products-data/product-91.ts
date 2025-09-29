import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-91',
  name: 'وصلة لضخ المياه',
  slug: 'high-pressure-water-hose-nozzle',
  description: `رشاش ماء معدني عالي الضغط لتنظيف السيارة، الحوش، وري الحدائق. يتميز برأس متعدد الوظائف يدور 360 درجة.###FEATURES###- معدن قوي يتحمل الضغط العالي.
- رأس متعدد الوظائف يغير الرش من ناعم لقوي.
- يدور 360 درجة بدون تسريب.
- تصميم محكم يمنع التسرب.
- يعمل بضغط عالي لإزالة الأوساخ بسهولة.###DETAILS###- النوع: رشاش ماء عالي الضغط
- المادة: معدن متين مع وصلة PVC
- الطول: 17 سم`,
  price: 59.99,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
