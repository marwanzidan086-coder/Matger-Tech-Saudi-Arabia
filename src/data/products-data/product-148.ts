import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-148',
  name: 'صانعة اللقيمات',
  slug: 'dough-ball-maker',
  description: `آلة صنع اللقيمات من اكسترا, لاسلكية وقابلة للشحن. تصنع أكثر من 100 لقيمة في كل مرة بفضل تصميمها ذو الثلاث فتحات. تأتي مع شاشة رقمية لحساب عدد اللقيمات.###FEATURES###- تصنع أكثر من 100 لقيمة.
- لاسلكية وقابلة للشحن (تعمل 3 ساعات).
- 3 فتحات لتشكيل سريع.
- وعاء قابل للفك لسهولة التنظيف.
- شاشة رقمية لعد اللقيمات.###DETAILS###- الماركة: اكسترا
- السعة: 700 مل
- الطاقة: 100 واط`,
  price: 175.00,
  category: 'home',
  warranty: 'عامين',
};

export default product;
