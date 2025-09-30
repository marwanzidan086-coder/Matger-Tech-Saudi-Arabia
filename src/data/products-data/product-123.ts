import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-123',
  name: 'فرامة كهربائية 2 لتر DLC',
  slug: 'dlc-2l-electric-chopper',
  description: `مفرمة كهربائية قوية من DLC بسعة وعاء 500 مل وشفرات رباعية من الستانلس ستيل. مثالية لفرم الخضار واللحوم بسرعة وكفاءة, مع خيارين للسرعة.###FEATURES###- تقطع وتفرم الخضار واللحوم في ثوانٍ.
- سرعتان (عالية/منخفضة).
- وعاء بلاستيك 500 مل.
- 4 شفرات ستانلس ستيل حادة.
- قوة 400-500 واط.
- سهلة الفك والتركيب والتنظيف.###DETAILS###- الماركة: DLC
- الموديل: 39059 DLC
- القدرة: 400-500 واط
- سعة الوعاء: 500 مل`,
  price: 105.00,
  category: 'home',
  warranty: 'عامين',
};

export default product;
