import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-2',
  name: 'كشاف دينكس الأكبر حجما',
  slug: 'denx-large-solar-spotlight',
  story: `تخيل أن تمتلك قطعة من الشمس في حديقتك ☀️. كشاف دينكس ليس مجرد ضوء، بل هو حارس ليلي يستمد قوته من النهار لينير عتمة الليل. ببطاريته العملاقة وحساسه الذكي، يستشعر وجودك ليضيء طريقك 🚶‍♂️، ويحمي منزلك، ويحول مساحتك الخارجية إلى واحة من الأمان والجمال دون أن يكلفك ريالًا واحدًا على فاتورة الكهرباء.`,
  description: `ودّع فواتير الكهرباء المرتفعة وأنر مساحاتك الخارجية بقوة الشمس! كشاف دينكس هو الحل الأمثل لإضاءة الحدائق، الممرات، والمزارع بكفاءة واعتمادية.###FEATURES###- إضاءة قوية بفضل لمبات LED 5730 الموفرة.
- يشتغل بالطاقة الشمسية بدون كهرباء أو أسلاك.
- بطارية 25000mAh تدوم حتى 16 ساعة.
- يدعم التحكم بالريموت عن بعد بكل سهولة.
- فيه حساس رادار يشتغل أوتوماتيكي مع الحركة.
- مقاوم للمطر والغبار بمعيار حماية IP67.###DETAILS###- الماركة: دينيكس
- نوع اللمبات: LED 5730
- سعة البطارية: 25000mAh ليثيوم
- معيار الحماية: IP67 ضد الماء والغبار`,
  price: 249.99,
  images: [
    "https://i.ibb.co/r2rr2C8W/image-1.jpg",
    "https://i.ibb.co/6c4876VS/image-2.jpg",
    "https://i.ibb.co/tTznjckD/image-3.jpg",
    "https://i.ibb.co/x4D3kGC/image-4.jpg",
    "https://i.ibb.co/JRN3gw3d/image-5.jpg",
    "https://i.ibb.co/VcgWrf49/image-6.jpg"
  ],
  category: 'electronics',
  warranty: 'عامين',
  model3d: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Streetlight/glTF-Binary/Streetlight.glb'
};

export default product;
