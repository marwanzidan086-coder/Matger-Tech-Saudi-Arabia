
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
        description: `
<div class="space-y-6 text-foreground/90 bg-muted/20 p-4 rounded-lg">
  <p class="text-lg font-semibold text-center text-primary">🔦 رفيقك الأمثل في كل مغامرة! ⛺️</p>
  <p class="text-base text-center">هل أنت من عشاق الرحلات والكشتات؟ هل تحتاج إلى إضاءة قوية وطاقة لا تنقطع في حالات الطوارئ؟ نقدم لك الفانوس الذي سيغير قواعد اللعبة!</p>

  <div>
    <h3 class="text-xl font-bold text-primary mb-3">أهم المميزات:</h3>
    <div class="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4"></div>
    <ul class="space-y-2 list-inside">
      <li><span class="font-semibold text-primary">إضاءة قوية:</span> تنور لك المكان بوضوح تام.</li>
      <li><span class="font-semibold text-primary">شحن سريع:</span> طاقة لا تنقطع بسهولة عبر USB.</li>
      <li><span class="font-semibold text-primary">تثبيت مغناطيسي:</span> يثبت على أي سطح معدني بثبات.</li>
      <li><span class="font-semibold text-primary">زوايا متعددة:</span> قابل للتعديل ليناسب كل احتياجاتك.</li>
      <li><span class="font-semibold text-primary">تصميم متين:</span> مقاوم للمطر والغبار والظروف القاسية.</li>
      <li><span class="font-semibold text-primary">بطارية تدوم:</span> قدرة عالية لتشغيل طويل.</li>
      <li><span class="font-semibold text-primary">سهل الحمل:</span> خفيف الوزن ومثالي للتنقل.</li>
      <li><span class="font-semibold text-primary">متعدد الاستخدامات:</span> مثالي للمنزل، الرحلات، والطوارئ.</li>
    </ul>
  </div>

  <div>
    <h3 class="text-xl font-bold text-primary mb-3">تفاصيل سريعة:</h3>
    <div class="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4"></div>
    <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
            <tbody>
                <tr class="border-b border-border/50"><td class="px-4 py-2 font-semibold">الماركة</td><td class="px-4 py-2">DLC</td></tr>
                <tr class="border-b border-border/50"><td class="px-4 py-2 font-semibold">الموديل</td><td class="px-4 py-2">DLC-32898</td></tr>
                <tr class="border-b border-border/50"><td class="px-4 py-2 font-semibold">الضمان</td><td class="px-4 py-2">عامين</td></tr>
                <tr class="border-b border-border/50"><td class="px-4 py-2 font-semibold">القدرة</td><td class="px-4 py-2">6 - 10 واط</td></tr>
                <tr class="border-b border-border/50"><td class="px-4 py-2 font-semibold">مصدر الطاقة</td><td class="px-4 py-2">USB قابل للشحن</td></tr>
                <tr><td class="px-4 py-2 font-semibold">الخاصية المميزة</td><td class="px-4 py-2">مقاوم للطقس</td></tr>
            </tbody>
        </table>
    </div>
  </div>

  <div>
    <h3 class="text-xl font-bold text-primary mb-3">محتويات المنتج:</h3>
    <div class="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4"></div>
    <ul class="space-y-2 list-inside">
      <li>1 × مصباح DLC-32898 قابل للشحن</li>
      <li>1 × كابل شحن USB</li>
      <li>1 × قاعدة مغناطيسية للتثبيت</li>
      <li>1 × دليل استخدام</li>
    </ul>
  </div>

  <div>
    <h3 class="text-xl font-bold text-primary mb-3">كيفية الاستخدام:</h3>
    <div class="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4"></div>
    <ol class="space-y-2 list-decimal list-inside">
        <li>اشحن المصباح بالكامل باستخدام كابل الـ USB المرفق.</li>
        <li>ثبّت المصباح على أي سطح معدني، أو استخدمه باليد.</li>
        <li>اضغط على زر التشغيل لتشغيل الإضاءة أو إيقافها.</li>
        <li>عدّل زاوية الإضاءة حسب رغبتك.</li>
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
