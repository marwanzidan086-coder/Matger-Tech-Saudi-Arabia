
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-amber-500"><path d="M2 12.5a10.5 10.5 0 1 0 21 0"/><path d="M12 2v6"/><path d="M18.36 6.64l-4.24 4.24"/><path d="M22 12.5h-6"/><path d="M6.64 18.36l4.24-4.24"/></svg>
        <span>صوت عالي الجودة مع تقنية BassUp</span>
      </li>
      <li class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-amber-500"><path d="M2 9.5A2.5 2.5 0 0 1 4.5 7h15A2.5 2.5 0 0 1 22 9.5v5A2.5 2.5 0 0 1 19.5 17h-15A2.5 2.5 0 0 1 2 14.5Z"/><path d="m13 12-3 2V10l3 2Z"/></svg>
        <span>بطارية تدوم حتى 25 ساعة مع علبة الشحن</span>
      </li>
      <li class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-amber-500"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/><path d="M12 12v-2"/></svg>
        <span>مقاومة للماء بمعيار IPX5</span>
      </li>
      <li class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-amber-500"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        <span>شحن سريع USB-C</span>
      </li>
    </ul>
  </div>

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
        images: [
            "https://i.ibb.co/C0W2vFm/image.png",
            "https://i.ibb.co/3yvz06sb/image-1.jpg",
            "https://i.ibb.co/J1bwZdm/image-2.jpg"
        ],
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
