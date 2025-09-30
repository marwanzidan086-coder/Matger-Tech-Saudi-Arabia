import { type Product } from '@/lib/types';

const product: Product = {
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
  images: [
    'https://i.ibb.co/bgchcFBf/image-1.jpg',
    'https://i.ibb.co/QjbsXx78/image-2.jpg',
    'https://i.ibb.co/jP2MHJ9f/image-3.jpg',
    'https://i.ibb.co/2YFh5qgQ/image-4.jpg'
  ],
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
