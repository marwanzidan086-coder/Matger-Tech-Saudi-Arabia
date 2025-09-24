import { type Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImages = (productId: string): string[] => {
  const imageSet = PlaceHolderImages.find(img => img.id === productId);
  if (imageSet && imageSet.images.length > 0) {
    return imageSet.images;
  }
  // Fallback to a generic set of 5 images if not found
  return Array.from({length: 5}, (_, i) => `https://picsum.photos/seed/${productId}-${i + 1}/600/600`);
};

export const products: Product[] = [
  {
    id: '1',
    name: 'كوب قهوة ذكي',
    slug: 'smart-coffee-mug',
    description: 'كوب قهوة ذكي يحافظ على درجة حرارة مشروبك. يتم التحكم فيه عبر تطبيق الهاتف الذكي ويتضمن بطارية تدوم طويلاً وشحن لاسلكي سريع.',
    price: 399.99,
    images: getImages('smart-coffee-mug'),
  },
  {
    id: '2',
    name: 'سماعات لاسلكية عازلة للضوضاء',
    slug: 'wireless-headphones',
    description: 'سماعات رأس لاسلكية عالية الدقة مع إلغاء نشط للضوضاء. تتميز بصوت نقي، اتصال Bluetooth 5.2، وبطارية تعمل لمدة 30 ساعة.',
    price: 899.50,
    images: getImages('wireless-headphones'),
  },
  {
    id: '3',
    name: 'شاحن متنقل (باور بانك)',
    slug: 'portable-power-bank',
    description: 'شاحن متنقل صغير وقوي لجميع أجهزتك. سعة 20000 مللي أمبير، ويدعم الشحن السريع PD بقوة 25 واط.',
    price: 250.00,
    images: getImages('portable-power-bank'),
  },
  {
    id: '4',
    name: 'لوحة مفاتيح ميكانيكية مريحة',
    slug: 'ergonomic-keyboard',
    description: 'لوحة مفاتيح ميكانيكية بتصميم مريح لتقليل إجهاد اليدين. إضاءة خلفية RGB قابلة للتخصيص واتصال سلكي ولاسلكي عبر Bluetooth.',
    price: 650.00,
    images: getImages('ergonomic-keyboard'),
  },
  {
    id: '5',
    name: 'ساعة ذكية رياضية',
    slug: 'smart-watch',
    description: 'ساعة ذكية غنية بالميزات مع تتبع دقيق للياقة البدنية ومعدل ضربات القلب. مقاومة للماء بمعيار 5ATM وبطارية ممتازة.',
    price: 1200.00,
    images: getImages('smart-watch'),
  },
  {
    id: '6',
    name: 'كاميرا ويب 4K',
    slug: '4k-webcam',
    description: 'كاميرا ويب بدقة 4K فائقة الوضوح لمكالمات الفيديو الاحترافية. تتميز بتركيز تلقائي وميكروفون مزدوج لتقليل الضوضاء.',
    price: 550.00,
    images: getImages('4k-webcam'),
  },
];
