import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-3',
  name: 'شاشة الفارس 32 بوصة',
  slug: 'alfaris-32-inch-screen',
  description: `حوّل غرفة جلوسك إلى سينما صغيرة مع شاشة الفارس! استمتع بألوان زاهية وتفاصيل واضحة تجعل كل مشهد ينبض بالحياة.###FEATURES###- ألوان واضحة وحية لتجربة مشاهدة ممتعة.
- يدعم مدخل HDMI لتوصيل الأجهزة بسهولة.
- فيه مدخل USB لتشغيل الفيديو والصور.
- نظام AVL يعطي صوت متوازن بدون تشويش.
- إضاءة LED أوضح وتوفير أكثر للطاقة.
- دقة HD Ready لتفاصيل أوضح.###DETAILS###- الماركة: الفارس
- المقاس: 32 بوصة
- الدقة: 720p HD Ready
- المنافذ: HDMI + USB
- القدرة: 48 واط`,
  price: 499.99,
  images: [
    "https://i.ibb.co/BKgZS65c/image-1.jpg",
    "https://i.ibb.co/mrF59py8/image-2.jpg",
    "https://i.ibb.co/TDYT6CBG/image-3.jpg"
  ],
  category: 'electronics',
  warranty: '5 سنين',
};

export default product;
