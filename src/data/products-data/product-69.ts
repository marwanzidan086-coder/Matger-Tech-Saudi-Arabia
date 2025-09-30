import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-69',
  name: 'مزيل الضباب والزيوت لزجاج السيارة',
  slug: 'car-glass-defogger-oil-remover',
  description: `حل فعال لإزالة الضباب والزيوت والأوساخ من زجاج السيارة، مما يوفر رؤية واضحة وآمنة أثناء القيادة في جميع الظروف الجوية.###FEATURES###- يزيل الضباب بسرعة.
- يزيل بقع الزيوت والأوساخ.
- يحسن الرؤية أثناء المطر.
- سهل الاستخدام.###DETAILS###- النوع: منظف زجاج
- الاستخدام: زجاج السيارات والمرايا`,
  price: 49.99,
  images: [
    'https://i.ibb.co/dw8KKy2B/image-1.webp',
    'https://i.ibb.co/GQfNR5JC/image-2.webp',
    'https://i.ibb.co/n8MsB2Nd/image-4.jpg'
  ],
  category: 'misc',
  warranty: 'لا يوجد',
};

export default product;
