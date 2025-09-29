import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-121',
  name: 'أباجورة رمضان',
  slug: 'ramadan-lantern-lamp',
  description: `أضف لمسة من الدفء والروحانية لديكور منزلك في رمضان مع هذه الأباجورة ذات التصميم الفريد بزخارف الهلال والنجوم. إضاءة LED آمنة وموفرة للطاقة.###FEATURES###- تصميم رمضاني فريد بزخارف الهلال والنجوم.
- إضاءة LED آمنة وحرارة منخفضة.
- إضاءة دافئة تخلق جوًا مريحًا.
- حجم مثالي للطاولات والأرفف.
- هدية مثالية لشهر رمضان.###DETAILS###- الماركة: Generic
- الخامة: بلاستيك عالي الجودة
- الوزن: 180 جرام`,
  price: 75.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
