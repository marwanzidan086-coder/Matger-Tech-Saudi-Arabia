import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-42',
  name: 'باور بنك بسعة كبيرة 100 ألف مللي أمبير',
  slug: '100000mah-power-bank',
  story: `هل أنت مستعد لمواجهة أي شيء؟ هذا الباور بانك ليس مجرد بطارية، بل هو وحش طاقة 👹! بسعة 100 ألف مللي أمبير، يمكنك أن تشحن كل أجهزتك، أجهزة أصدقائك، وربما أجهزة جيرانك أيضًا. إنه القوة المطلقة في راحة يدك، لرحلات لا تنتهي وطاقة لا تنفد. 💪`,
  description: `بنك طاقة عملاق بسعة 100,000 مللي أمبير، مصمم ليكون محطة شحن متنقلة لجميع أجهزتك، مثالي للرحلات الطويلة والطوارئ.
###FEATURES###
- سعة ضخمة 100000mAh تكفي لشحن جوالك أكثر من 20 مرة.
- يدعم الشحن السريع بقوة 22.5 واط.
- يأتي مع كابلات مدمجة (USB وType-C).
- يحتوي على 4 مخارج لشحن عدة أجهزة في وقت واحد.
- مؤشر LED ذكي يوضح مستوى البطارية المتبقي.
###DETAILS###
- السعة: 100,000mAh
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
