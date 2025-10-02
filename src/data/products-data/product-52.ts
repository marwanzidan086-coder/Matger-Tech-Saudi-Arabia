import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-52',
  name: 'أيربودز حديثة',
  slug: 'modern-airpods',
  story: `في عالم مليء بالضوضاء، تحتاج إلى مساحتك الخاصة 🎧. هذه السماعات هي بوابتك إلى ذلك العالم. تضعها في أذنيك، وفجأة يختفي ضجيج العالم الخارجي، ويبقى فقط صوت موسيقاك المفضلة أو مكالمتك المهمة. مع بطارية تدوم لأيام، عالمك الخاص يرافقك أينما ذهبت. 🎶`,
  description: `بطارية تدوم حتى 72 ساعة مع علبة الشحن. تقنية بلوتوث 5.4 لاتصال سريع ومستقر. صوت محيطي 360 درجة. مايك ENC يعزل الضوضاء للمكالمات. مقاومة للتعرق.###DETAILS###- الإصدار: بلوتوث 5.4
- نطاق التشغيل: حتى 10 أمتار
- سعة البطارية: 30mAh لكل سماعة
- معيار مقاومة الماء: IPX-5`,
  price: 125,
  images: [
    "https://i.ibb.co/zhD7Y2p6/image-1.jpg",
    "https://i.ibb.co/Pv0X4MvG/image-2.jpg",
    "https://i.ibb.co/fTzhFrc/image-3.jpg"
  ],
  category: 'electronics',
  warranty: '14 يوم',
};

export default product;
