import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-42',
  name: 'باور بانك بسعة كبيرة 100 ألف مللي أمبير',
  slug: '100000mah-power-bank',
  story: `هل أنت مستعد لمواجهة أي شيء؟ هذا الباور بانك ليس مجرد بطارية، بل هو وحش طاقة 👹! بسعة 100 ألف مللي أمبير، يمكنك أن تشحن كل أجهزتك، أجهزة أصدقائك، وربما أجهزة جيرانك أيضًا. إنه القوة المطلقة في راحة يدك، لرحلات لا تنتهي وطاقة لا تنفد. 💪`,
  description: `سعة ضخمة 100000mAh تكفي لأيام. شحن سريع 22.5 واط. كابلات مدمجة USB وType-C. 4 مخارج لشحن أكثر من جهاز. مؤشر LED يوضح مستوى البطارية.###DETAILS###- السعة: 100,000mAh
- الطاقة الخارجة: 22.5W
- الكابلات: USB وType-C مدمجة`,
  price: 250,
  images: [
    "https://i.ibb.co/prnsBRQk/image-1.jpg",
    "https://i.ibb.co/t98Yvw5/image-2.jpg",
    "https://i.ibb.co/20vyRsTP/image-3.jpg",
    "https://i.ibb.co/sp2SrV1m/image-4.jpg"
  ],
  category: 'electronics',
  warranty: 'سنتين',
};

export default product;
