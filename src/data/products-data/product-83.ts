import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-83',
  name: 'جهاز تمرين الذراع باور تويستر',
  slug: 'power-twister-arm-exerciser',
  description: `جهاز باور تويستر لتقوية عضلات الجزء العلوي من الجسم (الصدر، الكتف، الذراع، الظهر) مع مقاومة قابلة للتعديل تصل إلى 80 كجم.###FEATURES###- مقاومة قابلة للتعديل حتى 80 كجم.
- يقوي الصدر والكتف والذراع والظهر.
- تصميم آمن مع حبل مانع للانزلاق.
- مقبض مريح وغير قابل للانزلاق.
- مصنوع من فولاذ كربوني قوي.###DETAILS###- القوة: من 0 إلى 80 كجم
- المواد: فولاذ كربوني + بلاستيك
- اللون: أسود`,
  price: 139.99,
  category: 'health',
  warranty: '14 يوم',
};

export default product;
