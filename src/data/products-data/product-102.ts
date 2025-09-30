import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-102',
  name: 'عجلة التمارين السحرية',
  slug: 'magic-exercise-wheel',
  description: `عجلة تمارين لتقوية عضلات البطن، الذراعين، الكتف والظهر. تتحمل وزنًا عاليًا وتتميز بتصميم ثابت ومقابض مريحة.###FEATURES###- تقوي عضلات البطن والذراعين والكتف والظهر.
- تتحمل وزنًا عاليًا يصل إلى 220 كجم.
- خامات قوية من ستانلس ستيل ومطاط مانع للانزلاق.
- مقابض مغطاة بفوم مريح.
- تصميم ثابت لا يهتز.###DETAILS###- العلامة التجارية: جينيريك
- الخامة: معدن + بلاستيك + فوم
- أقصى وزن تتحمله: 220 كيلو`,
  price: 99.99,
  images: [
    'https://i.ibb.co/Kj7MS90S/image-1.jpg',
    'https://i.ibb.co/mVrKjJn9/image-2.jpg',
    'https://i.ibb.co/20t77q56/image-3.jpg',
    'https://i.ibb.co/ns5Ppr4t/image-4.jpg',
    'https://i.ibb.co/8nz96BxJ/image-5.jpg',
    'https://i.ibb.co/gFBdgtxV/image-6.jpg',
    'https://i.ibb.co/0ynYq3KC/image-7.jpg',
    'https://i.ibb.co/DH64Lt0B/image-8.jpg'
  ],
  category: 'health',
  warranty: '14 يوم',
};

export default product;
