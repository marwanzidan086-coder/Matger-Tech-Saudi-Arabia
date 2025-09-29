import { type Product } from '@/lib/types';

const product: Omit<Product, 'images'> = {
  id: 'product-151',
  name: 'عرض الخلاط والمفرمة ومكيف الحائط',
  slug: 'blender-chopper-ac-bundle',
  description: `عرض متكامل للمنزل. خلاط ألماني قوي 4500 واط، مفرمة لحوم 3 لتر، ومكيف حائط ودفاية 3 في 1 من DLC بقوة 2000 واط مع ريموت كنترول.###FEATURES###- مكيف حائط ودفاية ومجفف 3 في 1 (2000 واط).
- خلاط Silver Crest بقوة 4500 واط مع مطحنة.
- مفرمة لحوم ستانلس ستيل 3 لتر بقوة 300 واط.
- جميع الأجهزة بضمانات متعددة.###DETAILS###- المكيف: DLC, 2000W, بارد وحار, ريموت
- الخلاط: Silver Crest, 4500W, 15 سرعة
- المفرمة: Generic, 3 لتر, 300W`,
  price: 350.00,
  category: 'home',
  warranty: 'متعدد',
};

export default product;
