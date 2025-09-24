
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
- تمرير MagSpeed الكهرومagnيسي
- مستشعر 8K DPI يعمل على أي سطح (حتى الزجاج)
- نقرات هادئة
- تصميم مريح لليد اليمنى
###DETAILS###
- الاتصال: بلوتوth, Logi Bolt USB receiver
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
    }
];


export const products: Product[] = [
    ...electronicsProducts,
    ...miscProducts,
    ...healthProducts,
    ...homeProducts
];
