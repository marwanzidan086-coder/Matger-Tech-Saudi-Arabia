
# دليل نشر التطبيق على Vercel

هذا الدليل سيساعدك خطوة بخطوة لنشر تطبيق Next.js الخاص بك على منصة Vercel، وهي أفضل منصة موصى بها من قبل مطوري Next.js.

## المتطلبات الأساسية

1.  **حساب GitHub:** ستحتاج إلى حساب على [GitHub](https://github.com) لوضع كود المشروع عليه.
2.  **حساب Vercel:** ستحتاج إلى حساب على [Vercel](https://vercel.com). يمكنك التسجيل بسهولة باستخدام حساب GitHub الخاص بك.
3.  **تثبيت Git:** تأكد من أن لديك Git مثبتًا على جهازك.

## الخطوة الأولى: رفع الكود إلى GitHub

1.  **إنشاء مستودع جديد (New Repository) على GitHub:**
    *   اذهب إلى حسابك على GitHub.
    *   اضغط على علامة `+` في الزاوية العلوية اليمنى واختر "New repository".
    *   أعطِ المستودع اسمًا (مثلاً `matger-tech-app`) واجعله "Public" أو "Private" حسب رغبتك.
    *   اضغط على "Create repository".

2.  **ربط مشروعك المحلي ورفع الكود:**
    *   افتح الـ Terminal أو Command Prompt في مجلد مشروعك.
    *   قم بتنفيذ الأوامر التالية بالترتيب، مع استبدال `[URL]` برابط المستودع الذي أنشأته على GitHub:

    ```bash
    git init
    git add .
    git commit -m "Initial commit: Preparing for deployment"
    git branch -M main
    git remote add origin [URL]
    git push -u origin main
    ```

الآن، أصبح كود مشروعك موجودًا على GitHub وجاهزًا للنشر.

## الخطوة الثانية: استيراد المشروع إلى Vercel

1.  **إضافة مشروع جديد:**
    *   اذهب إلى لوحة تحكم Vercel الخاصة بك ([Vercel Dashboard](https://vercel.com/dashboard)).
    *   اضغط على زر "Add New..." واختر "Project".

2.  **استيراد مستودع Git:**
    *   سيتم توجيهك إلى صفحة "Import Git Repository".
    *   ابحث عن اسم المستودع الذي أنشأته على GitHub (`matger-tech-app`) وقم باختياره بالضغط على زر "Import".

3.  **إعداد المشروع:**
    *   Vercel سيقوم تلقائيًا باكتشاف أن مشروعك هو Next.js وسيقوم بتعيين الإعدادات الصحيحة. لا تحتاج عادةً إلى تغيير أي شيء هنا.

## الخطوة الثالثة: إضافة متغيرات البيئة (Environment Variables)

هذه هي أهم خطوة لضمان عمل جميع الميزات مثل (الطلبات عبر واتساب، ميزات الذكاء الاصطناعي، والاتصال بـ Firebase).

1.  **الوصول إلى الإعدادات:**
    *   في صفحة إعداد مشروعك على Vercel، افتح تبويب "Settings".
    *   من القائمة الجانبية، اختر "Environment Variables".

2.  **إضافة المتغيرات:**
    *   ستحتاج إلى إضافة جميع المتغيرات الموجودة في ملف `.env` المحلي. لكل متغير، قم بنسخ الاسم (Key) والقيمة (Value) وأضفهما.

    **المتغيرات المطلوبة:**
    *   `NEXT_PUBLIC_FIREBASE_API_KEY`
    *   `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
    *   `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
    *   `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
    *   `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
    *   `NEXT_PUBLIC_FIREBASE_APP_ID`
    *   `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
    *   `TWILIO_ACCOUNT_SID`
    *   `TWILIO_AUTH_TOKEN`
    *   `TWILIO_PHONE_NUMBER`
    *   `GEMINI_API_KEY` (مهم جدًا لتشغيل ميزات الذكاء الاصطناعي)

    **تأكد من نسخ القيم بدقة كما هي من ملف `.env` المحلي أو من حساباتك في Firebase و Twilio و Google AI Studio.**

## الخطوة الرابعة: النشر (Deploy)

1.  بعد إضافة جميع متغيرات البيئة، ارجع إلى صفحة الإعداد الرئيسية للمشروع واضغط على زر **"Deploy"**.
2.  سيبدأ Vercel عملية بناء ونشر تطبيقك. يمكنك متابعة التقدم مباشرة.
3.  بعد بضع دقائق، سيتم نشر موقعك بنجاح وستحصل على رابط لموقعك المباشر على الإنترنت!

🎉 **تهانينا! موقعك الآن مباشر على الإنترنت.**

## التحديثات المستقبلية

من الآن فصاعدًا، كلما قمت بعمل `git push` لفرع `main` على GitHub، سيقوم Vercel تلقائيًا بإعادة نشر التحديثات الجديدة لموقعك.
