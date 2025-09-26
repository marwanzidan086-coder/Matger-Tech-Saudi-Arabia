
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
        warranty: 'عام واحد',
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
      warranty: 'عامين',
      faq: [
          { question: "هل يمكن استخدام الكشاف أثناء المطر؟", answer: "نعم، الكشاف مقاوم للمطر والغبار، مما يجعله مناسبًا للاستخدام في الظروف الجوية المختلفة." },
          { question: "كيف يعمل الباور بانك المدمج؟", answer: "يحتوي الكشاف على منفذ USB يمكنك استخدامه لشحن هاتفك أو الأجهزة الأخرى." },
      ]
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
        category: categories.electronics.slug,
        warranty: '18 شهرًا',
        faq: [
            { question: "كم مرة يمكن لهذا الباور بانك شحن هاتفي؟", answer: "يمكنه شحن معظم الهواتف الذكية الحديثة حوالي مرتين." },
            { question: "هل هو آمن لأجهزتي؟", answer: "نعم، يحتوي على نظام MultiProtect من Anker الذي يوفر حماية من زيادة التيار والحرارة الزائدة." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني تخصيص إضاءة الماوس؟", answer: "نعم، يمكنك تخصيص إضاءة RGB بالكامل عبر البرنامج المرفق." },
            { question: "هل الماوس مناسب لألعاب التصويب (FPS)؟", answer: "بالتأكيد، المستشعر عالي الدقة يجعله مثاليًا لألعاب التصويب التي تتطلب دقة عالية." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما نوع المفاتيح الميكانيكية المستخدمة؟", answer: "تستخدم مفاتيح بنية (Brown)، وهي توفر توازنًا جيدًا بين الكتابة والألعاب." },
            { question: "هل لوحة المفاتيح كاملة الحجم؟", answer: "لا، هي من نوع TKL (Tenkeyless) أي بدون قسم الأرقام المنفصل، مما يوفر مساحة أكبر على المكتب." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل تحتوي الكاميرا على غطاء للخصوصية؟", answer: "نعم، تحتوي على غطاء خصوصية مدمج يمكنك إغلاقه عند عدم استخدام الكاميرا." },
            { question: "هل تعمل الكاميرا مع برامج الاجتماعات مثل Zoom و Teams؟", answer: "نعم، هي متوافقة تمامًا مع جميع برامج الاجتماعات والبث المباشر الشهيرة." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني شحن اللابتوب من خلال هذا الموزع؟", answer: "نعم، يدعم منفذ USB-C الشحن بقوة تصل إلى 100 واط (Power Delivery)." },
            { question: "هل يدعم منفذ HDMI دقة 4K؟", answer: "نعم، يدعم دقة 4K بمعدل تحديث 30 هرتز." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يعمل مع جميع أنواع الهواتف؟", answer: "يعمل مع أي هاتف يدعم الشحن اللاسلكي بمعيار Qi، مثل هواتف iPhone و Samsung الحديثة." },
            { question: "هل أحتاج إلى شراء شاحن حائط منفصل؟", answer: "نعم، يوصى باستخدام شاحن حائط بقوة 18 واط أو أعلى للحصول على أفضل أداء." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما مدى مقاومته للماء؟", answer: "مقاوم للماء والغبار بمعيار IP67، مما يعني أنه يمكن غمره في الماء حتى عمق متر واحد لمدة 30 دقيقة." },
            { question: "هل يمكنني ربط مكبري صوت معًا؟", answer: "نعم، يمكنك ربط مكبري صوت من نفس النوع لاسلكيًا للحصول على صوت ستيريو حقيقي." },
        ]
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
        category: categories.electronics.slug,
        warranty: '18 شهرًا',
        faq: [
            { question: "ما الفرق بين أوضاع إلغاء الضوضاء؟", answer: "تحتوي على أوضاع مخصصة للحد من ضوضاء الطائرات (Transport)، ضوضاء المقاهي (Indoor)، وضوضاء الشارع (Outdoor)." },
            { question: "هل يمكن استخدامها مع كابل؟", answer: "نعم، يمكن استخدامها مع كابل AUX المرفق حتى لو كانت البطارية فارغة." },
        ]
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
        category: categories.electronics.slug,
        warranty: '6 أشهر',
        faq: [
            { question: "هل الحامل ثابت؟", answer: "نعم، مصنوع من الألومنيوم المتين ويحتوي على وسادات سيليكون لمنع انزلاق اللابتوب." },
            { question: "هل يساعد على تبريد اللابتوب؟", answer: "نعم، التصميم المفتوح يرفع اللابتوب عن سطح المكتب مما يسمح بمرور الهواء وتبريد أفضل." },
        ]
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
        category: categories.electronics.slug,
        faq: [
            { question: "هل يؤثر المغناطيس على بطارية الهاتف؟", answer: "لا، المغناطيس المستخدم آمن تمامًا ولا يؤثر على أداء الهاتف أو بطاريته." },
            { question: "كيف أركب القطعة المعدنية؟", answer: "يمكنك لصق القطعة المعدنية مباشرة على ظهر هاتفك أو وضعها بين الهاتف وغطائه." },
        ]
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
        category: categories.electronics.slug,
        warranty: '3 سنوات',
        faq: [
            { question: "ما الفرق بينه وبين القرص الصلب العادي (HDD)؟", answer: "الـ SSD أسرع بكثير وأكثر متانة ومقاومة للصدمات لأنه لا يحتوي على أجزاء متحركة." },
            { question: "هل يعمل مع أجهزة Mac و Windows؟", answer: "نعم، يعمل مع كلا النظامين. قد يتطلب إعادة تهيئة بسيطة للانتقال بينهما." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عامان',
        faq: [
            { question: "كيف أحدد أفضل مكان لوضع المقوي؟", answer: "يحتوي الجهاز على مؤشر ضوئي ذكي يساعدك على إيجاد أفضل موقع للحصول على أقوى إشارة." },
            { question: "هل يقوم بإنشاء شبكة جديدة؟", answer: "يقوم بإنشاء شبكة واحدة موحدة باستخدام نفس اسم الشبكة وكلمة المرور لشبكتك الحالية." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني التحكم في كل مقبس على حدة؟", answer: "نعم، يمكنك تشغيل وإيقاف كل مقبس من المقابس الثلاثة بشكل مستقل عبر التطبيق." },
            { question: "هل أحتاج إلى جهاز Hub لتشغيله؟", answer: "لا، لا يتطلب أي Hub إضافي، فقط يتصل بشبكة الواي فاي مباشرة." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل القلم يحتاج إلى شحن؟", answer: "لا، القلم يعمل بتقنية الرنين الكهرومغناطيسي ولا يحتاج إلى بطارية أو شحن." },
            { question: "هل يمكن استخدامه مع برامج مثل Photoshop؟", answer: "نعم، هو متوافق مع جميع برامج الرسم والتصميم الشهيرة مثل Photoshop, Illustrator, وغيرها." },
        ]
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
        category: categories.electronics.slug,
        faq: [
            { question: "ما هو مدى الريموت؟", answer: "يعمل ريموت البلوتوث حتى مسافة 10 أمتار." },
            { question: "هل هو ثابت عند استخدامه كحامل ثلاثي؟", answer: "نعم، الأرجل الثلاثية توفر قاعدة ثابتة للتصوير." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنه مسح بطاقات الهوية؟", answer: "نعم، يمكنه مسح المستندات الصغيرة مثل بطاقات الهوية والإيصالات." },
            { question: "ما هي وظيفة OCR؟", answer: "تقنية OCR (التعرف الضوئي على الحروف) تقوم بتحويل المستندات الممسوحة ضوئيًا إلى ملفات نصية قابلة للتحرير والبحث." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل الصوت المحيطي حقيقي أم افتراضي؟", answer: "الصوت المحيطي 7.1 هو افتراضي (Virtual Surround)، لكنه يوفر تجربة غامرة لتحديد اتجاه الأصوات في الألعاب." },
            { question: "هل الميكروفون قابل للفصل؟", answer: "الميكروفون قابل للتعديل ولكنه غير قابل للفصل." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل تحتاج إلى مصدر طاقة منفصل؟", answer: "إذا كان جهازك يدعم DisplayPort over USB-C، فيمكن توصيلها وتشغيلها بكابل واحد فقط. وإلا، ستحتاج إلى توصيل كابل طاقة إضافي." },
            { question: "هل تأتي مع غطاء حماية؟", answer: "نعم، تأتي مع غطاء ذكي مغناطيسي يعمل كحامل وحماية للشاشة." },
        ]
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
        category: categories.electronics.slug,
        faq: [
            { question: "هل هي مناسبة للأطفال؟", answer: "نعم، هي سهلة التحكم ومثالية للمبتدئين والأطفال تحت إشراف الكبار." },
            { question: "هل يمكنني مشاهدة البث المباشر من الكاميرا على هاتفي؟", answer: "نعم، يمكنك توصيلها بهاتفك ومشاهدة بث حي مباشر من الكاميرا." },
        ]
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
        category: categories.electronics.slug,
        warranty: '18 شهرًا',
        faq: [
            { question: "كم عدد الأشخاص الذين يمكنهم المشاركة في اجتماع باستخدام هذا الجهاز؟", answer: "هو مثالي للاجتماعات الصغيرة والمتوسطة التي تضم ما يصل إلى 8 أشخاص." },
            { question: "هل يمكن استخدامه كمكبر صوت للموسيقى؟", answer: "نعم، يمكن استخدامه كمكبر صوت بلوتوث عادي بجودة صوت جيدة." },
        ]
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
        category: categories.electronics.slug,
        faq: [
            { question: "ماذا يمكنني أن أفعل بـ Raspberry Pi؟", answer: "يمكنك استخدامه لتعلم البرمجة، بناء روبوتات، إنشاء مركز وسائط منزلي، تشغيل خادم ويب صغير، والعديد من المشاريع الأخرى." },
            { question: "هل نظام التشغيل مثبت مسبقًا؟", answer: "نعم، تأتي بطاقة MicroSD مع نظام Raspberry Pi OS (المعروف سابقًا باسم Raspbian) مثبتًا وجاهزًا للتشغيل." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد على الأجزاء الرئيسية',
        faq: [
            { question: "هل هي صعبة التجميع؟", answer: "تأتي الطابعة مجمعة جزئيًا، وعادة ما يستغرق تجميعها بالكامل حوالي ساعة إلى ساعتين باتباع التعليمات." },
            { question: "ما هي ميزة استئناف الطباعة؟", answer: "إذا انقطع التيار الكهربائي، يمكن للطابعة استئناف الطباعة من حيث توقفت، مما يوفر الوقت والمواد." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يتم توصيله بالكمبيوتر؟", answer: "يمكن توصيله إما عبر مستقبل USB المرفق أو مباشرة عبر البلوتوث." },
            { question: "هل يعمل مع أجهزة Mac؟", answer: "نعم، هو متوافق تمامًا مع أجهزة Windows و macOS." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل الرؤوس ممغنطة؟", answer: "نعم، الرؤوس والعلبة ممغنطة لتسهيل التقاط البراغي الصغيرة ومنعها من الضياع." },
            { question: "هل هو قوي بما يكفي لجميع أنواع البراغي؟", answer: "هو مصمم للإلكترونيات الدقيقة والبراغي الصغيرة، وقد لا يكون مناسبًا للبراغي الكبيرة التي تتطلب عزمًا عاليًا." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هو أفضل شيء في معالج GP2 الجديد؟", answer: "يوفر أداءً أسرع بشكل عام، ومعدلات إطارات أعلى، وجودة صورة أفضل، وتثبيت فيديو أكثر سلاسة." },
            { question: "هل أحتاج إلى غطاء حماية للغوص؟", answer: "الكاميرا مقاومة للماء حتى 10 أمتار بدون غطاء. للغوص أعمق من ذلك، ستحتاج إلى غطاء حماية مخصص." },
        ]
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
        category: categories.electronics.slug,
        warranty: '18 شهرًا',
        faq: [
            { question: "ما هي تقنية HearID؟", answer: "هي تقنية تقوم بإجراء اختبار سمعي بسيط عبر التطبيق ثم تقوم بتعديل إعدادات الصوت لتناسب قدرتك السمعية الفريدة." },
            { question: "هل تدعم الشحن اللاسلكي؟", answer: "نعم، علبة الشحن تدعم الشحن اللاسلكي بمعيار Qi." },
        ]
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
        category: categories.electronics.slug,
        warranty: '3 سنوات',
        faq: [
            { question: "هل يحتاج إلى مصدر طاقة خارجي؟", answer: "لا، يعمل بالطاقة مباشرة من منفذ USB." },
            { question: "ماذا لو نسيت كلمة المرور؟", answer: "للأسف، لا يمكن استعادة البيانات بدون كلمة المرور بسبب التشفير القوي. تأكد من حفظها في مكان آمن." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عامان',
        faq: [
            { question: "لماذا الوزن الخفيف مهم في ماوس الألعاب؟", answer: "الوزن الخفيف يسمح بحركة أسرع وأكثر سلاسة وبجهد أقل، مما يقلل من التعب ويزيد من سرعة ردة الفعل." },
            { question: "ما هي تقنية LIGHTSPEED؟", answer: "هي تقنية لاسلكية من Logitech توفر اتصالاً فائق السرعة ومستقرًا بزمن استجابة يضاهي الماوسات السلكية." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عامان',
        faq: [
            { question: "هل يقتصر استخدامه على البث المباشر فقط؟", answer: "لا، يمكن استخدامه للتحكم في أي برنامج تقريبًا، مثل برامج تحرير الفيديو (Adobe Premiere)، برامج الصوت، أو حتى كاختصارات لنظام التشغيل." },
            { question: "هل يمكنني إنشاء مجلدات للمفاتيح؟", answer: "نعم، يمكنك إنشاء مجلدات لتنظيم إجراءاتك، مما يمنحك عددًا لا نهائيًا من الأزرار القابلة للتخصيص." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما معنى صوت 360 درجة؟", answer: "يعني أن مكبر الصوت يوزع الصوت بالتساوي في جميع الاتجاهات، لذلك يحصل كل شخص في الغرفة على نفس التجربة الصوتية الرائعة." },
            { question: "هل يمكن استخدامه كمكبر صوت للمكالمات؟", answer: "نعم، يحتوي على ميكروفون مدمج ويمكن استخدامه لإجراء المكالمات الهاتفية أو الوصول إلى المساعد الصوتي." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يعمل مع ألعاب معينة فقط؟", answer: "يعمل مع أي لعبة تدعم وحدات التحكم، بما في ذلك الألعاب السحابية مثل Xbox Cloud Gaming و GeForce NOW." },
            { question: "هل يمكنني شحن هاتفي أثناء اللعب؟", answer: "نعم، يحتوي على منفذ USB-C إضافي يسمح لك بشحن هاتفك أثناء استخدام وحدة التحكم." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما فائدة الإضاءة الدافئة؟", answer: "تتيح لك تغيير لون الشاشة من الأبيض إلى الكهرماني، مما يريح العين عند القراءة ليلًا." },
            { question: "هل يمكنني القراءة به في ضوء الشمس المباشر؟", answer: "نعم، الشاشة مصممة لتكون بدون وهج، مما يجعلها تبدو وكأنها ورقة حقيقية حتى تحت أشعة الشمس." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هي ميزة إعادة التأطير (Reframing)؟", answer: "بما أنك تسجل بزاوية 360 درجة، يمكنك بعد التصوير اختيار الزاوية التي تريدها وتحويل الفيديو إلى فيديو عادي (مسطح) باللقطة المثالية." },
            { question: "هل عصا السيلفي تظهر في الفيديو؟", answer: "لا، تقوم الكاميرا تلقائيًا بإخفاء عصا السيلفي من لقطات 360 درجة، مما يعطي تأثيرًا يشبه التصوير بطائرة درون." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عامان',
        faq: [
            { question: "ما هي ميزة تمرير MagSpeed؟", answer: "هي عجلة تمرير كهرومغناطيسية يمكنها التمرير 1000 سطر في الثانية وتكون صامتة تقريبًا ودقيقة للغاية." },
            { question: "هل يمكنني استخدامه مع عدة أجهزة؟", answer: "نعم، يمكنك توصيله بما يصل إلى 3 أجهزة والتبديل بينها بسهولة بضغطة زر." },
        ]
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
        category: categories.electronics.slug,
        warranty: '3 سنوات',
        faq: [
            { question: "ماذا يعني معيار IP65؟", answer: "يعني أنه محمي تمامًا من الغبار ومحمي من رذاذ الماء من أي اتجاه." },
            { question: "هل يعمل مع أجهزة الألعاب (Consoles)؟", answer: "نعم، يمكن استخدامه لتوسيع مساحة التخزين على أجهزة مثل PlayStation و Xbox." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عامان',
        faq: [
            { question: "ما معنى نظام ثنائي القناة؟", answer: "يعني أنه يمكنك تسجيل شخصين في نفس الوقت، حيث يكون لكل شخص جهاز إرسال (ميكروفون) خاص به." },
            { question: "ما فائدة التسجيل الداخلي؟", answer: "يقوم كل جهاز إرسال بتسجيل نسخة احتياطية من الصوت، لذلك حتى لو انقطع الاتصال اللاسلكي، لن تفقد التسجيل أبدًا." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يعمل إذا كان بعيدًا عني؟", answer: "يستخدم شبكة Find My الضخمة والمجهولة الهوية. أي جهاز Apple قريب سيلتقط إشارة الـ AirTag ويرسل موقعه بشكل آمن ومشفر إليك." },
            { question: "هل يمكن لشخص آخر تتبعي باستخدام AirTag؟", answer: "لا، صممته Apple بميزات لمنع التتبع غير المرغوب فيه. إذا كان AirTag غريب يتحرك معك، سيقوم جهاز iPhone الخاص بك بتنبيهك." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عامان',
        faq: [
            { question: "هل أحتاج إلى جهاز Hue Bridge لتشغيلها؟", answer: "نعم، للحصول على كامل الميزات بما في ذلك المزامنة مع الشاشة والتحكم عن بعد، ستحتاج إلى جهاز Hue Bridge." },
            { question: "كيف تتزامن مع ما يظهر على الشاشة؟", answer: "تتطلب استخدام تطبيق Hue Sync على الكمبيوتر أو جهاز Hue Play HDMI Sync Box الذي يتصل بالتلفزيون." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عامان',
        faq: [
            { question: "ما هو نظام الشبكة (Mesh)؟", answer: "هو نظام يستخدم عدة وحدات (راوتر وقمر صناعي) لإنشاء شبكة واي فاي واحدة قوية وموحدة تغطي منزلك بالكامل بدون مناطق ميتة." },
            { question: "ما فائدة تقنية Tri-band؟", answer: "تستخدم نطاقًا ثالثًا مخصصًا للتواصل بين الراوتر والأقمار الصناعية، مما يضمن عدم انخفاض سرعة الإنترنت لديك." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل أحتاج إلى كمبيوتر لتشغيلها؟", answer: "لا، هي جهاز مستقل تمامًا. يمكنك أيضًا توصيلها بالكمبيوتر (اختياري) للعب ألعاب الواقع الافتراضي الخاصة بالكمبيوتر." },
            { question: "هل يمكنني ارتداء نظارتي الطبية معها؟", answer: "نعم، تأتي مع فاصل مخصص للنظارات الطبية لتوفير مساحة إضافية." },
        ]
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
        category: categories.electronics.slug,
        warranty: '3 سنوات',
        faq: [
            { question: "ما هي ميزة Windows Hello؟", answer: "تتيح لك تسجيل الدخول إلى جهاز الكمبيوتر الخاص بك بنظام Windows بمجرد النظر إلى الكاميرا باستخدام تقنية التعرف على الوجه." },
            { question: "ما فائدة مجال الرؤية القابل للتعديل؟", answer: "يمنحك القدرة على التركيز على وجهك (65 درجة)، أو إظهار المزيد من الخلفية (78 درجة)، أو عرض الغرفة بأكملها (90 درجة)." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ماذا يمكنني أن أفعل بمستشعر درجة الحرارة؟", answer: "يمكنك استخدامه لتشغيل إجراءات معينة، مثل تشغيل المروحة تلقائيًا عندما تصل الغرفة إلى درجة حرارة معينة." },
            { question: "هل تدعم اللغة العربية؟", answer: "نعم، المساعد الصوتي Alexa يدعم اللغة العربية بلهجة خليجية." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "لماذا وزن 249 جرامًا مهم؟", answer: "في العديد من البلدان، لا تتطلب الطائرات بدون طيار التي يقل وزنها عن 250 جرامًا تسجيلًا أو تراخيص خاصة، مما يسهل استخدامها." },
            { question: "هل يمكنها التصوير بشكل عمودي؟", answer: "نعم، يمكن للكاميرا الدوران 90 درجة للتصوير الرأسي الحقيقي، وهو مثالي لمحتوى وسائل التواصل الاجتماعي." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني تثبيت تطبيقات مثل Netflix و YouTube؟", answer: "نعم، يعمل بنظام Android ويمكنك تنزيل التطبيقات مباشرة من متجر التطبيقات المدمج." },
            { question: "هل يعمل في غرفة مضيئة؟", answer: "يعمل بشكل أفضل في غرفة مظلمة أو معتمة. سطوعه البالغ 100 لومن قد لا يكون كافيًا للغرف المضيئة جدًا." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عامان',
        faq: [
            { question: "ما فائدة 60 إطارًا في الثانية؟", answer: "توفر حركة أكثر سلاسة وطبيعية في الفيديو، وهو أمر رائع للبث المباشر للألعاب أو أي محتوى سريع الحركة." },
            { question: "كيف تعمل ميزة التصوير الرأسي؟", answer: "يمكنك ببساطة قلب الكاميرا 90 درجة لتبدأ بالتصوير بفيديو عمودي، وهو مثالي للمنصات مثل TikTok و Instagram Stories." },
        ]
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
        category: categories.electronics.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هو الاتصال متعدد النقاط (Multipoint)؟", answer: "يتيح لك توصيل السماعات بجهازين في نفس الوقت (مثل اللابتوب والهاتف) والتبديل بينهما بسلاسة." },
            { question: "هل جودة المكالمات جيدة؟", answer: "نعم، تستخدم 8 ميكروفونات وخوارزميات متقدمة لعزل صوتك عن الضوضاء المحيطة، مما يوفر جودة مكالمات ممتازة." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يتم التحكم في درجة الحرارة؟", answer: "يمكنك ضبط درجة الحرارة المطلوبة من خلال تطبيق خاص على هاتفك الذكي." },
            { question: "كم من الوقت يحافظ على درجة الحرارة؟", answer: "يحافظ على درجة الحرارة لمدة تصل إلى 1.5 ساعة على بطارية الكوب، أو طوال اليوم عند وضعه على قاعدة الشحن." },
        ]
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
        category: categories.misc.slug,
        warranty: '6 أشهر',
        faq: [
            { question: "هل يمكنني شحن هاتفي وساعة ذكية في نفس الوقت؟", answer: "يمكنك شحن هاتفك لاسلكيًا باستخدام القاعدة، واستخدام منفذ USB الإضافي لشحن جهاز آخر مثل ساعة ذكية." },
            { question: "هل يمكن تعديل لون الإضاءة؟", answer: "نعم، يحتوي على 5 أوضاع للإضاءة تتراوح بين الأبيض الدافئ والأبيض البارد لتناسب القراءة أو العمل أو الاسترخاء." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف تعرف متى تذكرني بشرب الماء؟", answer: "يمكنك تخصيص جدول التذكيرات في التطبيق، أو تركها تستخدم خوارزمية ذكية لتذكيرك بناءً على استهلاكك." },
            { question: "هل هي آمنة لغسالة الصحون؟", answer: "الغطاء الذكي يجب غسله يدويًا، لكن جسم الزجاجة آمن للغسل في غسالة الصحون." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني توصيله بهاتفي؟", answer: "نعم، يمكنك توصيل هاتفك لاسلكيًا عبر Wi-Fi (Miracast/AirPlay) أو سلكيًا باستخدام محول مناسب." },
            { question: "هل يعمل في غرفة مضيئة؟", answer: "يعمل بشكل أفضل في بيئة مظلمة أو معتمة للحصول على أفضل جودة للصورة." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكن لأفراد العائلة الآخرين إرسال الصور؟", answer: "نعم، يمكنك دعوة أفراد العائلة والأصدقاء لإرسال الصور إلى إطارك عبر التطبيق." },
            { question: "هل يعرض مقاطع الفيديو؟", answer: "نعم، يدعم عرض مقاطع الفيديو القصيرة (عادةً حتى 15 ثانية)." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل يمكنني استخدام أي قلم؟", answer: "لا، يجب استخدام أقلام Pilot FriXion المرفقة أو التي تباع بشكل منفصل، حيث أن حبرها يمحى بالماء." },
            { question: "كيف يتم إرسال الملاحظات إلى السحابة؟", answer: "عبر تطبيق الجوال الخاص بالدفتر، تقوم بمسح الصفحة ضوئيًا ويقوم التطبيق بتحسينها وإرسالها إلى الخدمة السحابية التي تختارها." },
        ]
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
        category: categories.misc.slug,
        warranty: '6 أشهر',
        faq: [
            { question: "هل هو قوي بما يكفي لخلط الثلج؟", answer: "هو مصمم للفواكه والمساحيق والسوائل. يمكنه خلط قطع الثلج الصغيرة، ولكن ليس قطع الثلج الكبيرة." },
            { question: "كيف يتم تنظيفه؟", answer: "أسهل طريقة هي إضافة قطرة صابون وبعض الماء ثم تشغيله لبضع ثوانٍ وشطفه." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكن استخدامه كمصباح عادي؟", answer: "نعم، يمكنك استخدامه كمصباح بجانب السرير مع 7 ألوان مختلفة و 20 مستوى سطوع." },
            { question: "ما فائدة محاكاة غروب الشمس؟", answer: "تساعدك على الاسترخاء والنوم، حيث يخفت الضوء تدريجيًا مع أصوات مهدئة." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "أين يجب أن أضع المستشعر الخارجي؟", answer: "ضعه في مكان مظلل وجيد التهوية في الخارج للحصول على قراءات دقيقة لدرجة الحرارة." },
            { question: "هل تتصل بالإنترنت؟", answer: "هذا الطراز لا يتصل بالإنترنت، بل يعتمد على مستشعراته الخاصة للتنبؤ بالطقس المحلي." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل يمكن تشغيل الموسيقى من خلاله؟", answer: "نعم، يحتوي على مكبر صوت بلوتوث مدمج يمكنك توصيله بهاتفك." },
            { question: "هل الليزر آمن؟", answer: "نعم، الليزر المستخدم منخفض الطاقة وآمن، ولكن يجب تجنب التحديق المباشر فيه." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "ماذا يحدث إذا كنت خارج نطاق البلوتوث؟", answer: "سيعرض لك التطبيق آخر موقع معروف تم فيه الاتصال بين هاتفك والمتتبع." },
            { question: "هل يمكنني استخدامه للعثور على هاتفي؟", answer: "نعم، يمكنك الضغط مرتين على زر المتتبع لجعل هاتفك يرن." },
        ]
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
        category: categories.misc.slug,
        warranty: '6 أشهر',
        faq: [
            { question: "ماذا يحدث إذا نفدت البطارية؟", answer: "يمكنك شحنه مؤقتًا باستخدام باور بانك لفتحه، ثم إعادة شحنه بالكامل." },
            { question: "هل يمكن استخدامه في الخارج؟", answer: "نعم، هو مقاوم للماء والغبار بمعيار IP65، مما يجعله مناسبًا للاستخدام الخارجي." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنه قياس المساحة؟", answer: "نعم، يمكنه حساب المساحة والحجم تلقائيًا بعد أخذ قياسات الطول والعرض والارتفاع." },
            { question: "هل شريط القياس قوي؟", answer: "نعم، الشريط المعدني قوي ومطلي بالنايلون لمزيد من المتانة." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "لماذا يجب أن أحفظ منتجات العناية بالبشرة باردة؟", answer: "التبريد يمكن أن يطيل عمر المنتجات، ويهدئ البشرة، ويقلل من الانتفاخ، ويعطي إحساسًا منعشًا عند الاستخدام." },
            { question: "هل يمكن استخدامها لتسخين الأشياء؟", answer: "نعم، تحتوي على وضع تسخين يمكن استخدامه للحفاظ على دفء المناشف الصغيرة أو المشروبات." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هي فائدة الطبخ بهذه الطريقة؟", answer: "تضمن طهي الطعام بشكل متساوٍ تمامًا من الحافة إلى الحافة، وتحافظ على رطوبته ونكهته، وتمنع الطهي الزائد." },
            { question: "هل أحتاج إلى جهاز تفريغ الهواء (Vacuum sealer)؟", answer: "هو موصى به للحصول على أفضل النتائج، ولكن يمكنك أيضًا استخدام أكياس Ziplock العادية باستخدام طريقة إزاحة الماء." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني إطعام حيواني الأليف يدويًا من التطبيق؟", answer: "نعم، بالإضافة إلى الجدولة، يمكنك تقديم وجبة إضافية في أي وقت من خلال التطبيق." },
            { question: "ماذا يحدث إذا انقطع الإنترنت؟", answer: "سيستمر المغذي في تقديم الوجبات المجدولة مسبقًا، ولكنك لن تتمكن من استخدام الكاميرا أو التحكم فيه عن بعد." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "كيف أحدد كمية الماء؟", answer: "يمكنك برمجة مدة الري (بالثواني) والفاصل الزمني بين كل مرة ري (بالأيام أو الساعات)." },
            { question: "هل هو معقد للتركيب؟", answer: "لا، تركيبه بسيط جدًا. فقط قم بقص الأنبوب وتوصيله بين المضخة والنباتات." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل هو محول جهد (Voltage Converter)؟", answer: "لا، هو محول مقابس فقط. تأكد من أن أجهزتك (مثل مجفف الشعر) تدعم الجهد الكهربائي للبلد الذي تزوره." },
            { question: "هل يمكنني شحن اللابتوب من منفذ USB-C؟", answer: "منفذ USB-C ليس مخصصًا لشحن أجهزة اللابتوب التي تتطلب طاقة عالية، ولكنه مناسب لشحن الهواتف والأجهزة اللوحية." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل تضيء أثناء النهار؟", answer: "لا، في الوضع التلقائي، تعمل فقط في الظلام عند اكتشاف الحركة لتوفير الطاقة." },
            { question: "كيف يتم تركيبها؟", answer: "تأتي مع شريط مغناطيسي لاصق. يمكنك لصق الشريط على أي سطح ثم تثبيت المصباح عليه مغناطيسيًا لسهولة الشحن." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل تعمل مع جميع أنواع السدادات؟", answer: "تعمل مع السدادات الطبيعية والاصطناعية." },
            { question: "هل هي سهلة الاستخدام؟", answer: "نعم، بسيطة جدًا. فقط ضعها فوق الزجاجة واضغط على الزر السفلي لإدخال البرغي، ثم الزر العلوي لإخراج السدادة." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل تعمل مع جميع الهواتف؟", answer: "تعمل مع معظم الهواتف الذكية التي يتراوح حجم شاشتها بين 4.7 و 6.5 بوصة وتحتوي على جيروسكوب." },
            { question: "هل أحتاج إلى شراء سماعات منفصلة؟", answer: "نعم، تحتوي على سماعات رأس مدمجة توفر صوتًا غامرًا." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف تعمل بدون حبر؟", answer: "تستخدم ورق ZINK (Zero Ink) الذي يحتوي على بلورات ألوان يتم تنشيطها بالحرارة." },
            { question: "هل الصور ذاتية اللصق؟", answer: "نعم، يمكنك نزع الطبقة الخلفية من الورق واستخدام الصور كملصقات." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عامان',
        faq: [
            { question: "هل يمكنني التحكم فيها وأنا خارج المنزل؟", answer: "نعم، طالما أنها متصلة بالواي فاي، يمكنك بدء الطهي ومراقبته من أي مكان عبر التطبيق." },
            { question: "ما هي سعة 5.5 لتر؟", answer: "السعة كبيرة بما يكفي لطهي دجاجة كاملة أو كمية كافية من البطاطس لأسرة مكونة من 3-5 أفراد." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "كيف أشغل الأغاني للغناء معها؟", answer: "تقوم بتوصيل الميكروفون بهاتفك عبر البلوتوث وتشغيل أي أغنية من YouTube أو تطبيقات الكاريوكي، وسيخرج الصوت من مكبر الصوت المدمج." },
            { question: "هل يمكنني تسجيل صوتي؟", answer: "نعم، يمكنك توصيله بهاتفك أو جهاز الكمبيوتر واستخدامه كمسجل صوت." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل التدليك قوي؟", answer: "نعم، يوفر تدليكًا عميقًا للأنسجة. يمكنك ضبط شدة ضغط الهواء لتناسب تفضيلاتك." },
            { question: "هل يناسب جميع مقاسات الأقدام؟", answer: "نعم، يناسب معظم مقاسات الأقدام." },
        ]
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
- الدقة: 1080p`,
        price: 850.00,
        images: getImages('dog-camera-treat-tosser'),
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني استخدام أي نوع من الحلوى؟", answer: "يوصى باستخدام حلوى جافة ومستديرة بقطر حوالي 1 سم للحصول على أفضل أداء." },
            { question: "ما هي ميزة تنبيهات النباح؟", answer: "ترسل الكاميرا إشعارًا إلى هاتفك عندما تكتشف نباح كلبك، حتى تتمكن من التحقق منه والتحدث إليه." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل يحتاج إلى كهرباء باستمرار؟", answer: "نعم، يجب أن تكون القاعدة المغناطيسية متصلة بالكهرباء لكي يطفو الأصيص." },
            { question: "هل من الصعب جعل الأصيص يطفو؟", answer: "قد يتطلب الأمر بعض المحاولات في البداية، ولكن بمجرد أن تجد نقطة التوازن، يصبح الأمر سهلاً." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "ما هي وظيفة Tare؟", answer: "تسمح لك بإعادة ضبط الميزان على الصفر بعد وضع وعاء، حتى تتمكن من قياس وزن المكونات فقط." },
            { question: "هل هو مقاوم للماء؟", answer: "السطح سهل التنظيف، لكن الجهاز نفسه ليس مقاومًا للماء ويجب عدم غمره." },
        ]
    },
    {
        id: 'cocktail-maker-machine',
        name: 'آلة صنع الكوكتيل الأوتوماتيكية',
        slug: 'cocktail-maker-machine',
        description: `كن نادل محترف في منزلك. املأ الكبسولات بمكوناتك المفضلة ودع الآلة تقوم بالباقي.
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل أحتاج إلى كبسولات خاصة؟", answer: "لا، يمكنك استخدام الكبسولات الزجاجية المرفقة وملئها بأي مكونات تختارها." },
            { question: "كيف يتم تنظيفها؟", answer: "تحتوي على دورة تنظيف ذاتي. يمكنك أيضًا غسل الكبسولات الزجاجية يدويًا أو في غسالة الصحون." },
        ]
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
        category: categories.misc.slug,
        warranty: '6 أشهر',
        faq: [
            { question: "كيف تعمل ميزة المزامنة مع الموسيقى؟", answer: "يحتوي جهاز التحكم على ميكروفون مدمج يلتقط الصوت المحيط ويجعل الأضواء تتراقص مع إيقاع الموسيقى." },
            { question: "هل يمكنني قص الشريط؟", answer: "نعم، يمكنك قص الشريط عند العلامات المحددة لتناسب الطول الذي تحتاجه." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل هي فعالة في شفط الغبار؟", answer: "نعم، هي مصممة لشفط الجسيمات الصغيرة مثل الغبار والفتات بفعالية." },
            { question: "هل هي صاخبة؟", answer: "صوتها منخفض نسبيًا ومناسب للاستخدام في بيئة مكتبية." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكن الاعتماد على الطاقة الشمسية لشحنه بالكامل؟", answer: "الشحن الشمسي مخصص لحالات الطوارئ وهو أبطأ بكثير من الشحن عبر الكهرباء. الطريقة الأساسية لشحنه هي عبر منفذ USB." },
            { question: "هل هو ثقيل؟", answer: "نظرًا لسعته الكبيرة وتصميمه المتين، فهو أثقل قليلاً من الباور بانك العادي بنفس السعة." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يعمل بدون أسلاك داخل الفرن؟", answer: "المسبار نفسه لاسلكي بالكامل ويرسل إشارة إلى قاعدة الشحن التي بدورها ترسل البيانات إلى هاتفك عبر البلوتوث." },
            { question: "هل هو آمن للاستخدام في الشوايات المغلقة؟", answer: "نعم، هو مصمم لتحمل درجات الحرارة العالية داخل الأفران والشوايات." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل يمكنني الشعور بالسماعات أثناء النوم على جانبي؟", answer: "السماعات رفيعة جدًا ومبطنة، لذلك لا تسبب إزعاجًا لمعظم الناس عند النوم على الجانب." },
            { question: "هل يمكنني غسله؟", answer: "نعم، يمكنك إزالة المكونات الإلكترونية بسهولة وغسل القناع يدويًا." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني وضعه في الميكروويف؟", answer: "لا، لا يجب وضعه في الميكروويف أبدًا بسبب المكونات الإلكترونية." },
            { question: "هل هو آمن للغسل؟", answer: "يمكن غسله يدويًا. هو مقاوم للماء بمعيار IPX7، لكن لا يوصى بوضعه في غسالة الصحون." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هي كبسولات النباتات؟", answer: "هي كبسولات تحتوي على تربة ذكية وبذور ومغذيات. كل ما عليك هو وضعها في الحديقة وإضافة الماء." },
            { question: "هل يمكنني زراعة أي شيء؟", answer: "يمكنك شراء كبسولات لمجموعة متنوعة من الأعشاب والخضروات والزهور من الشركة المصنعة." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل هو قوي مثل أجهزة Theragun الأكبر حجمًا؟", answer: "على الرغم من صغر حجمه، إلا أنه يوفر قوة تدليك كبيرة ومناسبة للاستخدام أثناء التنقل." },
            { question: "هل هو صاخب؟", answer: "يستخدم تقنية QuietForce ليكون هادئًا بشكل ملحوظ مقارنة بأجهزة التدليك الأخرى." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عامان',
        faq: [
            { question: "كيف تتفاعل مع الموسيقى؟", answer: "تحتوي على وحدة Rhythm مدمجة تستمع إلى الموسيقى وتجعل الألواح تتراقص مع الإيقاع في الوقت الفعلي." },
            { question: "هل تركيبها صعب؟", answer: "لا، يتم تركيبها بسهولة على الحائط باستخدام شريط لاصق على الوجهين مرفق معها." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "كيف يحسب عدد القفزات؟", answer: "تحتوي المقابض على مستشعرات مغناطيسية تكتشف كل دورة كاملة للحبل." },
            { question: "هل يمكنني استخدامه بدون التطبيق؟", answer: "نعم، يمكنك رؤية عدد القفزات على الشاشة المدمجة في المقبض." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما الفرق بينه وبين كوب Ember؟", answer: "هذا الكوب مصمم للسفر، ببطارية تدوم أطول وغطاء مانع للتسرب. يمكنك أيضًا ضبط الحرارة مباشرة من الكوب بدون تطبيق." },
            { question: "هل هو آمن لوضعه في حامل الأكواب في السيارة؟", answer: "نعم، تصميمه يناسب معظم حاملات الأكواب القياسية." },
        ]
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
        category: categories.misc.slug,
        faq: [
            { question: "هل هو مناسب للمبتدئين في صناعة الموسيقى؟", answer: "نعم، هو طريقة ممتعة وسهلة لتعلم أساسيات تركيب الأصوات وصناعة الإيقاعات." },
            { question: "هل يمكنني توصيله بسماعات؟", answer: "نعم، يحتوي على مخرج صوت قياسي 3.5 ملم لتوصيله بسماعات أو مكبرات صوت." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يبدو وكأنه جيتار حقيقي؟", answer: "نعم، يستخدم أوتارًا حقيقية وله نفس ملمس الجيتار الصوتي، ولكنه مصمم ليكون أسهل للمبتدئين." },
            { question: "هل التطبيق مجاني؟", answer: "نعم، يأتي مع تطبيق مجاني يحتوي على دروس تفاعلية وتمارين." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يدعم اللغة العربية؟", answer: "نعم، يدعم التعرف على الكتابة اليدوية باللغة العربية والعديد من اللغات الأخرى." },
            { question: "هل أحتاج إلى ورق خاص؟", answer: "لا، يمكنك الكتابة على أي ورق عادي. القلم يستخدم كاميرا صغيرة لتتبع حركته." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف تتحرك القطع؟", answer: "تستخدم اللوحة نظامًا مغناطيسيًا وروبوتيًا لتحريك القطع عبر السطح بسلاسة." },
            { question: "هل يمكنني اللعب ضد الذكاء الاصطناعي للوحة؟", answer: "نعم، تحتوي على محرك ذكاء اصطناعي مدمج بمستويات صعوبة متعددة." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هي جسيمات PM2.5؟", answer: "هي جسيمات ملوثات دقيقة جدًا في الهواء يمكن أن تدخل إلى الرئتين وتسبب مشاكل صحية." },
            { question: "هل يعطيني نصائح لتحسين جودة الهواء؟", answer: "نعم، يقدم التطبيق نصائح بناءً على القراءات، مثل فتح النوافذ أو تشغيل منقي الهواء." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني إنشاء وصفاتي الخاصة؟", answer: "نعم، يتيح لك التطبيق إنشاء وتخصيص وحفظ وصفات الكوكتيل الخاصة بك." },
            { question: "هل الخزانات محكمة الإغلاق؟", answer: "نعم، الخزانات مصممة للحفاظ على المكونات طازجة ومحكمة الإغلاق." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يعمل نظام التنظيف؟", answer: "بعد أن تغادر القطة، يقوم نظام غربلة تلقائي بفصل الفضلات المتكتلة ووضعها في درج نفايات مغلق." },
            { question: "هل هو آمن لقطتي؟", answer: "نعم، يحتوي على مستشعرات وزن وأمان توقف عملية التنظيف فورًا إذا عادت القطة." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "لماذا يتطلب اشتراكًا؟", answer: "الاشتراك يغطي تكلفة استخدام شبكة الهاتف المحمول للاتصال بين الطوق وخوادم GPS." },
            { question: "ما هي ميزة مراقبة النشاط؟", answer: "تتيح لك تتبع مقدار الوقت الذي يقضيه كلبك في اللعب والراحة والنوم، وتحديد أهداف للياقته البدنية." },
        ]
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
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يعمل وضع المحادثة؟", answer: "تعطي سماعة أذن واحدة للشخص الآخر، ويتحدث كل منكما بلغته، وستسمع الترجمة في أذنك." },
            { question: "هل تعمل بدون إنترنت؟", answer: "معظم اللغات تتطلب اتصالاً بالإنترنت للترجمة. بعض اللغات الأساسية قد تكون متاحة للترجمة بدون إنترنت." },
        ]
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
- مصدر الطاقة: كهربائي`,
        price: 2800.00,
        images: getImages('smart-whiteboard'),
        category: categories.misc.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل أحتاج إلى أقلام خاصة؟", answer: "لا، يمكنك استخدام أي أقلام مسح جاف عادية وممحاة." },
            { question: "كيف يشارك المحتوى؟", answer: "يمكنك مشاركة رابط آمن مع فريقك ليتمكنوا من مشاهدة ما تكتبه على السبورة مباشرة في متصفحهم." },
        ]
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
        category: categories.misc.slug,
        warranty: '6 أشهر',
        faq: [
            { question: "هل هو مناسب للمبتدئين؟", answer: "يحتوي على أوضاع سرعة مختلفة، بما في ذلك وضع للمبتدئين. لكن السرعات العالية تتطلب خبرة وتوازنًا." },
            { question: "هل يمكن استخدامه على التلال؟", answer: "نعم، المحركات المزدوجة قوية بما يكفي لصعود معظم التلال الحضرية." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يقيس نسبة الدهون في الجسم؟", answer: "يستخدم تقنية تحليل المعاوقة الكهربائية الحيوية (BIA) عن طريق إرسال تيار كهربائي صغير وغير محسوس عبر الجسم." },
            { question: "هل يمكن لجميع أفراد الأسرة استخدامه؟", answer: "نعم، يمكنه التعرف تلقائيًا على مستخدمين مختلفين وحفظ بيانات كل شخص على حدة." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما فائدة الرؤوس المختلفة؟", answer: "كل رأس مصمم لمنطقة معينة من الجسم، مثل الرأس الكروي للعضلات الكبيرة، والرأس على شكل رصاصة لنقاط الزناد." },
            { question: "هل هو صاخب؟", answer: "يستخدم محركًا بدون فرش ليكون هادئًا نسبيًا، حتى عند السرعات العالية." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هو المؤقت الذكي؟", answer: "يتوقف الجهاز مؤقتًا كل 30 ثانية لتذكيرك بالانتقال إلى ربع آخر من فمك، ويتوقف تلقائيًا بعد دقيقتين." },
            { question: "كم مرة يجب أن أغير رأس الفرشاة؟", answer: "يوصي أطباء الأسنان بتغيير رأس الفرشاة كل 3 أشهر." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "هل ضوء UV-C آمن؟", answer: "الضوء آمن طالما أن الصندوق مغلق. يتوقف الضوء تلقائيًا إذا تم فتح الغطاء أثناء التشغيل." },
            { question: "كيف يعمل موزع الروائح؟", answer: "يمكنك إضافة بضع قطرات من الزيت العطري في المكان المخصص لتعطير أغراضك أثناء التعقيم." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني الرد على المكالمات من الساعة؟", answer: "يمكنك رؤية إشعارات المكالمات ورفضها، لكن لا يمكنك التحدث مباشرة من خلال الساعة." },
            { question: "هل تدعم اللغة العربية؟", answer: "نعم، واجهة الساعة والإشعارات تدعم اللغة العربية." },
        ]
    },
    {
        id: 'water-flosser-wf1',
        name: 'جهاز تنظيف الأسنان بالماء WF1',
        description: `نظافة أسنان احترافية في منزلك. يزيل هذا الجهاز بقايا الطعام والبلاك من بين الأسنان وعلى طول خط اللثة بفعالية أكبر من الخيط التقليدي.
###FEATURES###
- 3 أوضاع تشغيل (عادي, ناعم, نبضي)
- خزان ماء كبير قابل للفصل
- مقاومة للماء بمعيار IPX7
- بطارية تدوم طويلاً
###DETAILS###
- السعة: 300 مل
- الشحن: USB
- الملحقات: 4 رؤوس مختلفة`,
        price: 280.00,
        slug: 'water-flosser-wf1',
        images: getImages('water-flosser-wf1'),
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل هو بديل عن فرشاة الأسنان؟", answer: "لا، هو مكمل لفرشاة الأسنان وليس بديلاً عنها. يجب استخدامه بعد تنظيف الأسنان بالفرشاة." },
            { question: "هل هو آمن للثة الحساسة؟", answer: "نعم، يحتوي على وضع 'ناعم' (Soft) مصمم خصيصًا للثة الحساسة." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "ما الفرق بين البخار العادي والبخار النانو أيوني؟", answer: "البخار النانو أيوني يتكون من جزيئات ماء أصغر بكثير، مما يسمح له باختراق البشرة بشكل أعمق وترطيبها بفعالية أكبر." },
            { question: "كم مرة يجب أن أستخدمه؟", answer: "يوصى باستخدامه 2-3 مرات في الأسبوع كجزء من روتين العناية بالبشرة." },
        ]
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
- المادة: سيليكون طبي
- مدة الجلسة الموصى بها: 15-20 دقيقة`,
        price: 450.00,
        slug: 'led-face-mask-lm3',
        images: getImages('led-face-mask-lm3'),
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما فائدة الألوان المختلفة؟", answer: "لكل لون طول موجي مختلف يستهدف مشكلة معينة. على سبيل المثال، الضوء الأحمر يحفز الكولاجين (مضاد للتجاعيد)، والضوء الأزرق يقتل بكتيريا حب الشباب." },
            { question: "هل هو مريح للارتداء؟", answer: "نعم، مصنوع من السيليكون الطبي المرن الذي يتناسب مع شكل الوجه، ويحتوي على فتحات للعينين والفم." },
        ]
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
        category: categories.health.slug,
        warranty: 'عامان',
        faq: [
            { question: "كيف يحمي الشعر من التلف الحراري؟", answer: "يقيس درجة حرارة الهواء أكثر من 40 مرة في الثانية لمنع الحرارة الزائدة والحفاظ على لمعان الشعر الطبيعي." },
            { question: "هل هو مناسب لجميع أنواع الشعر؟", answer: "نعم، يأتي مع ملحقات مغناطيسية مختلفة مصممة لأنواع الشعر المختلفة، من الناعم إلى المجعد." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما فائدة الألواح العائمة؟", answer: "تتحرك الألواح العائمة لتتكيف مع سمك خصلة الشعر، مما يضمن توزيع الضغط والحرارة بالتساوي ويقلل من تلف الشعر." },
            { question: "هل يمكن استخدامها في دول أخرى؟", answer: "نعم، تدعم الجهد العالمي (110-240 فولت)، لذا يمكنك استخدامها أثناء السفر." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل هو آمن للشعر؟", answer: "نعم، حجرة السيراميك توزع الحرارة بلطف، والجهاز يحتوي على تنبيهات لمنع تشابك الشعر." },
            { question: "هل هو مناسب للشعر الطويل؟", answer: "نعم، هو مناسب لجميع أطوال وأنواع الشعر." },
        ]
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
        category: categories.health.slug,
        warranty: 'عامان',
        faq: [
            { question: "هل يمكنني استخدامها مع رغوة الحلاقة؟", answer: "نعم، هي مقاومة للماء بالكامل ومصممة للاستخدام الجاف أو الرطب مع الرغوة أو الجل." },
            { question: "كيف يتم تنظيفها؟", answer: "يمكن فتح رؤوس الحلاقة بسهولة وشطفها مباشرة تحت الماء الجاري." },
        ]
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
        category: categories.health.slug,
        warranty: 'عامان',
        faq: [
            { question: "هل عملية إزالة الشعر مؤلمة؟", answer: "قد يكون هناك بعض الانزعاج في البداية، لكن استخدامها بانتظام ومع الماء الدافئ يقلل من الألم بشكل كبير." },
            { question: "ما فائدة رأس التدليك؟", answer: "يساعد رأس التدليك عالي التردد على تحفيز البشرة وجعل عملية إزالة الشعر أكثر لطفًا." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "هل هو مناسب للمبتدئين؟", answer: "نعم، يمكن التحكم في السرعة بسهولة، ويوصى بالبدء بسرعات منخفضة والتدرب تدريجيًا." },
            { question: "هل يمكن استخدامه لإزالة طلاء الجل؟", answer: "نعم، مع استخدام الرأس المناسب، يمكن استخدامه لإزالة طلاء الجل والأكريليك." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "ما فائدة وضع 99 ثانية منخفض الحرارة؟", answer: "هذا الوضع يزيد من القوة تدريجيًا، وهو مثالي للجل الصلب أو البشرة الحساسة لتقليل أي إحساس بالحرق." },
            { question: "هل يعمل مع جميع أنواع طلاء الجل؟", answer: "نعم، بفضل تقنية UV/LED المزدوجة، فهو متوافق مع جميع أنواع طلاء الجل." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكن تعديل ارتفاع تدليك الرقبة؟", answer: "نعم، يمكن تعديل ارتفاع رؤوس تدليك الرقبة لتناسب طولك." },
            { question: "هل يمكن استخدامها في السيارة؟", answer: "نعم، تأتي مع محول خاص لولاعة السيارة." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف أتحكم في قوة التدليك؟", answer: "يمكنك التحكم في الشدة عن طريق سحب المقابض. كلما سحبت أكثر، زادت قوة التدليك." },
            { question: "هل يمكن استخدامه على أجزاء أخرى من الجسم؟", answer: "نعم، تصميمه المرن يجعله مناسبًا لتدليك الظهر والبطن والساقين أيضًا." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل هو آمن للعيون؟", answer: "نعم، يركز التدليك على منطقة الصدغ ومحيط العين، ولا يضغط على مقلة العين مباشرة." },
            { question: "هل يمكنني إيقاف الموسيقى؟", answer: "نعم، يمكنك إيقاف الموسيقى المدمجة أو توصيل هاتفك عبر البلوتوث لتشغيل ما تفضله." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكن استخدامه أثناء الاستحمام؟", answer: "نعم، هو مقاوم للماء بالكامل ويمكن استخدامه مع الشامبو لتدليك فروة الرأس وتنظيفها بعمق." },
            { question: "هل يساعد على نمو الشعر؟", answer: "تدليك فروة الرأس يحفز الدورة الدموية، مما قد يساعد على تحسين صحة البصيلات وتعزيز النمو." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل هو دقيق؟", answer: "نعم، الجهاز معتمد إكلينيكيًا ويوفر قراءات دقيقة يمكنك الاعتماد عليها." },
            { question: "كيف تعمل ميزة كشف عدم انتظام ضربات القلب؟", answer: "يعرض الجهاز رمزًا تحذيريًا إذا اكتشف نمطًا غير منتظم لضربات القلب أثناء القياس." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "ما هي مسافة القياس المثالية؟", answer: "للحصول على أدق قراءة، يجب أن يكون المقياس على بعد 1-5 سم من الجبين." },
            { question: "كيف يعمل تنبيه الحمى؟", answer: "تضيء الشاشة باللون الأخضر للحرارة الطبيعية، والأصفر للحمى الخفيفة، والأحمر للحمى المرتفعة." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "ما هو المعدل الطبيعي لـ SpO2؟", answer: "عادة ما يكون المعدل الطبيعي لنسبة تشبع الأكسجين بين 95% و 100%." },
            { question: "هل هو جهاز طبي؟", answer: "هو جهاز للاستخدام الشخصي والرياضي، ولا ينبغي استخدامه كبديل للتشخيص الطبي المتخصص." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هي الضوضاء البيضاء؟", answer: "هي صوت يحتوي على جميع الترددات التي يمكن للإنسان سماعها، ويساعد على حجب الأصوات المزعجة الأخرى مثل حركة المرور أو الشخير." },
            { question: "هل يمكن أن يعمل طوال الليل؟", answer: "نعم، يمكنك تركه يعمل بشكل مستمر أو استخدام المؤقت لإيقافه تلقائيًا." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يعمل كمرطب للهواء أيضًا؟", answer: "نعم، يضيف رطوبة إلى الهواء، مما يساعد في حالات الجفاف، خاصة في فصل الشتاء." },
            { question: "كم قطرة من الزيت العطري يجب أن أستخدم؟", answer: "عادة ما يكون 3-5 قطرات كافية لكل 100 مل من الماء، ولكن يمكنك تعديل الكمية حسب تفضيلك." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "ما هي علامات المحاذاة؟", answer: "هي خطوط ونقاط مرسومة على السجادة لمساعدتك على محاذاة يديك وقدميك بشكل صحيح في وضعيات اليوجا المختلفة." },
            { question: "هل هي سهلة التنظيف؟", answer: "نعم، يمكن تنظيفها بسهولة باستخدام قطعة قماش مبللة بالماء والصابون الخفيف." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "هل استخدامها مؤلم؟", answer: "قد يكون هناك بعض الانزعاج في البداية، خاصة في المناطق المشدودة، لكن هذا يقل مع الاستخدام المنتظم." },
            { question: "كيف أستخدمها؟", answer: "يمكنك العثور على العديد من مقاطع الفيديو التعليمية عبر الإنترنت التي توضح كيفية استخدامها لمختلف المجموعات العضلية." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "هل يمكنني دمج الأحزمة معًا؟", answer: "نعم، يمكنك تركيب عدة أحزمة على المقابض للحصول على مستوى مقاومة أعلى." },
            { question: "هل هي متينة؟", answer: "نعم، مصنوعة من لاتكس طبيعي مزدوج الطبقات لضمان المتانة والأمان." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "كيف يتتبع القفزات؟", answer: "تستخدم المقابض مستشعرات عالية الدقة لتسجيل كل دورة كاملة للحبل." },
            { question: "هل يمكن استخدامه بدون الحبل؟", answer: "نعم، يأتي مع كرات قصيرة يمكنك تركيبها لممارسة القفز اللاسلكي في المساحات الصغيرة." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "كيف يعمل؟", answer: "يعمل عن طريق قياس سمك طية الجلد في مناطق معينة من الجسم." },
            { question: "هل هو دقيق مثل الموازين الذكية؟", answer: "يمكن أن يكون أكثر دقة في قياس نسبة الدهون إذا تم استخدامه بشكل صحيح وفي نفس النقاط في كل مرة." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "كم من الوقت يجب أن أرتديه يوميًا؟", answer: "يوصى بالبدء بـ 15-20 دقيقة يوميًا وزيادة المدة تدريجيًا." },
            { question: "هل يمكن ارتداؤه أثناء التمرين؟", answer: "هو مصمم للاستخدام أثناء الأنشطة اليومية مثل الجلوس على المكتب، ولا يوصى به للتمارين الشاقة." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكن استخدامها مع الرطوبة؟", answer: "نعم، يمكنك رش القليل من الماء على سطحها للحصول على علاج بالحرارة الرطبة." },
            { question: "هل هي آمنة للنوم بها؟", answer: "تحتوي على ميزة الإيقاف التلقائي بعد ساعتين للأمان." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "هل هي مؤلمة؟", answer: "قد تشعر بوخز حاد في الدقائق الأولى، لكن سرعان ما يتحول إلى إحساس دافئ ومريح." },
            { question: "كم من الوقت يجب أن أستلقي عليها؟", answer: "يوصى بالبدء بـ 10 دقائق وزيادة المدة تدريجيًا إلى 20-30 دقيقة." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "هل يسبب كدمات؟", answer: "إذا تم استخدامه بشكل صحيح (عدم إبقائه في مكان واحد لأكثر من ثانيتين)، فلن يسبب كدمات. ابدأ بأدنى مستوى شفط." },
            { question: "كيف أجهز بشرتي قبل الاستخدام؟", answer: "للحصول على أفضل النتائج، استخدم منشفة دافئة أو جهاز بخار لفتح المسام قبل الاستخدام." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل هي أفضل من فرش النايلون؟", answer: "السيليكون أكثر صحية لأنه غير مسامي ويمنع تراكم البكتيريا، كما أنه ألطف على البشرة." },
            { question: "هل أحتاج إلى استبدال رأس الفرشاة؟", answer: "لا، رأس السيليكون لا يحتاج إلى استبدال أبدًا." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كم مرة يجب أن أستخدمه؟", answer: "يوصى باستخدامه مرة واحدة في الأسبوع للحصول على أفضل النتائج." },
            { question: "هل هو مؤلم؟", answer: "لا، إنه غير مؤلم. قد تشعرين بشفط خفيف وتقشير لطيف." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "كيف يعمل وضع الترطيب؟", answer: "يستخدم أيونات سالبة للمساعدة في دفع مكونات السيروم والكريمات إلى عمق البشرة." },
            { question: "هل يجب أن تكون بشرتي مبللة عند استخدامه؟", answer: "نعم، يجب أن تبقى بشرتك مبللة بالماء أو التونر طوال عملية التنظيف والتقشير." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "متى يمكنني رؤية النتائج؟", answer: "قد تختلف النتائج، ولكن معظم المستخدمين يلاحظون انخفاضًا في تساقط الشعر وتحسنًا في كثافته بعد 3-6 أشهر من الاستخدام المنتظم." },
            { question: "هل له أي آثار جانبية؟", answer: "العلاج بالليزر منخفض المستوى آمن وليس له آثار جانبية معروفة عند استخدامه وفقًا للتعليمات." },
        ]
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
        category: categories.health.slug,
        warranty: 'عامان',
        faq: [
            { question: "هل يمكن استخدامها لحلاقة الشعر؟", answer: "هي مصممة بشكل أساسي لتشذيب اللحية، ولكن يمكن استخدامها لتشذيب الشعر القصير أيضًا." },
            { question: "هل الشفرات تحتاج إلى تزييت؟", answer: "الشفرات ذاتية الشحذ ولا تتطلب تزييتًا." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني إضافة أملاح الاستحمام؟", answer: "نعم، يمكنك إضافة أملاح إبسوم أو زيوت عطرية لتعزيز تجربة السبا." },
            { question: "هل بكرات التدليك آلية؟", answer: "لا، بكرات التدليك يدوية، تقوم بتحريك قدميك فوقها للحصول على التدليك." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف أستخدمه؟", answer: "ضعه على مكتبك أو طاولة جانبية على بعد حوالي 30-60 سم منك، واستخدمه لمدة 20-30 دقيقة كل صباح." },
            { question: "هل هو ضوء نمو للنباتات؟", answer: "لا، هو مصمم للاستخدام البشري ولا يوفر الطيف الكامل الذي تحتاجه النباتات للنمو." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "هل يحسب نسبة الدهون في الجسم؟", answer: "لا، هو يقيس محيط أجزاء الجسم فقط (مثل الخصر والذراع). لتتبع الدهون، يمكنك استخدامه مع ميزان ذكي." },
            { question: "كيف يعمل القفل؟", answer: "عندما تسحب الشريط حول جزء من جسمك، يمكنك قفله في مكانه للحصول على قياس دقيق دون أن ينزلق." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هي فوائد تمارين كيجل؟", answer: "تساعد على تحسين التحكم في المثانة، ودعم أعضاء الحوض، ويمكن أن تعزز الشفاء بعد الولادة." },
            { question: "هل هو آمن للاستخدام؟", answer: "نعم، مصنوع من السيليكون الطبي بنسبة 100% وهو آمن تمامًا للجسم." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يعمل مع أي نوع من المراتب؟", answer: "نعم، يعمل مع معظم أنواع المراتب (الإسفنج، الزنبرك، اللاتكس)." },
            { question: "هل يمكن أن يتتبع نوم شخصين في نفس السرير؟", answer: "لا، هو مصمم لتتبع الشخص الذي ينام فوقه مباشرة. ستحتاج إلى جهازين لتتبع شخصين." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما فائدة الأوضاع اللونية المختلفة؟", answer: "تتيح لك رؤية كيف سيبدو مكياجك في بيئات إضاءة مختلفة، مثل المكتب (بارد) أو في المساء (دافئ)." },
            { question: "أين تعلق مرآة التكبير؟", answer: "تلتصق مغناطيسيًا بمركز المرآة الرئيسية أو أي سطح معدني." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "هل هي صحية؟", answer: "نعم، السيليكون سهل التنظيف ولا يمتص الأوساخ مثل القطن، مما يجعله خيارًا صحيًا عند تنظيفه بانتظام." },
            { question: "ما الفرق بين العودين؟", answer: "العود الأساسي له أطراف مزخرفة للتنظيف، والعود التجميلي له طرف مدبب وآخر مستدير لتصحيح المكياج." },
        ]
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
        category: categories.health.slug,
        faq: [
            { question: "كيف يحافظ على برودة الماء؟", answer: "مصنوع من طبقات معزولة تساعد على الحفاظ على درجة حرارة الماء لفترة أطول." },
            { question: "هل هو مناسب للأشخاص طوال القامة؟", answer: "نعم، عمقه وقطره مناسبان لمعظم الأشخاص للجلوس بشكل مريح." },
        ]
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
        images: getImages('sauna-blanket-sb1'),
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما الفرق بينها وبين الساونا العادية؟", answer: "تسخن الأشعة تحت الحمراء الجسم مباشرة بدلاً من تسخين الهواء، مما يسمح باختراق أعمق للحرارة في درجات حرارة أقل." },
            { question: "كيف يتم تنظيفها؟", answer: "بعد الاستخدام، اتركها تبرد ثم امسحها من الداخل بمنشفة و مطهر." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني ارتداؤها طوال اليوم؟", answer: "نعم، هي مصممة لتكون مريحة ويمكن ارتداؤها لفترات طويلة أمام الشاشات." },
            { question: "هل لها أي درجة طبية؟", answer: "لا، هذه النظارات لا تحتوي على درجة طبية لتصحيح النظر." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ماذا يحدث إذا نسيت جرعة؟", answer: "سيسجل التطبيق الجرعة على أنها فائتة، ويمكن إعداد تنبيهات متكررة لتذكيرك." },
            { question: "هل يمكن استخدامه لعدة جرعات في اليوم؟", answer: "المنظم مصمم لجرعة واحدة يوميًا. للجرعات المتعددة، قد تحتاج إلى عدة منظمات." },
        ]
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
        category: categories.health.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف أقوم بتسجيل تخطيط القلب؟", answer: "تفتح التطبيق على هاتفك وتضع إصبعين على مستشعرات الجهاز لمدة 30 ثانية." },
            { question: "هل النتائج دقيقة؟", answer: "نعم، الجهاز معتمد من إدارة الغذاء والدواء الأمريكية ويوفر نتائج دقيقة يمكن مشاركتها مع طبيبك." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل تتجنب السلالم والعوائق؟", answer: "نعم، تحتوي على مستشعرات لمنع السقوط من على السلالم ومستشعرات لتجنب الاصطدام بالأثاث." },
            { question: "هل يمكنها تنظيف السجاد؟", answer: "نعم، تزيد من قوة الشفط تلقائيًا عند الانتقال من الأرضيات الصلبة إلى السجاد." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "متى يجب تغيير الفلتر؟", answer: "عادة كل 6-8 أشهر. سيقوم التطبيق بتنبيهك عندما يحين وقت تغيير الفلتر." },
            { question: "ما هو وضع النوم؟", answer: "في وضع النوم، يعمل المنقي بأدنى سرعة للمروحة ويطفئ جميع الأضواء لتوفير بيئة نوم هادئة." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكن تركيبه على أي باب؟", answer: "يناسب معظم الأبواب القياسية، ولكن من الأفضل التحقق من سمك الباب والتوافق قبل الشراء." },
            { question: "ماذا يحدث إذا نفدت البطارية؟", answer: "سينبهك القفل قبل نفاد البطارية بوقت كافٍ. في حالة الطوارئ، يمكنك استخدام المفتاح الميكانيكي أو توصيل باور بانك بمنفذ USB مخفي." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يتطلب اشتراكًا شهريًا؟", answer: "بعض الميزات مثل تخزين الفيديو السحابي قد تتطلب اشتراكًا، لكن الميزات الأساسية مثل البث المباشر والتنبيهات تعمل بدونه." },
            { question: "هل يمكنه التمييز بين الأشخاص والسيارات؟", answer: "نعم، تستخدم ميزة كشف الحركة الذكية خوارزميات للتمييز بين الأشخاص والحيوانات والسيارات لتقليل التنبيهات الكاذبة." },
        ]
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
        category: categories.home.slug,
        warranty: 'عامان',
        faq: [
            { question: "ما هو جسر التحكم (Bridge)؟", answer: "هو الجهاز المركزي الذي يتصل بالراوتر ويسمح لك بالتحكم في جميع اللمبات والميزات الذكية عن بعد." },
            { question: "هل يمكنني إضافة المزيد من اللمبات لاحقًا؟", answer: "نعم، يمكنك إضافة ما يصل إلى 50 لمبة وملحقًا إلى جسر التحكم الواحد." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يعمل مع مكانس Roomba؟", answer: "باستخدام تقنية Imprint Link، يمكن لروبوت Roomba إخبار روبوت Braava ببدء المسح تلقائيًا بعد انتهاء الكنس." },
            { question: "هل يستخدم الماء فقط؟", answer: "يمكن استخدام الماء أو محلول التنظيف الخاص بالأرضيات الصلبة من iRobot." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما فائدة مستشعر الغرف؟", answer: "يقيس درجة الحرارة في الغرفة التي تقضي فيها معظم وقتك، مما يضمن الراحة في المكان الذي يهمك، وليس فقط حول منظم الحرارة." },
            { question: "هل يمكنه اكتشاف ما إذا كنت في المنزل؟", answer: "نعم، يستخدم تقنية Geofencing لتحديد موقع هاتفك ليعرف متى تكون في المنزل أو بعيدًا عنه ويوفر الطاقة وفقًا لذلك." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل أحتاج إلى hub إضافي للتحكم الصوتي؟", answer: "نعم، للتحكم الصوتي والتحكم عن بعد خارج المنزل، ستحتاج إلى جهاز Hub الخاص بالشركة المصنعة." },
            { question: "هل اللوح الشمسي كافٍ لتشغيله؟", answer: "نعم، في معظم الحالات، يوفر اللوح الشمسي طاقة كافية لتشغيل المحرك دون الحاجة إلى شحن إضافي." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هو الصوت ثنائي الاتجاه؟", answer: "يسمح لك بالتحدث والاستماع عبر الكاميرا باستخدام هاتفك، حتى تتمكن من التحدث إلى أفراد عائلتك أو حيواناتك الأليفة." },
            { question: "هل يمكنني إيقاف التسجيل للحفاظ على الخصوصية؟", answer: "نعم، يمكنك ضبط جداول زمنية للتسجيل أو إيقاف تشغيلها يدويًا من التطبيق." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف تعمل الرؤية الليلية الملونة؟", answer: "تستخدم الكشاف المدمج لإضاءة المنطقة عند اكتشاف الحركة، مما يسمح بتسجيل فيديو ملون بدلاً من الأسود والأبيض." },
            { question: "هل تركيبها صعب؟", answer: "لا، بما أنها لاسلكية، يمكنك تركيبها في أي مكان في دقائق باستخدام الحامل المغناطيسي أو اللولبي المرفق." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل أحتاج إلى أي خبرة في الزراعة؟", answer: "لا على الإطلاق. النظام مؤتمت بالكامل، كل ما عليك فعله هو إضافة الماء عندما ينبهك الجهاز." },
            { question: "ما نوع النباتات التي يمكنني زراعتها؟", answer: "يمكنك زراعة مجموعة واسعة من الأعشاب (مثل الريحان والنعناع)، والخضروات الورقية (مثل الخس)، والطماطم الكرزية، والزهور." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "لماذا تبدو الشاشة وكأنها لوحة؟", answer: "تستخدم تقنية خاصة مضادة للوهج تجعل الصورة تبدو غير لامعة، بالإضافة إلى مستشعر يضبط سطوع الصورة لتتناسب مع إضاءة الغرفة." },
            { question: "هل يمكنني عرض صوري الخاصة؟", answer: "نعم، يمكنك بسهولة تحميل صورك الخاصة من هاتفك أو جهاز الكمبيوتر لعرضها." },
        ]
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
        category: categories.home.slug,
        warranty: '10 سنوات',
        faq: [
            { question: 'ما فائدة التنبيه الصوتي البشري؟', answer: 'بدلاً من مجرد صفير، يخبرك بصوت واضح "هناك دخان في غرفة المعيشة"، مما يساعد على الاستجابة بشكل أسرع وأكثر هدوءًا.' },
            { question: "هل يمكنه إيقاف الإنذار من الهاتف؟", answer: "نعم، إذا كان إنذارًا كاذبًا (مثل بخار الطهي)، يمكنك إسكاته مؤقتًا من التطبيق دون الحاجة للوصول إلى السقف." },
        ]
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
        category: categories.home.slug,
        warranty: 'عامان',
        faq: [
            { question: "أين أفضل الأماكن لوضعه؟", answer: "يوصى بوضعه في الأماكن المعرضة للتسرب مثل تحت أحواض المطبخ والحمام، بالقرب من سخانات المياه، وفي القبو." },
            { question: "هل يمكنه إيقاف تسرب المياه؟", answer: "هذا الجهاز يكتشف التسرب وينبهك فقط. لإيقاف التسرب، ستحتاج إلى صمام مياه ذكي منفصل." },
        ]
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
        category: categories.home.slug,
        faq: [
            { question: "هل هي مقاومة للمضغ؟", answer: "مصنوعة من مواد متينة، ولكنها ليست مصممة للمضغ الشديد. يوصى بالإشراف على الكلب أثناء اللعب." },
            { question: "كيف تعمل الأوضاع التفاعلية؟", answer: "تحتوي على أوضاع مختلفة للحركة: وضع لطيف، عادي، ونشط، لتناسب مزاج كلبك ومستوى طاقته." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يصدر أي رائحة؟", answer: "لا، يستخدم فلاتر كربونية للقضاء على أي روائح أثناء عملية التجفيف والطحن." },
            { question: "ماذا يمكنني أن أضع فيه؟", answer: "يمكنك وضع معظم بقايا الطعام، بما في ذلك الخضروات والفواكه وبقايا اللحوم ومنتجات الألبان." },
        ]
    },
    {
        id: 'smart-curtain-robot-cr1',
        name: 'روبوت الستائر الذكي',
        slug: 'smart-curtain-robot-cr1',
        description: `اجعل أي ستارة ذكية في 30 ثانية. يقوم هذا الروبوت الصغير بفتح وإغلاق ستائرك الحالية تلقائيًا عبر جدول زمني أو الأوامر الصوتية.
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يتم تركيبه؟", answer: "يتم تعليقه ببساطة على قضيب الستارة الموجود لديك. لا حاجة لأي أدوات." },
            { question: "هل يعمل مع الستائر الثقيلة؟", answer: "يمكنه دفع ستائر يصل وزنها إلى 8 كجم." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "أين منطقة الشحن بالضبط؟", answer: "توجد علامة صغيرة على سطح الطاولة تشير إلى منطقة الشحن اللاسلكي." },
            { question: "هل أحتاج إلى تجميعها؟", answer: "نعم، تتطلب تجميعًا بسيطًا وعادة ما تأتي مع جميع الأدوات والتعليمات اللازمة." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يعمل؟", answer: "يكتشف اهتزازات الغسالة أو المجفف. عندما تتوقف الاهتزازات لفترة معينة، فإنه يفترض أن الدورة قد انتهت ويرسل لك تنبيهًا." },
            { question: "أين أضعه؟", answer: "يمكنك تثبيته مغناطيسيًا على جانب الغسالة أو المجفف." },
        ]
    },
    {
        id: 'automatic-soap-dispenser-asd1',
        name: 'موزع صابون رغوي أوتوماتيكي',
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يجب أن أستخدم نوعًا معينًا من الصابون؟", answer: "يجب استخدام صابون سائل مخصص للرغوة، أو تخفيف الصابون السائل العادي بالماء بنسبة 1:3 (صابون:ماء)." },
            { question: "كم يدوم الشحن؟", answer: "يدوم الشحن الواحد لعدة أشهر حسب الاستخدام." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما مدى حساسية المستشعر؟", answer: "يفتح المستشعر عندما تكون على بعد 15-25 سم، مما يمنع الفتح العرضي." },
            { question: "هل الغطاء يغلق ببطء؟", answer: "نعم، يستخدم آلية إغلاق ناعمة وهادئة." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنني استخدامه لجدولة تشغيل الأجهزة؟", answer: "نعم، يمكنك إنشاء جداول زمنية لتشغيل وإيقاف الأجهزة تلقائيًا في أوقات محددة." },
            { question: "هل يقيس استهلاك الطاقة؟", answer: "هذا الطراز لا يقيس استهلاك الطاقة. هناك طرازات أخرى توفر هذه الميزة." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يمكنه العمل كمرطب هواء؟", answer: "نعم، يعمل بتقنية الموجات فوق الصوتية التي تضيف رطوبة إلى الهواء مع نشر الرائحة." },
            { question: "هل أحتاج إلى زيوت عطرية خاصة؟", answer: "لا، يمكنك استخدام أي زيوت عطرية قابلة للذوبان في الماء." },
        ]
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
        category: categories.home.slug,
        faq: [
            { question: "كيف يعمل نظام الري الذاتي؟", answer: "يحتوي على خزان ماء في الأسفل وفتيل يسحب الماء إلى التربة حسب حاجة النبات." },
            { question: "كم مرة أحتاج إلى ملء الخزان؟", answer: "يعتمد على نوع النبات وحجمه، ولكن عادة كل 2-4 أسابيع." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف يعرف التطبيق القيمة الغذائية؟", answer: "بعد وزن المكون، يمكنك البحث عنه في قاعدة بيانات التطبيق للحصول على جميع معلوماته الغذائية." },
            { question: "هل يمكنني استخدامه كميزان مطبخ عادي؟", answer: "نعم، يمكنك استخدامه كميزان عالي الدقة حتى بدون استخدام التطبيق." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل المسبار مقاوم للحرارة؟", answer: "نعم، المسبار وسلكه مصممان لتحمل درجات الحرارة العالية داخل الشواية أو الفرن." },
            { question: "هل يمكنني استخدامه للتدخين (Smoking)؟", answer: "بالتأكيد، يمكنك استخدام مسبار لمراقبة درجة حرارة اللحم والآخر لمراقبة درجة حرارة المدخن." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما هي تقنية التسامي الصبغي (Dye-sublimation)؟", answer: "هي تقنية طباعة تستخدم الحرارة لنقل الصبغة إلى الورق، وتنتج صورًا ذات ألوان غنية وتدرجات ناعمة تشبه الصور الفوتوغرافية التقليدية." },
            { question: "هل أحتاج إلى شراء حبر وورق خاص؟", answer: "نعم، تعمل الطابعة مع خراطيش خاصة تحتوي على الحبر والورق معًا." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "كيف تعمل ميزة إزالة الضباب؟", answer: "تحتوي المرآة على لوحة تسخين خلفية تمنع تكثف البخار عليها بعد الاستحمام." },
            { question: "كيف تحصل على معلومات الطقس والأخبار؟", answer: "تتصل بشبكة الواي فاي في منزلك لجلب المعلومات المحدثة من الإنترنت." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل الليزر آمن لعيون حيواني الأليف؟", answer: "نعم، يستخدم ليزرًا من الفئة الثانية وهو آمن، ولكن يجب دائمًا تجنب توجيهه مباشرة إلى عيون الإنسان أو الحيوان." },
            { question: "هل يمكن أن تعمل تلقائيًا عندما أكون خارج المنزل؟", answer: "نعم، يمكنك ضبطها لتعمل تلقائيًا لمدة 15 دقيقة كل بضع ساعات لإبقاء حيوانك الأليف نشيطًا." },
        ]
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
        category: categories.home.slug,
        faq: [
            { question: "كيف أستخدمه؟", answer: "ببساطة، قم بربط الحزام بمقبض حقيبتك وارفعها عن الأرض. ستظهر القراءة على الشاشة." },
            { question: "هل هو دقيق؟", answer: "نعم، يوفر قياسات دقيقة لمساعدتك على تجنب رسوم الوزن الزائد." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما فائدة اتصال الواي فاي؟", answer: "يسمح لك ببدء الطهي ومراقبته والتحكم فيه من أي مكان، حتى عندما تكون خارج المنزل." },
            { question: "هل أحتاج إلى وعاء خاص؟", answer: "لا، يمكنك تثبيته على جانب أي وعاء أو قدر كبير بما يكفي." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل يعمل مع مفاتيح الإضاءة؟", answer: "نعم، يأتي مع ملحق لاصق صغير يمكنك استخدامه لسحب أو دفع مفاتيح الإضاءة." },
            { question: "هل أحتاج إلى hub؟", answer: "للتحكم عبر البلوتوث من مسافة قريبة، لا تحتاج إلى hub. للتحكم عن بعد عبر الإنترنت أو بالأوامر الصوتية، ستحتاج إلى Hub خاص بالشركة." },
        ]
    },
    {
        id: 'cordless-stick-vacuum-csv1',
        name: 'مكنسة كهربائية لاسلكية عمودية',
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "هل هي مناسبة لشعر الحيوانات الأليفة؟", answer: "نعم، الشفط القوي والفرشاة الدوارة يجعلانها فعالة في التقاط شعر الحيوانات الأليفة من السجاد والأرضيات." },
            { question: "هل البطارية قابلة للاستبدال؟", answer: "نعم، البطارية قابلة للفصل، مما يسمح لك بشحنها بشكل منفصل أو استبدالها ببطارية إضافية." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ماذا يحدث إذا انقطع التيار الكهربائي؟", answer: "يحتوي على بطارية احتياطية مدمجة تبقيه ملتصقًا بالنافذة لمدة 20 دقيقة وتطلق إنذارًا." },
            { question: "هل ينظف الحواف والزوايا جيدًا؟", answer: "ينظف معظم السطح بكفاءة، لكن الزوايا قد تحتاج إلى مسح يدوي بسيط." },
        ]
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
        category: categories.home.slug,
        faq: [
            { question: "كيف يعمل تلقائيًا؟", answer: "يحتوي على مستشعر اهتزاز يكتشف متى تكون السيارة قيد التشغيل، ويتوقف تلقائيًا بعد فترة وجيزة من توقف السيارة." },
            { question: "هل يمكنني استخدام أي زيوت عطرية؟", answer: "يوصى باستخدام عبوات العطر الخاصة بالشركة المصنعة لضمان أفضل أداء." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "ما فائدة التسخين بالحث؟", answer: "يوفر تسخينًا سريعًا ومتساويًا للوعاء بأكمله، مما ينتج عنه أرز مطبوخ بشكل مثالي." },
            { question: "هل يمكنها طهي أشياء أخرى غير الأرز؟", answer: "نعم، يمكن استخدامها لطهي الحساء، والعصيدة، وحتى الكعك باستخدام الإعدادات المناسبة في التطبيق." },
        ]
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
        category: categories.home.slug,
        warranty: 'عام واحد',
        faq: [
            { question: "لماذا أحتاج إلى درجات حرارة مختلفة؟", answer: "أنواع الشاي المختلفة (الأخضر، الأسود، الأبيض) والقهوة تتطلب درجات حرارة مختلفة لاستخلاص أفضل نكهة دون حرقها." },
            { question: "هل هي آمنة للمس من الخارج؟", answer: "الجدران مزدوجة ومعزولة، مما يجعلها باردة الملمس من الخارج." },
        ]
    }
];


export const products: Product[] = [
    ...electronicsProducts,
    ...miscProducts,
    ...healthProducts,
    ...homeProducts
].filter((product, index, self) =>
    index === self.findIndex((p) => (
        p.id === product.id
    ))
);

    

    