import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-6',
  name: 'هارد محمول سعة 500 جيجابايت',
  slug: 'portable-hard-drive-500gb',
  description: `احتفظ بذكرياتك وملفاتك المهمة بأمان وأناقة! هذا الهارد المحمول ليس مجرد مساحة تخزين، بل هو قلعة متينة لبياناتك.###FEATURES###- سعة 500GB لتخزين كل ملفاتك.
- واجهة USB 3.0 عالية السرعة لنقل سريع.
- تصميم معدني أنيق ومتين.
- مقاوم للصدمات والخدوش.
- تشغيل مباشر بدون برامج (Plug & Play).###DETAILS###- الحجم: 2.5 إنش
- السرعة: 5400 RPM
- الواجهة: USB 3.0
- المادة: معدن
- متوافق مع: ويندوز وماك`,
  price: 189.99,
  category: 'electronics',
  warranty: '3 سنوات',
};

export default product;
