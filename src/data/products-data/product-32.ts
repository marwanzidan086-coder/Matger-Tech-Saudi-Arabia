import { type Product } from '@/lib/types';

const product: Product = {
  id: 'product-32',
  name: 'كاميرا على شكل لمبة',
  slug: 'light-bulb-camera',
  description: `أمان وذكاء في تصميم مبتكر! هذه الكاميرا الخفية على شكل لمبة تمنحك مراقبة شاملة لمنزلك أو مكتبك بدقة عالية ورؤية 360 درجة، كل ذلك مع سهولة تركيب لا مثيل لها.###FEATURES###- تصوير بجودة عالية 1080p HD.
- تركيب سهل مثل أي لمبة عادية.
- تغطية 360 درجة ورؤية بانورامية.
- تدعم الرؤية الليلية والتسجيل عند الحركة.
- إمكانية التحكم والمشاهدة عبر تطبيق بالجوال.###DETAILS###- الدقة: 1080p (فل اتش دي)
- الاتصال: واي فاي
- الرؤية الليلية: تصل إلى 10 أمتار
- زاوية الحركة: 355° أفقي، 90° عمودي`,
  price: 149.99,
  images: [
    "https://i.ibb.co/wN8CZBQ0/image-1.jpg",
    "https://i.ibb.co/9JFqJb8/image-2.jpg",
    "https://i.ibb.co/YFd1kyBC/image-3.jpg",
    "https://i.ibb.co/ksd37Vms/image-4.jpg",
    "https://i.ibb.co/1GgW2DZW/image-5.jpg"
  ],
  category: 'home',
  warranty: '14 يوم',
};

export default product;
