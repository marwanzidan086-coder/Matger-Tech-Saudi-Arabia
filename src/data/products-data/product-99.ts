import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
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
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
