import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-3',
  name: 'شاشة الفارس 32 بوصة',
  slug: 'alfaris-32-inch-screen',
  description: `حوّل غرفة جلوسك إلى سينما صغيرة مع شاشة الفارس! استمتع بألوان زاهية وتفاصيل واضحة تجعل كل مشهد ينبض بالحياة.###FEATURES###- ألوان واضحة وحية تعطيك تجربة مشاهدة ممتعة.
- يدعم مدخل HDMI لتوصيل الأجهزة بسهولة.
- فيه مدخل USB لتشغيل الفيديو والصور.
- نظام AVL يعطي صوت متوازن بدون تشويش.
- إضاءة LED أوضح وتوفير أكثر للطاقة.
- دقة HD Ready تعطي تفاصيل أوضح بالصورة.###DETAILS###- الماركة: الفارس
- الضمان: 5 سنين 
- المقاس: 32 بوصة
- الدقة: 720p HD Ready
- المنافذ: HDMI + USB
- القدرة: 48 واط`,
  price: 499.99,
  category: 'electronics',
  warranty: '5 سنين',
};

export default product;
