import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-44',
  name: 'محول الجوال إلى جهاز كمبيوتر',
  slug: 'mobile-to-pc-adapter-yesido',
  description: `أطلق العنان لقوة جوالك! هذا المحول من Yesido يضيف 6 منافذ عملية لجهازك (Type-C)، بما في ذلك USB 3.0 وقارئ بطاقات SD/Micro SD، لتنقل ملفاتك وتتصل بأجهزتك بسهولة وسرعة.###FEATURES###- 6 منافذ متعددة في جهاز واحد.
- نقل بيانات سريع عبر USB 3.0.
- قارئ بطاقات SD و Micro SD مدمج.
- تصميم عملي ومحمول.
- متوافق مع أجهزة Type-C.###DETAILS###- العلامة التجارية: Yesido
- نوع الموصل: Type-C HUB
- عدد المنافذ: 6 منافذ
- موديل الجهاز: HB10`,
  price: 119.99,
  category: 'electronics',
};

export default product;
