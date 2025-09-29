import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-140',
  name: 'قاعدة متحركة للغسالة الكهربائية',
  slug: 'movable-washing-machine-base',
  description: `قاعدة متحركة وقابلة للتعديل للغسالات والثلاجات. تتحمل حتى 138 كجم ومزودة بعجلات وقفل للحفاظ على ثبات الجهاز.###FEATURES###- قوة تحمل عالية (حتى 138 كجم).
- مقاومة للصدأ.
- حجم قابل للتعديل (من 56x56 سم).
- عجلات لسهولة النقل مع قفل للثبات.
- تقلل اهتزاز الغسالة.###DETAILS###- الأبعاد: 40*60 سم (قابلة للتعديل)
- أقصى حمولة: 138 كيلوجرام`,
  price: 65.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
