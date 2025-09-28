import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-48',
  name: 'حقيبة مقاومة للماء حديثة',
  slug: 'modern-waterproof-bag',
  description: `أناقة وأمان في حقيبة واحدة. هذه الحقيبة العصرية المقاومة للماء تحمي أغراضك وتوفر لك منفذ USB لشحن جوالك أثناء التنقل. مثالية للاستخدام اليومي والدوام والسفر.###FEATURES###- تصميم أنيق ومقاوم للماء.
- سحاب مخفي ونظام ضد السرقة.
- منفذ USB مدمج لشحن الهاتف.
- خامة نايلون قوية ومتينة.
- خفيفة على الكتف ومناسبة للجنسين.###DETAILS###- الماركة: yunfan
- الأبعاد: 17 × 32 × 7 سم
- الخامة: نايلون مقاوم للماء + PU`,
  price: 79.99,
  category: 'misc',
};

export default product;
