/* Offline meanings for the English interview vocabulary not covered by the core glossary. */
window.OFFLINE_GLOSSARY = new Map(`
10|عشرة
2020|عام 2020
2022|عام 2022
2025|عام 2025
2026|عام 2026
28|ثمانية وعشرون
ability|قدرة
academy|أكاديمية
accident|حادث
administrative|إداري
advance|مسبقًا
advice|نصيحة
affect|يؤثر
affected|متأثر
agreed|متفق عليه
al|آل
allow|يسمح
allowing|السماح
already|بالفعل
am|أكون
and|و
another|آخر
any|أي
anything|أي شيء
approach|نهج
area|مجال
arranging|تنظيم
assessment|تقييم
at|في
attitude|سلوك
available|متاح
be|يكون
been|كان
began|بدأ
believe|يعتقد
beyond|خارج
biden's|لـبايدن
british|بريطاني
busy|مزدحم
by|بواسطة
cairo|القاهرة
came|أتى
carried|نفّذ
carrying|ينقل
cause|يسبب
channel|قناة
clean|نظيف
come|يأتي
commitment|التزام
completing|إتمام
conditions|ظروف
consistent|متسق
cooperate|يتعاون
coordinated|نسّق
correct|صحيح
created|أنشأ
deal|يتعامل
decide|يقرر
depends|يعتمد
detail|تفصيل
details|تفاصيل
developed|طوّر
d|حرف D
difficult|صعب
distance|مسافة
distances|مسافات
early|مبكر
egypt|مصر
el|الـ
else|غير ذلك
ensure|يضمن
essential|أساسي
everything|كل شيء
extensive|واسع
extra|إضافي
feel|يشعر
few|قليل
first-degree|درجة أولى
focus|يركّز
focusing|التركيز
follow-up|متابعة
for|لـ
formality|إجراء شكلي
gained|اكتسب
give|يعطي
good|جيد
greatest|أبرز
handling|التعامل مع
heavily|بشدة
help|يساعد
helped|ساعد
hours|ساعات
i|أنا
identify|يحدد
if|إذا
ignoring|تجاهل
importance|أهمية
important|مهم
in|في
included|شمل
includes|يشمل
inside|داخل
instructed|وجّه
it|هو / هي
jazeera|الجزيرة
knowledge|معرفة
last|آخر
late|متأخر
leave|يغادر
likely|محتمل
line|خط
look|ينظر
made|قام
manage|يدير
manager|مدير
manager's|للمدير
matter|مسألة
may|قد
me|لي
mean|يعني
minute|دقيقة
minutes|دقائق
most|معظم
move|يتحرك
needed|مطلوب
needs|احتياجات
of|من
offer|يقدّم
offers|يقدّم
on|على
or|أو
organisation's|للمنظمة
organise|ينظّم
otherwise|خلاف ذلك
our|لنا
out|خارج
own|خاص
pay|يولي / يدفع
place|مكان
plans|خطط
position|منصب / وظيفة
problem|مشكلة
put|يضع
range|مجموعة
ready|جاهز
reason|سبب
receive|يتلقى
receiving|يتلقى
record|سجل
reducing|يخفّض
regular|منتظم
reinforced|عزّز
repairs|إصلاحات
reprioritise|يعيد ترتيب الأولويات
resolve|يحل
respect|يحترم
review|يراجع
rimo|ريمو
s|حرف S؛ وقد تدل على الملكية بالإنجليزية
safest|الأكثر أمانًا
save|يوفّر
say|يقول
scene|موقع
see|يرى
select|يختار
seriously|بجدية
settings|إعدادات
simply|ببساطة
something|شيء ما
sometimes|أحيانًا
soon|قريبًا
source|مصدر
spend|يقضي
states|الولايات
stop|يتوقف
strong|قوي
success|نجاح
such|مثل
suitable|مناسب
supervising|يشرف على
supervision|إشراف
sure|متأكد
take|يأخذ
taking|أخذ / يتولى
target|هدف
task|مهمة
then|ثم
there|هناك
they|هم
thoroughness|الدقة والشمول
through|من خلال
throughout|طوال
time|وقت
times|مرات
timings|مواعيد وتوقيتات
to|إلى
together|معًا
transportation|النقل
treat|يتعامل مع
try|يحاول
types|أنواع
u|اختصار الولايات المتحدة
unclear|غير واضح
unless|إلا إذا
united|المتحدة
united states|الولايات المتحدة
unusual|غير معتاد
up|إلى / متابعة
us|لنا / نحن
use|يستخدم
using|باستخدام
usual|معتاد
vehicle-monitoring|متابعة المركبات
vehicle-specific|خاص بالمركبة
view|يرى
visible|ظاهر
wait|ينتظر
waiting|الانتظار
want|يرغب
way|طريقة
welcome|يرحّب
whether|سواء
windows|نوافذ
within|ضمن
work|عمل
worked|عمل
yes|نعم
yourself|نفسك
`.trim().split('\n').map(row => {
  const split = row.indexOf('|');
  return [row.slice(0, split).toLowerCase(), row.slice(split + 1)];
}));
