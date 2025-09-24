
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
    },
    {
        id: 'gaming-mouse-x1',
        name: 'ماوس ألعاب احترافي X1',
        slug: 'gaming-mouse-x1',
        description: `حقق الدقة والسرعة القصوى في ألعابك مع ماوس الألعاب X1. مصمم للاعبين المحترفين بأزرار قابلة للتخصيص ومستشعر فائق الدقة.
###FEATURES###
- مستشعر بصري بدقة 16000 DPI
- 8 أزرار قابلة للبرمجة
- إضاءة RGB قابلة للتخصيص
- تصميم مريح للعب لساعات طويلة
###DETAILS###
- الاتصال: سلكي USB
- معدل التحديث: 1000Hz
- الوزن: 90 جرام`,
        price: 250.00,
        images: getImages('gaming-mouse-x1'),
        category: categories.electronics.slug
    },
    {
        id: 'mechanical-keyboard-k7',
        name: 'لوحة مفاتيح ميكانيكية K7',
        slug: 'mechanical-keyboard-k7',
        description: `استمتع بتجربة كتابة ولعب لا مثيل لها. تتميز لوحة المفاتيح الميكانيكية K7 بمفاتيح سريعة الاستجابة وهيكل متين من الألومنيوم.
###FEATURES###
- مفاتيح ميكانيكية (بني)
- إضاءة خلفية LED بيضاء
- هيكل من الألومنيوم المصقول
- وضع الألعاب (تعطيل مفتاح Windows)
###DETAILS###
- التوصيل: USB-C
- عدد المفاتيح: 87 (TKL)
- المواد: ألومنيوم, بلاستيك ABS`,
        price: 350.00,
        images: getImages('mechanical-keyboard-k7'),
        category: categories.electronics.slug
    },
    {
        id: '4k-webcam-w900',
        name: 'كاميرا ويب 4K W900',
        slug: '4k-webcam-w900',
        description: `اظهر بأفضل صورة في اجتماعاتك وبثك المباشر. توفر كاميرا الويب W900 جودة فيديو 4K فائقة الوضوح مع ميكروفونات مزدوجة لإلغاء الضوضاء.
###FEATURES###
- دقة فيديو 4K Ultra HD
- تركيز تلقائي مدعوم بالذكاء الاصطناعي
- ميكروفونات ستيريو مزدوجة
- غطاء خصوصية مدمج
###DETAILS###
- الدقة: 3840x2160
- مجال الرؤية: 90 درجة
- التوصيل: USB-C`,
        price: 450.00,
        images: getImages('4k-webcam-w900'),
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
    },
    {
        id: 'smart-water-bottle',
        name: 'زجاجة ماء ذكية',
        slug: 'smart-water-bottle',
        description: `ابق رطبًا طوال اليوم مع زجاجة الماء الذكية. تتوهج لتذكيرك بشرب الماء وتتتبع استهلاكك عبر تطبيق خاص.
###FEATURES###
- تذكيرات ضوئية مخصصة
- تتبع استهلاك الماء عبر البلوتوث
- مصنوعة من الفولاذ المقاوم للصدأ
- تحافظ على برودة الماء لمدة 24 ساعة
###DETAILS###
- السعة: 500 مل
- المادة: فولاذ مقاوم للصدأ
- البطارية: قابلة لإعادة الشحن`,
        price: 280.00,
        images: getImages('smart-water-bottle'),
        category: categories.misc.slug
    },
    {
        id: 'portable-projector-p5',
        name: 'بروجكتر محمول P5',
        slug: 'portable-projector-p5',
        description: `حول أي مكان إلى سينما خاصة بك. هذا البروجكتر الصغير والقوي يعرض صورة عالية الجودة بحجم يصل إلى 120 بوصة.
###FEATURES###
- تصميم بحجم كف اليد
- بطارية مدمجة تدوم 3 ساعات
- سماعات ستيريو مدمجة
- يدعم الاتصال عبر HDMI و USB و Wi-Fi
###DETAILS###
- الدقة الأصلية: 720p HD
- السطوع: 200 لومينز
- الوزن: 450 جرام`,
        price: 950.00,
        images: getImages('portable-projector-p5'),
        category: categories.misc.slug
    },
    {
        id: 'digital-photo-frame',
        name: 'إطار صور رقمي واي فاي',
        slug: 'digital-photo-frame',
        description: `شارك لحظاتك الثمينة على الفور. يسمح لك إطار الصور الرقمي هذا بإرسال الصور مباشرة من هاتفك إلى الإطار في أي مكان في العالم.
###FEATURES###
- شاشة لمس عالية الدقة مقاس 10 بوصة
- اتصال واي فاي سهل
- تطبيق مجاني لإرسال الصور (iOS و Android)
- مساحة تخزين داخلية 16 جيجابايت
###DETAILS###
- الدقة: 1280x800
- الألوان: أسود, خشبي
- الذاكرة: 16GB`,
        price: 550.00,
        images: getImages('digital-photo-frame'),
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
    },
    {
        id: 'electric-toothbrush-s1',
        name: 'فرشاة أسنان كهربائية S1',
        slug: 'electric-toothbrush-s1',
        description: `احصل على ابتسامة أكثر إشراقًا ونظافة فائقة. تستخدم فرشاة الأسنان الكهربائية S1 تقنية الاهتزازات الصوتية لإزالة البلاك بفعالية.
###FEATURES###
- 5 أوضاع تنظيف (تنظيف، تبييض، تلميع، ...)
- مؤقت ذكي لمدة دقيقتين
- عمر بطارية يصل إلى 30 يومًا بشحنة واحدة
- مقاومة للماء بمعيار IPX7
###DETAILS###
- نوع الاهتزاز: صوتي (Sonic)
- الشحن: لاسلكي
- الملحقات: 2 رأس فرشاة`,
        price: 220.00,
        images: getImages('electric-toothbrush-s1'),
        category: categories.health.slug
    },
    {
        id: 'uv-sterilizer-box',
        name: 'صندوق تعقيم بالأشعة فوق البنفسجية',
        slug: 'uv-sterilizer-box',
        description: `عقم هاتفك ومفاتيحك وأدواتك الصغيرة في دقائق. يقضي هذا الصندوق على 99.9% من الجراثيم والبكتيريا باستخدام ضوء UV-C الآمن.
###FEATURES###
- يقتل 99.9% من الجراثيم في 3 دقائق
- وظيفة شحن لاسلكي مدمجة
- تصميم واسع يناسب معظم الهواتف
- موزع روائح عطرية مدمج
###DETAILS###
- نوع الأشعة: UV-C
- قوة الشاحن اللاسلكي: 10W
- الأبعاد الداخلية: 19x10x2 سم`,
        price: 190.00,
        images: getImages('uv-sterilizer-box'),
        category: categories.health.slug
    },
    {
        id: 'smart-watch-h5',
        name: 'ساعة ذكية H5 لتتبع الصحة',
        slug: 'smart-watch-h5',
        description: `رفيقك الصحي والأنيق. تتتبع ساعة H5 الذكية معدل ضربات القلب، ونسبة الأكسجين في الدم، وجودة النوم، والتمارين الرياضية، وتعرض إشعارات هاتفك.
###FEATURES###
- شاشة AMOLED ملونة
- تتبع معدل ضربات القلب والأكسجين (SpO2)
- 14 وضعًا رياضيًا مختلفًا
- مقاومة للماء حتى 50 مترًا
###DETAILS###
- الشاشة: 1.4 بوصة AMOLED
- عمر البطارية: 10 أيام
- التوافق: iOS و Android`,
        price: 480.00,
        images: getImages('smart-watch-h5'),
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
    },
    {
        id: 'smart-lock-l3',
        name: 'قفل باب ذكي L3',
        slug: 'smart-lock-l3',
        description: `أمن منزلك بأحدث التقنيات. يتيح لك القفل الذكي L3 فتح بابك باستخدام بصمة الإصبع، أو كلمة المرور، أو المفتاح، أو عبر التطبيق.
###FEATURES###
- 4 طرق للفتح: بصمة، كلمة مرور، تطبيق، مفتاح
- سجل دخول وخروج للمستخدمين
- إنشاء كلمات مرور مؤقتة للضيوف
- تنبيه انخفاض البطارية
###DETAILS###
- المواد: سبائك الزنك
- مصدر الطاقة: 4 بطاريات AA
- مقاومة الطقس: IP54`,
        price: 750.00,
        images: getImages('smart-lock-l3'),
        category: categories.home.slug
    },
    {
        id: 'video-doorbell-v2',
        name: 'جرس باب فيديو V2',
        slug: 'video-doorbell-v2',
        description: `اعرف من على بابك وتحدث معه من أي مكان. يرسل جرس الباب الذكي V2 إشعارات فورية إلى هاتفك عند اكتشاف حركة أو عند ضغط الجرس.
###FEATURES###
- فيديو عالي الدقة (1080p) مع رؤية ليلية
- كشف حركة ذكي
- صوت ثنائي الاتجاه
- يعمل بالبطارية أو بالأسلاك
###DETAILS###
- مجال الرؤية: 160 درجة
- الاتصال: واي فاي 2.4GHz
- التخزين: سحابي أو بطاقة SD`,
        price: 400.00,
        images: getImages('video-doorbell-v2'),
        category: categories.home.slug
    },
    {
        id: 'smart-lighting-kit',
        name: 'مجموعة إضاءة ذكية',
        slug: 'smart-lighting-kit',
        description: `غير أجواء أي غرفة بلمسة زر. تتضمن هذه المجموعة 3 لمبات LED ذكية وجسر تحكم، مما يتيح لك الاختيار من بين 16 مليون لون.
###FEATURES###
- 16 مليون لون ودرجات الأبيض الدافئ والبارد
- التحكم عبر التطبيق والأوامر الصوتية
- مزامنة الأضواء مع الموسيقى والأفلام
- سهولة التركيب والإعداد
###DETAILS###
- نوع اللمبة: E27 LED
- القوة: 9 واط لكل لمبة
- العمر الافتراضي: 25,000 ساعة`,
        price: 650.00,
        images: getImages('smart-lighting-kit'),
        category: categories.home.slug
    }
];


export const products: Product[] = [
    ...electronicsProducts,
    ...miscProducts,
    ...healthProducts,
    ...homeProducts
];
