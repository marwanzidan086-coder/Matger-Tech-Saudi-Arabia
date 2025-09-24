
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
        price: 95.00,
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
      price: 220.00,
      images: getImages('dlc-multi-use-lantern'),
      category: categories.electronics.slug,
    },
    {
        id: 'anker-powercore-10000',
        name: 'باور بانك أنكر باور كور 10000',
        slug: 'anker-powercore-10000',
        description: `لا تدع بطارية هاتفك تنفد مجددًا. مع باور بانك أنكر باور كور، ستحصل على شحن سريع وآمن في جهاز صغير الحجم وخفيف الوزن يمكنك أخذه معك في كل مكان.
###FEATURES###
- تقنية PowerIQ و VoltageBoost للشحن السريع
- تصميم مدمج وخفيف الوزن
- نظام أمان MultiProtect
- يكفي لشحن معظم الهواتف مرتين
###DETAILS###
- السعة: 10000mAh
- الإخراج: 5V/2.4A
- الوزن: 180 جرام`,
        price: 150.00,
        images: getImages('anker-powercore-10000'),
        category: categories.electronics.slug
    }
];

const miscProducts: Product[] = [
    {
        id: 'smart-coffee-mug',
        name: 'كوب قهوة ذكي',
        slug: 'smart-coffee-mug',
        description: `حافظ على درجة حرارة مشروبك المثالية لساعات. هذا الكوب الذكي يسمح لك بالتحكم في درجة حرارة قهوتك أو الشاي من خلال تطبيق على هاتفك.
###FEATURES###
- التحكم في درجة الحرارة من 50 إلى 62 درجة مئوية
- عمر بطارية يصل إلى 1.5 ساعة
- تصميم أنيق من السيراميك
- مقاوم للماء وسهل التنظيف
###DETAILS###
- السعة: 295 مل
- المادة: سيراميك
- اللون: أبيض`,
        price: 450.00,
        images: getImages('smart-coffee-mug'),
        category: categories.misc.slug
    },
    {
        id: 'led-desk-lamp',
        name: 'مصباح مكتبي LED مع شاحن لاسلكي',
        slug: 'led-desk-lamp',
        description: `أضف لمسة من الأناقة والتكنولوجيا إلى مكتبك. يوفر هذا المصباح إضاءة قابلة للتعديل مع قاعدة شحن لاسلكي مدمجة لهاتفك الذكي.
###FEATURES###
- 5 أوضاع للإضاءة و 7 مستويات سطوع
- شاحن لاسلكي سريع بقوة 10 واط
- منفذ USB لشحن جهاز إضافي
- تصميم عصري قابل للطي
###DETAILS###
- نوع الإضاءة: LED
- قوة الشاحن: 10W Qi
- المواد: ألومنيوم وبلاستيك`,
        price: 180.00,
        images: getImages('led-desk-lamp'),
        category: categories.misc.slug
    }
];

const healthProducts: Product[] = [
    {
        id: 'smart-scale',
        name: 'ميزان ذكي لتحليل الجسم',
        slug: 'smart-scale',
        description: `تتبع أهدافك الصحية بدقة غير مسبوقة. هذا الميزان الذكي لا يقيس وزنك فحسب، بل يحلل 13 مؤشرًا حيويًا مختلفًا لصحتك ويرسلها مباشرة إلى هاتفك.
###FEATURES###
- يقيس 13 مؤشرًا (الوزن، دهون الجسم، كتلة العضلات، إلخ)
- يتزامن مع تطبيقات الصحة (Apple Health, Google Fit)
- يدعم عدد غير محدود من المستخدمين
- سطح زجاجي متين وسهل التنظيف
###DETAILS###
- الاتصال: بلوتوث
- المادة: زجاج مقوى
- الحد الأقصى للوزن: 180 كجم`,
        price: 165.00,
        images: getImages('smart-scale'),
        category: categories.health.slug
    },
    {
        id: 'handheld-massager',
        name: 'جهاز مساج يدوي للأنسجة العميقة',
        slug: 'handheld-massager',
        description: `تخلص من آلام العضلات والتوتر بعد يوم طويل. يوفر هذا المدلك اليدوي القوي اهتزازات عميقة لتخفيف تصلب العضلات وتحسين الدورة الدموية.
###FEATURES###
- 6 رؤوس تدليك قابلة للتبديل
- 5 سرعات قابلة للتعديل
- بطارية قابلة لإعادة الشحن تدوم طويلاً
- تصميم مريح وهادئ أثناء التشغيل
###DETAILS###
- مصدر الطاقة: بطارية ليثيوم
- مدة الشحن: 3 ساعات
- الوزن: 900 جرام`,
        price: 350.00,
        images: getImages('handheld-massager'),
        category: categories.health.slug
    }
];

const homeProducts: Product[] = [
    {
        id: 'robot-vacuum-cleaner',
        name: 'مكنسة روبوت ذكية',
        slug: 'robot-vacuum-cleaner',
        description: `دع التكنولوجيا تتولى مهمة التنظيف. هذه المكنسة الذكية تقوم بمسح وكنس منزلك بكفاءة، ويمكنك التحكم فيها بسهولة عبر الأوامر الصوتية أو تطبيق الجوال.
###FEATURES###
- قوة شفط عالية
- نظام ملاحة ذكي لرسم خرائط المنزل
- التحكم عبر التطبيق والأوامر الصوتية (Alexa, Google Assistant)
- تعود تلقائيًا إلى قاعدة الشحن
###DETAILS###
- مدة التشغيل: 150 دقيقة
- سعة صندوق الغبار: 600 مل
- مستوى الضوضاء: 55 ديسيبل`,
        price: 850.00,
        images: getImages('robot-vacuum-cleaner'),
        category: categories.home.slug
    },
    {
        id: 'smart-air-purifier',
        name: 'منقي هواء ذكي',
        slug: 'smart-air-purifier',
        description: `تنفس هواءً نقيًا وصحيًا في منزلك. يقوم هذا الجهاز الذكي بإزالة 99.97% من مسببات الحساسية والغبار والدخان والروائح الكريهة من الهواء.
###FEATURES###
- فلتر HEPA ثلاثي المراحل
- يغطي مساحة تصل إلى 40 مترًا مربعًا
- مستشعر جودة الهواء التلقائي
- وضع النوم الهادئ
###DETAILS###
- CADR (معدل توصيل الهواء النقي): 200 م³/ساعة
- الاتصال: واي فاي
- الأبعاد: 22x22x36 سم`,
        price: 550.00,
        images: getImages('smart-air-purifier'),
        category: categories.home.slug
    }
];


export const products: Product[] = [
    ...electronicsProducts,
    ...miscProducts,
    ...healthProducts,
    ...homeProducts
];
