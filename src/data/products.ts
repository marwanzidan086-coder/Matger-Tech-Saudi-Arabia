import { type Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImages = (productId: string): string[] => {
  const imageSet = PlaceHolderImages.find(img => img.id === productId);
  if (imageSet && imageSet.images.length > 0) {
    return imageSet.images;
  }
  // Fallback to a generic set of 5 images using the correct productId if not found
  return Array.from({length: 5}, (_, i) => `https://picsum.photos/seed/${productId}-${i + 1}/600/600`);
};

export const products: Product[] = [
  {
    id: '1',
    name: 'كوب قهوة ذكي',
    slug: 'smart-coffee-mug',
    description: 'استمتع بمشروبك في درجة الحرارة المثالية من أول رشفة حتى آخر قطرة. هذا الكوب الذكي، المصنوع من الفولاذ المقاوم للصدأ والسيراميك، يتيح لك التحكم الدقيق في درجة حرارة قهوتك أو الشاي عبر تطبيق على هاتفك. ببطارية تدوم حتى 80 دقيقة وشحن لاسلكي سريع، هو الرفيق المثالي لكل محب للمشروبات الساخنة.',
    price: 399.99,
    images: getImages('smart-coffee-mug'),
  },
  {
    id: '2',
    name: 'سماعات لاسلكية عازلة للضوضاء',
    slug: 'wireless-headphones',
    description: 'ادخل إلى عالم من الصوت النقي وانعزل عن ضجيج العالم الخارجي. تتميز هذه السماعات بتقنية إلغاء الضوضاء النشطة (ANC) الرائدة، مع مشغلات صوت عالية الدقة تقدم تجربة استماع غامرة. تصميم مريح فوق الأذن، واتصال Bluetooth 5.2 مستقر، وبطارية مذهلة تعمل لمدة 30 ساعة متواصلة.',
    price: 899.50,
    images: getImages('wireless-headphones'),
  },
  {
    id: '3',
    name: 'شاحن متنقل (باور بانك)',
    slug: 'portable-power-bank',
    description: 'لا تدع بطارية هاتفك تنفد مرة أخرى. هذا الشاحن المتنقل بسعة 20000 مللي أمبير هو الحل الأمثل للطاقة أثناء التنقل. صغير بما يكفي ليناسب جيبك، ولكنه قوي بما يكفي لشحن أحدث الهواتف الذكية عدة مرات. يدعم تقنية الشحن السريع Power Delivery بقوة 25 واط لإعادة شحن أجهزتك في وقت قياسي.',
    price: 250.00,
    images: getImages('portable-power-bank'),
  },
  {
    id: '4',
    name: 'لوحة مفاتيح ميكانيكية مريحة',
    slug: 'ergonomic-keyboard',
    description: 'اكتشف متعة الكتابة واللعب مع لوحة المفاتيح الميكانيكية ذات التصميم المريح. مصممة لتقليل إجهاد معصميك ويديك أثناء الاستخدام الطويل. تتميز بمفاتيح ميكانيكية سريعة الاستجابة، وإضاءة خلفية RGB قابلة للتخصيص بالكامل، مع إمكانية الاتصال السلكي أو اللاسلكي عبر Bluetooth.',
    price: 650.00,
    images: getImages('ergonomic-keyboard'),
  },
  {
    id: '5',
    name: 'ساعة ذكية رياضية',
    slug: 'smart-watch',
    description: 'رفيقك المثالي للصحة واللياقة البدنية. تتبع خطواتك، ومعدل ضربات قلبك، وأنماط نومك، وأكثر من 100 تمرين رياضي مختلف بدقة عالية. بشاشة AMOLED ساطعة، وهيكل متين مقاوم للماء بمعيار 5ATM، ونظام GPS مدمج، وبطارية تدوم لأكثر من 10 أيام في الشحنة الواحدة.',
    price: 1200.00,
    images: getImages('smart-watch'),
  },
  {
    id: '6',
    name: 'كاميرا ويب 4K',
    slug: '4k-webcam',
    description: 'ارتقِ بمكالمات الفيديو والبث المباشر إلى مستوى احترافي. توفر كاميرا الويب هذه جودة صورة فائقة الوضوح بدقة 4K مع ألوان واقعية وتفاصيل دقيقة. تتميز بتركيز تلقائي ذكي، وميكروفونات مزدوجة ستيريو لتقليل الضوضاء المحيطة، وغطاء خصوصية مدمج لراحة بالك.',
    price: 550.00,
    images: getImages('4k-webcam'),
  },
];
