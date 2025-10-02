import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-101',
  name: 'كرسي بمسند قابل للطي للتخييم',
  slug: 'folding-camping-chair-with-armrest',
  story: 'بعد يوم طويل من المشي في الطبيعة، لا شيء يضاهي الجلوس على كرسي مريح. هذا الكرسي ليس مجرد مقعد، بل هو لحظة استرخاء تستحقها. خفيف لتحمله، قوي ليحملك، ومريح لتنسى عليه تعب اليوم.',
  description: `تصميم مريح يجعلك تجلس براحة. الكرسي واسع ومصمم لراحة الظهر. مصنوع من خامة قوية. كشنات عالية الكثافة. إطار ألومنيوم خفيف ومتين. يتطوى بسرعة وسهل الحمل.###DETAILS###- المقاس: ‎58 × 52 × 66 × 34 سم
- الخامة: قماش أوكسفورد + ألومنيوم قوي
- اللون: أسود`,
  price: 135,
  images: [
    'https://i.ibb.co/hFWyFGwn/image-1.jpg',
    'https://i.ibb.co/5X4qYqCh/image-2.jpg',
    'https://i.ibb.co/JRTmFsvs/image-3.jpg'
  ],
  category: 'misc',
  warranty: '14 يوم',
};

export default product;
