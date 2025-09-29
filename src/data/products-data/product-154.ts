import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-154',
  name: 'مفرمة اللحوم المتينة 3 لتر',
  slug: '3l-durable-meat-grinder',
  description: `مفرمة لحوم من الستانلس ستيل بسعة 3 لتر وقوة 300 واط. تأتي بسرعتين و4 شفرات فولاذية حادة لفرم فعال وسريع. أجزاؤها قابلة للإزالة لسهولة التنظيف.###FEATURES###- سرعتان للتحكم الدقيق.
- وعاء 3 لتر من الستانلس ستيل.
- 4 شفرات فولاذية مقاومة للصدأ.
- قوة 300 واط.
- سهلة التنظيف.###DETAILS###- السعة: 3 لتر
- القوة: 300 واط
- الجهد: 220/240V
- الخامة: ستانلس ستيل`,
  price: 125.00,
  category: 'home',
  warranty: '6 شهور',
};

export default product;
