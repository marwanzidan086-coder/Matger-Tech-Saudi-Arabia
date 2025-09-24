import { type Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImages = (id: string, count: number): string[] => {
  const imageUrl = PlaceHolderImages.find(img => img.id === id)?.imageUrl;
  if (!imageUrl) {
    return Array(count).fill('https://picsum.photos/seed/placeholder/600/600');
  }
  const url = new URL(imageUrl);
  const seed = url.pathname.split('/')[2];
  
  return Array.from({length: count}, (_, i) => {
    const newUrl = new URL(imageUrl);
    newUrl.pathname = `/seed/${seed}${i + 1}/600/600`;
    return newUrl.toString();
  });
};

export const products: Product[] = [
  {
    id: '1',
    name: 'كوب قهوة ذكي',
    slug: 'smart-coffee-mug',
    description: 'كوب قهوة ذكي يحافظ على درجة حرارة مشروبك. يتم التحكم فيه عبر تطبيق الهاتف الذكي ويتضمن بطارية تدوم طويلاً وشحن لاسلكي سريع.',
    price: 399.99,
    images: getImages('smart-coffee-mug', 5),
  },
  {
    id: '2',
    name: 'سماعات لاسلكية عازلة للضوضاء',
    slug: 'wireless-headphones',
    description: 'سماعات رأس لاسلكية عالية الدقة مع إلغاء نشط للضوضاء. تتميز بصوت نقي، اتصال Bluetooth 5.2، وبطارية تعمل لمدة 30 ساعة.',
    price: 899.50,
    images: getImages('wireless-headphones', 5),
  },
  {
    id: '3',
    name: 'شاحن متنقل (باور بانك)',
    slug: 'portable-power-bank',
    description: 'شاحن متنقل صغير وقوي لجميع أجهزتك. سعة 20000 مللي أمبير، ويدعم الشحن السريع PD بقوة 25 واط.',
    price: 250.00,
    images: getImages('portable-power-bank', 5),
  },
  {
    id: '4',
    name: 'لوحة مفاتيح ميكانيكية مريحة',
    slug: 'ergonomic-keyboard',
    description: 'لوحة مفاتيح ميكانيكية بتصميم مريح لتقليل إجهاد اليدين. إضاءة خلفية RGB قابلة للتخصيص واتصال سلكي ولاسلكي عبر Bluetooth.',
    price: 650.00,
    images: getImages('ergonomic-keyboard', 5),
  },
  {
    id: '5',
    name: 'ساعة ذكية رياضية',
    slug: 'smart-watch',
    description: 'ساعة ذكية غنية بالميزات مع تتبع دقيق للياقة البدنية ومعدل ضربات القلب. مقاومة للماء بمعيار 5ATM وبطارية ممتازة.',
    price: 1200.00,
    images: getImages('smart-watch', 5),
  },
  {
    id: '6',
    name: 'كاميرا ويب 4K',
    slug: '4k-webcam',
    description: 'كاميرا ويب بدقة 4K فائقة الوضوح لمكالمات الفيديو الاحترافية. تتميز بتركيز تلقائي وميكروفون مزدوج لتقليل الضوضاء.',
    price: 550.00,
    images: getImages('4k-webcam', 5),
  },
];
