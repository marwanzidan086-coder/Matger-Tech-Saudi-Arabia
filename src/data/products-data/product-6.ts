import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-6',
  name: 'هارد محمول سعة 500 جيجابايت',
  slug: 'portable-hard-drive-500gb',
  story: `كل صورة، كل وثيقة، كل ذكرى غالية لها مكان آمن. هذا الهارد المحمول ليس مجرد قطعة معدنية، بل هو خزانة ذكرياتك الرقمية. بتصميمه الأنيق المقاوم للصدمات وسرعته الفائقة، يمكنك أن تثق به ليحفظ أهم لحظات حياتك ويجعلها في متناول يدك دائمًا، أينما ذهبت. إنه أكثر من مجرد تخزين، إنه راحة بال.`,
  description: `احتفظ بذكرياتك وملفاتك المهمة بأمان وأناقة! هذا الهارد المحمول ليس مجرد مساحة تخزين، بل هو قلعة متينة لبياناتك.###FEATURES###- سعة 500GB لتخزين كل ملفاتك.
- واجهة USB 3.0 عالية السرعة لنقل سريع.
- تصميم معدني أنيق ومتين.
- مقاوم للصدمات والخدوش.
- تشغيل مباشر بدون برامج (Plug & Play).###DETAILS###- الحجم: 2.5 إنش
- السرعة: 5400 RPM
- الواجهة: USB 3.0
- المادة: معدن`,
  price: 189.99,
  images: [
    "https://i.ibb.co/60XPjsFd/image-1.jpg",
    "https://i.ibb.co/4RhKHryV/image-2.jpg",
    "https://i.ibb.co/S4bft3ty/image-3.jpg",
    "https://i.ibb.co/9kdXsNcd/image-4.jpg",
    "https://i.ibb.co/C3dCwPfP/image-5.jpg"
  ],
  category: 'electronics',
  warranty: '3 سنوات',
};

export default product;
