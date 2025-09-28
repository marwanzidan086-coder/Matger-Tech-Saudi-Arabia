import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-42',
  name: 'باور بانك بسعة كبيرة 100 ألف مللي أمبير',
  slug: '100000mah-power-bank',
  description: `وداعًا لنفاذ البطارية! هذا الباور بانك العملاق بسعة 100,000 مللي أمبير قادر على شحن جميع أجهزتك عدة مرات. مع شحن سريع وكابلات مدمجة، هو مصدر الطاقة الذي لا غنى عنه.###FEATURES###- سعة ضخمة 100,000mAh تكفي لأيام.
- شحن سريع 22.5 واط.
- كابلات USB و Type-C مدمجة.
- 4 مخارج لشحن أكثر من جهاز في نفس الوقت.
- مؤشر LED لمعرفة مستوى البطارية.###DETAILS###- السعة: 100,000mAh
- الطاقة الخارجة: 22.5W
- الكابلات: USB و Type-C مدمجة`,
  price: 399.99,
  category: 'electronics',
  warranty: 'سنتين',
};

export default product;
