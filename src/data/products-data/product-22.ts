import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-22',
  name: 'ساعة سمارت ULTRA',
  slug: 'ultra-smart-watch',
  description: `أناقة وقوة على معصمك! ساعة ULTRA الذكية بتصميمها العصري وشاشتها عالية الدقة تمنحك كل ما تحتاجه لمتابعة لياقتك وصحتك.###FEATURES###- شاشة عالية الدقة وكاملة.
- أزرار من الجهتين مثل ساعة آبل.
- استقبال جميع الإشعارات والمكالمات.
- قياس نبضات القلب، أكسجين الدم، وضغط الدم.
- مقاومة للماء ومصممة بمواد متينة.###DETAILS###- الشاشة: 1.96 inch HD screen
- البلوتوث: BT 3.5 / 5.0
- البطارية: 320 مللي أمبير
- الشحن: لاسلكي`,
  price: 189.99,
  category: 'health',
};

export default product;
