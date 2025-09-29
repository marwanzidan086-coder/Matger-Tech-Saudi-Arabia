import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-146',
  name: 'موقد غاز 4 عيون للمنزل والتخييم',
  slug: '4-burner-gas-stove',
  description: `موقد غاز من DLC بأربع شعلات نحاسية ونظام إشعال ذكي. مثالي للمطابخ المنزلية والرحلات، مع تصميم صغير ومؤقت دقيق لضبط وقت الطهي.###FEATURES###- 4 شعلات نحاسية عالية الأداء.
- نظام إشعال ذكي.
- مؤقت دقيق لضبط وقت الطهي.
- تحكم في شدة اللهب.
- مصنوع من مواد قوية ومتينة.###DETAILS###- الماركة: DLC
- الموديل: DLC-49048
- عدد الشعلات: 4 شعلات نحاس
- الأبعاد: 9.5×50×50 سم`,
  price: 185.00,
  category: 'home',
  warranty: 'عامين',
};

export default product;
