import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-123',
  name: 'فرامة كهربائية 2 لتر DLC بضمان عامين',
  slug: 'dlc-2l-electric-chopper-2-years-warranty',
  description: `تقطّع وتفرم الخضار واللحوم في ثواني، بدون تعب. تشغيل سهل بزر واحد مع خيارين للسرعة (عالية/منخفضة). تجي مع وعاء بلاستيك 500 مل، مناسب للكميات الصغيرة والمتوسطة.###FEATURES###- شفرات ستانلس ستيل حادة (4 شفرات).
- غطاء محكم من السيليكون يمنع التسرب.
- سهلة الفك والتركيب والتنظيف.
- قوة تشغيل عالية تصل إلى 500 واط.###DETAILS###- الماركة: DLC
- الموديل: 39059 DLC
- القدرة الكهربائية: 400-500 واط
- سعة الوعاء: 500 مل
- الضمان: عامين`,
  price: 160,
  images: [
    'https://i.ibb.co/Z1bR60vD/image-1.jpg',
    'https://i.ibb.co/rR9jnTYK/image-2.jpg',
    'https://i.ibb.co/0pjX646p/image-3.jpg',
    'https://i.ibb.co/QFRyKMz9/image-4.jpg'
  ],
  category: 'home',
  warranty: 'عامين',
};

export default product;
