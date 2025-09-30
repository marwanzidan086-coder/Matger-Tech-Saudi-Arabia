import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-45',
  name: 'إضاءة دائرية بالطاقة الشمسية للحديقة',
  slug: 'solar-garden-circular-light',
  description: `أضف لمسة جمالية لحديقتك مع هذه الإضاءة الشمسية الأنيقة. تعمل تلقائيًا عند الغروب وتوفر إضاءة بلونين (أبيض دافئ أو ألوان متغيرة). مقاومة للماء وسهلة التركيب.###FEATURES###- تعمل بالطاقة الشمسية ولا تحتاج كهرباء.
- لونين للإضاءة: أبيض دافئ وألوان RGB.
- تعمل تلقائيًا في الليل.
- مقاومة للماء (IP44).
- سهلة التركيب بالغرز في الأرض.###DETAILS###- نوع الإنارة: LED
- لومن: 60 لومن
- البطارية: NiMH 300mAh
- مقاومة الماء: IP44`,
  price: 59.99,
  images: [
    "https://i.ibb.co/JRjq8Zv1/image-1.jpg",
    "https://i.ibb.co/Q33gM9ZB/image-2.png",
    "https://i.ibb.co/21mbFysy/image-3.jpg",
    "https://i.ibb.co/YTRnZrtt/image-4.jpg",
    "https://i.ibb.co/PsLwd2Dw/image-5.jpg",
    "https://i.ibb.co/8nMtBFLr/image-6.jpg"
  ],
  category: 'home',
  warranty: '14 يوم',
};

export default product;
