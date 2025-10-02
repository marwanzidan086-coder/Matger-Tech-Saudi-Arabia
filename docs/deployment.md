
# دليل نشر التطبيق على Vercel (خطوة بخطوة)

هذا الدليل سيساعدك لنشر تطبيق Next.js الخاص بك على منصة Vercel، وهي أفضل منصة موصى بها من قبل مطوري Next.js.

## المتطلبات الأساسية

1.  **حساب GitHub:** ستحتاج إلى حساب على [GitHub](https://github.com) لوضع كود المشروع عليه. **تأكد من أنك ستستخدم نفس الحساب في كل الخطوات**.
2.  **حساب Vercel:** ستحتاج إلى حساب على [Vercel](https://vercel.com). يمكنك التسجيل بسهولة باستخدام حساب GitHub الخاص بك.
3.  **تثبيت Git:** تأكد من أن لديك Git مثبتًا على جهازك.

---

## الخطوة الأولى: رفع الكود إلى GitHub

هذه هي الخطوة الأهم لربط مشروعك بمنصة النشر. Vercel سيقوم بسحب الكود من مستودعك على GitHub.

### 1. إنشاء مستودع جديد (New Repository)

*   اذهب إلى حسابك على [GitHub](https://github.com).
*   اضغط على علامة `+` في الزاوية العلوية اليمنى واختر **"New repository"**.
*   **أعطِ المستودع اسمًا باللغة الإنجليزية** (مثلاً: `matger-tech-app`).
*   اجعله "Public" أو "Private" حسب رغبتك.
*   اضغط على **"Create repository"**.

![Create Repo](https://i.ibb.co/V9ZpBwz/github-create-repo.png)

### 2. ربط مشروعك المحلي ورفع الكود

*   بعد إنشاء المستودع، سينقلك GitHub إلى صفحة تحتوي على بعض الأوامر. انسخ رابط المستودع من هذه الصفحة (الذي ينتهي بـ `.git`).

![Copy Repo URL](https://i.ibb.co/C05w07h/github-copy-url.png)

*   الآن، افتح الـ Terminal (أو Command Prompt) في مجلد مشروعك على جهازك.
*   قم بتنفيذ الأوامر التالية **بالترتيب**، مع استبدال `[URL]` برابط المستودع الذي نسخته:

    ```bash
    git init
    git add .
    git commit -m "Initial commit: Preparing for deployment"
    git branch -M main
    git remote add origin [URL]
    git push -u origin main
    ```

**ملاحظة مهمة:** إذا واجهت خطأ `Permission denied`، فهذا يعني أن حساب GitHub الذي تستخدمه في الـ Terminal يختلف عن الحساب الذي يملك المستودع. تأكد من أنك أنشأت المستودع من نفس الحساب الذي تستخدمه على جهازك.

---

## الخطوة الثانية: استيراد المشروع إلى Vercel

1.  **إضافة مشروع جديد:**
    *   اذهب إلى لوحة تحكم Vercel الخاصة بك ([Vercel Dashboard](https://vercel.com/dashboard)).
    *   اضغط على زر **"Add New..."** واختر **"Project"**.

2.  **استيراد مستودع Git:**
    *   سيتم توجيهك إلى صفحة "Import Git Repository".
    *   ابحث عن اسم المستودع الذي أنشأته على GitHub (`matger-tech-app`) وقم باختياره بالضغط على زر **"Import"**.

3.  **إعداد المشروع:**
    *   Vercel سيقوم تلقائيًا باكتشاف أن مشروعك هو Next.js وسيقوم بتعيين الإعدادات الصحيحة. لا تحتاج عادةً إلى تغيير أي شيء هنا.

---

## الخطوة الثالثة: إضافة متغيرات البيئة (Environment Variables)

هذه هي أهم خطوة لضمان عمل جميع الميزات مثل (الطلبات عبر واتساب، ميزات الذكاء الاصطناعي، والاتصال بـ Firebase).

1.  **الوصول إلى الإعدادات:**
    *   في صفحة إعداد مشروعك على Vercel، افتح تبويب **"Settings"**.
    *   من القائمة الجانبية، اختر **"Environment Variables"**.

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

---

## الخطوة الرابعة: النشر (Deploy)

1.  بعد إضافة جميع متغيرات البيئة، ارجع إلى صفحة الإعداد الرئيسية للمشروع واضغط على زر **"Deploy"**.
2.  سيبدأ Vercel عملية بناء ونشر تطبيقك. يمكنك متابعة التقدم مباشرة.
3.  بعد بضع دقائق، سيتم نشر موقعك بنجاح وستحصل على رابط لموقعك المباشر على الإنترنت!

🎉 **تهانينا! موقعك الآن مباشر على الإنترنت.**

## التحديثات المستقبلية

من الآن فصاعدًا، كلما قمت بعمل `git push` لفرع `main` على GitHub، سيقوم Vercel تلقائيًا بإعادة نشر التحديثات الجديدة لموقعك.
