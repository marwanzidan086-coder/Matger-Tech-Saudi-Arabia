import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-103',
  name: 'لاصق أميري تركي',
  slug: 'turkish-super-glue',
  description: `لاصق فوري قوي ومتعدد الاستخدامات، مثالي لتثبيت الخشب، الجلد، البلاستيك، والمطاط بسرعة وكفاءة.###FEATURES###- لاصق سريع ومثالي للتثبيت الفوري.
- متعدد الاستخدامات.
- قوة تثبيت عالية.
- سهل الاستخدام.###DETAILS###- الحجم: 60 جرام`,
  price: 29.99,
  category: 'home',
  warranty: 'لا يوجد',
};

export default product;
