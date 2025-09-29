import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-69',
  name: 'مزيل الضباب والزيوت لزجاج السيارة',
  slug: 'car-glass-defogger-oil-remover',
  description: `حل فعال لإزالة الضباب والزيوت والأوساخ من زجاج السيارة، مما يوفر رؤية واضحة وآمنة أثناء القيادة في جميع الظروف الجوية.###FEATURES###- يزيل الضباب بسرعة.
- يزيل بقع الزيوت والأوساخ.
- يحسن الرؤية أثناء المطر.
- سهل الاستخدام.###DETAILS###- النوع: منظف زجاج
- الاستخدام: زجاج السيارات والمرايا`,
  price: 49.99,
  category: 'misc',
  warranty: 'لا يوجد',
};

export default product;
