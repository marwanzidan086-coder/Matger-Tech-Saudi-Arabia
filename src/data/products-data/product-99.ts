import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-99',
  name: 'لعبة جهاز كشف الكذب',
  slug: 'lie-detector-game',
  description: `لعبة جماعية ممتعة ومثيرة لـ 6 أشخاص، مع نظام صدمة كهربائية خفيفة لزيادة الحماس. مثالية للحفلات والتحديات.###FEATURES###- لعبة جماعية لـ 6 أشخاص.
- نظام صدمة كهربائية خفيفة لزيادة الحماس.
- وضعان للعب: الحظ والتحدي.
- مؤثرات صوتية وضوئية.
- قاعدة بشفاطات لتثبيتها.###DETAILS###- الماركة: جينيريك
- المادة: بلاستيك ABS
- الأبعاد: 14 سم × 6 سم
- الطاقة: 3 بطاريات AA (غير مشمولة)`,
  price: 99.99,
  images: [
    'https://i.ibb.co/gbgfnNv8/image-1.png',
    'https://i.ibb.co/LdVjScNY/image-2.png',
    'https://i.ibb.co/HT2C0BwW/image-3.png',
    'https://i.ibb.co/bMxmc3Gj/image-4.png',
    'https://i.ibb.co/Mx5CjMTx/image-5.png',
    'https://i.ibb.co/20fSMrbv/image-6.png',
    'https://i.ibb.co/35GzKFyV/image-7.png',
    'https://i.ibb.co/bRQYQ0Dv/image-8.jpg'
  ],
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
