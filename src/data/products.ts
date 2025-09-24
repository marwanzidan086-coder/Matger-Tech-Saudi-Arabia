
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
        id: 'soundcore-r100',
        name: 'سماعة ساوند كور R100',
        slug: 'soundcore-r100',
        description: `
<div class="space-y-6 text-foreground/90 text-right">
  
  <p class="text-base">
    استمتع بصوت نقي وجهير عميق مع سماعات ساوند كور R100 اللاسلكية. تصميم مريح للاستخدام طوال اليوم وبطارية تدوم لساعات.
  </p>

  <hr class="border-border/50">

  <div>
    <h3 class="text-xl font-bold mb-4">مميزات المنتج</h3>
    <ul class="space-y-3">
      <li class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M2 12.5a10.5 10.5 0 1 0 21 0"/><path d="M12 2v6"/><path d="M18.36 6.64l-4.24 4.24"/><path d="M22 12.5h-6"/><path d="M6.64 18.36l4.24-4.24"/></svg>
        <span>صوت عالي الجودة مع تقنية BassUp</span>
      </li>
      <li class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M2 9.5A2.5 2.5 0 0 1 4.5 7h15A2.5 2.5 0 0 1 22 9.5v5A2.5 2.5 0 0 1 19.5 17h-15A2.5 2.5 0 0 1 2 14.5Z"/><path d="m13 12-3 2V10l3 2Z"/></svg>
        <span>بطارية تدوم حتى 25 ساعة مع علبة الشحن</span>
      </li>
      <li class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/><path d="M12 12v-2"/></svg>
        <span>مقاومة للماء بمعيار IPX5</span>
      </li>
      <li class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        <span>شحن سريع USB-C</span>
      </li>
    </ul>
  </div>

  <hr class="border-border/50">

  <div>
    <h3 class="text-xl font-bold mb-4">تفاصيل سريعة</h3>
    <ul class="space-y-2">
      <li><span class="font-semibold">- اللون:</span> أسود</li>
      <li><span class="font-semibold">- الاتصال:</span> بلوتوث 5.0</li>
      <li><span class="font-semibold">- الوزن:</span> 40 جرام</li>
    </ul>
  </div>

</div>
`,
        price: 120.00,
        images: getImages('soundcore-r100'),
        category: categories.electronics.slug
    },
    {
      id: 'dlc-multi-use-lantern',
      name: 'كشاف DLC متعدد الاستخدامات',
      slug: 'dlc-multi-use-lantern',
      description: `
<div class="space-y-8 font-sans">
    <div class="text-center">
        <h2 class="text-2xl font-bold tracking-tight text-primary animate-pulse">🔦 رفيقك الأمثل في كل مغامرة! ⛺️</h2>
    </div>

    <div class="mt-6">
        <h3 class="text-xl font-bold text-primary mb-4" style="text-shadow: 0 0 8px hsl(var(--primary) / 0.5);">✨ أهم المميزات ✨</h3>
        <ul class="space-y-3 text-foreground/90">
            <li class="flex items-start gap-3">
                <span class="text-lg">💡</span>
                <div>
                    <span class="font-bold">إضاءة كاشفة:</span>
                    <span>تنور لك المكان بوضوح تام وتحول الليل إلى نهار.</span>
                </div>
            </li>
            <li class="flex items-start gap-3">
                <span class="text-lg">🔋</span>
                <div>
                    <span class="font-bold">باور بانك مدمج:</span>
                    <span>طاقة لا تنقطع وشحن سريع لجوالك عبر USB.</span>
                </div>
            </li>
            <li class="flex items-start gap-3">
                <span class="text-lg">🧲</span>
                <div>
                    <span class="font-bold">تثبيت مغناطيسي:</span>
                    <span>يثبت بقوة على أي سطح معدني بثبات.</span>
                </div>
            </li>
            <li class="flex items-start gap-3">
                <span class="text-lg">🌧️</span>
                <div>
                    <span class="font-bold">تصميم متين:</span>
                    <span>مقاوم للمطر والغبار ومصمم للظروف القاسية.</span>
                </div>
            </li>
            <li class="flex items-start gap-3">
                <span class="text-lg">⚙️</span>
                <div>
                    <span class="font-bold">سهل الاستخدام:</span>
                    <span>خفيف الوزن، متعدد الزوايا، ومثالي للتنقل.</span>
                </div>
            </li>
        </ul>
    </div>

    <div class="mt-8">
        <h3 class="text-xl font-bold text-primary mb-4" style="text-shadow: 0 0 8px hsl(var(--primary) / 0.5);">🚀 تفاصيل سريعة 🚀</h3>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-foreground/80">
                <tbody class="divide-y divide-border/50">
                    <tr class="hover:bg-muted/50">
                        <th scope="row" class="px-4 py-2 font-medium whitespace-nowrap">الماركة</th>
                        <td class="px-4 py-2">DLC</td>
                    </tr>
                    <tr class="hover:bg-muted/50">
                        <th scope="row" class="px-4 py-2 font-medium whitespace-nowrap">الموديل</th>
                        <td class="px-4 py-2">DLC-32898</td>
                    </tr>
                    <tr class="hover:bg-muted/50">
                        <th scope="row" class="px-4 py-2 font-medium whitespace-nowrap">الضمان</th>
                        <td class="px-4 py-2">عامين</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`,
      price: 95.00,
      images: getImages('dlc-multi-use-lantern'),
      category: categories.electronics.slug,
    }
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
