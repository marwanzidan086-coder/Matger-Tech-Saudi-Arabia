import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-143',
  name: 'كشاف يعمل بالطاقة الشمسية',
  slug: 'solar-powered-spotlight',
  description: `كشاف LED يعمل بالطاقة الشمسية مع مستشعر حركة، مثالي لإضاءة الحدائق والممرات والمداخل دون الحاجة للكهرباء.
###FEATURES###
- يعمل بالطاقة الشمسية بالكامل.
- يعمل تلقائيًا عند اكتشاف حركة بالقرب منه ثم ينطفئ لتوفير الطاقة.
- بطارية قوية توفر إضاءة مستمرة طوال الليل.
- سهل التركيب ولا يحتاج إلى تمديدات.
- 3 أوضاع إضاءة: ضوء خافت مستمر، مستشعر ضوء قوي، مستشعر حركة.
###DETAILS###
- البطارية: 1200mAh.
- الأبعاد: 12.5سم طول * 9.5 سم عرض*5 سم عمق.
- عدد المصابيح: 20 مصباح.
- وقت العمل: أكثر من 10 ساعات`,
  price: 75,
  images: [
    'https://i.ibb.co/3mPF65Bv/image-1.jpg',
    'https://i.ibb.co/x8hXT4QC/image-2.jpg',
    'https://i.ibb.co/HDhS0ZbC/image-3.jpg',
    'https://i.ibb.co/ksxQh9VP/image-4.jpg',
    'https://i.ibb.co/BVgY6T4H/image-5.jpg'
  ],
  category: 'home',
};

export default product;
