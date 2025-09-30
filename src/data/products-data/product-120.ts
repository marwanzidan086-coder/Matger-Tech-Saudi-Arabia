import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-120',
  name: 'ستارة النجم والهلال بريموت كنترول',
  slug: 'star-moon-curtain-light',
  description: `ستارة إضاءة ساحرة على شكل هلال ونجوم, مثالية لإضافة لمسة رمضانية أو تزيين غرف الأطفال. تأتي مع 8 أوضاع إضاءة مختلفة وريموت كنترول للتحكم عن بعد.###FEATURES###- 8 أوضاع إضاءة مختلفة.
- تثبيت سهل بدون أدوات.
- إضاءة LED موفرة للطاقة.
- تعمل عن طريق USB.
- ريموت كنترول للتحكم عن بعد.###DETAILS###- عدد المصابيح: 138 لمبة LED
- الشكل: هلال ونجمة
- اللون: أبيض كريستالي
- التحكم: ريموت
- التشغيل: USB`,
  price: 45.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
