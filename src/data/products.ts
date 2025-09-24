
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
<div class="space-y-6">
  <p class="text-lg font-semibold text-center">🔦 رفيقك الأمثل في كل مغامرة! ⛺️</p>
  <p class="text-base text-center text-foreground/80">هل أنت من عشاق الرحلات والكشتات؟ هل تحتاج إلى إضاءة قوية وطاقة لا تنقطع في حالات الطوارئ؟ نقدم لك الفانوس الذي سيغير قواعد اللعبة!</p>

  <div class="py-4">
    <h3 class="text-xl font-bold text-center mb-4 text-primary">أهم المميزات:</h3>
    <ul class="space-y-2 text-foreground/90 list-inside">
      <li class="flex items-start gap-2"><span>💡</span> إضاءة LED قوية تنور لك المكان بوضوح.</li>
      <li class="flex items-start gap-2"><span>🔋</span> بطارية قوية تدوم معك لفترة طويلة مع شحن USB سريع.</li>
      <li class="flex items-start gap_2"><span>🧲</span> تصميم مغناطيسي يثبت على أي سطح معدني بسهولة.</li>
      <li class="flex items-start gap-2"><span>🔄</span> قابل للتعديل بزوايا متعددة لتناسب كل احتياجاتك.</li>
      <li class="flex items-start gap-2"><span>🌧️</span> مقاوم للمطر والغبار والظروف القاسية.</li>
      <li class="flex items-start gap-2"><span>🎒</span> خفيف الوزن وسهل الحمل والتخزين في أي مكان.</li>
      <li class="flex items-start gap-2"><span>🛠️</span> مصنوع من خامات عالية الجودة ليعيش معك طويلاً.</li>
      <li class="flex items-start gap-2"><span>🏠</span> مثالي للمنزل، الرحلات، الطوارئ والاستخدام اليومي.</li>
    </ul>
  </div>

  <div class="py-4">
    <h3 class="text-xl font-bold text-center mb-4 text-primary">تفاصيل سريعة:</h3>
    <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
            <tbody>
                <tr class="border-b"><td class="px-4 py-2 font-semibold">الماركة</td><td class="px-4 py-2">DLC</td></tr>
                <tr class="border-b"><td class="px-4 py-2 font-semibold">الموديل</td><td class="px-4 py-2">DLC-32898</td></tr>
                <tr class="border-b"><td class="px-4 py-2 font-semibold">الضمان</td><td class="px-4 py-2">عامين</td></tr>
                <tr class="border-b"><td class="px-4 py-2 font-semibold">القدرة</td><td class="px-4 py-2">6 - 10 واط</td></tr>
                <tr class="border-b"><td class="px-4 py_2 font-semibold">مصدر الطاقة</td><td class="px-4 py-2">USB قابل للشحن</td></tr>
                <tr><td class="px-4 py-2 font-semibold">الخاصية</td><td class="px-4 py-2">مقاوم للطقس</td></tr>
            </tbody>
        </table>
    </div>
  </div>

  <div class="py-4">
    <h3 class="text-xl font-bold text-center mb-4 text-primary">محتويات المنتج:</h3>
    <ul class="space-y-2 list-inside">
      <li>1 × مصباح DLC-32898 قابل للشحن</li>
      <li>1 × كابل شحن USB</li>
      <li>1 × قاعدة مغناطيسية للتثبيت</li>
      <li>1 × دليل استخدام</li>
    </ul>
  </div>

  <div class="py-4">
    <h3 class="text-xl font-bold text-center mb-4 text-primary">كيفية الاستخدام:</h3>
    <ol class="space-y-2 list-decimal list-inside">
        <li>اشحن المصباح بالكامل باستخدام كابل الـ USB.</li>
        <li>ثبّت المصباح على أي سطح معدني باستخدام القاعدة المغناطيسية، أو استخدمه باليد.</li>
        <li>اضغط على زر التشغيل لتشغيل الإضاءة أو إيقافها.</li>
        <li>عدّل زاوية الإضاءة حسب رغبتك.</li>
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


