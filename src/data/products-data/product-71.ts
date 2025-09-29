import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-71',
  name: 'دريل كفرات BOSSS',
  slug: 'bosss-tire-drill',
  description: `دريل لاسلكي قوي من BOSSS بعزم 350 نيوتن متر، يأتي مع بطاريتين ليثيوم، شاحن سريع، ومجموعة ملحقات متكاملة.###FEATURES###- قوة دوران 350 نيوتن متر لفك أقوى المسامير.
- لاسلكي لحرية الحركة.
- بطاريتين ليثيوم 21 فولت للاستخدام المتواصل.
- لمبة LED لإضاءة مكان العمل.
- يأتي مع حقيبة و رؤوس ومفكات متنوعة.###DETAILS###- الماركة: BOSSS
- العزم: 350 نيوتن متر
- رأس الأداء: 1/2 بوصة
- البطارية: 2 × 21V ليثيوم أيون`,
  price: 429.99,
  category: 'electronics',
  warranty: 'عام',
};

export default product;
