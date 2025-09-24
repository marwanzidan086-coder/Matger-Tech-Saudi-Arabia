
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
        description: `استمتع بصوت نقي وجهير عميق مع سماعات ساوند كور R100 اللاسلكية. تصميم مريح للاستخدام طوال اليوم وبطارية تدوم لساعات.
###FEATURES###
- صوت عالي الجودة مع تقنية BassUp
- بطارية تدوم حتى 25 ساعة مع علبة الشحن
- مقاومة للماء بمعيار IPX5
- شحن سريع USB-C
###DETAILS###
- اللون: أسود
- الاتصال: بلوتوث 5.0
- الوزن: 40 جرام`,
        price: 220.00,
        images: getImages('soundcore-r100'),
        category: categories.electronics.slug
    },
    {
      id: 'dlc-multi-use-lantern',
      name: 'كشاف DLC متعدد الاستخدامات',
      slug: 'dlc-multi-use-lantern',
      description: `رفيقك الأمثل في كل مغامرة! هذا الكشاف القوي ليس مجرد مصدر إضاءة، بل هو أداة متكاملة للطوارئ والرحلات بفضل تصميمه المتين ومميزاته العملية.
###FEATURES###
- إضاءة كاشفة قوية
- باور بانك مدمج لشحن جوالك
- تثبيت مغناطيسي قوي على الأسطح المعدنية
- مقاوم للمطر والغبار
- خفيف الوزن وسهل الحمل
###DETAILS###
- الماركة: DLC
- الموديل: DLC-32898
- الضمان: عامين`,
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
