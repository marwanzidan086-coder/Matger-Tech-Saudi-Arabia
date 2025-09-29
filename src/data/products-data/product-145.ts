import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-145',
  name: 'أداة لف ورق العنب',
  slug: 'grape-leaf-rolling-tool',
  description: `أداة ذكية للف ورق العنب والسوشي والملفوف بسهولة وسرعة. مناسبة للمبتدئين وتوفر الوقت في المطبخ.###FEATURES###- تلف ورق العنب والسوشي بسهولة.
- مناسبة للمبتدئين.
- تصميم ينزلق بسلاسة.
- قاعدة مانعة للانزلاق.
- مصنوعة من بلاستيك آمن للطعام.###DETAILS###- المادة: بلاستيك بولي بروبلين (PP)
- الوزن: 317 جرام`,
  price: 35.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
