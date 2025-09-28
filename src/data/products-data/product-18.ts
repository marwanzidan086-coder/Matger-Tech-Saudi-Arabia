import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-18',
  name: 'عرض اليوم الوطني السعودي (حقيبة - ساعة - سماعة - باور بنك)',
  slug: 'saudi-national-day-bundle',
  description: `عرض متكامل يجمع لك كل ما تحتاجه في يومك! حقيبة كتف أنيقة مع منفذ USB، باور بانك سريع الشحن، ساعة ذكية لمتابعة نشاطك، وسماعة Type-C بصوت نقي.###FEATURES###- حقيبة كتف أنيقة مع منفذ USB.
- باور بانك 30 واط بسعة 10000mAh.
- سماعة Type-C بصوت نقي وريموت تحكم.
- ساعة ذكية تقيس نبضات القلب والنشاط.
- جميع القطع خفيفة وسهلة الحمل.###DETAILS###- الباور بنك: دينيكس 30W, 10000mAh
- الساعة: Shivay M3 Smart Band
- الحقيبة: yunfan, منفذ USB
- السماعة: Type-C سلكية`,
  price: 249.99,
  category: 'misc',
};

export default product;
