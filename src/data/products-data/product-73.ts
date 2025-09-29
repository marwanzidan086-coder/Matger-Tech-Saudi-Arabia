import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-73',
  name: 'جهاز الفقاعات للاطفال',
  slug: 'bubble-machine-for-kids',
  description: `مدفع فقاعات كهربائي يطلق عددًا كبيرًا من الفقاعات بسرعة، لإضافة جو من المرح للحفلات واللعب في الهواء الطلق.###FEATURES###- يطلق عددًا كبيرًا من الفقاعات بسرعة.
- يعمل ببطارية قابلة للشحن.
- تصميم خفيف وسهل الحمل.
- مناسب للحفلات والحدائق.
- مصنوع من بلاستيك آمن.###DETAILS###- الخامة: بلاستيك ABS آمن ومتين
- التشغيل: بطارية قابلة للشحن
- الاستخدام: للأطفال والكبار`,
  price: 79.99,
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
