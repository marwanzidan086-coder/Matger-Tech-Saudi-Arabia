import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-113',
  name: 'عرض الخلاط الألماني ومحمصة الخبز',
  slug: 'german-blender-toaster-bundle',
  description: `حل متكامل للمطبخ العصري. خلاط ألماني قوي 4500 واط يطحن الثلج واللحوم، مع محمصة خبز كهربائية من Denx بـ 6 مستويات تحميص وضمان عامين.###FEATURES###- خلاط Silver Crest بقوة 4500 واط و 15 سرعة.
- مطحنة 600 مل قوية ضد الكسر.
- محمصة خبز Denx بقوة 750 واط و 6 مستويات تحميص.
- شفرات ستانلس ستيل قوية في الخلاط.
- تصميمات عملية وخامات متينة.###DETAILS###- الخلاط: Silver Crest, 4500W, 15 سرعة
- المحمصة: DENX, DX4401, 750W, 6 مستويات
- الضمان: 14 يوم للخلاط / عامين للمحمصة`,
  price: 155.00,
  category: 'home',
  warranty: 'متعدد',
};

export default product;
