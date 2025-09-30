import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-143',
  name: 'كشاف يعمل بالطاقة الشمسية',
  slug: 'solar-powered-spotlight',
  description: `كشاف خارجي يعمل بالطاقة الشمسية مع 3 أوضاع إضاءة ومستشعر حركة. يوفر إضاءة قوية وأمان لمنزلك دون الحاجة للكهرباء.###FEATURES###- يشحن بالطاقة الشمسية.
- 3 أوضاع إضاءة (خافت, مستشعر ضوء قوي, مستشعر حركة).
- يعمل تلقائيًا عند حدوث حركة.
- بطارية 1200mAh توفر إضاءة طوال الليل.
- سهل التركيب ومناسب للحدائق والممرات.###DETAILS###- البطارية: 1200mAh
- عدد المصابيح: 20 مصباح LED
- وقت العمل: أكثر من 10 ساعات`,
  price: 49.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
