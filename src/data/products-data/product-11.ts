import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-11',
  name: 'محول الجوال الى جهاز كمبيوتر من دينكس',
  slug: 'denx-mobile-to-pc-adapter',
  description: `حوّل جوالك إلى محطة عمل متكاملة! محول دينكس هو الحل السحري لتوصيل كل ملحقاتك بجهاز واحد. اعرض على شاشة كبيرة، انقل ملفاتك بسرعة، واقرأ كروت الذاكرة.###FEATURES###- يعرض لك فيديو بجودة 4K عن طريق HDMI.
- سرعة نقل عالية عبر منافذ USB (توصل 5Gbps).
- فيه قارئ كروت TF/SD للصور والملفات.
- يدعم أحدث تقنية Type-C.
- متوافق مع اللابتوبات، الجوالات، والتابلت.###DETAILS###- الماركة: دينكس
- إخراج الفيديو: 4K عبر HDMI
- المنافذ: USB, Type-C, SD/TF
- سرعة النقل: تصل إلى 5Gbps`,
  price: 149.99,
  category: 'electronics',
  warranty: 'عامين',
};

export default product;
