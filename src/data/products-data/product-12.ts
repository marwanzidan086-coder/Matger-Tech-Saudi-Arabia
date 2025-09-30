import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-12',
  name: 'تابلت 07 بكيبورد وماوس بلوتوث',
  slug: 'tablet-07-with-keyboard-mouse',
  description: `أطلق العنان لإبداعك وإنتاجيتك مع تابلت 07! جهاز لوحي متكامل يأتي مع كيبورد وماوس وقلم، ليتحول إلى لابتوب صغير وقتما تشاء.###FEATURES###- شاشة كبيرة 7 إنش بدقة FHD.
- ذاكرة RAM ضخمة 16GB لتشغيل سلس.
- سعة تخزين 1TB لحفظ كل ملفاتك.
- كاميرا خلفية 30MP وأمامية 13MP.
- نظام Android 13 حديث.
- بطارية 8000mAh تدوم طويلاً.###DETAILS###- حجم الشاشة: 7 بوصة
- الذاكرة الداخلية: 1 تيرابايت
- الذاكرة العشوائية: 16 جيجا رام
- الكاميرا الخلفية: 30 ميجا بكسل
- البطارية: 8000 مللي أمبير`,
  price: 699.99,
  images: [
    "https://i.ibb.co/NgS7X1rN/image-1.jpg",
    "https://i.ibb.co/yFfCLvGJ/image-2.jpg",
    "https://i.ibb.co/qMGrPz35/image-3.jpg",
    "https://i.ibb.co/C36PndMx/image-4.jpg",
    "https://i.ibb.co/5XGQmTBQ/image-5.jpg"
  ],
  category: 'electronics',
  warranty: '6 أشهر',
};

export default product;
