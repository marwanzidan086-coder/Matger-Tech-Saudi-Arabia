import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-10',
  name: 'سماعة بحامل مانع للسقوط',
  slug: 'anti-fall-headset-with-holder',
  description: `استمتع بموسيقاك دون انقطاع أو قلق من سقوط السماعات. بفضل تصميمها المغناطيسي المبتكر وبطاريتها التي تدوم طويلًا، تمنحك هذه السماعة حرية الحركة والراحة التامة.###FEATURES###- بلوتوث 5.0 لاتصال سريع ومستقر.
- بطارية قوية تدوم تقريبًا 30 ساعة.
- تصميم مغناطيسي يحول السماعات إلى عقد أنيق.
- مقاومة للماء والعرق، مثالية للرياضة.
- سطح ناعم من السيليكون لراحة فائقة.###DETAILS###- الماركة: BASTEC
- إصدار البلوتوث: V5.0
- مسافة التشغيل: 10 أمتار
- سعة البطارية: 250mAh`,
  price: 79.99,
  images: [
    "https://i.ibb.co/Y7pgXJs0/image-1.jpg",
    "https://i.ibb.co/bMLfJNdv/image-2.jpg",
    "https://i.ibb.co/R4VVDPF4/image-3.jpg",
    "https://i.ibb.co/S4H1XZ0Z/image-4.jpg"
  ],
  category: 'electronics',
  warranty: '14 يوم',
};

export default product;
