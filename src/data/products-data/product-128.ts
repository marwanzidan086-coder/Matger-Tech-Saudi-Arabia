import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-128',
  name: 'كوب التسخين والتبريد يعمل بالشحن',
  slug: 'heating-cooling-usb-cup',
  description: `كوب ذكي يحافظ على مشروبك ساخنًا أو باردًا بلمسة زر. يعمل عبر USB وهو مثالي للمكتب أو السيارة.###FEATURES###- تسخين وتبريد في جهاز واحد.
- قاعدة ثابتة لا تنزلق.
- مؤشر ضوئي للتسخين (أحمر) والتبريد (أزرق).
- تشغيل سهل باللمس.
- يعمل بالشحن عبر USB.###DETAILS###- القوة: 10 واط
- الجهد: 5 فولت
- درجة التسخين: تصل إلى 55 درجة مئوية
- درجة التبريد: تصل إلى 8 درجات
- السعة: 0.5 لتر`,
  price: 99.00,
  category: 'home',
  warranty: '14 يوم',
};

export default product;
