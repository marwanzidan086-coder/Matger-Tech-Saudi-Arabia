import { type Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { categories } from '@/lib/categories';

const getImages = (productId: string): string[] => {
  const imageSet = PlaceHolderImages.find(img => img.id === productId);
  if (imageSet && imageSet.images.length > 0) {
    return imageSet.images;
  }
  // Fallback to a generic set of 5 images using the correct productId if not found
  return Array.from({length: 5}, (_, i) => `https://picsum.photos/seed/${productId}-${i + 1}/600/600`);
};

const electronicsProducts: Product[] = [
    {
        id: 'dlc-multi-use-lantern',
        name: 'فانوس الكشتات والرحلات DLC-32898 متعدد الاستخدامات مع باور بانك',
        slug: 'dlc-multi-use-lantern',
        description: `🔦 **رفيقك الأمثل في كل مغامرة!** ⛺️

هل أنت من عشاق الرحلات والكشتات؟ هل تحتاج إلى إضاءة قوية وطاقة لا تنقطع في حالات الطوارئ؟ نقدم لك "راعي الكشتات"، الفانوس الذي سيغير قواعد اللعبة!

<div class="my-4 p-4 bg-primary/5 border-r-4 border-primary rounded-lg">
  <h3 class="text-xl font-bold text-primary" style="text-shadow: 0 0 8px hsl(var(--primary) / 0.5);">✨ أهم المميزات ✨</h3>
  <ul class="list-disc list-inside mt-2 space-y-1 text-base">
    <li>💡 **إضاءة تغطي المكان:** LED قوي يحول الليل إلى نهار.</li>
    <li>🔋 **طاقة لا تنتهي:** يعمل كباور بانك لشحن جوالك وأجهزتك.</li>
    <li>🧲 **تثبيت ذكي:** قاعدة مغناطيسية قوية للتثبيت على أي سطح معدني.</li>
    <li>🌧️ **صُنع ليتحمل:** مقاوم للمطر، الغبار، وكل الظروف القاسية.</li>
    <li>🎒 **خفيف وعملي:** سهل الحمل في حقيبتك لأي مكان.</li>
  </ul>
</div>

مع ضمان لمدة عامين، يمكنك الوثوق بأن هذا الفانوس سيعيش معك طويلاً. لا تدع الظلام أو البطارية الفارغة توقفك. **اطلبه الآن واستعد لإضاءة كل لحظاتك!**`,
        price: 150.00,
        images: getImages('dlc-multi-use-lantern'),
        category: categories.electronics.slug
    },
];

const miscProducts: Product[] = [
];

const healthProducts: Product[] = [
];

const homeProducts: Product[] = [
];


export const products: Product[] = [
    ...electronicsProducts,
    ...miscProducts,
    ...healthProducts,
    ...homeProducts
];
