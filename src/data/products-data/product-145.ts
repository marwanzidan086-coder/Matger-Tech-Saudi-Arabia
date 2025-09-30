import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-145',
  name: 'أداة لف ورق العنب',
  slug: 'grape-leaf-rolling-tool',
  description: `أداة ذكية للف ورق العنب والسوشي والملفوف بسهولة وسرعة. مناسبة للمبتدئين وتوفر الوقت في المطبخ.###FEATURES###- تلف ورق العنب والسوشي بسهولة.
- مناسبة للمبتدئين.
- تصميم ينزلق بسلاسة.
- قاعدة مانعة للانزلاق.
- مصنوعة من بلاستيك آمن للطعام.###DETAILS###- المادة: بلاستيك بولي بروبلين (PP)
- الوزن: 317 جرام`,
  price: 35.00,
  images: [
    'https://i.ibb.co/p6YwR4N0/image-1.jpg',
    'https://i.ibb.co/v6tjhfbk/image-2.jpg',
    'https://i.ibb.co/gMdL45XR/image-3.jpg',
    'https://i.ibb.co/JRxY8dtQ/image-4.jpg',
    'https://i.ibb.co/NgFVkhw7/image-5.jpg'
  ],
  category: 'home',
  warranty: '14 يوم',
};

export default product;
