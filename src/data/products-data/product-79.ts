import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-79',
  name: 'مجموعة أدوات بيلاتيس بار',
  slug: 'pilates-bar-kit',
  description: `طقم متكامل لتمارين البيلاتس في المنزل، يساعد على تقوية العضلات وتحسين التوازن والمرونة. خفيف الوزن وسهل التخزين.###FEATURES###- طقم متكامل لتمارين البيلاتس وتقوية الجسم.
- مصنوع من مواد متينة ABS + TPE.
- مقاومة متعددة بفضل 6 أربطة مرنة.
- تصميم خفيف وسهل الحمل.
- مناسب للجنسين وللاستخدام المنزلي.###DETAILS###- الماركة: جينيريك
- الحجم: 32×18.5×9 سم
- الوزن: 1.35 كجم
- المادة: ABS + TPE`,
  price: 159.99,
  category: 'health',
  warranty: '14 يوم',
};

export default product;
