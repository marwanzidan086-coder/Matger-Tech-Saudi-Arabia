import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-81',
  name: 'مكنسة كهربائية محمولة ومنفاخ',
  slug: 'portable-vacuum-cleaner-and-blower',
  description: `مكنسة ومنفاخ 2 في 1 للسيارة، بقوة شفط 120 واط لتنظيف فعال، وتعمل على ولاعة السيارة مباشرة.###FEATURES###- 2 في 1: مكنسة وضاغط هواء.
- قوة شفط 120 واط.
- فلتر معدني قابل للغسل.
- إضاءة LED للمساعدة في التنظيف.
- تعمل على كهرباء السيارة (ولاعة).
- سلك طويل 4 متر.###DETAILS###- الماركة: جينيريك
- الموديل: LY-8018
- القوة: 120 واط
- نوع التنظيف: جاف
- طول السلك: 4 أمتار`,
  price: 119.99,
  category: 'electronics',
  warranty: '14 يوم',
};

export default product;
