import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-87',
  name: 'جهاز تعقب بلوتوث',
  slug: 'bluetooth-tracker-device',
  description: `جهاز تعقب صغير يعمل مع تطبيق Find My في أجهزة آبل للعثور على أغراضك المفقودة بسهولة. مقاوم للماء وبطارية تدوم طويلاً.###FEATURES###- يعمل مع تطبيق Find My في الآيفون.
- يصدر صوتًا للمساعدة في العثور عليه.
- ينبهك إذا ابتعدت عن غرضك.
- وضع Lost Mode للمساعدة في العثور عليه.
- مقاوم للماء والغبار (IPX7).
- بطارية تدوم 10-12 شهر.###DETAILS###- الماركة: جينريك
- المقاس: 38x38x7 ملم
- الوزن: 10 جرام
- البطارية: CR2032
- مقاوم للماء: IPX7`,
  price: 79.99,
  category: 'electronics',
  warranty: '14 يوم',
};

export default product;
