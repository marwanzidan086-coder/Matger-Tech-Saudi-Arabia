import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-36',
  name: 'محول الشاشة العادية للأندرويد + مجموعة ألعاب',
  slug: 'android-tv-box-gaming-bundle',
  description: `حوّل تلفزيونك العادي إلى منصة ألعاب وترفيه ذكية! هذا الجهاز بنظام أندرويد يدعم دقة 8K ويأتي مع آلاف الألعاب الكلاسيكية وذراعي تحكم لاسلكية لتجربة لعب لا مثيل لها.###FEATURES###- يدعم دقة عرض 8K Ultra HD.
- يأتي مع ذراعي تحكم لاسلكية.
- نظام أندرويد لتحميل التطبيقات ومشاهدة الأفلام.
- آلاف الألعاب الكلاسيكية مدمجة.
- توصيل سهل عبر HDMI.###DETAILS###- النظام: أندرويد
- الاتصال: 5G, HDMI, لاسلكي
- يدعم: التلفزيونات، اللابتوبات، البروجكترات`,
  price: 349.99,
  category: 'electronics',
};

export default product;
