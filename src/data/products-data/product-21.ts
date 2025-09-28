import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-21',
  name: 'تابلت A20',
  slug: 'a20-tablet',
  description: `تجربة رقمية متكاملة في جهاز واحد! تابلت A20 بشاشته الكبيرة وأدائه السريع هو رفيقك المثالي للعمل، الدراسة، والترفيه. يأتي مع مجموعة هدايا قيمة.###FEATURES###- شاشة 7 بوصة عالية الدقة.
- مساحة 256 جيجابايت و 6 جيجا رام.
- نظام تشغيل أندرويد 12.
- بطارية 5000 مللي أمبير.
- كاميرا أمامية 8.0MP وخلفية 13.0MP.###DETAILS###- الاتصال: 5G/SIM/WIFI
- الشاشة: 7 بوصة IPS LCD
- الذاكرة: 256GB + 6GB RAM
- نظام التشغيل: اندرويد 12
- البطارية: 5000 مللي أمبير`,
  price: 499.99,
  category: 'electronics',
  warranty: '6 أشهر',
};

export default product;
