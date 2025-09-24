
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
<p class="my-4 text-base leading-relaxed text-foreground/80">هل أنت من عشاق الرحلات والكشتات؟ هل تحتاج إلى إضاءة قوية وطاقة لا تنقطع في حالات الطوارئ؟ نقدم لك الفانوس الذي سيغير قواعد اللعبة!</p>

<div class="my-6 p-4 rounded-lg bg-gradient-to-br from-card to-muted/50 border border-border/20">
  <h3 class="text-2xl font-bold text-center mb-5" style="color: #63b3ed; text-shadow: 0 0 8px rgba(99, 179, 237, 0.7);">🚀 أهم المميزات</h3>
  <div class="space-y-4">
    
    <div class="flex items-start gap-3">
      <span class="text-3xl mt-1">💡</span>
      <div>
        <h4 class="font-bold text-primary">إضاءة تغطي المكان</h4>
        <p class="text-sm text-foreground/90">LED قوي يحول الليل إلى نهار.</p>
      </div>
    </div>
    
    <div class="flex items-start gap-3">
      <span class="text-3xl mt-1">🔋</span>
      <div>
        <h4 class="font-bold text-primary">طاقة لا تنتهي</h4>
        <p class="text-sm text-foreground/90">يعمل كباور بانك لشحن جوالك.</p>
      </div>
    </div>
    
    <div class="flex items-start gap-3">
      <span class="text-3xl mt-1">🧲</span>
      <div>
        <h4 class="font-bold text-primary">تثبيت ذكي</h4>
        <p class="text-sm text-foreground/90">قاعدة مغناطيسية قوية للتثبيت.</p>
      </div>
    </div>
    
    <div class="flex items-start gap-3">
      <span class="text-3xl mt-1">🌧️</span>
      <div>
        <h4 class="font-bold text-primary">صُنع ليتحمل</h4>
        <p class="text-sm text-foreground/90">مقاوم للمطر والغبار والظروف القاسية.</p>
      </div>
    </div>

  </div>
</div>

<p class="mt-6 text-base text-foreground/80">مع ضمان لمدة عامين، يمكنك الوثوق بأن هذا الفانوس سيعيش معك طويلاً. لا تدع الظلام أو البطارية الفارغة توقفك. <strong>اطلبه الآن واستعد لإضاءة كل لحظاتك!</strong></p>
`,
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
