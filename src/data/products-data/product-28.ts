import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-28',
  name: 'جهاز السينما المتنقل الذكي',
  slug: 'smart-portable-cinema-projector',
  description: `حوّل أي مكان إلى سينما خاصة بك! هذا البروجكتر الذكي والمحمول يعرض صورة عالية الدقة تصل إلى 4K، مع تصميم دوار 180 درجة لعرض الصورة حتى على السقف.###FEATURES###- تصميم دوار 180 درجة.
- يدعم دقة 4K مع تصحيح تلقائي للانحراف.
- نظام تشغيل أندرويد 11.0 مدمج.
- مكبرات صوت ستيريو 5 واط.
- يدعم الاتصال اللاسلكي بالهواتف.###DETAILS###- نظام التشغيل: أندرويد 11.0
- الدقة الأصلية: 1280 × 720 بكسل (يدعم 4K)
- السطوع: 120 لومن ANSI
- الاتصال: واي فاي، بلوتوث 4.1, HDMI`,
  price: 399.99,
  category: 'electronics',
};

export default product;
