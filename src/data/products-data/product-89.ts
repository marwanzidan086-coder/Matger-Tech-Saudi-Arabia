import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-89',
  name: 'مضرب بيسبول LED',
  slug: 'led-baseball-bat-flashlight',
  description: `كشاف متعدد الوظائف على شكل مضرب بيسبول، يوفر إضاءة قوية بعدة أوضاع، قابل للطي، مقاوم للماء، ويشحن بمنفذ Type-C.###FEATURES###- يعمل كلمبة جلسة أو تريك موجه أو سراج هادئ.
- إضاءة قوية.
- يشحن بسرعة عبر سلك تايب C.
- قابل للتطويل والتقصير.
- مقاوم للماء.
- بطارية تدوم طويلاً.###DETAILS###- الموديل: DLC-32899
- الضمان: سنتين
- القوة: 6 واط
- نوع الشحن: تايب C
- نوع البطارية: بطارية قابلة لإعادة الشحن`,
  price: 119.99,
  category: 'home',
  warranty: 'سنتين',
};

export default product;
