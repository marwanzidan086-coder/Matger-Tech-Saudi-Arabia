import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-85',
  name: 'لعبة كرة طائرة سحرية',
  slug: 'magic-flying-ball-toy',
  description: `كرة طائرة سحرية مضيئة بتقنية RGB، تطير وتعود إلى يدك مثل البوميرانغ. لعبة آمنة وممتعة للأطفال تنمي المهارات الحركية.###FEATURES###- تطير بشكل سحري وتعود لليد.
- مضيئة بـ RGB لتأثيرات ليلية.
- آمنة للأطفال بتصميم كروي محمي.
- مصنوعة من بلاستيك ABS متين.
- بطارية قابلة لإعادة الشحن عبر USB.###DETAILS###- الماركة: جينيريك
- الخامة: بلاستيك ABS
- الأبعاد: 10 × 10 × 10 سم
- الوزن: 20 جرام
- البطارية: ليثيوم قابلة للشحن`,
  price: 89.99,
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
