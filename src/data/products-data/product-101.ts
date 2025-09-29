import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-101',
  name: 'كرسي بمسند قابل للطي للتخييم',
  slug: 'folding-camping-chair-with-side-table',
  description: `كرسي تخييم مريح وقابل للطي، يأتي مع طاولة جانبية وحامل كوب. مثالي للرحلات، الصيد، والشاطئ.###FEATURES###- طاولة جانبية وحامل كوب مدمجان.
- تصميم مريح للظهر وقابل للطي.
- سهل التخزين والحمل.
- إطار ألمنيوم قوي وخفيف.
- قماش أوكسفورد متين.###DETAILS###- الماركة: Generic
- الأبعاد: 63 x 47 x 85 سم
- الوزن: 4.81 كيلو جرام
- الخامة: إطار ألمنيوم، قماش أوكسفورد 600D`,
  price: 249.99,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
