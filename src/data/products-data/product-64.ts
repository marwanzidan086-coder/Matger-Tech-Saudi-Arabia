import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-64',
  name: 'مروحة تعمل بالطاقة الشمسية',
  slug: 'solar-powered-fan',
  description: `مروحة عملية تعمل بالطاقة الشمسية أو الكهرباء، مع 5 شفرات ومصباح LED. مثالية للاستخدام في المنزل والرحلات.###FEATURES###- تعمل بالطاقة الشمسية وصديقة للبيئة.
- يمكن استخدامها داخل المنزل عن طريق الكهرباء.
- تصميم صغير وخفيف الوزن.
- 5 شفرات لتدفق هواء قوي.
- يمكن استخدامها لشحن الأجهزة الإلكترونية الصغيرة.
- مزودة بمصباحين LED.###DETAILS###- الماركة: جينيريك
- المادة: بلاستيك
- الأبعاد: 43*39*129 سم
- حجم الشفرة: 16 بوصة
- يأتي معها ريموت كنترول ولوح طاقة شمسية`,
  price: 389.99,
  images: [
    'https://i.ibb.co/N6QYycpV/image-1.jpg',
    'https://i.ibb.co/KCP1HPv/image-2.jpg',
    'https://i.ibb.co/spYjptPz/image-3.jpg',
    'https://i.ibb.co/JjLSLQjZ/image-4.jpg',
    'https://i.ibb.co/PGGnpFZq/image-5.jpg',
    'https://i.ibb.co/k2zQTTLB/image-6.jpg',
    'https://i.ibb.co/6JWXTzfr/image-7.jpg',
    'https://i.ibb.co/7Ng7Snw9/image-8.jpg'
  ],
  category: 'home',
  warranty: '14 يوم',
};

export default product;
