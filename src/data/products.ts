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

✨ **لماذا هذا الفانوس هو الخيار الأفضل؟** ✨

- 💡 **إضاءة تغطي المكان:** مزود بإضاءة LED قوية تحول الليل إلى نهار، لتتمتع بوضوح رؤية كامل أينما كنت.
- 🔋 **طاقة لا تنتهي:** يعمل كباور بانك قوي لشحن جوالك وأجهزتك بسرعة عبر منفذ USB، قل وداعًا للقلق من نفاذ البطارية!
- 🧲 **تثبيت ذكي:** بفضل قاعدته المغناطيسية القوية، يمكنك تثبيته بسهولة على أي سطح معدني - هيكل السيارة، عمود الخيمة، أو أي مكان آخر.
- 🤸 **مرونة عالية:** اضبط زاوية الإضاءة كيفما تشاء لتناسب احتياجاتك، سواء كنت تقرأ، تطبخ، أو تصلح شيئًا ما.
- 🌧️ **صُنع ليتحمل:** مصمم بمواد عالية الجودة لمقاومة المطر، الغبار، وكل الظروف الجوية القاسية. مغامراتك لن تتوقف!
- 🎒 **خفيف وعملي:** وزنه الخفيف وتصميمه المدمج يجعله سهل الحمل في حقيبتك لأي مكان، من رحلات البر إلى حالات الطوارئ في المنزل.

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
