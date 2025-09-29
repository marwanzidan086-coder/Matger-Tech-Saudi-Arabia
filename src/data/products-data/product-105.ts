import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-105',
  name: 'كرسي عوامة للبحر و المسبح',
  slug: 'pool-and-sea-lounge-chair',
  description: `كرسي عوامة مريح للاسترخاء في حمامات السباحة والبحر، يوفر دعمًا للرأس والرقبة والظهر. سهل النفخ والتفريغ.###FEATURES###- تصميم مريح يوفر دعمًا للرأس والرقبة والظهر.
- مثالي للاسترخاء والقراءة في الماء.
- يمكن تفريغه بسهولة للنقل والتخزين.
- مصنوع من مواد عالية الجودة.###DETAILS###- الحجم: 120 × 100 × 100 سم
- المادة: بولي كلوريد الفينيل
- الحد الأقصى لوزن التحمل: 120 كجم`,
  price: 89.99,
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
