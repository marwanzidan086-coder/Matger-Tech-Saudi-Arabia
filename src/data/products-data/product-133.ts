import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-133',
  name: 'مصيدة فئران سهلة الاستخدام',
  slug: 'easy-to-use-mouse-trap',
  description: `مصيدة فئران قابلة لإعادة الاستخدام، مصممة لمنع الهروب وسهولة التنظيف. آمنة للاستخدام حول الأطفال والحيوانات الأليفة.###FEATURES###- محكمة الإغلاق لمنع الهروب.
- سهلة الاستخدام والتنظيف.
- آمنة للاستخدام في الأماكن القريبة من الأطفال والحيوانات.
- تصميم قوي ومتين.
- آلية حساسة تقفل الباب فور لمس الطُعم.###DETAILS###- أبعاد المنتج: 26*13*13 سم`,
  price: 35.00,
  category: 'home',
  warranty: 'لا يوجد',
};

export default product;
