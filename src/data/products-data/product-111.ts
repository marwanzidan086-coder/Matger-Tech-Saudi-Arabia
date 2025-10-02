import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-111',
  name: 'مروحة درون ذكية بإضاءات متعددة',
  slug: 'smart-drone-fan-with-lights',
  description: `مروحة وإنارة بقطعة وحدة، توفير للمساحة والتكلفة. فيها ثلاث سرعات، تختار اللي يريحك. إنارة بثلاث ألوان تغيّر جو المكان. تصميم بسيط ومرتب يركب مع كل الديكورات.###FEATURES###- صوتها هادي، ما تزعجك وقت النوم.
- تحكم كامل عن بعد بالريموت.
- فيها مؤقت للسرعة الثانية يسكرها تلقائي.
- خفيفة وسهلة في التركيب.###DETAILS###- قوة المروحة: 18 واط
- الطاقة الاسمية: 50 واط
- الإنارة: 3 ألوان (3000K / 4000K / 6500K)
- التركيب: تثبيت بالسقف (نوع E27)
- الضمان: 14 يوم`,
  price: 150,
  images: [
    'https://i.ibb.co/XZDZ046x/image-1.jpg',
    'https://i.ibb.co/s9CXVxn2/image-2.jpg',
    'https://i.ibb.co/4nRqGvg7/image-3.jpg',
    'https://i.ibb.co/cBT8Qjg/image-4.jpg',
    'https://i.ibb.co/8LnByNXB/image-5.jpg'
  ],
  category: 'home',
  warranty: '14 يوم',
};

export default product;
