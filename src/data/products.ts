
import { type Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { categories } from '@/lib/categories';

const getImages = (productId: string): string[] => {
  const imageSet = PlaceHolderImages.find(img => img.id === productId);
  if (imageSet && imageSet.images.length > 0) {
    return imageSet.images;
  }
  // Fallback to a generic set of 9 images using the correct productId if not found
  return Array.from({length: 9}, (_, i) => `https://picsum.photos/seed/${productId}-${i + 1}/600/600`);
};

const electronicsProducts: Product[] = [
    {
        id: 'dlc-multi-use-lantern',
        name: 'فانوس الكشتات والرحلات DLC-32898',
        slug: 'dlc-multi-use-lantern',
        description: `
<div class="bg-gradient-to-b from-muted/20 to-transparent rounded-lg p-4 text-foreground/90">
  <div class="text-center mb-6">
    <p class="text-lg font-semibold">🔦 رفيقك الأمثل في كل مغامرة! ⛺️</p>
  </div>

  <div class="mb-8">
    <h3 class="text-xl font-bold text-center text-green-400 mb-3" style="text-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e;">✨ أهم المميزات ✨</h3>
    <ul class="space-y-3 list-none p-0">
      <li class="flex items-start gap-3"><span class="text-green-400 mt-1">💡</span><div><strong class="text-primary">إضاءة كاشفة:</strong> تنور لك المكان بوضوح تام وتحول الليل إلى نهار.</div></li>
      <li class="flex items-start gap-3"><span class="text-green-400 mt-1">🔋</span><div><strong class="text-primary">باور بانك مدمج:</strong> طاقة لا تنقطع وشحن سريع لجوالك عبر USB.</div></li>
      <li class="flex items-start gap-3"><span class="text-green-400 mt-1">🧲</span><div><strong class="text-primary">تثبيت مغناطيسي:</strong> يثبت بقوة على أي سطح معدني بثبات.</div></li>
      <li class="flex items-start gap-3"><span class="text-green-400 mt-1">🌧️</span><div><strong class="text-primary">تصميم متين:</strong> مقاوم للمطر والغبار ومصمم للظروف القاسية.</div></li>
      <li class="flex items-start gap-3"><span class="text-green-400 mt-1">⚙️</span><div><strong class="text-primary">سهل الاستخدام:</strong> خفيف الوزن، متعدد الزوايا، ومثالي للتنقل.</div></li>
    </ul>
  </div>

  <div class="mb-8">
    <h3 class="text-xl font-bold text-center text-green-400 mb-3" style="text-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e;">🚀 تفاصيل سريعة 🚀</h3>
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-right border-collapse">
        <tbody>
          <tr class="border-b border-border/50"><td class="px-4 py-2 font-semibold text-primary">الماركة:</td><td class="px-4 py-2">DLC</td></tr>
          <tr class="border-b border-border/50"><td class="px-4 py-2 font-semibold text-primary">الموديل:</td><td class="px-4 py-2">DLC-32898</td></tr>
          <tr><td class="px-4 py-2 font-semibold text-primary">الضمان:</td><td class="px-4 py-2">عامين</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <div class="mb-8">
    <h3 class="text-xl font-bold text-center text-green-400 mb-3" style="text-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e;">📦 محتويات المنتج 📦</h3>
    <ul class="space-y-2 list-disc list-inside pr-4">
        <li>مصباح DLC-32898 قابل للشحن</li>
        <li>كابل شحن USB</li>
        <li>قاعدة مغناطيسية للتثبيت</li>
        <li>دليل استخدام</li>
    </ul>
  </div>

  <div>
      <h3 class="text-xl font-bold text-center text-green-400 mb-3" style="text-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e;">⚙️ كيفية الاستخدام ⚙️</h3>
      <ol class="space-y-2 list-decimal list-inside pr-4">
          <li>اشحن المصباح بالكامل قبل أول استخدام.</li>
          <li>ثبّت المصباح باستخدام القاعدة المغناطيسية أو ضعه في المكان المناسب.</li>
          <li>اضغط على زر التشغيل للتحكم في الإضاءة.</li>
          <li>بعد الاستخدام، نظّفه وخزّنه في مكان جاف.</li>
      </ol>
  </div>
</div>
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
