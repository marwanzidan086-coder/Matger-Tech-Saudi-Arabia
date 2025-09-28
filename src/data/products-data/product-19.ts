import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-19',
  name: 'كاميرا تصوير أحترافي+ عدسة',
  slug: 'professional-camera-with-lens',
  description: `أطلق العنان للمصور الذي بداخلك! هذه الكاميرا بدقة 16 ميجا بيكسل وزوم رقمي 16x تمنحك القدرة على التقاط صور ومقاطع فيديو رائعة.###FEATURES###- زوم رقمي 16x لتقريب الصور.
- دقة 16 ميجا بيكسل لصور واضحة.
- تصوير فيديو بدقة 720p.
- شاشة 2.4 إنش للمعاينة.
- تثبيت إلكتروني لتقليل الاهتزاز.###DETAILS###- الموديل: HD - 05
- الضمان: 14 يوم
- الدقة: 16 ميجا بيكسل
- الزوم: 16x رقمي
- الشاشة: 2.4 إنش
- البطارية: 4 بطاريات AA (غير مرفقة)`,
  price: 299.99,
  category: 'electronics',
  warranty: '14 يوم',
};

export default product;
