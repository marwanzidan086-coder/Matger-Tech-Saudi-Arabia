import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-68',
  name: 'هامر دريل Greatec',
  slug: 'greatec-hammer-drill',
  description: `جهاز هيلتي قوي من Greatec بقوة 3000 واط، يدعم 3 وظائف (حفر، حفر مطرقي، تكسير) ويأتي مع حقيبة ومجموعة ملحقات.###FEATURES###- محرك قوي 3000 واط يدعم 3 وظائف.
- أسطوانة كبيرة لضربات قوية.
- مقبض دوّار 360 درجة لتحكم أفضل.
- نظام تثبيت SDS-PLUS.
- سرعة تصل إلى 1200 دورة بالدقيقة.###DETAILS###- الماركة: Greatec
- القدرة: 3000 واط
- السرعة: 0-1200 دورة في الدقيقة
- قوة الطرق: 2.2 جول
- نوع التثبيت: أوتوماتيك / 4 شِيار`,
  price: 450.00,
  category: 'home',
  warranty: 'عام',
};

export default product;
