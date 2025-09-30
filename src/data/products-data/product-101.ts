import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-101',
  name: 'كرسي بمسند قابل للطي للتخييم',
  slug: 'folding-camping-chair-with-side-table',
  story: `في رحلة التخييم، لا شيء يضاهي الجلوس بشكل مريح مع كوب من الشاي ☕. هذا الكرسي هو فندق الخمس نجوم الخاص بك في البر. مع طاولته الجانبية وحامل الكوب، كل ما تحتاجه في متناول يدك. ليس مجرد كرسي، بل هو تجربة استرخاء متكاملة.`,
  description: `كرسي تخييم مريح وقابل للطي، يأتي مع طاولة جانبية وحامل كوب. مثالي للرحلات، الصيد، والشاطئ.###FEATURES###- طاولة جانبية وحامل كوب مدمجان.
- تصميم مريح للظهر وقابل للطي.
- سهل التخزين والحمل.
- إطار ألمنيوم قوي وخفيف.
- قماش أوكسفورد متين.###DETAILS###- الماركة: Generic
- الأبعاد: 63 x 47 x 85 سم
- الوزن: 4.81 كيلو جرام
- الخامة: إطار ألمنيوم، قماش أوكسفورد 600D`,
  price: 249.99,
  images: [
    'https://i.ibb.co/MD5ffdV9/image-1.jpg',
    'https://i.ibb.co/CpKKTvWC/image-2.jpg',
    'https://i.ibb.co/jvwx0pjP/image-3.jpg',
    'https://i.ibb.co/jvmQ1b07/image-4.jpg',
    'https://i.ibb.co/yG2zt8S/image-5.jpg',
    'https://i.ibb.co/CKNfHvcx/image-6.jpg'
  ],
  category: 'home',
  warranty: '14 يوم',
};

export default product;
