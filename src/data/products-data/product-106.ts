import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-106',
  name: 'مقص كهربائي متعدد الاستخدامات',
  slug: 'multi-use-electric-scissors',
  description: `مقص تقليم كهربائي لاسلكي من دينيكس، بقوة 500 واط وبطاريتين. مثالي لقص أغصان الأشجار بسهولة وسرعة.###FEATURES###- مقبض مضاد للانزلاق وآمن.
- محرك قوي يقص الأشجار بسرعة.
- كهربائي وخفيف، يعمل بالبطارية.
- يأتي مع بطاريتين وشاحن.
- قطر قطع يصل إلى 30 ملم.###DETAILS###- الماركة: دينيكس
- الطاقة: 500 واط
- الجهد: 16.8 فولت
- البطارية: 2000mAh (بطاريتان)
- مدة العمل: من 3 إلى 6 ساعات`,
  price: 299.99,
  category: 'home',
  warranty: 'عامين',
};

export default product;
