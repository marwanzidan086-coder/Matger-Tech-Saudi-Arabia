
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
        category: categories.electronics.slug,
        faq: [
            {
                question: "ما هي مدة عمل بطارية سماعة ساوند كور R100؟",
                answer: "تدوم البطارية حتى 25 ساعة من التشغيل مع علبة الشحن."
            },
            {
                question: "هل السماعة مقاومة للماء؟",
                answer: "نعم، السماعة مقاومة للماء بمعيار IPX5، مما يجعلها مناسبة للتمارين الرياضية والاستخدام تحت المطر الخفيف."
            },
            {
                question: "ما هي تقنية BassUp؟",
                answer: "هي تقنية حصرية من Anker تقوم بتحليل الترددات المنخفضة في الوقت الفعلي وتعززها على الفور للحصول على صوت جهير (Bass) أعمق وأقوى."
            },
            {
                question: "هل تدعم السماعة الشحن السريع؟",
                answer: "نعم، تدعم الشحن السريع عبر منفذ USB-C. شحن لمدة 10 دقائق يمكن أن يمنحك ساعة من الاستخدام."
            }
        ]
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
    },
    {
        id: 'usb-c-hub-8in1',
        name: 'موزع USB-C 8 في 1',
        slug: 'usb-c-hub-8in1',
        description: `قم بتوسيع إمكانيات جهازك المحمول. يوفر هذا الموزع 8 منافذ إضافية بما في ذلك HDMI 4K، قارئ بطاقات SD، ومنافذ USB 3.0.
###FEATURES###
- منفذ HDMI بدقة 4K@30Hz
- منفذ شحن USB-C Power Delivery بقوة 100 واط
- 3 منافذ USB 3.0
- قارئ بطاقات SD و MicroSD
###DETAILS###
- المواد: ألومنيوم
- التوافق: MacBook, أجهزة لابتوب USB-C
- الأبعاد: 15x5x2 سم`,
        price: 280.00,
        images: getImages('usb-c-hub-8in1'),
        category: categories.electronics.slug
    },
    {
        id: 'wireless-charging-stand',
        name: 'حامل شحن لاسلكي 3 في 1',
        slug: 'wireless-charging-stand',
        description: `اشحن هاتفك وسماعاتك وساعتك الذكية في وقت واحد. تصميم أنيق يوفر مساحة على مكتبك ويحافظ على أجهزتك منظمة وجاهزة للاستخدام.
###FEATURES###
- شحن لاسلكي سريع للهاتف (15 واط)
- مكان مخصص لشحن السماعات اللاسلكية
- مكان مخصص لشحن الساعة الذكية
- مؤشر LED ذكي
###DETAILS###
- التوافق: أجهزة تدعم Qi (Apple, Samsung)
- الإدخال: USB-C
- الحماية: حماية من الشحن الزائد والحرارة`,
        price: 210.00,
        images: getImages('wireless-charging-stand'),
        category: categories.electronics.slug
    },
    {
        id: 'bluetooth-speaker-x5',
        name: 'مكبر صوت بلوتوث X5 مقاوم للماء',
        slug: 'bluetooth-speaker-x5',
        description: `استمتع بموسيقاك في أي مكان. يوفر مكبر الصوت X5 صوتًا قويًا وواضحًا مع تصميم متين ومقاوم للماء مثالي للشاطئ أو المسبح.
###FEATURES###
- صوت ستيريو 360 درجة
- مقاومة للماء والغبار بمعيار IP67
- بطارية تدوم 12 ساعة
- إمكانية ربط مكبري صوت معًا
###DETAILS###
- الاتصال: بلوتوث 5.1
- القوة: 20 واط
- الوزن: 550 جرام`,
        price: 320.00,
        images: getImages('bluetooth-speaker-x5'),
        category: categories.electronics.slug
    },
    {
        id: 'noise-cancelling-headphones-q30',
        name: 'سماعات رأس Soundcore Q30 عازلة للضوضاء',
        slug: 'noise-cancelling-headphones-q30',
        description: `انغمس في عالم من الصوت النقي. توفر سماعات Q30 تقنية إلغاء ضوضاء هجينة متقدمة تخلصك من الإزعاج المحيط.
###FEATURES###
- إلغاء ضوضاء هجين متعدد الأوضاع
- صوت عالي الدقة Hi-Res Audio
- بطارية تدوم 40 ساعة
- تصميم مريح وقابل للطي
###DETAILS###
- نوع الاتصال: بلوتوث, AUX
- المشغلات: 40 مم
- الشحن: USB-C`,
        price: 550.00,
        images: getImages('noise-cancelling-headphones-q30'),
        category: categories.electronics.slug
    },
    {
        id: 'laptop-stand-ls01',
        name: 'حامل لابتوب من الألومنيوم LS01',
        slug: 'laptop-stand-ls01',
        description: `ارفع مستوى راحتك وإنتاجيتك. يرفع هذا الحامل جهاز اللابتوب الخاص بك إلى مستوى العين، مما يحسن وضعية جلوسك ويساعد على تبريد الجهاز.
###FEATURES###
- تصميم مريح ومناسب
- مصنوع من الألومنيوم المتين
- وسادات سيليكون لمنع الانزلاق
- يساعد على تهوية الجهاز
###DETAILS###
- المواد: ألومنيوم
- التوافق: أجهزة لابتوب من 10 إلى 15.6 بوصة
- الوزن: 400 جرام`,
        price: 130.00,
        images: getImages('laptop-stand-ls01'),
        category: categories.electronics.slug
    },
    {
        id: 'car-phone-holder-m2',
        name: 'حامل هاتف للسيارة M2 مغناطيسي',
        slug: 'car-phone-holder-m2',
        description: `ثبت هاتفك بأمان أثناء القيادة. يوفر هذا الحامل المغناطيسي تثبيتًا قويًا وسهولة في الاستخدام بيد واحدة.
###FEATURES###
- مغناطيس قوي وآمن
- دوران 360 درجة
- سهل التركيب على فتحة التهوية
- تصميم أنيق ومدمج
###DETAILS###
- النوع: مغناطيسي
- التركيب: فتحة تكييف السيارة
- الملحقات: قطعتان معدنيتان لاصقتان`,
        price: 65.00,
        images: getImages('car-phone-holder-m2'),
        category: categories.electronics.slug
    },
    {
        id: 'external-ssd-500gb',
        name: 'قرص تخزين خارجي SSD بسعة 500 جيجابايت',
        slug: 'external-ssd-500gb',
        description: `انقل ملفاتك بسرعة فائقة. هذا القرص الخارجي من نوع SSD يوفر سرعات قراءة وكتابة عالية في تصميم صغير ومتين.
###FEATURES###
- سرعة قراءة تصل إلى 540 ميجابايت/ثانية
- تصميم مقاوم للصدمات
- تشفير AES 256-bit لحماية البيانات
- متوافق مع USB 3.1 Gen 2
###DETAILS###
- السعة: 500 جيجابايت
- الواجهة: USB-C
- الأبعاد: 7.4 × 5.7 × 1.0 سم`,
        price: 450.00,
        images: getImages('external-ssd-500gb'),
        category: categories.electronics.slug
    },
    {
        id: 'wifi-range-extender-re300',
        name: 'مقوي شبكة واي فاي RE300',
        slug: 'wifi-range-extender-re300',
        description: `تخلص من مناطق ضعف إشارة الواي فاي في منزلك. يقوم مقوي الشبكة بتوسيع تغطية شبكتك الحالية بسهولة وسرعة.
###FEATURES###
- يدعم شبكات 2.4GHz و 5GHz
- سرعة تصل إلى 1200 ميجابت في الثانية
- مؤشر إشارة ذكي لتحديد أفضل مكان
- سهل الإعداد عبر تطبيق Tether
###DETAILS###
- المعايير: IEEE 802.11ac/n/g/a/b
- الأمان: WEP, WPA, WPA2
- المنافذ: 1 منفذ إيثرنت`,
        price: 220.00,
        images: getImages('wifi-range-extender-re300'),
        category: categories.electronics.slug
    },
    {
        id: 'smart-power-strip',
        name: 'توصيلة كهربائية ذكية',
        slug: 'smart-power-strip',
        description: `تحكم في أجهزتك من أي مكان. تتيح لك هذه التوصيلة الذكية التحكم في كل مقبس على حدة عبر تطبيق الجوال أو الأوامر الصوتية.
###FEATURES###
- 3 مقابس ذكية و 2 منفذ USB ذكي
- التحكم الفردي في كل مقبس
- جدولة أوقات التشغيل والإيقاف
- متوافق مع Alexa و Google Assistant
###DETAILS###
- الاتصال: واي فاي 2.4GHz
- طول السلك: 1.8 متر
- الحماية: حماية من زيادة التيار`,
        price: 190.00,
        images: getImages('smart-power-strip'),
        category: categories.electronics.slug
    },
    {
        id: 'drawing-tablet-s640',
        name: 'لوح رسم رقمي S640',
        slug: 'drawing-tablet-s640',
        description: `أطلق العنان لإبداعك. مثالي للرسم والتصميم والتعليم عن بعد، يوفر هذا اللوح الرقمي تجربة رسم طبيعية وسلسة.
###FEATURES###
- مساحة عمل 6x4 بوصة
- قلم لا يحتاج إلى بطارية
- 8192 مستوى من حساسية الضغط
- متوافق مع Windows, macOS, Android
###DETAILS###
- الدقة: 5080 LPI
- معدل الاستجابة: 266 RPS
- المفاتيح: 4 مفاتيح سريعة قابلة للتخصيص`,
        price: 240.00,
        images: getImages('drawing-tablet-s640'),
        category: categories.electronics.slug
    },
    {
        id: 'selfie-stick-tripod-bt',
        name: 'عصا سيلفي وحامل ثلاثي مع ريموت بلوتوث',
        slug: 'selfie-stick-tripod-bt',
        description: `التقط الصور ومقاطع الفيديو المثالية من أي زاوية. تجمع هذه الأداة بين عصا سيلفي وحامل ثلاثي مع ريموت تحكم عن بعد.
###FEATURES###
- تصميم 2 في 1: عصا سيلفي وحامل ثلاثي
- ريموت بلوتوث قابل للفصل
- قابلة للتمديد حتى 70 سم
- خفيفة الوزن وقابلة للطي
###DETAILS###
- المواد: ألومنيوم وبلاستيك
- التوافق: معظم الهواتف الذكية
- البطارية (الريموت): CR1632 (قابلة للاستبدال)`,
        price: 85.00,
        images: getImages('selfie-stick-tripod-bt'),
        category: categories.electronics.slug
    },
    {
        id: 'document-scanner-es50',
        name: 'ماسح ضوئي محمول ES-50 للمستندات',
        slug: 'document-scanner-es50',
        description: `حول مستنداتك الورقية إلى ملفات رقمية بسهولة. هذا الماسح الضوئي الصغير والخفيف مثالي للمحترفين أثناء التنقل.
###FEATURES###
- صغير الحجم وخفيف الوزن
- يمسح صفحة واحدة في 5.5 ثانية
- يعمل بالطاقة عبر USB
- برامج OCR لتحويل الصور إلى نصوص
###DETAILS###
- الدقة: تصل إلى 600 DPI
- التوصيل: USB 2.0
- الوزن: 270 جرام`,
        price: 600.00,
        images: getImages('document-scanner-es50'),
        category: categories.electronics.slug
    },
    {
        id: 'gaming-headset-gh20',
        name: 'سماعة ألعاب GH20 بصوت محيطي',
        slug: 'gaming-headset-gh20',
        description: `اسمع كل خطوة لخصمك. توفر سماعة GH20 صوتًا محيطيًا غامرًا 7.1 وميكروفونًا واضحًا للتواصل مع فريقك.
###FEATURES###
- صوت محيطي افتراضي 7.1
- وسائد أذن مريحة من الإسفنج الذكي
- ميكروفون قابل للتعديل وإلغاء الضوضاء
- إضاءة RGB
###DETAILS###
- التوصيل: USB
- المشغلات: 50 مم
- التوافق: PC, PS4, PS5`,
        price: 290.00,
        images: getImages('gaming-headset-gh20'),
        category: categories.electronics.slug
    },
    {
        id: 'portable-monitor-15-inch',
        name: 'شاشة محمولة 15.6 بوصة Full HD',
        slug: 'portable-monitor-15-inch',
        description: `ضاعف مساحة عملك في أي مكان. هذه الشاشة المحمولة والخفيفة تتصل بجهاز اللابتوب أو الهاتف عبر كابل واحد.
###FEATURES###
- شاشة IPS مقاس 15.6 بوصة بدقة Full HD
- خفيفة الوزن ونحيفة للغاية
- تعمل بالطاقة وتستقبل الفيديو عبر USB-C
- سماعات ستيريو مدمجة
###DETAILS###
- الدقة: 1920x1080
- المنافذ: 2x USB-C, 1x Mini HDMI
- الوزن: 750 جرام`,
        price: 850.00,
        images: getImages('portable-monitor-15-inch'),
        category: categories.electronics.slug
    },
    {
        id: 'mini-drone-d1',
        name: 'طائرة درون صغيرة D1 مع كاميرا للمبتدئين',
        slug: 'mini-drone-d1',
        description: `استكشف العالم من منظور جديد. سهلة التحكم ومثالية للمبتدئين، تحتوي هذه الدرون الصغيرة على كاميرا لالتقاط الصور ومقاطع الفيديو.
###FEATURES###
- سهلة التحكم ومثالية للمبتدئين
- تحافظ على الارتفاع تلقائيًا
- إقلاع وهبوط بضغطة زر
- كاميرا 720p HD
###DETAILS###
- مدة الطيران: 10 دقائق لكل بطارية (تأتي مع 2)
- نطاق التحكم: 50 متر
- الأبعاد: 13x13x3 سم`,
        price: 380.00,
        images: getImages('mini-drone-d1'),
        category: categories.electronics.slug
    },
    {
        id: 'anker-powerconf-s3',
        name: 'مكبر صوت للمؤتمرات Anker PowerConf S3',
        slug: 'anker-powerconf-s3',
        description: `اجعل اجتماعاتك عن بعد أكثر وضوحًا واحترافية. يلتقط 6 ميكروفونات الصوت من جميع الاتجاهات ويعزل الضوضاء الخلفية.
###FEATURES###
- 6 ميكروفونات لالتقاط الصوت بزاوية 360 درجة
- خوارزمية DSP محسّنة لإلغاء الصدى والضوضاء
- توصيل عبر بلوتوث أو USB-C
- بطارية تدوم 24 ساعة
###DETAILS###
- التوافق: Zoom, Skype, Google Meet, etc.
- القوة: 3 واط
- الوزن: 340 جرام`,
        price: 650.00,
        images: getImages('anker-powerconf-s3'),
        category: categories.electronics.slug
    },
    {
        id: 'raspberry-pi-4-kit',
        name: 'مجموعة Raspberry Pi 4 للمبتدئين',
        slug: 'raspberry-pi-4-kit',
        description: `ادخل عالم البرمجة والإلكترونيات. تحتوي هذه المجموعة على كل ما تحتاجه للبدء في مشاريعك الخاصة باستخدام Raspberry Pi 4.
###FEATURES###
- جهاز Raspberry Pi 4 (4GB RAM)
- بطاقة MicroSD بسعة 32 جيجابايت مع نظام التشغيل
- كيس تبريد مع مروحة
- كابل Micro HDMI ومحول طاقة USB-C
###DETAILS###
- المعالج: Broadcom BCM2711, Quad core Cortex-A72
- الذاكرة: 4GB LPDDR4
- الاتصال: Wi-Fi, Bluetooth 5.0, Gigabit Ethernet`,
        price: 520.00,
        images: getImages('raspberry-pi-4-kit'),
        category: categories.electronics.slug
    },
    {
        id: '3d-printer-ender3',
        name: 'طابعة ثلاثية الأبعاد Creality Ender 3',
        slug: '3d-printer-ender3',
        description: `حول أفكارك إلى واقع ملموس. تعتبر Ender 3 واحدة من أفضل الطابعات ثلاثية الأبعاد للمبتدئين، حيث تجمع بين الجودة العالية والسعر المعقول.
###FEATURES###
- مساحة طباعة كبيرة
- سهلة التجميع والتركيب
- سطح طباعة قابل للإزالة
- استئناف الطباعة بعد انقطاع التيار الكهربائي
###DETAILS###
- مساحة الطباعة: 220x220x250 مم
- قطر الفتيل: 1.75 مم
- المواد المدعومة: PLA, ABS, PETG`,
        price: 980.00,
        images: getImages('3d-printer-ender3'),
        category: categories.electronics.slug
    },
    {
        id: 'wireless-presenter-r500',
        name: 'جهاز تقديم العروض Logitech R500',
        slug: 'wireless-presenter-r500',
        description: `قدم عروضك بثقة واحترافية. يتيح لك جهاز R500 التنقل بين الشرائح بسهولة وتسليط الضوء على النقاط المهمة باستخدام مؤشر الليزر الأحمر.
###FEATURES###
- تصميم بسيط بثلاثة أزرار
- مؤشر ليزر أحمر ساطع
- نطاق لاسلكي يصل إلى 20 مترًا
- متوافق مع PowerPoint, Keynote, Google Slides
###DETAILS###
- الاتصال: بلوتوث, مستقبل USB
- البطارية: 1x AAA (تدوم 12 شهرًا)
- الأبعاد: 12.3 × 3.6 × 2.4 سم`,
        price: 250.00,
        images: getImages('wireless-presenter-r500'),
        category: categories.electronics.slug
    },
    {
        id: 'electric-screwdriver-set',
        name: 'مجموعة مفكات كهربائية دقيقة',
        slug: 'electric-screwdriver-set',
        description: `مثالية لإصلاح الإلكترونيات الدقيقة مثل الهواتف وأجهزة اللابتوب. تأتي مع 56 رأس مفك مختلف ومفك كهربائي لتسهيل العمل.
###FEATURES###
- مفك كهربائي مع عزم دوران قابل للتعديل
- 56 رأس مفك من الصلب S2
- علبة مغناطيسية منظمة
- إضاءة LED مدمجة
###DETAILS###
- سرعة الدوران: 200 دورة في الدقيقة
- البطارية: ليثيوم أيون قابلة لإعادة الشحن
- الشحن: USB-C`,
        price: 290.00,
        images: getImages('electric-screwdriver-set'),
        category: categories.electronics.slug
    },
    {
        id: 'gopro-hero-10',
        name: 'كاميرا GoPro HERO10 Black',
        slug: 'gopro-hero-10',
        description: `التقط مغامراتك بجودة مذهلة. تتميز HERO10 Black بمعالج GP2 الجديد الذي يوفر فيديو 5.3K وتثبيت فيديو HyperSmooth 4.0.
###FEATURES###
- فيديو بدقة 5.3K60 وصور بدقة 23 ميجابكسل
- تثبيت فيديو HyperSmooth 4.0 فائق السلاسة
- مقاومة للماء حتى 10 أمتار
- شاشة أمامية لعرض مباشر
###DETAILS###
- المعالج: GP2
- تصوير بطيء: 8x
- الاتصال: Wi-Fi, Bluetooth`,
        price: 1800.00,
        images: getImages('gopro-hero-10'),
        category: categories.electronics.slug
    },
    {
        id: 'anker-soundcore-liberty-air-2-pro',
        name: 'سماعات Anker Soundcore Liberty Air 2 Pro',
        slug: 'anker-soundcore-liberty-air-2-pro',
        description: `صوت مخصص لك. تستخدم تقنية HearID لتحليل سمعك وإنشاء ملف صوتي مخصص، مع إلغاء ضوضاء متعدد الأوضاع.
###FEATURES###
- إلغاء ضوضاء متعدد الأوضاع (Transport, Indoor, Outdoor)
- تقنية HearID لتخصيص الصوت
- صوت نقي بفضل تقنية PureNote
- 6 ميكروفونات مع تقليل الضوضاء للمكالمات
###DETAILS###
- وقت التشغيل: 7 ساعات (26 مع العلبة)
- الشحن: USB-C, شحن لاسلكي Qi
- مقاومة الماء: IPX4`,
        price: 480.00,
        images: getImages('anker-soundcore-liberty-air-2-pro'),
        category: categories.electronics.slug
    },
    {
        id: 'wd-my-passport-4tb',
        name: 'قرص صلب خارجي WD My Passport 4TB',
        slug: 'wd-my-passport-4tb',
        description: `مساحة تخزين هائلة في جيبك. يوفر My Passport مساحة 4 تيرابايت مع حماية بكلمة مرور وتشفير مدمج للحفاظ على أمان ملفاتك.
###FEATURES###
- سعة تخزين 4 تيرابايت
- حماية بكلمة مرور وتشفير AES 256-bit
- برنامج نسخ احتياطي تلقائي
- تصميم أنيق ومتين
###DETAILS###
- الواجهة: USB 3.0 (متوافق مع 2.0)
- الأبعاد: 10.7 × 7.5 × 1.9 سم
- الضمان: 3 سنوات`,
        price: 550.00,
        images: getImages('wd-my-passport-4tb'),
        category: categories.electronics.slug
    },
    {
        id: 'logitech-g-pro-x-superlight',
        name: 'ماوس الألعاب Logitech G Pro X Superlight',
        slug: 'logitech-g-pro-x-superlight',
        description: `أخف وأسرع ماوس ألعاب احترافي من Logitech. يزن أقل من 63 جرامًا ومصمم بالتعاون مع كبار محترفي الرياضات الإلكترونية.
###FEATURES###
- خفيف الوزن للغاية (أقل من 63 جرام)
- تقنية LIGHTSPEED اللاسلكية
- مستشعر HERO 25K فائق الدقة
- تصميم بسيط وفعال
###DETAILS###
- الوزن: <63 جرام
- عمر البطارية: يصل إلى 70 ساعة
- الدقة: تصل إلى 25,600 DPI`,
        price: 650.00,
        images: getImages('logitech-g-pro-x-superlight'),
        category: categories.electronics.slug
    },
    {
        id: 'elgato-stream-deck-mk2',
        name: 'جهاز Elgato Stream Deck MK.2',
        slug: 'elgato-stream-deck-mk2',
        description: `تحكم في بثك المباشر وإبداعك بلمسة زر. يوفر Stream Deck 15 مفتاح LCD قابل للتخصيص لتشغيل الإجراءات والتطبيقات على الفور.
###FEATURES###
- 15 مفتاح LCD قابل للتخصيص
- تبديل المشاهد، تشغيل الوسائط، ضبط الصوت والمزيد
- تكامل مباشر مع OBS, Twitch, YouTube
- واجهة قابلة للتخصيص بالأيقونات
###DETAILS###
- التوصيل: USB 2.0
- الأبعاد: 11.8 × 8.4 × 2.5 سم
- التوافق: Windows, macOS`,
        price: 700.00,
        images: getImages('elgato-stream-deck-mk2'),
        category: categories.electronics.slug
    },
    {
        id: 'bose-soundlink-revolve-plus',
        name: 'مكبر صوت Bose SoundLink Revolve+',
        slug: 'bose-soundlink-revolve-plus',
        description: `صوت عميق وقوي بزاوية 360 درجة. مصمم لتقديم صوت مذهل في كل الاتجاهات، مع تصميم مقاوم للماء ومقبض مرن لسهولة الحمل.
###FEATURES###
- صوت بزاوية 360 درجة
- مقاوم للماء (IPX4)
- بطارية تدوم حتى 16 ساعة
- مقبض مرن لسهولة الحمل
###DETAILS###
- الاتصال: بلوتوث, NFC, AUX
- الأبعاد: 18.4 × 10.5 × 10.5 سم
- الوزن: 900 جرام`,
        price: 1200.00,
        images: getImages('bose-soundlink-revolve-plus'),
        category: categories.electronics.slug
    },
    {
        id: 'razer-kishi-v2',
        name: 'وحدة تحكم الألعاب Razer Kishi V2 للهاتف',
        slug: 'razer-kishi-v2',
        description: `حول هاتفك إلى جهاز ألعاب محمول. توفر Kishi V2 تجربة تحكم بجودة وحدات التحكم المنزلية مع أزرار احترافية وتصميم مريح.
###FEATURES###
- جودة تحكم تضاهي أجهزة الكونسول
- تصميم مرن يناسب معظم هواتف Android
- اتصال USB-C بزمن استجابة منخفض
- منفذ شحن USB-C إضافي
###DETAILS###
- الأزرار: Microswitch buttons, analog triggers
- التوافق: معظم هواتف Android
- الاتصال: USB Type-C`,
        price: 450.00,
        images: getImages('razer-kishi-v2'),
        category: categories.electronics.slug
    },
    {
        id: 'kindle-paperwhite-2023',
        name: 'جهاز Kindle Paperwhite (إصدار 2023)',
        slug: 'kindle-paperwhite-2023',
        description: `استمتع بالقراءة في أي مكان. يتميز بشاشة 6.8 بوصة بدون وهج، وإضاءة دافئة قابلة للتعديل، وتصميم مقاوم للماء.
###FEATURES###
- شاشة 6.8 بوصة بدقة 300 ppi
- مقاوم للماء (IPX8)
- إضاءة دافئة قابلة للتعديل
- عمر بطارية يصل إلى 10 أسابيع
###DETAILS###
- التخزين: 16 جيجابايت
- الشحن: USB-C
- الوزن: 205 جرام`,
        price: 750.00,
        images: getImages('kindle-paperwhite-2023'),
        category: categories.electronics.slug
    },
    {
        id: 'insta360-x3-camera',
        name: 'كاميرا Insta360 X3',
        slug: 'insta360-x3-camera',
        description: `التقط كل شيء بجودة 5.7K بزاوية 360 درجة. تتيح لك X3 تصوير اللحظات من كل زاوية ثم إعادة تأطيرها لاحقًا لاختيار أفضل لقطة.
###FEATURES###
- فيديو 360 درجة بدقة 5.7K
- وضع العدسة الواحدة بدقة 4K
- تثبيت FlowState وتثبيت الأفق
- شاشة لمس كبيرة بحجم 2.29 بوصة
###DETAILS###
- مقاومة للماء: حتى 10 أمتار
- المستشعر: 1/2 بوصة 48 ميجابكسل
- البطارية: 1800mAh`,
        price: 2100.00,
        images: getImages('insta360-x3-camera'),
        category: categories.electronics.slug
    },
    {
        id: 'logitech-mx-master-3s',
        name: 'ماوس Logitech MX Master 3S',
        slug: 'logitech-mx-master-3s',
        description: `الماوس المثالي للمبدعين والمبرمجين. يتميز بتمرير كهرومغناطيسي فائق السرعة، ومستشعر 8K DPI، ونقرات هادئة.
###FEATURES###
- تمرير MagSpeed الكهرومغناطيسي
- مستشعر 8K DPI يعمل على أي سطح (حتى الزجاج)
- نقرات هادئة
- تصميم مريح لليد اليمنى
###DETAILS###
- الاتصال: بلوتوث, Logi Bolt USB receiver
- البطارية: تدوم 70 يومًا بشحنة كاملة
- الأزرار: 7 أزرار قابلة للتخصيص`,
        price: 550.00,
        images: getImages('logitech-mx-master-3s'),
        category: categories.electronics.slug
    },
    {
        id: 'samsung-t7-shield-ssd-1tb',
        name: 'قرص تخزين Samsung T7 Shield SSD 1TB',
        slug: 'samsung-t7-shield-ssd-1tb',
        description: `سرعة فائقة ومتانة لا مثيل لها. مصمم للمبدعين أثناء التنقل، T7 Shield مقاوم للماء والغبار والسقوط من ارتفاع 3 أمتار.
###FEATURES###
- سرعات قراءة/كتابة تصل إلى 1,050/1,000 ميجابايت/ثانية
- متانة بمعيار IP65 لمقاومة الماء والغبار
- مقاومة للسقوط من ارتفاع 3 أمتار
- حماية حرارية ديناميكية
###DETAILS###
- السعة: 1 تيرابايت
- الواجهة: USB 3.2 Gen 2
- التشفير: AES 256-bit hardware encryption`,
        price: 750.00,
        images: getImages('samsung-t7-shield-ssd-1tb'),
        category: categories.electronics.slug
    },
    {
        id: 'rode-wireless-go-ii',
        name: 'نظام ميكروفون Rode Wireless GO II',
        slug: 'rode-wireless-go-ii',
        description: `نظام ميكروفون لاسلكي فائق الصغر ومتعدد الاستخدامات. مثالي لصانعي المحتوى، يوفر قناتين وتسجيلًا داخليًا.
###FEATURES###
- نظام لاسلكي ثنائي القناة
- تسجيل داخلي لأكثر من 40 ساعة
- مدى يصل إلى 200 متر (خط نظر)
- مخرج 3.5mm TRS ومخرج USB-C رقمي
###DETAILS###
- البطارية: تدوم حتى 7 ساعات
- التوافق: كاميرات، هواتف، أجهزة كمبيوتر
- الوزن: 32 جرام (لكل وحدة)`,
        price: 1300.00,
        images: getImages('rode-wireless-go-ii'),
        category: categories.electronics.slug
    },
    {
        id: 'apple-airtag-4pack',
        name: 'Apple AirTag (حزمة من 4)',
        slug: 'apple-airtag-4pack',
        description: `طريقة سهلة لتتبع أغراضك. اربط AirTag بمفاتيحك، محفظتك، أو حقيبتك، وتتبعها بسهولة عبر تطبيق Find My.
###FEATURES###
- تتبع دقيق باستخدام تقنية Ultra Wideband
- يستخدم شبكة Find My العالمية
- إعداد بسيط بلمسة واحدة
- مقاوم للماء والغبار (IP67)
###DETAILS###
- البطارية: CR2032 (قابلة للاستبدال وتدوم عامًا)
- السماعة: مدمجة لتحديد الموقع
- التوافق: أجهزة Apple بنظام iOS 14.5 أو أحدث`,
        price: 450.00,
        images: getImages('apple-airtag-4pack'),
        category: categories.electronics.slug
    },
    {
        id: 'philips-hue-play-bar',
        name: 'إضاءة Philips Hue Play Light Bar (قطعتان)',
        slug: 'philips-hue-play-bar',
        description: `أضف إضاءة محيطية غامرة إلى تجربة الترفيه الخاصة بك. ضعها على جانبي التلفزيون أو الشاشة وقم بمزامنتها مع ما تشاهده.
###FEATURES###
- 16 مليون لون
- يمكن وضعها أفقيًا أو رأسيًا أو تثبيتها خلف الشاشة
- تتزامن مع الموسيقى والألعاب والأفلام (تحتاج إلى Hue Bridge و Hue Sync)
- تصميم أنيق ومدمج
###DETAILS###
- السطوع: 530 لومن
- العمر الافتراضي: 25,000 ساعة
- المحتويات: قطعتان إضاءة, محول طاقة`,
        price: 680.00,
        images: getImages('philips-hue-play-bar'),
        category: categories.electronics.slug
    },
    {
        id: 'netgear-orbi-rbk752',
        name: 'نظام Netgear Orbi RBK752 WiFi 6 Mesh',
        slug: 'netgear-orbi-rbk752',
        description: `تغطية واي فاي سريعة وموثوقة لكل ركن في منزلك. يوفر نظام Orbi WiFi 6 سرعات عالية وتغطية تصل إلى 375 متر مربع.
###FEATURES###
- تقنية WiFi 6 لسرعات أعلى وأداء أفضل
- تغطية تصل إلى 375 متر مربع (قطعتان)
- شبكة واحدة موحدة في جميع أنحاء المنزل
- سهولة الإعداد والإدارة عبر تطبيق Orbi
###DETAILS###
- السرعة: AX4200 (تصل إلى 4.2 جيجابت في الثانية)
- النطاقات: Tri-band
- المنافذ (في كل قطعة): 3 منافذ Gigabit Ethernet`,
        price: 1600.00,
        images: getImages('netgear-orbi-rbk752'),
        category: categories.electronics.slug
    },
    {
        id: 'oculus-quest-2-128gb',
        name: 'نظارة الواقع الافتراضي Meta Quest 2 (128GB)',
        slug: 'oculus-quest-2-128gb',
        description: `استكشف عوالم وألعاب وتجارب مذهلة في الواقع الافتراضي. لا تحتاج إلى كمبيوتر أو جهاز كونسول، كل شيء مدمج في النظارة.
###FEATURES###
- نظام واقع افتراضي متكامل
- شاشات عالية الدقة (1832x1920 لكل عين)
- تتبع بست درجات من الحرية (6DoF)
- مكتبة ضخمة من الألعاب والتطبيقات
###DETAILS###
- المعالج: Qualcomm Snapdragon XR2
- الذاكرة: 6GB RAM
- التخزين: 128 جيجابايت`,
        price: 1550.00,
        images: getImages('oculus-quest-2-128gb'),
        category: categories.electronics.slug
    },
    {
        id: 'logitech-brio-4k-webcam',
        name: 'كاميرا ويب Logitech Brio 4K',
        slug: 'logitech-brio-4k-webcam',
        description: `كاميرا الويب الأكثر تقدمًا من Logitech. توفر فيديو 4K HDR، وتقنية RightLight 3، وتسجيل دخول آمن عبر Windows Hello.
###FEATURES###
- دقة 4K Ultra HD و HDR
- تقنية RightLight 3 لتعديل الإضاءة تلقائيًا
- مجال رؤية قابل للتعديل (65, 78, 90 درجة)
- متوافقة مع Windows Hello
###DETAILS###
- الدقة: 4K/30fps, 1080p/60fps
- التوصيل: USB-C, USB-A
- الميكروفونات: ميكروفونات مزدوجة متعددة الاتجاهات`,
        price: 850.00,
        images: getImages('logitech-brio-4k-webcam'),
        category: categories.electronics.slug
    },
    {
        id: 'amazon-echo-dot-5th-gen',
        name: 'Amazon Echo Dot (الجيل الخامس)',
        slug: 'amazon-echo-dot-5th-gen',
        description: `المساعد الصوتي الأكثر شعبية الآن بصوت أفضل وميزات جديدة. اطلب من Alexa تشغيل الموسيقى، ضبط المنبهات، والتحكم في أجهزتك المنزلية الذكية.
###FEATURES###
- صوت أغنى وأوضح من الأجيال السابقة
- مستشعر درجة حرارة مدمج
- التحكم في المنزل الذكي
- حماية الخصوصية
###DETAILS###
- الاتصال: واي فاي, بلوتوث
- الأبعاد: 10 × 10 × 8.9 سم
- اللغة: يدعم اللغة العربية (اللهجة الخليجية)`,
        price: 250.00,
        images: getImages('amazon-echo-dot-5th-gen'),
        category: categories.electronics.slug
    },
    {
        id: 'dji-mini-3-pro',
        name: 'طائرة درون DJI Mini 3 Pro',
        slug: 'dji-mini-3-pro',
        description: `طائرة درون صغيرة بقوة احترافية. تتميز بوزن أقل من 249 جرامًا، وتصوير فيديو 4K/60fps، ونظام استشعار عقبات ثلاثي الاتجاهات.
###FEATURES###
- وزن أقل من 249 جرام (لا يتطلب تسجيل في معظم الدول)
- فيديو 4K/60fps وصور 48 ميجابكسل
- استشعار عقبات ثلاثي الاتجاهات
- ميزات ذكية مثل FocusTrack و MasterShots
###DETAILS###
- مدة الطيران: تصل إلى 34 دقيقة
- نطاق الإرسال: يصل إلى 12 كم
- المستشعر: 1/1.3 بوصة CMOS`,
        price: 3500.00,
        images: getImages('dji-mini-3-pro'),
        category: categories.electronics.slug
    },
    {
        id: 'anker-nebula-capsule-projector',
        name: 'بروجكتر Anker Nebula Capsule',
        slug: 'anker-nebula-capsule-projector',
        description: `سينما بحجم علبة الصودا. هذا البروجكتر المحمول الذكي يعمل بنظام Android ويوفر صورة مشرقة وصوتًا بزاوية 360 درجة.
###FEATURES###
- تصميم بحجم علبة الصودا
- مكبر صوت بزاوية 360 درجة
- يعمل بنظام Android 7.1
- عرض صورة تصل إلى 100 بوصة
###DETAILS###
- السطوع: 100 ANSI لومن
- مدة التشغيل: 4 ساعات فيديو, 30 ساعة موسيقى
- الاتصال: HDMI, USB, Bluetooth, Wi-Fi`,
        price: 1400.00,
        images: getImages('anker-nebula-capsule-projector'),
        category: categories.electronics.slug
    },
    {
        id: 'logitech-streamcam',
        name: 'كاميرا ويب Logitech StreamCam',
        slug: 'logitech-streamcam',
        description: `مصممة خصيصًا لصانعي المحتوى. توفر فيديو 1080p/60fps، وتركيزًا تلقائيًا ذكيًا، وقدرة على التصوير الرأسي المثالي لقصص Instagram و TikTok.
###FEATURES###
- فيديو Full HD 1080p بمعدل 60 إطارًا في الثانية
- تركيز وتتبع للوجه مدعوم بالذكاء الاصطناعي
- تصوير رأسي 9:16
- تثبيت صورة إلكتروني
###DETAILS###
- التوصيل: USB-C
- مجال الرؤية: 78 درجة
- الميكروفون: ستيريو مزدوج`,
        price: 650.00,
        images: getImages('logitech-streamcam'),
        category: categories.electronics.slug
    },
    {
        id: 'google-nest-hub-2nd-gen',
        name: 'شاشة Google Nest Hub (الجيل الثاني)',
        slug: 'google-nest-hub-2nd-gen',
        description: `مركز التحكم في منزلك الذكي. استخدم صوتك لمشاهدة YouTube، عرض الصور، التحكم في الأضواء والكاميرات، والمزيد. يتميز بميزة تتبع النوم.
###FEATURES###
- شاشة لمس مقاس 7 بوصات
- ميزة تتبع النوم Sleep Sensing
- التحكم في المنزل الذكي
- تشغيل الموسيقى والفيديو
###DETAILS###
- الاتصال: واي فاي, بلوتوث
- المستشعرات: Soli, درجة الحرارة, الإضاءة المحيطة
- الألوان: فحمي, طباشيري`,
        price: 450.00,
        images: getImages('google-nest-hub-2nd-gen'),
        category: categories.electronics.slug
    },
    {
        id: 'sony-wh-1000xm5-headphones',
        name: 'سماعات رأس Sony WH-1000XM5',
        slug: 'sony-wh-1000xm5-headphones',
        description: `أفضل تجربة إلغاء ضوضاء في السوق. تتميز XM5 بمعالجين وأربعة ميكروفونات لكل أذن لتوفير هدوء لا مثيل له وجودة صوت استثنائية.
###FEATURES###
- إلغاء ضوضاء هو الأفضل في فئته
- جودة صوت فائقة مع دعم LDAC
- تصميم جديد كليًا، أخف وزنًا وأكثر راحة
- عمر بطارية 30 ساعة
###DETAILS###
- المعالج: Integrated Processor V1
- الميكروفونات: 8 ميكروفونات لإلغاء الضوضاء والمكالمات
- الاتصال: بلوتوث متعدد النقاط`,
        price: 1600.00,
        images: getImages('sony-wh-1000xm5-headphones'),
        category: categories.electronics.slug
    }
];

const miscProducts: Product[] = [
    {
        id: 'smart-coffee-mug',
        name: 'كوب قهوة ذكي',
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
        slug: 'smart-coffee-mug',
        images: getImages('smart-coffee-mug'),
        category: categories.misc.slug
    },
    {
        id: 'led-desk-lamp',
        name: 'مصباح مكتبي LED مع شاحن لاسلكي',
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
        slug: 'led-desk-lamp',
        images: getImages('led-desk-lamp'),
        category: categories.misc.slug
    },
    {
        id: 'smart-water-bottle',
        name: 'زجاجة ماء ذكية',
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
        slug: 'smart-water-bottle',
        images: getImages('smart-water-bottle'),
        category: categories.misc.slug
    },
    {
        id: 'portable-projector-p5',
        name: 'بروجكتر محمول P5',
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
        slug: 'portable-projector-p5',
        images: getImages('portable-projector-p5'),
        category: categories.misc.slug
    },
    {
        id: 'digital-photo-frame',
        name: 'إطار صور رقمي واي فاي',
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
        slug: 'digital-photo-frame',
        images: getImages('digital-photo-frame'),
        category: categories.misc.slug
    },
    {
        id: 'smart-notebook',
        name: 'دفتر ملاحظات ذكي قابل لإعادة الاستخدام',
        slug: 'smart-notebook',
        description: `اكتب بلا حدود. امسح ما كتبته باستخدام قطعة قماش مبللة وأرسل ملاحظاتك إلى السحابة.
###FEATURES###
- 36 صفحة قابلة لإعادة الاستخدام
- يتكامل مع Google Drive, Dropbox, Evernote, Slack
- تقنية OCR لتحويل الخط اليدوي إلى نص
- يأتي مع قلم خاص وقطعة قماش مايكروفايبر
###DETAILS###
- الحجم: A4
- المادة: ورق صناعي مقاوم للماء
- الاتصال: عبر تطبيق الجوال`,
        price: 150.00,
        images: getImages('smart-notebook'),
        category: categories.misc.slug
    },
    {
        id: 'portable-blender',
        name: 'خلاط محمول قابل للشحن',
        slug: 'portable-blender',
        description: `اصنع عصائرك ومخفوقات البروتين في أي مكان. خلاط قوي ومدمج يعمل ببطارية قابلة للشحن عبر USB-C.
###FEATURES###
- محرك قوي وشفرات من الفولاذ المقاوم للصدأ
- بطارية تكفي لعمل 15-20 كوبًا
- سهل التنظيف، فقط أضف الماء والصابون واخلط
- تصميم مانع للتسرب
###DETAILS###
- السعة: 400 مل
- الشحن: USB-C
- المواد: بلاستيك خالٍ من BPA`,
        price: 180.00,
        images: getImages('portable-blender'),
        category: categories.misc.slug
    },
    {
        id: 'sunrise-alarm-clock',
        name: 'ساعة منبه محاكاة شروق الشمس',
        slug: 'sunrise-alarm-clock',
        description: `استيقظ بهدوء وطبيعية. تحاكي هذه الساعة شروق الشمس تدريجيًا قبل 30 دقيقة من وقت الاستيقاظ، مع أصوات طبيعية.
###FEATURES###
- محاكاة شروق وغروب الشمس
- 7 ألوان إضاءة و 20 مستوى سطوع
- 7 أصوات طبيعية وراديو FM
- وضع القراءة مع إضاءة دافئة
###DETAILS###
- نوع العرض: رقمي LED
- مصدر الطاقة: محول كهربائي
- الوظائف: منبه مزدوج، غفوة`,
        price: 250.00,
        images: getImages('sunrise-alarm-clock'),
        category: categories.misc.slug
    },
    {
        id: 'weather-station',
        name: 'محطة طقس لاسلكية',
        slug: 'weather-station',
        description: `احصل على توقعات دقيقة للطقس في منزلك. تعرض درجة الحرارة والرطوبة الداخلية والخارجية، وتوقعات الطقس.
###FEATURES###
- شاشة LCD ملونة كبيرة
- مستشعر خارجي لاسلكي بمدى 60 مترًا
- توقعات الطقس بناءً على الضغط الجوي
- عرض الوقت والتاريخ وتقويم مراحل القمر
###DETAILS###
- نطاق درجة الحرارة الداخلية: 0-50 درجة مئوية
- نطاق درجة الحرارة الخارجية: -20-60 درجة مئوية
- مصدر الطاقة: محول كهربائي أو بطاريات`,
        price: 320.00,
        images: getImages('weather-station'),
        category: categories.misc.slug
    },
    {
        id: 'star-projector',
        name: 'جهاز عرض النجوم والمجرات',
        slug: 'star-projector',
        description: `حول غرفتك إلى سماء ليلية ساحرة. يعرض هذا الجهاز آلاف النجوم والسدم الملونة على السقف والجدران.
###FEATURES###
- تأثيرات سديم متعددة الألوان
- عرض نجوم بالليزر الأخضر
- ريموت كنترول للتحكم في الألوان والسطوع والسرعة
- مكبر صوت بلوتوث مدمج
###DETAILS###
- الإضاءة: LED و ليزر
- الاتصال: بلوتوث
- مصدر الطاقة: USB`,
        price: 200.00,
        images: getImages('star-projector'),
        category: categories.misc.slug
    },
    {
        id: 'key-finder',
        name: 'متتبع مفاتيح وبلوتوث (4 قطع)',
        slug: 'key-finder',
        description: `لا تضيع مفاتيحك أو محفظتك مرة أخرى. اربط هذه الأجهزة الصغيرة بأغراضك واعثر عليها بسهولة باستخدام هاتفك.
###FEATURES###
- تتبع عبر البلوتوث بمدى يصل إلى 50 مترًا
- يجعل هاتفك يرن حتى لو كان صامتًا
- يعرض آخر موقع معروف على الخريطة
- عمر بطارية يصل إلى عام (قابلة للاستبدال)
###DETAILS###
- العدد: 4 قطع
- التوافق: iOS و Android
- البطارية: CR2032`,
        price: 120.00,
        images: getImages('key-finder'),
        category: categories.misc.slug
    },
    {
        id: 'fingerprint-padlock',
        name: 'قفل بصمة ذكي',
        slug: 'fingerprint-padlock',
        description: `قفل آمن بدون مفتاح. يفتح هذا القفل ببصمة إصبعك في أقل من ثانية ويمكنه تخزين ما يصل إلى 20 بصمة مختلفة.
###FEATURES###
- فتح سريع ببصمة الإصبع
- يخزن حتى 20 بصمة
- بطارية تدوم حتى 6 أشهر بشحنة واحدة
- مقاوم للماء والغبار (IP65)
###DETAILS###
- المادة: سبائك الزنك والفولاذ
- الشحن: Micro USB
- الاستخدام: حقائب، خزائن، دراجات`,
        price: 130.00,
        images: getImages('fingerprint-padlock'),
        category: categories.misc.slug
    },
    {
        id: 'digital-tape-measure',
        name: 'شريط قياس رقمي بالليزر',
        slug: 'digital-tape-measure',
        description: `قياسات دقيقة وسريعة بضغطة زر. يجمع هذا الجهاز بين شريط قياس تقليدي ومقياس ليزر رقمي للمسافات الطويلة.
###FEATURES###
- قياس بالليزر يصل إلى 40 مترًا
- شريط قياس بطول 5 أمتار
- شاشة LCD لعرض القياسات
- حساب المساحة والحجم وفيثاغورس
###DETAILS###
- دقة الليزر: ±2 مم
- البطارية: قابلة لإعادة الشحن USB
- الوحدات: متر، بوصة، قدم`,
        price: 190.00,
        images: getImages('digital-tape-measure'),
        category: categories.misc.slug
    },
    {
        id: 'mini-fridge-4l',
        name: 'ثلاجة صغيرة للعناية بالبشرة 4 لتر',
        slug: 'mini-fridge-4l',
        description: `حافظي على منتجات العناية بالبشرة والمكياج باردة ومنعشة. هذه الثلاجة الصغيرة والأنيقة مثالية لغرفة النوم أو الحمام.
###FEATURES###
- تبريد وتسخين
- سعة 4 لتر (تكفي لـ 6 علب مشروب)
- تشغيل هادئ للغاية
- تعمل بالكهرباء أو من ولاعة السيارة
###DETAILS###
- الأبعاد: 24 × 18 × 25 سم
- الوزن: 1.7 كجم
- اللون: وردي`,
        price: 280.00,
        images: getImages('mini-fridge-4l'),
        category: categories.misc.slug
    },
    {
        id: 'sous-vide-cooker',
        name: 'جهاز طبخ سو فيد (Sous Vide)',
        slug: 'sous-vide-cooker',
        description: `اطبخ مثل المحترفين. يطهو جهاز السو فيد الطعام في حمام مائي متحكم في درجة حرارته بدقة للحصول على نتائج مثالية في كل مرة.
###FEATURES###
- تحكم دقيق في درجة الحرارة (±0.1 درجة مئوية)
- اتصال Wi-Fi للتحكم عبر التطبيق
- محرك قوي وهادئ
- تصميم مقاوم للماء وسهل التنظيف
###DETAILS###
- القوة: 1000 واط
- نطاق درجة الحرارة: 25-90 درجة مئوية
- التوافق: أي وعاء أو قدر`,
        price: 550.00,
        images: getImages('sous-vide-cooker'),
        category: categories.misc.slug
    },
    {
        id: 'pet-feeder-camera',
        name: 'مغذي حيوانات أليفة ذكي مع كاميرا',
        slug: 'pet-feeder-camera',
        description: `اطمئن على حيوانك الأليف وأطعمه من أي مكان. يسمح لك هذا المغذي بجدولة وجبات الطعام ومشاهدة حيوانك والتحدث إليه عبر كاميرا مدمجة.
###FEATURES###
- كاميرا HD بزاوية رؤية واسعة ورؤية ليلية
- صوت ثنائي الاتجاه
- جدولة الوجبات والتحكم في الحصص
- يعمل بالبطارية والكهرباء لضمان الاستمرارية
###DETAILS###
- السعة: 6 لتر
- الاتصال: واي فاي 2.4GHz
- الدقة: 1080p`,
        price: 750.00,
        images: getImages('pet-feeder-camera'),
        category: categories.misc.slug
    },
    {
        id: 'automatic-plant-waterer',
        name: 'نظام سقي نباتات أوتوماتيكي',
        slug: 'automatic-plant-waterer',
        description: `سافر وأنت مرتاح البال. يقوم هذا النظام بسقي نباتاتك تلقائيًا حسب الجدول الذي تحدده.
###FEATURES###
- يسقي ما يصل إلى 10 نباتات
- برمجة سهلة لمدة الري والفاصل الزمني
- يسحب الماء من أي وعاء (دلو، زجاجة)
- يعمل بالبطارية أو USB
###DETAILS###
- المحتويات: مضخة، أنبوب 10م، 10 أوتاد
- مصدر الطاقة: 4 بطاريات AA أو USB
- الاستخدام: للنباتات الداخلية`,
        price: 160.00,
        images: getImages('automatic-plant-waterer'),
        category: categories.misc.slug
    },
    {
        id: 'travel-adapter-universal',
        name: 'محول سفر عالمي',
        slug: 'travel-adapter-universal',
        description: `رفيق السفر المثالي. محول واحد يعمل في أكثر من 150 دولة، مع 4 منافذ USB لشحن جميع أجهزتك.
###FEATURES###
- يغطي الولايات المتحدة/الاتحاد الأوروبي/المملكة المتحدة/أستراليا
- 4 منافذ USB-A ومنفذ USB-C
- حماية من زيادة التيار
- تصميم مدمج مع حقيبة حمل
###DETAILS###
- الحد الأقصى للطاقة: 1840 واط عند 230 فولت
- إخراج USB: 5 فولت / 5.6 أمبير (إجمالي)
- الأمان: فيوز مزدوج`,
        price: 110.00,
        images: getImages('travel-adapter-universal'),
        category: categories.misc.slug
    },
    {
        id: 'motion-sensor-lights',
        name: 'مصابيح LED بحساس حركة (3 قطع)',
        slug: 'motion-sensor-lights',
        description: `أضئ طريقك تلقائيًا. مثالية للخزائن، الممرات، والسلالم. تضيء عند اكتشاف الحركة وتنطفئ بعد 20 ثانية.
###FEATURES###
- تركيب سهل بدون أسلاك (شريط لاصق مغناطيسي)
- تعمل بالبطارية وقابلة لإعادة الشحن USB
- 3 أوضاع: تشغيل/إيقاف/تلقائي
- إضاءة بيضاء دافئة
###DETAILS###
- عدد المصابيح: 3
- عمر البطارية: شهرين في الوضع التلقائي
- نطاق الاستشعار: 3 أمتار، 120 درجة`,
        price: 140.00,
        images: getImages('motion-sensor-lights'),
        category: categories.misc.slug
    },
    {
        id: 'wine-opener-electric',
        name: 'فتاحة نبيذ كهربائية',
        slug: 'wine-opener-electric',
        description: `افتح زجاجات النبيذ بسهولة وأناقة في ثوانٍ. تأتي مع قاطع للرقائق وقاعدة شحن.
###FEATURES###
- تفتح الزجاجة في 6-8 ثوانٍ
- تشغيل بضغطة زر واحدة
- بطارية قابلة لإعادة الشحن تفتح 30 زجاجة
- تصميم أنيق من الفولاذ المقاوم للصدأ
###DETAILS###
- المحتويات: فتاحة، قاطع رقائق، قاعدة شحن
- اللون: فضي
- مصدر الطاقة: قاعدة شحن`,
        price: 170.00,
        images: getImages('wine-opener-electric'),
        category: categories.misc.slug
    },
    {
        id: 'vr-headset-for-phone',
        name: 'نظارة واقع افتراضي للهواتف',
        slug: 'vr-headset-for-phone',
        description: `حول هاتفك إلى بوابة للواقع الافتراضي. شاهد أفلام 360 درجة والعب ألعاب VR غامرة.
###FEATURES###
- عدسات عالية الجودة قابلة للتعديل
- سماعات رأس مدمجة
- تصميم مريح مع أحزمة قابلة للتعديل
- زر لمس الشاشة للتفاعل
###DETAILS###
- التوافق: هواتف 4.7-6.5 بوصة
- مجال الرؤية: 120 درجة
- المادة: بلاستيك ABS`,
        price: 220.00,
        images: getImages('vr-headset-for-phone'),
        category: categories.misc.slug
    },
    {
        id: 'portable-photo-printer',
        name: 'طابعة صور محمولة',
        slug: 'portable-photo-printer',
        description: `اطبع صورك المفضلة مباشرة من هاتفك. طابعة صغيرة لا تستخدم الحبر وتطبع صورًا لاصقة مقاس 2x3 بوصة.
###FEATURES###
- تقنية الطباعة ZINK (بدون حبر)
- تطبع صورًا لاصقة مقاومة للماء
- اتصال بلوتوث سهل
- تحرير الصور وإضافة فلاتر عبر التطبيق
###DETAILS###
- حجم الصورة: 2x3 بوصة
- البطارية: قابلة لإعادة الشحن
- التوافق: iOS و Android`,
        price: 480.00,
        images: getImages('portable-photo-printer'),
        category: categories.misc.slug
    },
    {
        id: 'air-fryer-smart',
        name: 'مقلاة هوائية ذكية',
        slug: 'air-fryer-smart',
        description: `استمتع بطعام مقلي صحي مع دهون أقل بنسبة تصل إلى 85%. تحكم في المقلاة عن بعد واختر من بين عشرات الوصفات عبر التطبيق.
###FEATURES###
- سعة 5.5 لتر
- 11 إعدادًا مسبقًا للطهي
- التحكم عبر التطبيق والأوامر الصوتية
- سلة غير لاصقة وآمنة في غسالة الصحون
###DETAILS###
- القوة: 1700 واط
- نطاق درجة الحرارة: 77-205 درجة مئوية
- الاتصال: واي فاي`,
        price: 650.00,
        images: getImages('air-fryer-smart'),
        category: categories.misc.slug
    },
    {
        id: 'karaoke-mic-bluetooth',
        name: 'ميكروفون كاريوكي بلوتوث',
        slug: 'karaoke-mic-bluetooth',
        description: `أطلق العنان لنجم الغناء بداخلك. هذا الميكروفون 3 في 1 هو ميكروفون، مكبر صوت، ومسجل في جهاز واحد.
###FEATURES###
- مكبر صوت ستيريو مدمج
- تأثيرات صوتية متعددة (مثل الصدى)
- اتصال بلوتوث لتشغيل الموسيقى
- بطارية تدوم 5-8 ساعات
###DETAILS###
- القوة: 5 واط
- التوافق: iOS, Android, PC
- الألوان: ذهبي وردي, أسود, أزرق`,
        price: 150.00,
        images: getImages('karaoke-mic-bluetooth'),
        category: categories.misc.slug
    },
    {
        id: 'foot-massager-shiatsu',
        name: 'جهاز تدليك القدم شياتسو',
        slug: 'foot-massager-shiatsu',
        description: `امنح قدميك الراحة التي تستحقها. يوفر هذا الجهاز تدليكًا عميقًا بتقنية شياتسو مع ضغط الهواء ووظيفة التدفئة.
###FEATURES###
- تدليك شياتسو دوار
- ضغط الهواء مع 3 مستويات شدة
- وظيفة تدفئة مهدئة
- تصميم يغطي القدم بالكامل
###DETAILS###
- مصدر الطاقة: محول كهربائي
- المؤقت: 15/30 دقيقة
- أغطية قابلة للغسل: نعم`,
        price: 580.00,
        images: getImages('foot-massager-shiatsu'),
        category: categories.misc.slug
    },
    {
        id: 'dog-camera-treat-tosser',
        name: 'كاميرا للكلاب مع قاذف حلوى',
        slug: 'dog-camera-treat-tosser',
        description: `تفاعل مع كلبك حتى وأنت خارج المنزل. شاهد وتحدث وألقِ له الحلوى بلمسة زر من هاتفك.
###FEATURES###
- كاميرا 1080p بزاوية رؤية 165 درجة ورؤية ليلية
- صوت ثنائي الاتجاه
- قذف الحلوى عن بعد
- تنبيهات نباح مخصصة
###DETAILS###
- الاتصال: واي فاي 2.4GHz
- سعة الحلوى: 100 قطعة
- التوافق: iOS و Android`,
        price: 850.00,
        images: getImages('dog-camera-treat-tosser'),
        category: categories.misc.slug
    },
    {
        id: 'levitating-plant-pot',
        name: 'أصيص نباتات طائر',
        slug: 'levitating-plant-pot',
        description: `أضف لمسة من السحر والخيال العلمي إلى ديكورك. هذا الأصيص يطفو ويدور في الهواء فوق قاعدة مغناطيسية.
###FEATURES###
- يطفو ويدور 360 درجة
- تصميم هندسي أنيق
- مثالي للنباتات الهوائية الصغيرة والعصاريات
- سهل الإعداد
###DETAILS###
- المادة: ABS
- القاعدة: خشبية
- الحجم: مناسب للنباتات الصغيرة`,
        price: 380.00,
        images: getImages('levitating-plant-pot'),
        category: categories.misc.slug
    },
    {
        id: 'digital-kitchen-scale',
        name: 'ميزان مطبخ رقمي',
        slug: 'digital-kitchen-scale',
        description: `دقة في الطهي والخبز. يقيس هذا الميزان المكونات بدقة عالية ويتميز بوظيفة تصفير الوزن لسهولة إضافة المكونات.
###FEATURES###
- دقة عالية (1 جرام)
- سطح من الفولاذ المقاوم للصدأ سهل التنظيف
- وظيفة تصفير الوزن (Tare)
- وحدات قياس متعددة (جرام، أونصة، مل)
###DETAILS###
- الحد الأقصى للوزن: 5 كجم
- البطارية: 2x AAA
- شاشة: LCD بإضاءة خلفية`,
        price: 80.00,
        images: getImages('digital-kitchen-scale'),
        category: categories.misc.slug
    },
    {
        id: 'cocktail-maker-machine',
        name: 'آلة صنع الكوكتيل الأوتوماتيكية',
        slug: 'cocktail-maker-machine',
        description: `اصنع كوكتيلات احترافية بضغطة زر. املأ الكبسولات بمكوناتك المفضلة ودع الآلة تقوم بالباقي.
###FEATURES###
- تخلط مئات أنواع الكوكتيلات
- تحكم عبر التطبيق لاختيار المشروبات
- 5 كبسولات زجاجية للمكونات
- دورة تنظيف ذاتي
###DETAILS###
- التوافق: iOS و Android
- المواد: زجاج وفولاذ مقاوم للصدأ
- الأبعاد: 35 × 25 × 40 سم`,
        price: 1500.00,
        images: getImages('cocktail-maker-machine'),
        category: categories.misc.slug
    },
    {
        id: 'led-light-strips',
        name: 'شرائط إضاءة LED ذكية',
        slug: 'led-light-strips',
        description: `أضف أجواءً مذهلة إلى أي غرفة. تتزامن هذه الشرائط مع الموسيقى ويمكن التحكم فيها عبر التطبيق أو الأوامر الصوتية.
###FEATURES###
- 16 مليون لون وتأثيرات متعددة
- مزامنة مع الموسيقى
- التحكم عبر التطبيق و Alexa/Google Assistant
- سهلة التركيب مع شريط لاصق
###DETAILS###
- الطول: 5 أمتار (قابل للقص)
- الاتصال: واي فاي وبلوتوث
- مقاومة الماء: IP65`,
        price: 160.00,
        images: getImages('led-light-strips'),
        category: categories.misc.slug
    },
    {
        id: 'desktop-vacuum-cleaner',
        name: 'مكنسة مكتب صغيرة',
        slug: 'desktop-vacuum-cleaner',
        description: `حافظ على نظافة مساحة عملك. هذه المكنسة الصغيرة تشفط الغبار، فتات الطعام، وشعر الحيوانات الأليفة من مكتبك ولوحة المفاتيح.
###FEATURES###
- تصميم لاسلكي ومحمول
- شفط قوي 360 درجة
- تعمل بالبطارية وقابلة لإعادة الشحن USB
- سهلة التفريغ والتنظيف
###DETAILS###
- وقت التشغيل: 1.5 ساعة
- الوزن: 160 جرام
- اللون: أبيض`,
        price: 70.00,
        images: getImages('desktop-vacuum-cleaner'),
        category: categories.misc.slug
    },
    {
        id: 'solar-power-bank-20000mah',
        name: 'باور بانك شمسي 20000mAh',
        slug: 'solar-power-bank-20000mah',
        description: `طاقة لا تنضب في مغامراتك. يشحن هذا الباور بانك أجهزتك ويمكن إعادة شحنه باستخدام الطاقة الشمسية، مع كشاف مدمج.
###FEATURES###
- سعة كبيرة 20000mAh
- شحن بالطاقة الشمسية للطوارئ
- منفذان USB
- كشاف LED قوي مع وضع SOS
###DETAILS###
- مقاوم للماء والغبار والصدمات
- الإدخال: Micro USB, USB-C
- الإخراج: 5V/2.1A`,
        price: 240.00,
        images: getImages('solar-power-bank-20000mah'),
        category: categories.misc.slug
    },
    {
        id: 'smart-meat-thermometer',
        name: 'ميزان حرارة لحوم ذكي لاسلكي',
        slug: 'smart-meat-thermometer',
        description: `احصل على لحم مطهو بشكل مثالي في كل مرة. يراقب هذا الميزان درجة حرارة اللحم ويرسل البيانات إلى هاتفك.
###FEATURES###
- لاسلكي بالكامل بمدى 50 مترًا
- مستشعران: لدرجة حرارة اللحم والفرن
- تقدير وقت الطهي المتبقي
- إرشادات طهي خطوة بخطوة في التطبيق
###DETAILS###
- الاتصال: بلوتوث
- مقاومة الحرارة: حتى 300 درجة مئوية
- التوافق: iOS و Android`,
        price: 450.00,
        images: getImages('smart-meat-thermometer'),
        category: categories.misc.slug
    },
    {
        id: 'sleep-headphones-mask',
        name: 'قناع نوم مع سماعات بلوتوث',
        slug: 'sleep-headphones-mask',
        description: `استمتع بنوم عميق وهادئ. يجمع هذا القناع بين حجب الضوء التام وسماعات رأس لاسلكية رفيعة للاستماع إلى الموسيقى الهادئة أو البودكاست.
###FEATURES###
- حجب 100% للضوء
- سماعات رأس رفيعة ومريحة
- اتصال بلوتوث
- بطارية تدوم 10 ساعات
###DETAILS###
- المادة: قماش ناعم ومسامي
- قابل للغسل (بعد إزالة السماعات)
- الشحن: Micro USB`,
        price: 130.00,
        images: getImages('sleep-headphones-mask'),
        category: categories.misc.slug
    },
    {
        id: 'ember-mug-2',
        name: 'كوب Ember الذكي الإصدار الثاني',
        slug: 'ember-mug-2',
        description: `كوب القهوة الذي لا يبرد أبدًا. حافظ على مشروبك في درجة الحرارة المثالية التي تختارها بالضبط من أول رشفة حتى الأخيرة.
###FEATURES###
- يتحكم في درجة الحرارة بدقة
- عمر بطارية يصل إلى 1.5 ساعة أو طوال اليوم على القاعدة
- التحكم عبر التطبيق
- ينام تلقائيًا عندما يكون فارغًا
###DETAILS###
- السعة: 295 مل
- المادة: سيراميك مقاوم للصدأ
- مقاوم للماء: IPX7`,
        price: 600.00,
        images: getImages('ember-mug-2'),
        category: categories.misc.slug
    },
    {
        id: 'click-and-grow-smart-garden',
        name: 'حديقة Click & Grow الذكية 3',
        slug: 'click-and-grow-smart-garden',
        description: `ازرع الأعشاب الطازجة في مطبخك بدون مجهود. توفر هذه الحديقة الذكية للنباتات الماء والضوء والمغذيات تلقائيًا.
###FEATURES###
- تزرع 3 نباتات في المرة الواحدة
- إضاءة LED موفرة للطاقة
- نظام ري ذاتي
- لا حاجة للمبيدات أو الأسمدة
###DETAILS###
- المحتويات: حديقة، 3 كبسولات ريحان
- مصدر الطاقة: محول كهربائي
- الأبعاد: 30 × 12 × 34 سم`,
        price: 550.00,
        images: getImages('click-and-grow-smart-garden'),
        category: categories.misc.slug
    },
    {
        id: 'theragun-mini',
        name: 'جهاز تدليك Theragun Mini',
        slug: 'theragun-mini',
        description: `علاج العضلات العميقة بحجم الجيب. يوفر Theragun mini راحة فورية من التوتر والتعب أينما كنت.
###FEATURES###
- محمول ومدمج
- 3 سرعات قابلة للتعديل
- محرك QuietForce هادئ
- تصميم مريح
###DETAILS###
- عمر البطارية: 150 دقيقة
- الوزن: 650 جرام
- الملحقات: حقيبة حمل، رأس تدليك واحد`,
        price: 950.00,
        images: getImages('theragun-mini'),
        category: categories.misc.slug
    },
    {
        id: 'nanoleaf-shapes',
        name: 'ألواح إضاءة Nanoleaf Shapes - سداسية',
        slug: 'nanoleaf-shapes',
        description: `صمم تحفتك الفنية المضيئة. تتيح لك هذه الألواح السداسية إنشاء تصميمات مخصصة تتفاعل مع اللمس والموسيقى.
###FEATURES###
- تصميم معياري، يمكنك توصيلها بأي شكل
- 16 مليون لون
- تتفاعل مع اللمس والموسيقى
- التحكم عبر التطبيق والأوامر الصوتية
###DETAILS###
- المحتويات: 9 ألواح سداسية
- الاتصال: واي فاي
- التوافق: Apple HomeKit, Alexa, Google Assistant`,
        price: 900.00,
        images: getImages('nanoleaf-shapes'),
        category: categories.misc.slug
    },
    {
        id: 'smart-jump-rope',
        name: 'حبل قفز ذكي',
        slug: 'smart-jump-rope',
        description: `ارتقِ بتمارينك. يتتبع هذا الحبل عدد القفزات، والسعرات الحرارية المحروقة، ومدة التمرين، ويزامن البيانات مع هاتفك.
###FEATURES###
- يتتبع بيانات التمرين
- يتصل بتطبيق عبر البلوتوث
- طول حبل قابل للتعديل
- مقابض مريحة مانعة للانزلاق
###DETAILS###
- البطارية: CR2032 (تدوم عامًا)
- التوافق: iOS و Android
- المادة: حبل PVC`,
        price: 180.00,
        images: getImages('smart-jump-rope'),
        category: categories.misc.slug
    },
    {
        id: 'temperature-control-travel-mug',
        name: 'كوب سفر متحكم في درجة الحرارة',
        slug: 'temperature-control-travel-mug',
        description: `استمتع بمشروبك الساخن في درجة الحرارة المثالية أثناء التنقل. يمكنك ضبط درجة الحرارة مباشرة من الكوب.
###FEATURES###
- يحافظ على درجة الحرارة لمدة 3 ساعات
- شاشة لمس لضبط درجة الحرارة
- تصميم مانع للتسرب 360 درجة
- مصنوع من الفولاذ المقاوم للصدأ
###DETAILS###
- السعة: 355 مل
- نطاق الحرارة: 50-62.5 درجة مئوية
- مقاوم للماء: IPX7`,
        price: 850.00,
        images: getImages('temperature-control-travel-mug'),
        category: categories.misc.slug
    },
    {
        id: 'pocket-synthesizer',
        name: 'مُركِّب موسيقي للجيب',
        slug: 'pocket-synthesizer',
        description: `اصنع الموسيقى في أي مكان. هذا الجهاز الصغير هو مُركِّب صوتي قوي وسيكوينسر مع مكبر صوت مدمج.
###FEATURES###
- 16 صوتًا مختلفًا
- سيكوينسر 16 خطوة
- تأثيرات صوتية متعددة
- مكبر صوت مدمج وشاشة LCD متحركة
###DETAILS###
- مزامنة مع أجهزة Pocket Operator الأخرى
- البطارية: 2x AAA (تدوم شهرًا)
- المخرج: 3.5 ملم`,
        price: 350.00,
        images: getImages('pocket-synthesizer'),
        category: categories.misc.slug
    },
    {
        id: 'smart-guitar',
        name: 'جيتار ذكي للمبتدئين',
        slug: 'smart-guitar',
        description: `تعلم العزف على الجيتار بسهولة. يحتوي هذا الجيتار على لوحة أصابع LED تريك أين تضع أصابعك، ويتصل بتطبيق تعليمي.
###FEATURES###
- لوحة أصابع LED تفاعلية
- تطبيق تعليمي مع دروس وألعاب
- تصميم مدمج ومحمول
- مخرج صوت لتوصيله بسماعات أو مضخم
###DETAILS###
- المادة: خشب القيقب
- طول الأوتار: 23.5 بوصة
- البطارية: قابلة لإعادة الشحن`,
        price: 1400.00,
        images: getImages('smart-guitar'),
        category: categories.misc.slug
    },
    {
        id: 'handwriting-to-text-pen',
        name: 'قلم تحويل الكتابة اليدوية إلى نص',
        slug: 'handwriting-to-text-pen',
        description: `اكتب على أي ورقة وحول ملاحظاتك إلى نص رقمي على الفور. يتعرف القلم على خط يدك ويحفظه على هاتفك أو جهازك اللوحي.
###FEATURES###
- يحول الكتابة اليدوية إلى نص رقمي
- يعمل على أي نوع من الورق
- يخزن آلاف الصفحات في ذاكرته الداخلية
- يتزامن عبر البلوتوث
###DETAILS###
- التوافق: iOS, Android, Windows, macOS
- عمر البطارية: 8 ساعات من الكتابة
- الشحن: Micro USB`,
        price: 700.00,
        images: getImages('handwriting-to-text-pen'),
        category: categories.misc.slug
    },
    {
        id: 'smart-chess-board',
        name: 'لوحة شطرنج ذكية',
        slug: 'smart-chess-board',
        description: `العب الشطرنج مع أي شخص في العالم على لوحة حقيقية. تتحرك قطع الخصم تلقائيًا على اللوحة بفضل آلية روبوتية.
###FEATURES###
- العب عبر الإنترنت على لوحة حقيقية
- قطع ذاتية الحركة
- تحليل اللعبة وتدريب مدمج
- لوحة خشبية مصنوعة يدويًا
###DETAILS###
- الاتصال: بلوتوث
- التوافق: Chess.com, Lichess
- البطارية: قابلة لإعادة الشحن`,
        price: 1800.00,
        images: getImages('smart-chess-board'),
        category: categories.misc.slug
    },
    {
        id: 'air-quality-monitor',
        name: 'جهاز مراقبة جودة الهواء',
        slug: 'air-quality-monitor',
        description: `اعرف ما تتنفسه. يقيس هذا الجهاز الجسيمات الدقيقة (PM2.5)، المركبات العضوية المتطايرة، درجة الحرارة، والرطوبة.
###FEATURES###
- يقيس 4 مؤشرات لجودة الهواء
- شاشة عرض سهلة القراءة
- يتصل بتطبيق لعرض البيانات التاريخية
- محمول ويعمل بالبطارية
###DETAILS###
- عمر البطارية: 6 ساعات
- الاتصال: واي فاي وبلوتوث
- الشحن: USB-C`,
        price: 650.00,
        images: getImages('air-quality-monitor'),
        category: categories.misc.slug
    },
    {
        id: 'automatic-cocktail-maker',
        name: 'صانع الكوكتيل الأوتوماتيكي',
        slug: 'automatic-cocktail-maker',
        description: `كن نادل محترف في منزلك. املأ الجهاز بمكوناتك واختر مشروبك من التطبيق ليتم تحضيره في ثوانٍ.
###FEATURES###
- يحضر مئات الوصفات
- 6 خزانات زجاجية للمكونات
- تحكم عبر شاشة لمس أو تطبيق
- دورة تنظيف أوتوماتيكية
###DETAILS###
- الاتصال: واي فاي
- المواد: زجاج وفولاذ مقاوم للصدأ
- الأبعاد: 40 × 30 × 45 سم`,
        price: 2500.00,
        images: getImages('automatic-cocktail-maker'),
        category: categories.misc.slug
    },
    {
        id: 'self-cleaning-cat-litter-box',
        name: 'صندوق فضلات القطط ذاتي التنظيف',
        slug: 'self-cleaning-cat-litter-box',
        description: `تخلص من عناء تنظيف صندوق الفضلات. يقوم هذا الصندوق الذكي بتنظيف نفسه تلقائيًا بعد كل استخدام ويحتوي على الروائح.
###FEATURES###
- تنظيف تلقائي
- نظام للتحكم في الروائح
- مستشعرات أمان للقطط
- يتصل بتطبيق لتتبع استخدام القطة وصحتها
###DETAILS###
- مناسب للقطط متعددة
- سعة درج النفايات: 7 أيام
- الاتصال: واي فاي`,
        price: 2200.00,
        images: getImages('self-cleaning-cat-litter-box'),
        category: categories.misc.slug
    },
    {
        id: 'smart-dog-collar',
        name: 'طوق كلاب ذكي مع GPS',
        slug: 'smart-dog-collar',
        description: `لا تقلق بشأن فقدان كلبك مرة أخرى. يوفر هذا الطوق تتبعًا مباشرًا للموقع عبر GPS ويراقب نشاط حيوانك الأليف وصحته.
###FEATURES###
- تتبع GPS مباشر
- مراقبة النشاط ومستويات اللياقة
- تحديد مناطق آمنة وتلقي تنبيهات
- مقاوم للماء 100%
###DETAILS###
- عمر البطارية: 2-5 أيام
- يتطلب اشتراكًا شهريًا
- الوزن: 30 جرام`,
        price: 250.00,
        images: getImages('smart-dog-collar'),
        category: categories.misc.slug
    },
    {
        id: 'language-translator-earbuds',
        name: 'سماعات أذن للترجمة الفورية',
        slug: 'language-translator-earbuds',
        description: `تحدث مع أي شخص في العالم. تترجم هذه السماعات 40 لغة و 93 لهجة في الوقت الفعلي.
###FEATURES###
- ترجمة فورية ثنائية الاتجاه
- تدعم 40 لغة
- وضع المحادثة ووضع الاستماع
- جودة صوت عالية للموسيقى والمكالمات
###DETAILS###
- الاتصال: بلوتوث 5.0
- عمر البطارية: 6 ساعات (24 مع العلبة)
- تتطلب اتصال بالإنترنت وتطبيق`,
        price: 800.00,
        images: getImages('language-translator-earbuds'),
        category: categories.misc.slug
    },
    {
        id: 'smart-whiteboard',
        name: 'سبورة بيضاء ذكية',
        slug: 'smart-whiteboard',
        description: `حول أفكارك إلى محتوى رقمي. كل ما تكتبه على هذه السبورة يتم حفظه ومشاركته في الوقت الحقيقي مع فريقك.
###FEATURES###
- التقاط ومشاركة الملاحظات في الوقت الحقيقي
- بث مباشر إلى أي متصفح ويب
- يحفظ تلقائيًا إلى السحابة
- متوافق مع أقلام المسح الجاف العادية
###DETAILS###
- الحجم: 90 × 60 سم
- الاتصال: واي فاي
- مصدر الطاقة: محول كهربائي`,
        price: 2800.00,
        images: getImages('smart-whiteboard'),
        category: categories.misc.slug
    },
    {
        id: 'electric-longboard',
        name: 'لوح تزلج كهربائي طويل',
        slug: 'electric-longboard',
        description: `تنقل في المدينة بأناقة وسرعة. يصل هذا اللوح إلى سرعة 40 كم/ساعة بمدى يصل إلى 25 كم.
###FEATURES###
- سرعة قصوى 40 كم/ساعة
- مدى يصل إلى 25 كم
- محركان قويان
- فرامل متجددة (تعيد شحن البطارية عند الفرملة)
###DETAILS###
- الوزن: 7.7 كجم
- وقت الشحن: 4-5 ساعات
- التحكم: ريموت لاسلكي`,
        price: 2300.00,
        images: getImages('electric-longboard'),
        category: categories.misc.slug
    }
];


const healthProducts: Product[] = [
    {
        id: 'smart-scale',
        name: 'ميزان ذكي لتحليل الجسم',
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
        slug: 'smart-scale',
        images: getImages('smart-scale'),
        category: categories.health.slug
    },
    {
        id: 'handheld-massager',
        name: 'جهاز مساج يدوي للأنسجة العميقة',
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
        slug: 'handheld-massager',
        images: getImages('handheld-massager'),
        category: categories.health.slug
    },
    {
        id: 'electric-toothbrush-s1',
        name: 'فرشاة أسنان كهربائية S1',
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
        slug: 'electric-toothbrush-s1',
        images: getImages('electric-toothbrush-s1'),
        category: categories.health.slug
    },
    {
        id: 'uv-sterilizer-box',
        name: 'صندوق تعقيم بالأشعة فوق البنفسجية',
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
        slug: 'uv-sterilizer-box',
        images: getImages('uv-sterilizer-box'),
        category: categories.health.slug
    },
    {
        id: 'smart-watch-h5',
        name: 'ساعة ذكية H5 لتتبع الصحة',
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
        slug: 'smart-watch-h5',
        images: getImages('smart-watch-h5'),
        category: categories.health.slug
    },
    {
        id: 'water-flosser-wf1',
        name: 'جهاز تنظيف الأسنان بالماء WF1',
        description: `نظافة أسنان احترافية في منزلك. يزيل هذا الجهاز بقايا الطعام والبلاك من بين الأسنان وعلى طول خط اللثة بفعالية أكبر من الخيط التقليدي.
###FEATURES###
- 3 أوضاع تشغيل (عادي, ناعم, نبضي)
- خزان ماء كبير قابل للفصل
- مقاوم للماء بمعيار IPX7
- بطارية تدوم طويلاً
###DETAILS###
- السعة: 300 مل
- الشحن: USB
- الملحقات: 4 رؤوس مختلفة`,
        price: 280.00,
        slug: 'water-flosser-wf1',
        images: getImages('water-flosser-wf1'),
        category: categories.health.slug
    },
    {
        id: 'facial-steamer-fs100',
        name: 'جهاز بخار الوجه FS100',
        description: `دللي بشرتك بجلسة سبا في المنزل. يفتح جهاز بخار الوجه المسام، ويرطب البشرة بعمق، ويعزز امتصاص منتجات العناية بالبشرة.
###FEATURES###
- يولد بخار نانو أيوني دافئ
- يساعد على تنظيف المسام بعمق
- يحسن الدورة الدموية في الوجه
- خزان ماء بسعة 70 مل
###DETAILS###
- وقت التشغيل: 10 دقائق
- مصدر الطاقة: كهربائي
- اللون: أبيض`,
        price: 180.00,
        slug: 'facial-steamer-fs100',
        images: getImages('facial-steamer-fs100'),
        category: categories.health.slug
    },
    {
        id: 'led-face-mask-lm3',
        name: 'قناع الوجه الضوئي LED',
        description: `عالج مشاكل بشرتك المختلفة باستخدام العلاج بالضوء. يوفر هذا القناع 7 ألوان مختلفة من ضوء LED لمعالجة حب الشباب والتجاعيد وتصبغ البشرة.
###FEATURES###
- 7 ألوان علاجية (أحمر، أزرق، أخضر، إلخ)
- تصميم لاسلكي ومريح
- مؤقت تلقائي
- آمن لجميع أنواع البشرة
###DETAILS###
- الشحن: USB
- المواد: سيليكون طبي
- مدة الجلسة الموصى بها: 15-20 دقيقة`,
        price: 450.00,
        slug: 'led-face-mask-lm3',
        images: getImages('led-face-mask-lm3'),
        category: categories.health.slug
    },
    {
        id: 'supersonic-hair-dryer-hd08',
        name: 'مجفف شعر Supersonic HD08',
        description: `تجفيف سريع بدون حرارة مفرطة. يستخدم مجفف الشعر Supersonic تقنية Air Multiplier ومحركًا رقميًا قويًا لحماية لمعان شعرك الطبيعي.
###FEATURES###
- محرك رقمي قوي
- تحكم ذكي في درجة الحرارة
- 4 ملحقات مغناطيسية مختلفة
- تصميم خفيف ومتوازن
###DETAILS###
- القوة: 1600 واط
- عدد السرعات: 3
- عدد إعدادات الحرارة: 4`,
        price: 1600.00,
        slug: 'supersonic-hair-dryer-hd08',
        images: getImages('supersonic-hair-dryer-hd08'),
        category: categories.health.slug
    },
    {
        id: 'hair-straightener-hs1',
        name: 'مكواة فرد الشعر HS1 بالسيراميك',
        description: `احصلي على شعر ناعم وأملس في دقائق. تتميز هذه المكواة بألواح سيراميك عائمة لتوزيع الحرارة بالتساوي ومنع تلف الشعر.
###FEATURES###
- ألواح سيراميك متقدمة
- تسخين سريع في 30 ثانية
- شاشة LCD لعرض درجة الحرارة
- إيقاف تلقائي للأمان
###DETAILS###
- نطاق الحرارة: 150-230 درجة مئوية
- طول السلك: 2 متر (دوار)
- الجهد: عالمي`,
        price: 250.00,
        slug: 'hair-straightener-hs1',
        images: getImages('hair-straightener-hs1'),
        category: categories.health.slug
    },
    {
        id: 'automatic-curling-iron-ac1',
        name: 'جهاز تمويج الشعر الأوتوماتيكي AC1',
        description: `تموجات شعر مثالية بضغطة زر. يقوم هذا الجهاز بسحب خصلة الشعر ولفها تلقائيًا داخل حجرة السيراميك للحصول على تموجات متناسقة.
###FEATURES###
- تقنية اللف التلقائي
- حجرة سيراميك التورمالين
- اتجاهات تجعيد قابلة للتعديل (يمين/يسار/مختلط)
- إعدادات حرارة ومؤقت متعددة
###DETAILS###
- نطاق الحرارة: 190-230 درجة مئوية
- الشحن: USB-C (لاسلكي)
- عمر البطارية: 60 دقيقة`,
        price: 380.00,
        slug: 'automatic-curling-iron-ac1',
        images: getImages('automatic-curling-iron-ac1'),
        category: categories.health.slug
    },
    {
        id: 'electric-shaver-es9',
        name: 'ماكينة حلاقة كهربائية ES9 للرجال',
        description: `حلاقة ناعمة ومريحة، جافة أو رطبة. تتميز هذه الماكينة برؤوس حلاقة مرنة تتكيف مع منحنيات الوجه لإزالة الشعر بفعالية.
###FEATURES###
- رؤوس حلاقة عائمة خماسية الأبعاد
- للاستخدام الجاف والرطب
- أداة تشذيب منبثقة للسوالف والشارب
- شاشة LED لعرض مستوى البطارية
###DETAILS###
- مقاومة للماء: IPX7
- وقت التشغيل: 90 دقيقة
- الشحن: USB (ساعة واحدة)`,
        price: 320.00,
        slug: 'electric-shaver-es9',
        images: getImages('electric-shaver-es9'),
        category: categories.health.slug
    },
    {
        id: 'epilator-silk-epil-9',
        name: 'آلة إزالة الشعر Silk-épil 9',
        description: `بشرة ناعمة تدوم لأسابيع. تزيل آلة Silk-épil 9 أقصر الشعيرات التي لا يستطيع الشمع التقاطها، للاستخدام الجاف أو مع الماء.
###FEATURES###
- رأس أعرض بنسبة 40% لإزالة المزيد من الشعر
- تقنية Micro-Grip لإزالة أقصر الشعيرات
- للاستخدام الجاف والرطب
- تأتي مع ملحقات متعددة (رأس حلاقة، رأس تدليك)
###DETAILS###
- عدد الملاقط: 40
- لاسلكية: نعم
- مصدر الطاقة: بطارية قابلة لإعادة الشحن`,
        price: 550.00,
        slug: 'epilator-silk-epil-9',
        images: getImages('epilator-silk-epil-9'),
        category: categories.health.slug
    },
    {
        id: 'nail-drill-machine-ndm1',
        name: 'جهاز برد الأظافر الكهربائي NDM1',
        description: `للعناية بالأظافر كالمحترفين في المنزل. مثالي للبرد، والنحت، والتلميع، وإزالة الجلد الميت والأظافر الاصطناعية.
###FEATURES###
- سرعة قابلة للتعديل (0-20,000 دورة في الدقيقة)
- تشغيل هادئ واهتزاز منخفض
- اتجاه دوران أمامي وعكسي
- يأتي مع مجموعة من رؤوس البرد
###DETAILS###
- مصدر الطاقة: محول كهربائي
- المادة: ألومنيوم
- الاستخدام: مانيكير وباديكير`,
        price: 210.00,
        slug: 'nail-drill-machine-ndm1',
        images: getImages('nail-drill-machine-ndm1'),
        category: categories.health.slug
    },
    {
        id: 'uv-nail-lamp-nl1',
        name: 'مصباح UV/LED لتجفيف طلاء الأظافر',
        description: `جففي طلاء الأظافر الجل بسرعة وكفاءة. يتميز هذا المصباح بتقنية مزدوجة (UV/LED) ومستشعر ذكي للتشغيل التلقائي.
###FEATURES###
- 48 واط مع 30 لمبة LED
- 4 إعدادات للمؤقت (10، 30، 60، 99 ثانية)
- مستشعر ذكي للتشغيل والإيقاف التلقائي
- قاعدة قابلة للفصل للباديكير
###DETAILS###
- العمر الافتراضي للمبات: 50,000 ساعة
- مصدر الطاقة: محول كهربائي
- الحجم: يناسب اليدين والقدمين`,
        price: 150.00,
        slug: 'uv-nail-lamp-nl1',
        images: getImages('uv-nail-lamp-nl1'),
        category: categories.health.slug
    },
    {
        id: 'back-massager-chair-bm1',
        name: 'وسادة تدليك الظهر للكرسي',
        description: `حول أي كرسي إلى مقعد تدليك فاخر. توفر هذه الوسادة تدليك شياتسو عميق للظهر والرقبة مع وظيفة التدفئة.
###FEATURES###
- 4 رؤوس تدليك للرقبة و 8 للظهر
- تدليك بالاهتزاز للمقعد
- وظيفة تدفئة مهدئة
- ريموت كنترول للتحكم الكامل
###DETAILS###
- المادة: جلد صناعي وقماش شبكي
- مصدر الطاقة: محول كهربائي
- مناسبة: للمنزل والمكتب والسيارة`,
        price: 480.00,
        slug: 'back-massager-chair-bm1',
        images: getImages('back-massager-chair-bm1'),
        category: categories.health.slug
    },
    {
        id: 'neck-shoulder-massager-nsm1',
        name: 'جهاز تدليك الرقبة والأكتاف',
        description: `تخلص من آلام الرقبة والأكتاف. يلتف هذا الجهاز حول رقبتك ليوفر تدليك شياتسو عميق مع حرارة لتخفيف التوتر.
###FEATURES###
- 8 رؤوس تدليك دوارة
- 3 مستويات للسرعة
- وظيفة تدفئة بالأشعة تحت الحمراء
- مقابض للتحكم في شدة التدليك
###DETAILS###
- مصدر الطاقة: محول كهربائي ومنفذ سيارة
- إيقاف تلقائي: بعد 15 دقيقة
- المادة: جلد صناعي`,
        price: 290.00,
        slug: 'neck-shoulder-massager-nsm1',
        images: getImages('neck-shoulder-massager-nsm1'),
        category: categories.health.slug
    },
    {
        id: 'eye-massager-em1',
        name: 'جهاز تدليك العين الذكي',
        description: `خفف من إجهاد العين والصداع. يستخدم هذا الجهاز ضغط الهواء والاهتزاز والحرارة لتدليك منطقة العين بلطف.
###FEATURES###
- 5 أوضاع تدليك مختلفة
- مكبرات صوت مدمجة مع موسيقى هادئة
- تصميم قابل للطي ومحمول
- بطارية قابلة لإعادة الشحن
###DETAILS###
- الاتصال: بلوتوث لتشغيل موسيقاك الخاصة
- المادة: بطانة ناعمة ومريحة
- الشحن: USB`,
        price: 340.00,
        slug: 'eye-massager-em1',
        images: getImages('eye-massager-em1'),
        category: categories.health.slug
    },
    {
        id: 'scalp-massager-sm1',
        name: 'جهاز تدليك فروة الرأس الكهربائي',
        description: `استرخ وحفز نمو الشعر. يحاكي هذا الجهاز حركات أصابع اليد لتقديم تدليك عميق ومريح لفروة الرأس.
###FEATURES###
- 4 رؤوس تدليك مع 28 عقدة سيليكون
- للاستخدام الجاف أو مع الماء
- سرعتان مختلفتان
- لاسلكي وقابل لإعادة الشحن
###DETAILS###
- مقاوم للماء: IPX7
- المادة: سيليكون ناعم
- قاعدة شحن: نعم`,
        price: 190.00,
        slug: 'scalp-massager-sm1',
        images: getImages('scalp-massager-sm1'),
        category: categories.health.slug
    },
    {
        id: 'blood-pressure-monitor-bpm1',
        name: 'جهاز قياس ضغط الدم الرقمي',
        description: `راقب صحة قلبك في المنزل. يوفر هذا الجهاز قراءات دقيقة لضغط الدم ومعدل ضربات القلب بلمسة زر واحدة.
###FEATURES###
- شاشة LCD كبيرة وسهلة القراءة
- يخزن قراءات لشخصين (90 قراءة لكل شخص)
- كشف عدم انتظام ضربات القلب
- سوار ذراع مريح وقابل للتعديل
###DETAILS###
- الدقة: معتمدة إكلينيكيًا
- مصدر الطاقة: 4 بطاريات AA أو محول كهربائي
- الملحقات: حقيبة تخزين`,
        price: 200.00,
        slug: 'blood-pressure-monitor-bpm1',
        images: getImages('blood-pressure-monitor-bpm1'),
        category: categories.health.slug
    },
    {
        id: 'digital-thermometer-dt1',
        name: 'مقياس حرارة رقمي بالأشعة تحت الحمراء',
        description: `قياس سريع ودقيق لدرجة الحرارة بدون لمس. مثالي للأطفال والكبار، يقيس حرارة الجبين أو السوائل أو الغرفة في ثانية واحدة.
###FEATURES###
- قياس بدون لمس
- قراءة فورية خلال ثانية واحدة
- تنبيه بالحمى مع شاشة متغيرة الألوان
- يخزن 35 قراءة
###DETAILS###
- وضعان: الجبين والأجسام
- مصدر الطاقة: 2 بطارية AAA
- دقة عالية`,
        price: 150.00,
        slug: 'digital-thermometer-dt1',
        images: getImages('digital-thermometer-dt1'),
        category: categories.health.slug
    },
    {
        id: 'pulse-oximeter-po1',
        name: 'جهاز قياس النبض ونسبة الأكسجين',
        description: `راقب مستويات الأكسجين في الدم ومعدل النبض بسرعة وسهولة. جهاز صغير ومحمول يعرض النتائج في ثوانٍ.
###FEATURES###
- يقيس نسبة تشبع الأكسجين (SpO2) ومعدل النبض
- شاشة OLED ساطعة ومتعددة الاتجاهات
- تشغيل بلمسة زر واحدة
- صغير وخفيف الوزن
###DETAILS###
- مصدر الطاقة: 2 بطارية AAA
- إيقاف تلقائي: نعم
- مناسب: للرياضيين وكبار السن`,
        price: 120.00,
        slug: 'pulse-oximeter-po1',
        images: getImages('pulse-oximeter-po1'),
        category: categories.health.slug
    },
    {
        id: 'white-noise-machine-wnm1',
        name: 'جهاز الضوضاء البيضاء للنوم',
        description: `احصل على نوم هانئ وعميق. يساعد هذا الجهاز على حجب الأصوات المزعجة ويوفر أجواءً مريحة للنوم أو التركيز.
###FEATURES###
- 28 صوتًا مهدئًا (ضوضاء بيضاء, أصوات طبيعة, تهويدات)
- مؤقت للنوم (30, 60, 90 دقيقة)
- ضوء ليلي دافئ قابل للتعديل
- تصميم مدمج ومحمول
###DETAILS###
- مصدر الطاقة: بطارية قابلة لإعادة الشحن USB
- مخرج سماعة رأس: نعم
- الوزن: 250 جرام`,
        price: 230.00,
        slug: 'white-noise-machine-wnm1',
        images: getImages('white-noise-machine-wnm1'),
        category: categories.health.slug
    },
    {
        id: 'aromatherapy-diffuser-ad1',
        name: 'موزع روائح عطرية ومرطب هواء',
        description: `أضف لمسة من الهدوء والانتعاش إلى منزلك. ينشر هذا الجهاز رذاذًا باردًا من الماء والزيوت العطرية، مع إضاءة LED هادئة.
###FEATURES###
- سعة كبيرة 500 مل
- 4 إعدادات للمؤقت
- 7 ألوان إضاءة LED
- إيقاف تلقائي عند نفاذ الماء
###DETAILS###
- المادة: بلاستيك خالٍ من BPA
- مصدر الطاقة: محول كهربائي
- تشغيل هادئ للغاية`,
        price: 170.00,
        slug: 'aromatherapy-diffuser-ad1',
        images: getImages('aromatherapy-diffuser-ad1'),
        category: categories.health.slug
    },
    {
        id: 'yoga-mat-ym1',
        name: 'سجادة يوجا احترافية',
        description: `عزز ممارستك لليوجا مع هذه السجادة المريحة والمانعة للانزلاق. مصنوعة من مواد صديقة للبيئة وتوفر توسيدًا ممتازًا.
###FEATURES###
- سطح مانع للانزلاق على الوجهين
- سمك 6 مم لتوفير الراحة
- علامات محاذاة لمساعدتك على اتخاذ الوضعيات الصحيحة
- خفيفة الوزن وتأتي مع حزام حمل
###DETAILS###
- المادة: TPE (صديق للبيئة)
- الأبعاد: 183 × 61 سم
- الوزن: 900 جرام`,
        price: 180.00,
        slug: 'yoga-mat-ym1',
        images: getImages('yoga-mat-ym1'),
        category: categories.health.slug
    },
    {
        id: 'foam-roller-fr1',
        name: 'أسطوانة تدليك إسفنجية (فوم رولر)',
        description: `سرّع من استشفاء العضلات وتخلص من الشد العضلي. تستخدم هذه الأسطوانة لتدليك العضلات وتخفيف الألم بعد التمرين.
###FEATURES###
- تصميم متعدد الكثافة لمحاكاة تدليك الأصابع
- تساعد على زيادة المرونة وتقليل وجع العضلات
- متينة وخفيفة الوزن
- مثالية للإحماء والاستشفاء
###DETAILS###
- المادة: إسفنج EVA عالي الكثافة
- الأبعاد: 33 × 14 سم
- اللون: أسود`,
        price: 110.00,
        slug: 'foam-roller-fr1',
        images: getImages('foam-roller-fr1'),
        category: categories.health.slug
    },
    {
        id: 'resistance-bands-set-rb1',
        name: 'مجموعة أحزمة مقاومة',
        description: `تمرين لكامل الجسم في أي مكان. تأتي هذه المجموعة مع 5 أحزمة بمستويات مقاومة مختلفة، مناسبة لجميع مستويات اللياقة.
###FEATURES###
- 5 مستويات مقاومة مختلفة
- مصنوعة من اللاتكس الطبيعي عالي الجودة
- تأتي مع مقابض، وأحزمة للكاحل، ومثبت للباب
- حقيبة حمل مدمجة
###DETAILS###
- مستويات المقاومة: من 10 إلى 50 رطل
- المادة: 100% لاتكس طبيعي
- مناسبة: لتمارين القوة، اليوجا، العلاج الطبيعي`,
        price: 140.00,
        slug: 'resistance-bands-set-rb1',
        images: getImages('resistance-bands-set-rb1'),
        category: categories.health.slug
    },
    {
        id: 'smart-jump-rope-jr1',
        name: 'حبل قفز ذكي مع تطبيق',
        description: `ارتقِ بتمارين القفز إلى مستوى جديد. يتتبع هذا الحبل عدد القفزات، والوقت، والسعرات الحرارية، ويزامن بياناتك مع هاتفك الذكي.
###FEATURES###
- يتصل بتطبيق عبر البلوتوث
- شاشة LCD مدمجة في المقبض
- طول حبل قابل للتعديل
- مقابض مريحة مانعة للانزلاق
###DETAILS###
- البطارية: قابلة لإعادة الشحن USB
- التوافق: iOS و Android
- المادة: حبل فولاذي مغطى بـ PVC`,
        price: 200.00,
        slug: 'smart-jump-rope-jr1',
        images: getImages('smart-jump-rope-jr1'),
        category: categories.health.slug
    },
    {
        id: 'body-fat-caliper-bfc1',
        name: 'جهاز قياس دهون الجسم الرقمي',
        description: `تتبع نسبة دهون جسمك بدقة. أداة بسيطة وفعالة لمراقبة تقدمك في اللياقة البدنية.
###FEATURES###
- قياس دقيق لنسبة الدهون في الجسم
- شاشة LCD كبيرة وسهلة القراءة
- يخزن بيانات تصل إلى 3 مستخدمين
- تصميم مريح
###DETAILS###
- وحدة القياس: مم / بوصة
- البطارية: 1x CR2032
- المادة: بلاستيك ABS`,
        price: 80.00,
        slug: 'body-fat-caliper-bfc1',
        images: getImages('body-fat-caliper-bfc1'),
        category: categories.health.slug
    },
    {
        id: 'posture-corrector-pc1',
        name: 'حزام تقويم ودعم الظهر',
        description: `حسن من وضعية جلوسك ووقوفك وتخلص من آلام الظهر. يذكرك هذا الحزام بلطف بالحفاظ على استقامة ظهرك وأكتافك.
###FEATURES###
- تصميم مريح وغير مرئي تحت الملابس
- أحزمة قابلة للتعديل لتناسب الجميع
- مصنوع من مواد مسامية
- يساعد على تخفيف آلام الرقبة والظهر والكتف
###DETAILS###
- المادة: نيوبرين
- المقاس: قابل للتعديل
- الجنس: للجنسين`,
        price: 95.00,
        slug: 'posture-corrector-pc1',
        images: getImages('posture-corrector-pc1'),
        category: categories.health.slug
    },
    {
        id: 'heating-pad-hp1',
        name: 'وسادة تدفئة كهربائية لتخفيف الآلام',
        description: `خفف من آلام العضلات والتشنجات باستخدام الحرارة المهدئة. تتميز هذه الوسادة بحجم كبير وتسخين سريع.
###FEATURES###
- حجم كبير (30 × 60 سم) لتغطية مناطق واسعة
- 6 إعدادات للحرارة
- إيقاف تلقائي بعد ساعتين
- غطاء من الصوف الصغير الناعم قابل للغسل
###DETAILS###
- مصدر الطاقة: محول كهربائي
- المادة: صوف صغير (Microplush)
- طول السلك: 2.1 متر`,
        price: 180.00,
        slug: 'heating-pad-hp1',
        images: getImages('heating-pad-hp1'),
        category: categories.health.slug
    },
    {
        id: 'acupressure-mat-am1',
        name: 'سجادة ووسادة للوخز بالإبر',
        description: `استرخِ وخفف من التوتر وآلام الظهر بشكل طبيعي. تحفز الآلاف من نقاط الوخز الدورة الدموية وتطلق الإندورفين.
###FEATURES###
- سجادة بها 6,210 نقطة وخز ووسادة بها 1,782 نقطة
- تساعد على تخفيف التوتر وآلام العضلات وتحسين النوم
- مصنوعة من مواد صديقة للبيئة
- تأتي مع حقيبة حمل
###DETAILS###
- المادة: قطن 100%، إسفنج نباتي، بلاستيك ABS
- الأبعاد (السجادة): 68 × 42 سم
- اللون: أزرق`,
        price: 220.00,
        slug: 'acupressure-mat-am1',
        images: getImages('acupressure-mat-am1'),
        category: categories.health.slug
    },
    {
        id: 'blackhead-remover-vacuum-brv1',
        name: 'جهاز شفط الرؤوس السوداء',
        description: `نظف مسامك بعمق وتخلص من الرؤوس السوداء والبيضاء. يستخدم هذا الجهاز تقنية الشفط لإزالة الشوائب من البشرة بفعالية.
###FEATURES###
- 5 مستويات شفط قابلة للتعديل
- 4 رؤوس شفط مختلفة
- شاشة LED لعرض المستوى والبطارية
- بطارية قابلة لإعادة الشحن USB
###DETAILS###
- المادة: بلاستيك ABS صديق للبيئة
- وقت الشحن: 1.5 ساعة
- مناسب: لجميع أنواع البشرة`,
        price: 130.00,
        slug: 'blackhead-remover-vacuum-brv1',
        images: getImages('blackhead-remover-vacuum-brv1'),
        category: categories.health.slug
    },
    {
        id: 'facial-cleansing-brush-fcb1',
        name: 'فرشاة تنظيف الوجه السيليكون',
        description: `احصلي على بشرة نظيفة ومشرقة كل يوم. تستخدم هذه الفرشاة اهتزازات صوتية لطيفة لإزالة الأوساخ والزيوت والمكياج من المسام.
###FEATURES###
- مصنوعة من السيليكون الطبي الصحي
- اهتزازات صوتية عالية التردد
- 8 مستويات شدة
- مقاومة للماء 100%
###DETAILS###
- الشحن: USB
- عمر البطارية: يكفي لـ 400 استخدام
- اللون: وردي`,
        price: 160.00,
        slug: 'facial-cleansing-brush-fcb1',
        images: getImages('facial-cleansing-brush-fcb1'),
        category: categories.health.slug
    },
    {
        id: 'microdermabrasion-kit-mdk1',
        name: 'جهاز تقشير البشرة الماسي المنزلي',
        description: `جددي بشرتك واحصلي على مظهر أكثر شبابًا. يستخدم هذا الجهاز رؤوسًا ماسية لتقشير الطبقة الخارجية من الجلد الميت وتحفيز إنتاج الكولاجين.
###FEATURES###
- تقنية التقشير الماسي والشفط
- يقلل من التجاعيد والبقع الداكنة والمسام الواسعة
- 3 رؤوس ماسية و 5 مستويات شفط
- فلتر قابل للاستبدال
###DETAILS###
- مصدر الطاقة: محول كهربائي
- مناسب: للاستخدام المنزلي
- آمن وفعال`,
        price: 350.00,
        slug: 'microdermabrasion-kit-mdk1',
        images: getImages('microdermabrasion-kit-mdk1'),
        category: categories.health.slug
    },
    {
        id: 'skin-scrubber-ss1',
        name: 'جهاز تنظيف وتقشير البشرة بالموجات فوق الصوتية',
        description: `ينظف، يقشر، ويرطب بشرتك. يستخدم هذا الجهاز اهتزازات عالية التردد لإزالة الرؤوس السوداء والجلد الميت والمساعدة في امتصاص السيرومات.
###FEATURES###
- 3 أوضاع: تنظيف، ترطيب، شد
- اهتزازات عالية التردد (24000 هرتز)
- ملعقة من الفولاذ المقاوم للصدأ
- تصميم لاسلكي وقابل لإعادة الشحن
###DETAILS###
- الشحن: USB
- إيقاف تلقائي: بعد 5 دقائق
- الوزن: 80 جرام`,
        price: 180.00,
        slug: 'skin-scrubber-ss1',
        images: getImages('skin-scrubber-ss1'),
        category: categories.health.slug
    },
    {
        id: 'hair-growth-laser-comb-hglc1',
        name: 'مشط ليزر لنمو الشعر',
        description: `عالج تساقط الشعر وحفز نمو شعر جديد. يستخدم هذا المشط تقنية الليزر منخفض المستوى لتنشيط بصيلات الشعر وزيادة كثافته.
###FEATURES###
- تقنية الليزر منخفض المستوى (LLLT)
- 9 أشعة ليزر و 6 لمبات LED
- يساعد على تقوية الشعر وتقليل التساقط
- معتمد من إدارة الغذاء والدواء الأمريكية (FDA Cleared)
###DETAILS###
- مدة الجلسة: 11 دقيقة، 3 مرات في الأسبوع
- لاسلكي وقابل لإعادة الشحن
- مناسب للرجال والنساء`,
        price: 950.00,
        slug: 'hair-growth-laser-comb-hglc1',
        images: getImages('hair-growth-laser-comb-hglc1'),
        category: categories.health.slug
    },
    {
        id: 'beard-trimmer-bt1',
        name: 'ماكينة تشذيب اللحية الاحترافية',
        description: `احصل على لحية محددة وأنيقة. تتميز هذه الماكينة بشفرات حادة جدًا وعمر بطارية طويل، مع قرص دقيق لاختيار الطول المثالي.
###FEATURES###
- 40 إعدادًا للطول بدقة 0.5 مم
- شفرات من التيتانيوم حادة مدى الحياة
- عمر بطارية 100 دقيقة
- قابلة للغسل بالكامل
###DETAILS###
- وقت الشحن: ساعة واحدة
- الملحقات: مشطان، فرشاة تنظيف، حقيبة
- لاسلكية وسلكية`,
        price: 280.00,
        slug: 'beard-trimmer-bt1',
        images: getImages('beard-trimmer-bt1'),
        category: categories.health.slug
    },
    {
        id: 'foot-spa-bath-fsb1',
        name: 'حوض تدليك القدمين والسبا',
        description: `امنح قدميك تجربة سبا فاخرة في المنزل. يوفر هذا الحوض فقاعات مهدئة، ووظيفة تدفئة، وبكرات تدليك لتخفيف التعب.
###FEATURES###
- تدفئة سريعة وتحكم في درجة الحرارة
- تدليك بالفقاعات والاهتزاز
- بكرات تدليك قابلة للإزالة
- حجر خفاف مدمج
###DETAILS###
- مصدر الطاقة: محول كهربائي
- حماية من رذاذ الماء
- عميق وواسع`,
        price: 350.00,
        slug: 'foot-spa-bath-fsb1',
        images: getImages('foot-spa-bath-fsb1'),
        category: categories.health.slug
    },
    {
        id: 'light-therapy-lamp-ltl1',
        name: 'مصباح العلاج بالضوء',
        description: `حارب الكآبة الموسمية وحسن مزاجك. يحاكي هذا المصباح ضوء النهار الطبيعي ويساعد على تنظيم دورة نومك وزيادة طاقتك.
###FEATURES###
- يوفر 10,000 لوكس من الضوء الخالي من الأشعة فوق البنفسجية
- 3 مستويات سطوع قابلة للتعديل
- تصميم مدمج ومحمول
- مؤقت مدمج
###DETAILS###
- مصدر الطاقة: محول كهربائي
- الأبعاد: 16 × 14 سم
- اللون: أبيض`,
        price: 250.00,
        slug: 'light-therapy-lamp-ltl1',
        images: getImages('light-therapy-lamp-ltl1'),
        category: categories.health.slug
    },
    {
        id: 'smart-body-tape-measure-sbtm1',
        name: 'شريط قياس الجسم الذكي',
        description: `تتبع قياسات جسمك بسهولة ودقة. يتزامن هذا الشريط مع تطبيق على هاتفك لتسجيل قياساتك ورؤية تقدمك بمرور الوقت.
###FEATURES###
- يتزامن مع تطبيق عبر البلوتوث
- شاشة LCD سهلة القراءة
- آلية سحب وقفل سهلة
- يقيس حتى 150 سم
###DETAILS###
- البطارية: 1x CR2032
- التوافق: iOS و Android
- المادة: بلاستيك ABS`,
        price: 150.00,
        slug: 'smart-body-tape-measure-sbtm1',
        images: getImages('smart-body-tape-measure-sbtm1'),
        category: categories.health.slug
    },
    {
        id: 'kegel-trainer-kt1',
        name: 'جهاز تمارين كيجل الذكي',
        description: `قوّي عضلات قاع الحوض بتمارين ممتعة وتفاعلية. يتصل هذا الجهاز بتطبيق يوفر لك إرشادات وألعابًا لتحسين قوة تحكمك.
###FEATURES###
- يتصل بتطبيق مع ألعاب وتمارين موجهة
- مستشعرات حاصلة على براءة اختراع لتتبع الحركة
- مصنوع من السيليكون الطبي الآمن
- مقاوم للماء وسهل التنظيف
###DETAILS###
- الاتصال: بلوتوث
- الشحن: قاعدة شحن لاسلكية
- التوافق: iOS و Android`,
        price: 750.00,
        slug: 'kegel-trainer-kt1',
        images: getImages('kegel-trainer-kt1'),
        category: categories.health.slug
    },
    {
        id: 'sleep-tracker-st1',
        name: 'جهاز تتبع النوم غير القابل للارتداء',
        description: `حسن جودة نومك دون ارتداء أي شيء. يوضع هذا الجهاز تحت المرتبة لتتبع دورات نومك، ومعدل ضربات القلب، والشخير.
###FEATURES###
- يوضع تحت المرتبة
- يتتبع دورات النوم، ومعدل ضربات القلب، والتنفس
- كشف الشخير
- يقدم نصائح مخصصة لتحسين النوم
###DETAILS###
- الاتصال: واي فاي
- التوافق: iOS و Android
- مصدر الطاقة: USB`,
        price: 500.00,
        slug: 'sleep-tracker-st1',
        images: getImages('sleep-tracker-st1'),
        category: categories.health.slug
    },
    {
        id: 'makeup-mirror-light-mml1',
        name: 'مرآة مكياج مضيئة',
        description: `ضعي مكياجك بدقة في أي إضاءة. تحاكي هذه المرآة ضوء النهار الطبيعي وتتميز بثلاثة أوضاع للإضاءة وتكبير 10x.
###FEATURES###
- نظام إضاءة LED يحاكي ضوء النهار
- 3 أوضاع لونية (بارد، دافئ، طبيعي)
- مرآة تكبير 10x قابلة للفصل
- تحكم باللمس لتعديل السطوع
###DETAILS###
- مصدر الطاقة: بطارية قابلة لإعادة الشحن USB
- دوران 90 درجة
- قاعدة تخزين صغيرة`,
        price: 220.00,
        slug: 'makeup-mirror-light-mml1',
        images: getImages('makeup-mirror-light-mml1'),
        category: categories.health.slug
    },
    {
        id: 'reusable-cotton-swabs-rcs1',
        name: 'أعواد قطن سيليكون قابلة لإعادة الاستخدام',
        description: `البديل المستدام لأعواد القطن التقليدية. تأتي هذه المجموعة مع عودين، واحد للتنظيف وآخر للمكياج، مع علبة حمل.
###FEATURES###
- بديل صديق للبيئة
- مجموعة من عودين (أساسي وتجميلي)
- سهلة التنظيف بالماء والصابون
- مصنوعة من مواد متينة وعالية الجودة
###DETAILS###
- المادة: سيليكون طبي ونايلون
- العلبة: علبة حمل مغناطيسية
- الألوان: متعددة`,
        price: 60.00,
        slug: 'reusable-cotton-swabs-rcs1',
        images: getImages('reusable-cotton-swabs-rcs1'),
        category: categories.health.slug
    },
    {
        id: 'cold-plunge-tub-cpt1',
        name: 'حوض الاستحمام البارد المحمول',
        description: `سرّع استشفاء العضلات وعزز طاقتك مع الغطس في الماء البارد. حوض محمول وسهل الإعداد يمكنك استخدامه في أي مكان.
###FEATURES###
- سهل التركيب والتفريغ
- مصنوع من مواد متينة ومعزولة
- تصميم محمول مع حقيبة حمل
- يساعد على تقليل الالتهابات وتحسين المزاج
###DETAILS###
- السعة: 320 لتر
- الأبعاد: 75 سم (قطر) × 75 سم (ارتفاع)
- المادة: PVC`,
        price: 450.00,
        slug: 'cold-plunge-tub-cpt1',
        images: getImages('cold-plunge-tub-cpt1'),
        category: categories.health.slug
    },
    {
        id: 'sauna-blanket-sb1',
        name: 'بطانية الساونا بالأشعة تحت الحمراء',
        description: `استمتع بفوائد الساونا وأنت مرتاح في منزلك. تساعد هذه البطانية على إزالة السموم، وتخفيف الألم، وحرق السعرات الحرارية.
###FEATURES###
- تقنية الأشعة تحت الحمراء البعيدة
- تحكم في درجة الحرارة والمؤقت
- مصنوعة من مواد مقاومة للماء
- سهلة التنظيف والتخزين
###DETAILS###
- نطاق الحرارة: 35-75 درجة مئوية
- مصدر الطاقة: محول كهربائي
- المادة: جلد PU`,
        price: 900.00,
        slug: 'sauna-blanket-sb1',
        images: getImages('sauna-blanket-sb1'),
        category: categories.health.slug
    },
    {
        id: 'blue-light-blocking-glasses-blbg1',
        name: 'نظارات حجب الضوء الأزرق',
        description: `احمِ عينيك من إجهاد الشاشات الرقمية وحسن نومك. تحجب هذه النظارات الأنيقة الضوء الأزرق الضار المنبعث من الهواتف وأجهزة الكمبيوتر.
###FEATURES###
- تحجب 99% من الضوء الأزرق الضار
- تقلل من إجهاد العين والصداع
- إطارات خفيفة الوزن ومريحة
- عدسات شفافة لا تشوه الألوان
###DETAILS###
- المادة: TR90 (إطار), CR39 (عدسات)
- الجنس: للجنسين
- الأشكال: متعددة`,
        price: 130.00,
        slug: 'blue-light-blocking-glasses-blbg1',
        images: getImages('blue-light-blocking-glasses-blbg1'),
        category: categories.health.slug
    },
    {
        id: 'smart-pill-organizer-spo1',
        name: 'منظم حبوب الدواء الذكي',
        description: `لا تنسَ جرعتك مرة أخرى. يذكرك هذا المنظم الذكي بأوقات تناول الدواء عبر تنبيهات ضوئية وصوتية على المنظم وتطبيق الهاتف.
###FEATURES###
- 7 أقسام لأيام الأسبوع
- تنبيهات ضوئية وصوتية
- يتصل بتطبيق لتتبع الجرعات
- تقارير التزام يمكنك مشاركتها مع طبيبك
###DETAILS###
- الاتصال: بلوتوث
- البطارية: قابلة لإعادة الشحن USB
- الحجم: محمول ومناسب للسفر`,
        price: 280.00,
        slug: 'smart-pill-organizer-spo1',
        images: getImages('smart-pill-organizer-spo1'),
        category: categories.health.slug
    },
    {
        id: 'portable-ecg-monitor-pem1',
        name: 'جهاز تخطيط القلب المحمول',
        description: `سجل تخطيطًا للقلب (ECG) بجودة طبية في 30 ثانية فقط، في أي وقت وفي أي مكان. شارك النتائج بسهولة مع طبيبك.
###FEATURES###
- يسجل ECG بجودة طبية
- يكشف الرجفان الأذيني، وبطء القلب، وتسرع القلب
- لا يتطلب اشتراكًا
- صغير بما يكفي ليناسب جيبك
###DETAILS###
- التوافق: معظم الهواتف الذكية
- الاتصال: بلوتوث
- معتمد: من إدارة الغذاء والدواء الأمريكية (FDA Cleared)`,
        price: 450.00,
        slug: 'portable-ecg-monitor-pem1',
        images: getImages('portable-ecg-monitor-pem1'),
        category: categories.health.slug
    }
];


const homeProducts: Product[] = [
    {
        id: 'robot-vacuum-cleaner',
        name: 'مكنسة روبوت ذكية',
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
        slug: 'robot-vacuum-cleaner',
        images: getImages('robot-vacuum-cleaner'),
        category: categories.home.slug
    },
    {
        id: 'smart-air-purifier',
        name: 'منقي هواء ذكي',
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
        slug: 'smart-air-purifier',
        images: getImages('smart-air-purifier'),
        category: categories.home.slug
    },
    {
        id: 'smart-lock-l3',
        name: 'قفل باب ذكي L3',
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
        slug: 'smart-lock-l3',
        images: getImages('smart-lock-l3'),
        category: categories.home.slug
    },
    {
        id: 'video-doorbell-v2',
        name: 'جرس باب فيديو V2',
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
        slug: 'video-doorbell-v2',
        images: getImages('video-doorbell-v2'),
        category: categories.home.slug
    },
    {
        id: 'smart-lighting-kit',
        name: 'مجموعة إضاءة ذكية',
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
        slug: 'smart-lighting-kit',
        images: getImages('smart-lighting-kit'),
        category: categories.home.slug
    },
    {
        id: 'robot-mop-m6',
        name: 'روبوت مسح الأرضيات Braava jet m6',
        description: `احصل على أرضيات نظيفة ولامعة كل يوم. يتعلم روبوت Braava jet m6 خريطة منزلك ويمسح الأوساخ والبقع بذكاء.
###FEATURES###
- مسح رطب وجاف
- تقنية Precision Jet Spray لإزالة البقع
- يتعلم ويخطط وينظف منزلك بالكامل
- يعمل مع المكانس الروبوتية Roomba
###DETAILS###
- التوافق: يعمل مع Alexa و Google Assistant
- الاتصال: واي فاي
- الأبعاد: 27 × 25 × 9 سم`,
        price: 1800.00,
        images: getImages('robot-mop-m6'),
        category: categories.home.slug
    },
    {
        id: 'smart-thermostat-t9',
        name: 'منظم حرارة ذكي T9 مع مستشعر',
        slug: 'smart-thermostat-t9',
        description: `وفر الطاقة وحافظ على راحة منزلك. يتعلم T9 جدولك الزمني ودرجات الحرارة المفضلة لديك، ويمكن التحكم فيه عن بعد.
###FEATURES###
- يأتي مع مستشعر للغرف الذكية
- يتكيف مع جدولك الزمني لتوفير الطاقة
- التحكم من أي مكان عبر التطبيق
- تنبيهات حول درجة الحرارة والرطوبة
###DETAILS###
- الاتصال: واي فاي
- التوافق: معظم أنظمة التكييف والتدفئة
- الشاشة: لمس ملونة`,
        price: 800.00,
        images: getImages('smart-thermostat-t9'),
        category: categories.home.slug
    },
    {
        id: 'smart-blinds-kit',
        name: 'مجموعة تحويل الستائر إلى ذكية',
        slug: 'smart-blinds-kit',
        description: `اجعل ستائرك ذكية. تسمح لك هذه المجموعة بفتح وإغلاق ستائرك الحالية تلقائيًا عبر جدول زمني أو الأوامر الصوتية.
###FEATURES###
- يعمل مع معظم أنواع الستائر
- التحكم عبر التطبيق والأوامر الصوتية
- يعمل بالطاقة الشمسية أو محول كهربائي
- إعداد سهل في دقائق
###DETAILS###
- الاتصال: بلوتوث
- مصدر الطاقة: لوح شمسي صغير ومحول
- التوافق: Alexa, Google Assistant, HomeKit`,
        price: 500.00,
        images: getImages('smart-blinds-kit'),
        category: categories.home.slug
    },
    {
        id: 'smart-indoor-camera-c1',
        name: 'كاميرا مراقبة داخلية ذكية C1',
        slug: 'smart-indoor-camera-c1',
        description: `راقب منزلك من الداخل بوضوح. توفر هذه الكاميرا فيديو عالي الدقة، ورؤية ليلية، وصوتًا ثنائي الاتجاه.
###FEATURES###
- فيديو 1080p HD
- رؤية ليلية واضحة
- صوت ثنائي الاتجاه
- تنبيهات ذكية للحركة والصوت
###DETAILS###
- مجال الرؤية: 130 درجة
- التخزين: سحابي أو بطاقة SD
- الاتصال: واي فاي`,
        price: 250.00,
        images: getImages('smart-indoor-camera-c1'),
        category: categories.home.slug
    },
    {
        id: 'smart-outdoor-camera-o2',
        name: 'كاميرا مراقبة خارجية لاسلكية O2',
        slug: 'smart-outdoor-camera-o2',
        description: `أمن محيط منزلك. هذه الكاميرا مقاومة للطقس، وتعمل بالبطارية، وتوفر فيديو واضحًا ليلاً ونهارًا.
###FEATURES###
- لاسلكية بالكامل وتعمل بالبطارية
- مقاومة للطقس (IP66)
- كشاف مدمج وصفارة إنذار
- رؤية ليلية ملونة
###DETAILS###
- الدقة: 1080p HD
- عمر البطارية: 3-6 أشهر
- الاتصال: واي فاي`,
        price: 600.00,
        images: getImages('smart-outdoor-camera-o2'),
        category: categories.home.slug
    },
    {
        id: 'smart-garden-sg9',
        name: 'حديقة ذكية داخلية SG9',
        slug: 'smart-garden-sg9',
        description: `ازرع الأعشاب والخضروات الطازجة على مدار السنة. توفر هذه الحديقة الذكية للنباتات الماء والضوء والمغذيات تلقائيًا.
###FEATURES###
- تزرع ما يصل إلى 9 نباتات
- إضاءة LED كاملة الطيف بقوة 24 واط
- نظام ري ذاتي
- لوحة تحكم باللمس
###DETAILS###
- سعة خزان الماء: 4 لتر
- مصدر الطاقة: محول كهربائي
- المحتويات: مجموعة بذور متنوعة`,
        price: 900.00,
        images: getImages('smart-garden-sg9'),
        category: categories.home.slug
    },
    {
        id: 'smart-frame-sf1',
        name: 'إطار فني ذكي لعرض الصور الرقمية',
        slug: 'smart-frame-sf1',
        description: `اعرض أعمالًا فنية عالمية أو صورك الشخصية على شاشة غير لامعة تبدو وكأنها لوحة حقيقية.
###FEATURES###
- شاشة 15.6 بوصة Full HD غير لامعة
- مستشعر الإضاءة المحيطة لضبط السطوع
- التحكم عبر التطبيق وتحميل الصور
- وصول إلى مكتبة فنية ضخمة (يتطلب اشتراكًا)
###DETAILS###
- الدقة: 1920x1080
- الاتصال: واي فاي
- الإطار: قابل للتغيير (أسود، أبيض، خشبي)`,
        price: 2500.00,
        images: getImages('smart-frame-sf1'),
        category: categories.home.slug
    },
    {
        id: 'smart-smoke-detector-sd1',
        name: 'كاشف دخان وأول أكسيد الكربون ذكي',
        slug: 'smart-smoke-detector-sd1',
        description: `حماية ذكية لمنزلك. يرسل هذا الكاشف تنبيهات إلى هاتفك أينما كنت، ويخبرك بنوع الخطر وموقعه.
###FEATURES###
- يكتشف الدخان وأول أكسيد الكربون
- يرسل تنبيهات إلى الهاتف
- تنبيهات صوتية بصوت بشري
- عمر بطارية يصل إلى 10 سنوات
###DETAILS###
- الاتصال: واي فاي
- المستشعر: كهروكيميائي ضوئي
- شهادات الأمان: معتمد`,
        price: 550.00,
        images: getImages('smart-smoke-detector-sd1'),
        category: categories.home.slug
    },
    {
        id: 'smart-water-leak-detector-wld1',
        name: 'كاشف تسرب المياه الذكي',
        slug: 'smart-water-leak-detector-wld1',
        description: `تجنب الأضرار المكلفة. يرسل هذا الكاشف الصغير تنبيهات فورية إلى هاتفك عند اكتشاف تسرب مياه أو رطوبة.
###FEATURES###
- تنبيهات فورية على الهاتف
- إنذار صوتي مدمج
- تصميم صغير يمكن وضعه في أي مكان
- عمر بطارية يصل إلى 3 سنوات
###DETAILS###
- الاتصال: واي فاي
- مصدر الطاقة: بطارية
- مناسب لـ: تحت الأحواض، بجانب الغسالات، إلخ.`,
        price: 200.00,
        images: getImages('smart-water-leak-detector-wld1'),
        category: categories.home.slug
    },
    {
        id: 'smart-dog-ball-db1',
        name: 'كرة كلاب ذكية تفاعلية',
        slug: 'smart-dog-ball-db1',
        description: `أبقِ كلبك مستمتعًا ونشيطًا. تتحرك هذه الكرة من تلقاء نفسها، وتتجنب العقبات، وتحفز غرائز الصيد لدى كلبك.
###FEATURES###
- 3 أوضاع تفاعلية
- تتجنب العقبات تلقائيًا
- قابلة لإعادة الشحن عبر USB
- مصنوعة من مواد آمنة ومتينة
###DETAILS###
- المادة: سيليكون وبولي كربونات
- وقت اللعب: ساعتان
- مناسبة لـ: الكلاب الصغيرة والمتوسطة`,
        price: 180.00,
        images: getImages('smart-dog-ball-db1'),
        category: categories.home.slug
    },
    {
        id: 'compost-bin-cb1',
        name: 'صندوق سماد كهربائي للمطبخ',
        slug: 'compost-bin-cb1',
        description: `حول بقايا طعامك إلى سماد غني بالمغذيات في ساعات قليلة، بدون رائحة أو فوضى.
###FEATURES###
- يحول بقايا الطعام إلى سماد في أقل من 5 ساعات
- يقلل حجم النفايات بنسبة تصل إلى 90%
- عملية تجفيف وطحن هادئة وعديمة الرائحة
- سهل الاستخدام والتنظيف
###DETAILS###
- السعة: 2.5 لتر
- مصدر الطاقة: كهربائي
- فلتر: كربون قابل للاستبدال`,
        price: 1500.00,
        images: getImages('compost-bin-cb1'),
        category: categories.home.slug
    },
    {
        id: 'smart-curtain-robot-cr1',
        name: 'روبوت الستائر الذكي',
        slug: 'smart-curtain-robot-cr1',
        description: `اجعل أي ستارة ذكية في 30 ثانية. يقوم هذا الروبوت الصغير بفتح وإغلاق ستائرك بناءً على جدول زمني أو الأوامر الصوتية.
###FEATURES###
- تركيب سهل للغاية
- يعمل مع معظم أنواع قضبان الستائر
- مستشعر ضوء لفتح الستائر تلقائيًا عند شروق الشمس
- يعمل بالبطارية القابلة لإعادة الشحن
###DETAILS###
- الاتصال: بلوتوث (يتطلب Hub للأوامر الصوتية عن بعد)
- عمر البطارية: يصل إلى 8 أشهر
- الشحن: USB-C`,
        price: 380.00,
        images: getImages('smart-curtain-robot-cr1'),
        category: categories.home.slug
    },
    {
        id: 'wireless-charging-furniture-wcf1',
        name: 'طاولة جانبية مع شحن لاسلكي مدمج',
        slug: 'wireless-charging-furniture-wcf1',
        description: `أثاث ذكي وعملي. ضع هاتفك على الطاولة لشحنه لاسلكيًا. تصميم عصري يناسب أي غرفة.
###FEATURES###
- شاحن لاسلكي مدمج غير مرئي
- تصميم بسيط وأنيق
- منفذ USB إضافي
- سهلة التركيب
###DETAILS###
- المادة: خشب MDF
- قوة الشاحن: 10 واط Qi
- الأبعاد: 40 × 40 × 50 سم`,
        price: 550.00,
        images: getImages('wireless-charging-furniture-wcf1'),
        category: categories.home.slug
    },
    {
        id: 'smart-laundry-sensor-ls1',
        name: 'مستشعر غسيل ذكي',
        slug: 'smart-laundry-sensor-ls1',
        description: `اعرف متى تنتهي دورة الغسيل أو التجفيف. يرسل هذا المستشعر إشعارًا إلى هاتفك عند توقف الاهتزازات.
###FEATURES###
- يرسل إشعارات عند انتهاء الغسيل
- يعمل مع أي غسالة أو مجفف
- تركيب سهل (مغناطيسي)
- عمر بطارية طويل
###DETAILS###
- الاتصال: واي فاي
- مصدر الطاقة: بطارية
- التوافق: Alexa`,
        price: 150.00,
        images: getImages('smart-laundry-sensor-ls1'),
        category: categories.home.slug
    },
    {
        id: 'automatic-soap-dispenser-asd1',
        name: 'موزع صابون رغوي أوتوماتيكي',
        slug: 'automatic-soap-dispenser-asd1',
        description: `تجربة غسل يدين صحية وبدون لمس. يوفر هذا الموزع كمية مثالية من الصابون الرغوي عند تمرير يدك تحته.
###FEATURES###
- مستشعر حركة بالأشعة تحت الحمراء
- ينتج رغوة غنية وكثيفة
- قابل لإعادة الشحن عبر USB
- تصميم أنيق ومقاوم للماء
###DETAILS###
- السعة: 300 مل
- وقت الاستجابة: 0.25 ثانية
- الشحن: USB-C`,
        price: 120.00,
        images: getImages('automatic-soap-dispenser-asd1'),
        category: categories.home.slug
    },
    {
        id: 'smart-trash-can-stc1',
        name: 'سلة مهملات ذكية',
        slug: 'smart-trash-can-stc1',
        description: `طريقة صحية وأنيقة للتعامل مع القمامة. تفتح السلة تلقائيًا عند اقترابك وتغلق بهدوء.
###FEATURES###
- فتح وإغلاق بدون لمس
- تحتوي على الروائح بفعالية
- مصنوعة من الفولاذ المقاوم للصدأ
- حلقة لتثبيت كيس القمامة
###DETAILS###
- السعة: 15 لتر
- مصدر الطاقة: 4 بطاريات AA
- المادة: فولاذ مقاوم للصدأ`,
        price: 350.00,
        images: getImages('smart-trash-can-stc1'),
        category: categories.home.slug
    },
    {
        id: 'smart-wifi-plug-swp1',
        name: 'مقبس كهربائي ذكي واي فاي (قطعتان)',
        slug: 'smart-wifi-plug-swp1',
        description: `حول أي جهاز عادي إلى جهاز ذكي. تحكم في المصابيح والمراوح وأي جهاز آخر من هاتفك أو بصوتك.
###FEATURES###
- التحكم عن بعد عبر التطبيق
- يعمل مع Alexa و Google Assistant
- وضع "Away" لتشغيل الأجهزة عشوائيًا
- تصميم مدمج لا يعيق المقبس المجاور
###DETAILS###
- الاتصال: واي فاي 2.4GHz
- الحد الأقصى للتيار: 10 أمبير
- لا يتطلب Hub`,
        price: 120.00,
        images: getImages('smart-wifi-plug-swp1'),
        category: categories.home.slug
    },
    {
        id: 'smart-diffuser-sd1',
        name: 'موزع روائح عطرية ذكي',
        slug: 'smart-diffuser-sd1',
        description: `عطر منزلك بذكاء. تحكم في قوة الرائحة، وجدولة التشغيل، وألوان الإضاءة من خلال هاتفك.
###FEATURES###
- التحكم عبر التطبيق والأوامر الصوتية
- جدولة أوقات التشغيل
- إضاءة LED قابلة للتخصيص
- يعمل مع الزيوت العطرية
###DETAILS###
- السعة: 200 مل
- الاتصال: واي فاي
- التغطية: تصل إلى 30 مترًا مربعًا`,
        price: 280.00,
        images: getImages('smart-diffuser-sd1'),
        category: categories.home.slug
    },
    {
        id: 'self-watering-pot-swp2',
        name: 'أصيص نباتات ذاتي السقي',
        slug: 'self-watering-pot-swp2',
        description: `حافظ على نباتاتك حية وصحية حتى أثناء سفرك. يوفر هذا الأصيص الماء لنباتاتك لمدة تصل إلى شهر.
###FEATURES###
- نظام ري ذاتي
- مؤشر لمستوى الماء
- تصميم عصري وأنيق
- مثالي للنباتات الداخلية
###DETAILS###
- المادة: بلاستيك عالي الجودة
- الحجم: 15 سم (قطر)
- الألوان: أبيض, أسود, رمادي`,
        price: 80.00,
        images: getImages('self-watering-pot-swp2'),
        category: categories.home.slug
    },
    {
        id: 'smart-food-scale-sfs1',
        name: 'ميزان طعام ذكي مع تحليل غذائي',
        slug: 'smart-food-scale-sfs1',
        description: `اعرف بالضبط ما تأكله. يقيس هذا الميزان وزن الطعام ويتصل بتطبيق يوفر لك معلومات تفصيلية عن السعرات الحرارية والمغذيات.
###FEATURES###
- يتصل بتطبيق لتحليل القيمة الغذائية
- قاعدة بيانات ضخمة للأطعمة
- سطح من الزجاج المقوى سهل التنظيف
- وظيفة تصفير الوزن (Tare)
###DETAILS###
- الاتصال: بلوتوث
- الحد الأقصى للوزن: 5 كجم
- التوافق: iOS و Android`,
        price: 220.00,
        images: getImages('smart-food-scale-sfs1'),
        category: categories.home.slug
    },
    {
        id: 'bbq-thermometer-bt1',
        name: 'ميزان حرارة شواء لاسلكي',
        slug: 'bbq-thermometer-bt1',
        description: `اشوِ اللحم كالمحترفين. يتيح لك هذا الميزان مراقبة درجة حرارة اللحم من هاتفك وتلقي تنبيهات عند وصوله إلى درجة النضج المثالية.
###FEATURES###
- مسباران لمراقبة نوعين من اللحم أو درجة حرارة الشواية
- مدى لاسلكي يصل إلى 100 متر
- إعدادات مسبقة لدرجات حرارة أنواع اللحوم المختلفة
- تطبيق سهل الاستخدام مع تنبيهات
###DETAILS###
- الاتصال: بلوتوث
- مقاومة الحرارة (المسبار): تصل إلى 380 درجة مئوية
- البطارية: قابلة لإعادة الشحن`,
        price: 350.00,
        images: getImages('bbq-thermometer-bt1'),
        category: categories.home.slug
    },
    {
        id: 'smart-photo-printer-spp1',
        name: 'طابعة صور ذكية للمنزل',
        slug: 'smart-photo-printer-spp1',
        description: `اطبع صورًا بجودة احترافية مباشرة من هاتفك. تستخدم هذه الطابعة تقنية التسامي الصبغي لإنتاج صور مقاومة للماء والبهتان.
###FEATURES###
- طباعة صور عالية الجودة مقاس 4x6 بوصة
- طباعة لاسلكية من الهاتف أو الكمبيوتر
- تطبيق لتحرير الصور وإضافة لمسات إبداعية
- تطبع الصورة في أقل من دقيقة
###DETAILS###
- التقنية: Dye-sublimation
- الاتصال: واي فاي
- التوافق: iOS, Android, Windows, macOS`,
        price: 650.00,
        images: getImages('smart-photo-printer-spp1'),
        category: categories.home.slug
    },
    {
        id: 'smart-mirror-sm1',
        name: 'مرآة ذكية للحمام',
        slug: 'smart-mirror-sm1',
        description: `مرآة عصرية تعرض لك الوقت، والطقس، والأخبار أثناء استعدادك في الصباح.
###FEATURES###
- شاشة عرض مدمجة غير مرئية عند إطفائها
- تعرض الوقت، التاريخ، الطقس
- إضاءة LED مدمجة مع سطوع قابل للتعديل
- نظام إزالة الضباب
###DETAILS###
- الحجم: 80 × 60 سم
- الاتصال: واي فاي
- مصدر الطاقة: كهربائي`,
        price: 1400.00,
        images: getImages('smart-mirror-sm1'),
        category: categories.home.slug
    },
    {
        id: 'smart-pet-toy-spt1',
        name: 'لعبة حيوانات أليفة ذكية بالليزر',
        slug: 'smart-pet-toy-spt1',
        description: `أبقِ قطتك أو كلبك مستمتعًا لساعات. تتحرك نقطة الليزر بشكل عشوائي لإثارة غريزة الصيد لدى حيوانك الأليف.
###FEATURES###
- وضع تلقائي ووضع يدوي
- أنماط ليزر عشوائية
- تعمل بجدول زمني للحفاظ على نشاط حيوانك
- هادئة وآمنة للحيوانات الأليفة
###DETAILS###
- مصدر الطاقة: USB
- الدوران: 360 درجة
- التوافق: مناسب للقطط والكلاب`,
        price: 180.00,
        images: getImages('smart-pet-toy-spt1'),
        category: categories.home.slug
    },
    {
        id: 'digital-luggage-scale-dls1',
        name: 'ميزان أمتعة رقمي محمول',
        slug: 'digital-luggage-scale-dls1',
        description: `تجنب رسوم الوزن الزائد في المطار. يتيح لك هذا الميزان الصغير وزن حقائبك بدقة قبل التوجه إلى المطار.
###FEATURES###
- شاشة LCD سهلة القراءة
- يقيس حتى 50 كجم
- وظيفة تصفير الوزن (Tare)
- صغير وخفيف الوزن
###DETAILS###
- البطارية: 1x CR2032
- الوحدات: كجم / رطل
- إيقاف تلقائي`,
        price: 60.00,
        images: getImages('digital-luggage-scale-dls1'),
        category: categories.home.slug
    },
    {
        id: 'smart-sous-vide-ssv1',
        name: 'جهاز طبخ سو فيد ذكي',
        slug: 'smart-sous-vide-ssv1',
        description: `اطبخ شرائح اللحم والخضروات بشكل مثالي. يتصل هذا الجهاز بهاتفك ويتيح لك التحكم في عملية الطهي من أي مكان.
###FEATURES###
- تحكم دقيق في درجة الحرارة
- اتصال واي فاي وبلوتوث
- تطبيق مع آلاف الوصفات
- صغير وقوي
###DETAILS###
- القوة: 1100 واط
- معدل التدفق: 12 لتر/دقيقة
- مقاوم للماء: IPX7`,
        price: 850.00,
        images: getImages('smart-sous-vide-ssv1'),
        category: categories.home.slug
    },
    {
        id: 'smart-button-pusher-sbp1',
        name: 'روبوت ضغط الأزرار الذكي',
        slug: 'smart-button-pusher-sbp1',
        description: `حول أي جهاز تقليدي إلى جهاز ذكي. يقوم هذا الروبوت الصغير بالضغط على الأزرار نيابة عنك، ويمكن التحكم فيه عبر التطبيق.
###FEATURES###
- يضغط على الأزرار ومفاتيح الإضاءة
- تحكم عبر التطبيق والأوامر الصوتية (يتطلب Hub)
- تركيب سهل باللصق
- عمر بطارية طويل جدًا
###DETAILS###
- الاتصال: بلوتوث
- عمر البطارية: حوالي 600 يوم
- المادة: بلاستيك ABS`,
        price: 150.00,
        images: getImages('smart-button-pusher-sbp1'),
        category: categories.home.slug
    },
    {
        id: 'cordless-stick-vacuum-csv1',
        name: 'مكنسة كهربائية لاسلكية عمودية',
        slug: 'cordless-stick-vacuum-csv1',
        description: `تنظيف قوي بدون قيود. هذه المكنسة خفيفة الوزن وتصل إلى كل زاوية، مع بطارية قابلة للفصل لسهولة الشحن.
###FEATURES###
- شفط قوي 22KPa
- بطارية تدوم حتى 40 دقيقة
- نظام ترشيح 5 مراحل
- تتحول إلى مكنسة يدوية
###DETAILS###
- الوزن: 2.5 كجم
- سعة صندوق الغبار: 0.8 لتر
- الملحقات: فرشاة للأرضيات، أداة للشقوق، فرشاة 2 في 1`,
        price: 750.00,
        images: getImages('cordless-stick-vacuum-csv1'),
        category: categories.home.slug
    },
    {
        id: 'smart-window-cleaner-swc1',
        name: 'روبوت تنظيف النوافذ الذكي',
        slug: 'smart-window-cleaner-swc1',
        description: `احصل على نوافذ لامعة بدون مجهود. يلتصق هذا الروبوت بالزجاج وينظفه تلقائيًا.
###FEATURES###
- نظام شفط قوي للبقاء على الزجاج
- ينظف بمسارات ذكية
- تحكم عبر ريموت كنترول
- نظام أمان مع بطارية احتياطية وحبل أمان
###DETAILS###
- سرعة التنظيف: 4 دقائق/متر مربع
- مصدر الطاقة: كهربائي
- مناسب لـ: النوافذ، المرايا، بلاط السيراميك`,
        price: 1200.00,
        images: getImages('smart-window-cleaner-swc1'),
        category: categories.home.slug
    },
    {
        id: 'smart-air-freshener-saf1',
        name: 'معطر جو ذكي للسيارة',
        slug: 'smart-air-freshener-saf1',
        description: `حافظ على رائحة سيارتك منعشة دائمًا. يكتشف هذا المعطر الاهتزازات ويبدأ بالعمل تلقائيًا عند تشغيل السيارة.
###FEATURES###
- يعمل تلقائيًا عند تشغيل السيارة
- 3 مستويات لشدة العطر
- يدوم حتى 60 يومًا
- تصميم أنيق من سبائك الألومنيوم
###DETAILS###
- مصدر الطاقة: بطارية قابلة لإعادة الشحن USB
- نوع العطر: زيوت عطرية (يأتي مع عبوة واحدة)
- التركيب: فتحة المكيف`,
        price: 180.00,
        images: getImages('smart-air-freshener-saf1'),
        category: categories.home.slug
    },
    {
        id: 'smart-rice-cooker-src1',
        name: 'طباخة أرز ذكية',
        slug: 'smart-rice-cooker-src1',
        description: `احصل على أرز مطبوخ بشكل مثالي في كل مرة. تتيح لك هذه الطباخة التحكم في عملية الطهي واختيار نوع الأرز من هاتفك.
###FEATURES###
- تحكم عبر التطبيق مع وصفات متنوعة
- تقنية التسخين بالحث الكهرومغناطيسي
- وعاء داخلي غير لاصق
- يحافظ على الأرز دافئًا لساعات
###DETAILS###
- السعة: 3 لتر
- الاتصال: واي فاي
- القوة: 1100 واط`,
        price: 550.00,
        images: getImages('smart-rice-cooker-src1'),
        category: categories.home.slug
    },
    {
        id: 'electric-kettle-ek1',
        name: 'غلاية ماء كهربائية مع تحكم في درجة الحرارة',
        slug: 'electric-kettle-ek1',
        description: `مثالية لعشاق الشاي والقهوة. تتيح لك هذه الغلاية تسخين الماء إلى درجة الحرارة الدقيقة المطلوبة لمشروبك.
###FEATURES###
- 6 إعدادات مسبقة لدرجة الحرارة
- وظيفة الحفاظ على الدفء لمدة 60 دقيقة
- مصنوعة من الفولاذ المقاوم للصدأ
- حماية من الغليان الجاف
###DETAILS###
- السعة: 1.7 لتر
- القوة: 1500 واط
- المادة: فولاذ مقاوم للصدأ`,
        price: 280.00,
        images: getImages('electric-kettle-ek1'),
        category: categories.home.slug
    },
    {
        id: 'motion-activated-faucet-maf1',
        name: 'محول صنبور الماء إلى ذكي',
        slug: 'motion-activated-faucet-maf1',
        description: `حول أي صنبور إلى صنبور يعمل بدون لمس. يوفر الماء ويقلل من انتشار الجراثيم.
###FEATURES###
- مستشعران للحركة (سفلي وجانبي)
- تركيب سهل على معظم الصنابير
- يوفر استهلاك الماء
- بطارية قابلة لإعادة الشحن تدوم طويلاً
###DETAILS###
- مقاوم للماء: IPX6
- الشحن: Micro USB
- عمر البطارية: يصل إلى 6 أشهر`,
        price: 150.00,
        images: getImages('motion-activated-faucet-maf1'),
        category: categories.home.slug
    },
    {
        id: 'smart-plant-sensor-sps1',
        name: 'مستشعر نباتات ذكي',
        slug: 'smart-plant-sensor-sps1',
        description: `اعرف بالضبط ما تحتاجه نباتاتك. يقيس هذا المستشعر رطوبة التربة، والضوء، ودرجة الحرارة، ومستوى الخصوبة.
###FEATURES###
- يقيس 4 مؤشرات حيوية للنبات
- يتصل بتطبيق مع قاعدة بيانات لآلاف النباتات
- يقدم نصائح للعناية بنباتاتك
- مناسب للنباتات الداخلية والخارجية
###DETAILS###
- الاتصال: بلوتوث
- البطارية: 1x CR2032 (تدوم عامًا)
- مقاوم للماء: IPX5`,
        price: 130.00,
        images: getImages('smart-plant-sensor-sps1'),
        category: categories.home.slug
    },
    {
        id: 'smart-picture-light-spl1',
        name: 'إضاءة لوحات ذكية',
        slug: 'smart-picture-light-spl1',
        description: `أبرز جمال لوحاتك الفنية. تتيح لك هذه الإضاءة التحكم في درجة حرارة اللون والسطوع لإضاءة مثالية.
###FEATURES###
- تحكم في درجة حرارة اللون (دافئ إلى بارد)
- سطوع قابل للتعديل
- تعمل بالبطارية لتركيب بدون أسلاك
- ريموت كنترول للتحكم السهل
###DETAILS###
- مصدر الطاقة: بطارية قابلة لإعادة الشحن
- التركيب: على الحائط فوق اللوحة
- المادة: معدن`,
        price: 320.00,
        images: getImages('smart-picture-light-spl1'),
        category: categories.home.slug
    },
    {
        id: 'automatic-pet-door-apd1',
        name: 'باب حيوانات أليفة أوتوماتيكي',
        slug: 'automatic-pet-door-apd1',
        description: `امنح حيوانك الأليف حرية الدخول والخروج مع الحفاظ على أمان منزلك. يفتح الباب فقط عندما يقترب حيوانك الأليف الذي يرتدي الطوق الخاص.
###FEATURES###
- يفتح فقط للحيوانات الأليفة التي ترتدي الطوق الذكي
- يمنع دخول الحيوانات الأخرى
- 4 أوضاع للقفل
- مقاوم للطقس
###DETAILS###
- مصدر الطاقة: 4 بطاريات C
- مناسب لـ: القطط والكلاب الصغيرة
- المحتويات: باب، طوق ذكي واحد`,
        price: 700.00,
        images: getImages('automatic-pet-door-apd1'),
        category: categories.home.slug
    },
    {
        id: 'smart-fabric-shaver-sfs2',
        name: 'مزيل الوبر الذكي للملابس',
        slug: 'smart-fabric-shaver-sfs2',
        description: `جدد ملابسك وأثاثك. يزيل هذا الجهاز الوبر والكرات الصغيرة من الأقمشة بفعالية وأمان.
###FEATURES###
- شاشة LED لعرض مستوى البطارية والسرعة
- 3 سرعات مختلفة
- شفرات حادة وقوية
- تصميم آمن لا يتلف القماش
###DETAILS###
- الشحن: USB-C
- وقت التشغيل: يصل إلى 3 ساعات
- سهل التنظيف`,
        price: 140.00,
        images: getImages('smart-fabric-shaver-sfs2'),
        category: categories.home.slug
    },
    {
        id: 'smart-coffee-grinder-scg1',
        name: 'مطحنة قهوة ذكية',
        slug: 'smart-coffee-grinder-scg1',
        description: `احصل على طحنة قهوة مثالية لمشروبك. تتيح لك هذه المطحنة اختيار درجة الطحن والكمية بدقة للحصول على أفضل نكهة.
###FEATURES###
- 60 إعدادًا للطحن (من الإسبريسو إلى الفرنش برس)
- تطحن مباشرة في مرشح القهوة
- شاشة LCD لعرض الإعدادات
- شفرات مخروطية من الفولاذ المقاوم للصدأ
###DETAILS###
- سعة وعاء البن: 450 جرام
- القوة: 165 واط
- المادة: فولاذ مقاوم للصدأ`,
        price: 950.00,
        images: getImages('smart-coffee-grinder-scg1'),
        category: categories.home.slug
    },
    {
        id: 'smart-humidifier-sh1',
        name: 'مرطب هواء ذكي',
        slug: 'smart-humidifier-sh1',
        description: `حافظ على مستوى رطوبة مثالي في منزلك. يمكنك التحكم في هذا المرطب عن بعد وتعيين مستوى الرطوبة المستهدف.
###FEATURES###
- خزان كبير بسعة 4.5 لتر
- وضع تلقائي للحفاظ على الرطوبة المستهدفة
- فوهة 360 درجة لتوزيع الرذاذ
- هادئ ومناسب لغرف النوم
###DETAILS###
- الاتصال: واي فاي
- وقت التشغيل: يصل إلى 40 ساعة
- التغطية: تصل إلى 40 مترًا مربعًا`,
        price: 320.00,
        images: getImages('smart-humidifier-sh1'),
        category: categories.home.slug
    },
    {
        id: 'bedside-lamp-bl1',
        name: 'مصباح سرير ذكي مع منبه ضوئي',
        slug: 'bedside-lamp-bl1',
        description: `استيقظ بنشاط ونم بهدوء. يحاكي هذا المصباح شروق الشمس لإيقاظك بلطف ويساعدك على الاسترخاء مع إضاءة دافئة.
###FEATURES###
- محاكاة شروق وغروب الشمس
- 16 مليون لون
- التحكم عبر التطبيق والأوامر الصوتية
- يعمل كضوء ليلي
###DETAILS###
- الاتصال: واي فاي
- التوافق: Alexa, Google Assistant, HomeKit
- مصدر الطاقة: كهربائي`,
        price: 450.00,
        images: getImages('bedside-lamp-bl1'),
        category: categories.home.slug
    },
    {
        id: 'smart-wine-aerator-swa1',
        name: 'مهوي نبيذ إلكتروني ذكي',
        slug: 'smart-wine-aerator-swa1',
        description: `عزز نكهة النبيذ في ثوانٍ. يقوم هذا الجهاز بتهوية النبيذ أثناء سكبه لإطلاق نكهاته ورائحته الكاملة.
###FEATURES###
- تهوية فورية بلمسة زر
- يسكب ويوزع النبيذ بسهولة
- تصميم أنيق ومحكم
- يعمل مع معظم زجاجات النبيذ
###DETAILS###
- مصدر الطاقة: بطارية قابلة لإعادة الشحن USB
- المادة: فولاذ مقاوم للصدأ
- سهل التنظيف`,
        price: 250.00,
        images: getImages('smart-wine-aerator-swa1'),
        category: categories.home.slug
    }
];


export const products: Product[] = [
    ...electronicsProducts,
    ...miscProducts,
    ...healthProducts,
    ...homeProducts
];
