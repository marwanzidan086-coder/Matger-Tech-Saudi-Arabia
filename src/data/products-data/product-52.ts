import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-52',
  name: 'أيربودز حديثة',
  slug: 'modern-airpods',
  description: `تجربة صوتية غامرة واتصال فائق السرعة! هذه الأيربودز الحديثة بتقنية بلوتوث 5.4 تمنحك صوتًا محيطيًا نقيًا، ومكالمات واضحة بفضل مايك عازل للضوضاء، وبطارية تدوم لساعات طويلة.###FEATURES###- بطارية تدوم حتى 72 ساعة مع العلبة.
- تقنية بلوتوث 5.4 لاتصال سريع ومستقر.
- صوت محيطي 360 درجة.
- مايك ENC يعزل الضوضاء للمكالمات.
- مقاومة للتعرق ومريحة للأذن.###DETAILS###- الإصدار: بلوتوث 5.4
- نطاق التشغيل: حتى 10 أمتار
- سعة البطارية: 30mAh لكل سماعة
- معيار مقاومة الماء: IPX-5`,
  price: 139.99,
  images: [
    "https://i.ibb.co/zhD7Y2p6/image-1.jpg",
    "https://i.ibb.co/Pv0X4MvG/image-2.jpg",
    "https://i.ibb.co/fTzhFrc/image-3.jpg"
  ],
  category: 'electronics',
  warranty: '14 يوم',
};

export default product;
