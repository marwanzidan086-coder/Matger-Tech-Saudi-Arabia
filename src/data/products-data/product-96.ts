import { type Product } from '@/lib/types';

const product: Product = {
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
  images: [
    'https://i.ibb.co/8Dfw24Mj/image-1.jpg',
    'https://i.ibb.co/W40WGsxV/image-2.jpg',
    'https://i.ibb.co/6JYBmtj6/image-3.jpg',
    'https://i.ibb.co/TBMqmhTG/image-4.jpg',
    'https://i.ibb.co/1tM4F5DF/image-5.jpg',
    'https://i.ibb.co/M5hFV3LM/image-6.jpg'
  ],
  category: 'home',
  warranty: '14 يوم',
};

export default product;
