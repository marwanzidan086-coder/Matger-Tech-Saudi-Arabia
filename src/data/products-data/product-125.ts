import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-125',
  name: 'كرسي استرخاء بمكبر صوت',
  slug: 'inflatable-chair-with-speaker',
  description: `كرسي قابل للنفخ يوفر تجربة جلوس مريحة مع مكبر صوت مدمج للاستماع للموسيقى. سهل النفخ والتفريغ، ومثالي للاستخدام الداخلي والخارجي.###FEATURES###- كرسي قابل للنفخ مع مسند للقدمين.
- مكبر صوت مدمج.
- سهل النفخ والتفريغ والتخزين.
- مصنوع من مادة PVC متينة.
- يتحمل وزن حتى 150 كجم.###DETAILS###- الماركة: جينيريك
- الأبعاد: 28.4 × 25.5 × 12.6 سم
- قابل للنفخ: نعم
- الوزن الأقصى: 150 كجم`,
  price: 199.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
