import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-147',
  name: 'رف تجفيف الملابس يثبت على الحائط',
  slug: 'wall-mounted-drying-rack',
  description: `رف تجفيف ملابس جداري قابل للطي يوفر مساحة كبيرة. مصنوع من الألمنيوم والستيل المقاوم للصدأ ويتحمل حتى 27 كيلو. مثالي للحمام أو البلكونة.###FEATURES###- قابل للطي ويوفر مساحة.
- يتحمل حتى 27 كيلو.
- مصنوع من ألمنيوم وستيل مقاوم للصدأ.
- 5 قضبان للتعليق.
- سهل التركيب والاستخدام.###DETAILS###- المادة: معدن (ألمنيوم وستيل)
- الأبعاد: 80 × 39.8 × 10 سم
- التحمل: حتى 27 كيلو`,
  price: 120.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
