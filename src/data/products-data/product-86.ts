import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-86',
  name: 'مطرقة نجاة محمولة باليد ومتعددة الادوات',
  slug: 'multi-tool-survival-hammer',
  description: `أداة نجاة متعددة 19 في 1، تشمل مطرقة، زرادية، سكين، ومفكات. مثالية للتخييم، الرحلات، والطوارئ.###FEATURES###- مقبض خشبي مريح.
- تصميم قابل للطي وسهل الحمل.
- مصنوعة من فولاذ مقاوم للصدأ.
- تحتوي على 19 أداة متعددة الاستخدامات.
- تأتي مع جراب للحفظ والتنظيم.###DETAILS###- الماركة: جينيريك
- الخامة: خشب + فولاذ مقاوم للصدأ
- عدد الأدوات: 19 أداة
- الأبعاد: 142 × 82 مم`,
  price: 99.99,
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
