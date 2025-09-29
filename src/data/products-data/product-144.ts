import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-144',
  name: 'منظف روبوت للمكتب',
  slug: 'desktop-robot-vacuum',
  description: `مكنسة مكتب صغيرة على شكل روبوت لشفط الغبار والفتات وشعر الحيوانات. تعمل بالبطارية القابلة للشحن وصوتها هادئ جدًا.###FEATURES###- تصميم صغير وجذاب على شكل روبوت.
- يشفط الغبار والفتات بسهولة.
- يعمل بالبطارية لمدة 3-4 ساعات.
- يشحن عبر USB.
- صوت هادئ جدًا (10 ديسبل).
- فوهة قابلة للفصل للوصول للأماكن الضيقة.###DETAILS###- البطارية: 1200mAh
- الطاقة: 3 واط
- الوزن: 200 جرام`,
  price: 60.00,
  category: 'electronics',
  warranty: '14 يوم',
};

export default product;
