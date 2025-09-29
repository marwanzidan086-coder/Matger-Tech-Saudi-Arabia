import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-132',
  name: 'واقي من رذاذ القلي',
  slug: 'splatter-screen-for-frying',
  description: `واقي رذاذ من الستانلس ستيل يمنع تناثر الزيت الساخن أثناء القلي. متعدد الاستخدامات كمصفاة أو رف تبريد. آمن للاستخدام في غسالة الصحون.###FEATURES###- يمنع رذاذ الزيت ويحمي من الحروق.
- شبكة ناعمة تسمح بخروج البخار.
- مصنوع من ستانلس ستيل قوي لا يصدأ.
- متعدد الاستخدامات: مصفاة، رف تبريد، جهاز تبخير.
- آمن للغسل في غسالة الصحون.###DETAILS###- المادة: ستانلس ستيل
- اللون: فضي
- السعة: 13 إنش`,
  price: 49.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
