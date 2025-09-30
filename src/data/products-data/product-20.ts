import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-20',
  name: 'ساعة يد ذكية بشاشة كاملة',
  slug: 'full-screen-smart-watch',
  description: `ابق على اتصال وتابع صحتك بأناقة! هذه الساعة الذكية بشاشتها الكاملة تتيح لك استقبال المكالمات والإشعارات، وقياس نبضات القلب وضغط الدم.###FEATURES###- متابعة قياسات طبية (ضربات القلب، ضغط الدم).
- ربط بالهاتف واستقبال المكالمات والإشعارات.
- شاشة كاملة تعمل باللمس 1.54 بوصة.
- بطارية 195 مللي أمبير.
- شحن لاسلكي.###DETAILS###- البلوتوث: 3.0 و 4.0
- البطارية: 195 مللي أمبير
- الشاشة: 1.54 HD IPS
- الشحن: لاسلكي`,
  price: 159.99,
  images: [
    "https://i.ibb.co/zH7n13HL/image-1.jpg",
    "https://i.ibb.co/pm4pv9x/image-2.jpg",
    "https://i.ibb.co/x4yLk64/image-3.jpg",
    "https://i.ibb.co/HTb1QLY7/image-4.png",
    "https://i.ibb.co/dJrVN4qC/image-5.jpg"
  ],
  category: 'health',
};

export default product;
