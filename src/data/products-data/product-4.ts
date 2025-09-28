import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-4',
  name: 'جهاز ألعاب حديث R36S',
  slug: 'r36s-retro-gaming-console',
  description: `استرجع أجمل ذكريات الطفولة مع جهاز الألعاب المحمول R36S! آلاف الألعاب الكلاسيكية بين يديك في جهاز واحد أنيق وقوي.###FEATURES###- يحتوي على أكثر من 10,000 لعبة.
- نظام Linux سريع وسهل التصفح.
- شاشة 3.5 إنش بدقة 640×480.
- معالج رباعي النواة قوي 1.5GHz.
- بطارية 3500mAh تدوم لساعات.
- ذاكرة 128 جيجا لتخزين الألعاب.###DETAILS###- نظام التشغيل: Linux
- المعالج: ARM Cortex-A35
- الرام: 1GB DDR3L
- السعة التخزينية: 128GB
- الشاشة: 3.5 إنش (640×480)
- البطارية: 3500mAh`,
  price: 299.99,
  category: 'electronics',
};

export default product;
