import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-111',
  name: 'مروحة درون ذكية بإضاءات متعددة',
  slug: 'smart-drone-fan-with-lights',
  description: `مروحة وإنارة في قطعة واحدة بتصميم عصري. توفر ثلاث سرعات وثلاثة ألوان للإضاءة, مع تحكم كامل عن بعد. صوتها هادئ ومناسبة لغرف النوم والمجالس.###FEATURES###- مروحة سقف وإنارة في جهاز واحد.
- 3 سرعات للمروحة و 3 ألوان للإضاءة (أبيض, أصفر, دافئ).
- تحكم كامل عبر الريموت كنترول.
- صوت هادئ لا يسبب إزعاج.
- تركيب سهل في قاعدة لمبة E27 العادية.###DETAILS###- قوة المروحة: 18 واط
- الطاقة الاسمية: 50 واط
- الجهد: 90-265V
- التركيب: قاعدة لمبة E27`,
  price: 100.00,
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
