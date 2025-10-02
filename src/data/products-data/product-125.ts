import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-125',
  name: 'كرسي استرخاء بمكبر صوت',
  slug: 'lounge-chair-with-speaker',
  description: `يوفر تجربة جلوس مريحة وممتعة في أي مكان. مكبر صوت مدمج للاستماع للموسيقى أثناء الاسترخاء. سهل النفخ والتفريغ في دقائق قليلة فقط.###FEATURES###- مناسب للاستخدام في الهواء الطلق والداخلية أيضًا.
- مثالي للتخييم، السفر، والقراءة في المنزل.
- مصنوع من مواد عالية الجودة، متين وآمن.
- يمكن طيه لسهولة الحمل والتخزين المريح.###DETAILS###- الأبعاد: 40x30x30 سم.
- الوزن: 15 كجم.
- الضمان: 14 يوم`,
  price: 120,
  images: [
    'https://i.ibb.co/8DSxtmmL/image-1.jpg',
    'https://i.ibb.co/Hpn06P7v/image-2.jpg',
    'https://i.ibb.co/W4pDtcSs/image-3.jpg',
    'https://i.ibb.co/CKD1V1JM/image-4.jpg',
    'https://i.ibb.co/JRSrrzgt/image-5.jpg',
    'https://i.ibb.co/cXD5Y7rz/image-6.jpg'
  ],
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
