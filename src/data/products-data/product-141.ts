import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-141',
  name: 'طقم أريكة قابل للنفخ',
  slug: 'inflatable-sofa-set',
  description: `طقم أريكة قابل للنفخ مع مسند للقدمين ومضخة هواء. مثالي للاسترخاء في المنزل أو الحديقة. مصنوع من مادة PVC ويتحمل وزن حتى 150 كيلو.###FEATURES###- طقم أريكة ومسند قدم قابل للنفخ.
- يأتي مع مضخة هواء لسهولة النفخ.
- محمول وسهل التخزين.
- مصنوع من مادة PVC متينة.
- يتحمل وزن حتى 150 كيلو.###DETAILS###- الأبعاد: 28.4 × 25.5 × 12.6 سم
- قابل للنفخ: نعم
- الوزن الأقصى: 150 كجم`,
  price: 149.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
