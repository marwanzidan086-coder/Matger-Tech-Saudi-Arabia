import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-98',
  name: 'اله رش الطلاء Paint Zoom',
  slug: 'paint-zoom-paint-sprayer',
  description: `جهاز رش طلاء كهربائي خفيف ومحمول، يغطي الجدران والأثاث بسهولة وبدون تنقيط. مثالي للأعمال المنزلية.###FEATURES###- يغطي الجدار من أول مرة.
- خفيف ومحمول.
- محرك قوي بدون ضاغط هواء.
- رأس بثلاث اتجاهات للوصول للأماكن الصعبة.
- بدون تنقيط وسهل التنظيف.###DETAILS###- الماركة: FYG ENTERPRISE
- مصدر الطاقة: كهربائي بالسلك
- القوة: 625 واط
- الاستخدام: داخلي وخارجي`,
  price: 199.99,
  category: 'home',
  warranty: 'عام',
};

export default product;
