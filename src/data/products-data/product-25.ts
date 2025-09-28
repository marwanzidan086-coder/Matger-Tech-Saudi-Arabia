import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-25',
  name: 'Note 15 مزود ب كيبورد',
  slug: 'note-15-with-keyboard',
  description: `أداء خارق وسرعة فائقة في جهاز واحد! تابلت Note 15 مع الكيبورد المتطور يقدم لك تجربة كتابة وعمل سلسة، بفضل معالجه القوي وذاكرته الضخمة.###FEATURES###- شاشة 8 بوصة عالية الدقة.
- معالج رباعي النواة.
- ذاكرة 16 جيجا رام و 512 جيجا بايت تخزين.
- يدعم 5G، واي فاي، وبلوتوث.
- بطارية 5000 مللي أمبير.###DETAILS###- الشاشة: 8 بوصة
- الذاكرة: 16GB RAM + 512GB ROM
- الكاميرا: 13.0MP أمامية + 13.0MP خلفية
- نظام التشغيل: أندرويد
- البطارية: 5000 مللي أمبير`,
  price: 749.99,
  category: 'electronics',
};

export default product;
