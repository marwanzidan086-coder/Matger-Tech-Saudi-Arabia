import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-96',
  name: 'مثقاب مطرقة كهربائي',
  slug: 'electric-hammer-drill',
  description: `مثقاب مطرقي كهربائي قوي 1900 واط، يعمل بثلاث وظائف: حفر، تكسير، وفك وربط. مثالي للحفر في الخشب والحديد والخرسانة.###FEATURES###- 3 وظائف: حفر، تكسير، فك وربط.
- قوة 1900 واط.
- سرعة دوران تصل إلى 2800 لفة بالدقيقة.
- وظيفة مطرقة للحفر في الجدران والخرسانة.
- قوة ضربة تصل إلى 41 جول.###DETAILS###- الماركة: جينيريك
- القوة: 1900 واط
- الفولت: 220V
- السرعة القصوى: 2800 دورة/دقيقة`,
  price: 359.99,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
