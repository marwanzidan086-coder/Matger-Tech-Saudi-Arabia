import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-50',
  name: 'بنك طاقة لاسلكي 10000 مللي أمبير',
  slug: 'yosonda-10000mah-wireless-power-bank',
  description: `اشحن كل أجهزتك بلمسة واحدة! بنك الطاقة من YOSONDA يدعم الشحن اللاسلكي السريع مع شفاطات لتثبيت هاتفك، بالإضافة إلى كابلات مدمجة لجميع أنواع الأجهزة.###FEATURES###- يدعم الشحن اللاسلكي بقدرة 10 واط.
- شفاط لتثبيت الهاتف أثناء الشحن اللاسلكي.
- كابلات مدمجة (Type-C, Micro USB, Lightning, USB).
- سعة 10000 مللي أمبير.
- خفيف ومحمول ومناسب للرحلات.###DETAILS###- العلامة التجارية: YOSONDA
- الموديل: YXD-A40
- البطارية: 10000 مللي أمبير
- المخرج اللاسلكي: 10 واط`,
  price: 119.99,
  category: 'electronics',
};

export default product;
