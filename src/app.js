(() => {
  'use strict';
  const categories = window.INTERVIEW_CATEGORIES || [];
  const questions = window.INTERVIEW_QUESTIONS || [];
  const $ = (selector, root = document) => root.querySelector(selector);
  const els = {
    categoryNav: $('#categoryNav'), questionList: $('#questionList'), detail: $('#questionDetail'), search: $('#searchInput'),
    activeLabel: $('#activeCategoryLabel'), count: $('#visibleCount'), total: $('#questionCount'), empty: $('#emptyState'),
    progressLabel: $('#progressLabel'), progressBar: $('#progressBar'), onlyNew: $('#unansweredFilter'),
    speechVolume: $('#speechVolume'), speechVolumeLabel: $('#speechVolumeLabel'),
    ambientVolume: $('#ambientVolume'), ambientVolumeLabel: $('#ambientVolumeLabel'), ambientToggle: $('#ambientToggle'),
    dock: $('#soundDock'), dockToggle: $('#dockToggle'), toast: $('#toast'), popover: $('#wordPopover'),
    popWord: $('#popoverWord'), popMeaning: $('#popoverMeaning'), popPronunciation: $('#popoverPronunciation'),
    voiceSampleSelect: $('#voiceSampleSelect'), voiceSamplePlay: $('#voiceSamplePlay')
  };
  const STORAGE_DONE = 'mihwar-driver-done-v1';
  let done = new Set();
  let selectedCategory = 'all';
  let selectedId = questions[0]?.id || '';
  let currentSpeaking = null;
  let toastTimer = 0;
  let voiceOptions = [];
  let ambient = null;
  let currentAudio = null;
  let audioToken = 0;
  let wordAudioContext = null;
  let currentWordSource = null;
  let currentWordGain = null;
  let currentWordKey = '';
  let currentWordElement = null;
  const wordAudioBuffers = new Map();
  let lastWord = '';
  let outsideClickHandler = null;
  try { done = new Set(JSON.parse(localStorage.getItem(STORAGE_DONE) || '[]')); } catch (_) { done = new Set(); }

  const dictionary = new Map(`
effective|فعّال
decision|قرار
decisions|قرارات
route|طريق / مسار
congested|مزدحم
appointment|موعد
arrive|يصل
arrival|الوصول
delay|تأخير
traffic|حركة المرور
assess|يقيّم
calmly|بهدوء
reliable|موثوق
information|معلومات
alternative|بديل
balance|توازن
safety|السلامة
safely|بأمان
shortest|الأقصر
inform|يُبلغ
estimated|تقديري
relevant|معنيّ
person|شخص
punctuality|الالتزام بالمواعيد
flexibility|المرونة
vehicle|مركبة
readiness|الجاهزية
responsibility|مسؤولية
daily|يومي
inspect|يفحص
inspection|فحص
tyre|إطار
tyres|إطارات
lights|أنوار
mirrors|مرايا
dashboard|لوحة العدادات
warning|تحذير
fuel|وقود
equipment|معدات
damage|ضرر
leak|تسرّب
defect|عيب
operation|تشغيل
report|يُبلغ / تقرير
supervisor|مشرف
procedure|إجراء
journey|رحلة
passenger|راكب
passengers|ركاب
delegation|وفد
official|رسمي
assignment|مهمة
schedule|جدول
unexpected|غير متوقع
change|تغيير
coordinate|ينسّق
coordination|تنسيق
prioritise|يرتّب الأولويات
priority|أولوية
focused|مركّز
compromise|يُعرّض للخطر
quality|جودة
service|خدمة
team|فريق
teamwork|العمل الجماعي
contribute|يساهم
staff|موظفون
colleague|زميل
respectful|محترم
professionally|باحترافية
professional|مهني
professionalism|احترافية
embassy|سفارة
diplomatic|دبلوماسي
environment|بيئة
experience|خبرة
licence|رخصة
license|رخصة
armoured|مصفّح
armored|مصفّح
confidentiality|السرية
confidential|سري
discretion|التحفظ المهني
discreet|كتوم / متحفظ
reliability|الاعتمادية
punctual|ملتزم بالمواعيد
strength|نقطة قوة
strengths|نقاط القوة
weakness|نقطة ضعف
development|تطوير
improve|يطوّر
efficiency|الكفاءة
award|جائزة
received|حصل على
recognition|تقدير
recommendation|توصية
letter|خطاب
restructuring|إعادة هيكلة
workforce|القوى العاملة
reduction|تخفيض
reductions|تخفيضات
disciplinary|تأديبي
performance|أداء
mechanical|ميكانيكي
breakdown|عطل
issue|مشكلة
secure|يؤمّن
location|موقع
assistance|مساعدة
technical|فني
replacement|بديل
authority|صلاحية
law|قانون
lawful|قانوني
pressure|ضغط
risk|خطر
authorised|مخوّل
authorized|مخوّل
movements|تحركات
movement|تحرك
photograph|صورة
photographs|صور
permission|إذن
policy|سياسة
policies|سياسات
instruction|تعليمات
instructions|تعليمات
incident|حادث
emergency|طوارئ
immediately|فورًا
legal|قانوني
assume|يفترض
assumption|افتراض
argue|يجادل
arguing|الجدال
concern|قلق / ملاحظة
appropriate|ملائم
management|الإدارة
support|دعم
remain|يبقى
fatigue|الإرهاق
tired|متعب
tiredness|التعب
sign|علامة
signs|علامات
break|استراحة
safe|آمن
unsafe|غير آمن
continue|يواصل
hide|يخفي
destination|وجهة
confirm|يتأكد
clarify|يوضح
clarification|استيضاح
access|وصول
guess|يخمّن
guessing|التخمين
authorisation|تصريح
authorization|تصريح
guidance|إرشاد
consultant|استشاري
score|درجة
criteria|معايير
criterion|معيار
monitoring|متابعة
monitor|يراقب
tracker|جهاز تتبع
tracking|تتبّع
maintenance|صيانة
operational|تشغيلي
observation|ملاحظة
observations|ملاحظات
system|نظام
systems|أنظمة
gps|نظام تحديد المواقع
visit|زيارة
visiting|زائر
president|رئيس
personal|شخصي
personally|شخصيًا
assigned|مكلّف به
accompanied|رافق
accompany|يرافق
sharm|شرم
sheikh|الشيخ
snow|ثلج
snowy|ثلجي
weather|طقس
stopping|التوقف
manoeuvre|مناورة
manoeuvres|مناورات
local|محلي
reduce|يخفّض
speed|سرعة
adjust|يكيّف
alert|منتبه
diverse|متنوع
background|خلفية
requirements|متطلبات
requirement|متطلب
expectation|توقع
expectations|توقعات
opportunity|فرصة
dependable|جدير بالاعتماد
manner|طريقة
central|أساسي
bring|يقدّم
operations|عمليات
connected|مرتبط
related|متعلق
outside|خارج
normal|اعتيادي
willing|مستعد
arrangement|ترتيب
arrangements|ترتيبات
disagreement|خلاف
shared|مشترك
escalate|يرفع الأمر
account|حساب
provide|يقدّم
clearly|بوضوح
communicate|يتواصل
communication|تواصل
excellent|ممتاز
english|اللغة الإنجليزية
question|سؤال
rephrase|يعيد الصياغة
repeat|يعيد
understand|يفهم
transport|نقل
car|سيارة
control|مراقبة
egyptian|مصري
january|يناير
august|أغسطس
april|أبريل
year|سنة
years|سنوات
month|شهر
months|أشهر
july|يوليو
september|سبتمبر
february|فبراير
day|يوم
ask|يسأل
panel|لجنة المقابلة
main|أساسي
responsibilities|مسؤوليات
role|دور / وظيفة
thank|يشكر
please|من فضلك
tell|يخبر
more|المزيد
about|عن
with|مع
from|من
during|أثناء
before|قبل
after|بعد
when|عندما
my|لي / خاصتي
we|نحن
you|أنت
your|لك
the|أداة التعريف
a|أداة نكرة
an|أداة نكرة
is|يكون
are|يكونون
was|كان
were|كانوا
would|سـ / سوف
will|سوف
can|يستطيع
could|يمكن
should|ينبغي
have|لديه / يملك
has|لديه
had|كان لديه
do|يفعل
does|يفعل
did|فعل
not|لا
never|أبدًا
always|دائمًا
very|جدًا
less|أقل
than|من
rather|بدلًا من
just|فقط
only|فقط
also|أيضًا
including|بما في ذلك
especially|خصوصًا
this|هذا
that|ذلك
these|هذه
those|تلك
their|لهم
its|خاصته
part|جزء
aim|هدف
point|نقطة
first|أولًا
second|ثانيًا
next|التالي
final|أخير
new|جديد
old|قديم
all|كل
everyone|الجميع
anyone|أي شخص
someone|شخص ما
others|الآخرون
other|آخر
people|أشخاص
while|أثناء
but|لكن
because|لأن
so|لذلك
which|الذي
who|مَن
what|ماذا
how|كيف
why|لماذا
where|أين
well|جيدًا
every|كل
each|كل
both|كلاهما
across|عبر
around|حول
without|دون
proper|مناسب
high|مرتفع
low|منخفض
clear|واضح
calm|هادئ
slow|بطيء
slowly|ببطء
long|طويل
several|عدة
different|مختلف
learn|يتعلم
learned|تعلّم
taught|علّم
value|يقدّر
care|يهتم
careful|حذر
carefully|بعناية
attention|انتباه
result|نتيجة
outcome|نتيجة
example|مثال
accurate|دقيق
exact|محدد
genuine|حقيقي
honestly|بصدق
invented|مختلق
evidence|دليل
brief|موجز
concise|موجز
factual|واقعي
professional|مهني
road|طريق
user|مستخدم
rule|قاعدة
sudden|مفاجئ
remain|يظل
immediate|فوري
contact|يتصل
follow|يتبع
followed|اتبع
period|فترة
five|خمسة
three|ثلاثة
ten|عشرة
one|واحد
driving|القيادة
driver|سائق
drivers|سائقون
interview|مقابلة
interviewer|مُحاور
answer|إجابة
aloud|بصوت مرتفع
practise|يتدرب
practice|تدريب
prepare|يستعد
confidently|بثقة
confident|واثق
confidence|ثقة
share|يشارك
conversation|محادثة
discussion|نقاش
dissatisfied|غير راضٍ
unhappy|غير سعيد
listen|يستمع
attentive|منتبه
promptly|على الفور
politely|بأدب
polite|مهذب
courteous|لبق
possible|ممكن
possibly|ربما
attempt|يحاول
unable|غير قادر
fit|ملائم
best|الأفضل
begin|يبدأ
starting|البدء
working|العمل
employer|صاحب العمل
employment|التوظيف
job|وظيفة
duty|واجب
duties|واجبات
responsible|مسؤول
responsibly|بمسؤولية
trained|مدرّب
training|تدريب
previous|سابق
previously|سابقًا
earlier|سابقًا
current|حالي
currently|حاليًا
since|منذ
between|بين
until|حتى
end|نهاية
ended|انتهى
involve|يتضمن
involved|مشارك
received|حصل على
hold|يحمل
held|حمل
drive|يقود
drove|قاد
driven|قاد
follows|يتبع
checks|يفحص
check|يتحقق
choose|يختار
chose|اختار
chosen|مختار
find|يجد
found|وجد
notice|يلاحظ
noticed|لاحظ
raise|يثير
request|طلب
asked|طلب
explain|يوضح
  require|يتطلب
  required|مطلوب
risked|عرّض للخطر
situation|موقف
keep|يحافظ
keeping|الحفاظ
aavoid|يتجنب
avoid|يتجنب
changed|تغير
changing|يتغير
adjustment|تعديل
update|يحدّث
maintain|يحافظ
stay|يبقى
handle|يتعامل مع
respond|يرد
response|استجابة
attend|يحضر
discuss|يناقش
make|يصنع / يتخذ
away|بعيدًا
allowed|مسموح
urgent|عاجل
urgency|استعجال
deadline|موعد نهائي
standards|معايير
standard|معيار
established|معتمد
accurately|بدقة
team|فريق
member|عضو
judgement|التقدير
judgment|التقدير
STAR|أسلوب STAR
action|إجراء
Hassan|حسن
Allam|علام
COP27|مؤتمر COP27
GPS|نظام تحديد المواقع
  `.trim().split('\n').map(row => { const split = row.indexOf('|'); return [row.slice(0, split).toLowerCase(), row.slice(split + 1)]; }));

  function saveProgress() {
    try { localStorage.setItem(STORAGE_DONE, JSON.stringify([...done])); } catch (_) {}
    const total = questions.length;
    const completed = Math.min(done.size, total);
    els.progressLabel.textContent = `${completed} / ${total}`;
    els.progressBar.style.width = `${total ? completed / total * 100 : 0}%`;
  }
  function categoryById(id) { return categories.find(item => item.id === id); }
  function visibleQuestions() {
    const term = els.search.value.trim().toLowerCase();
    const showOnlyUnanswered = els.onlyNew.getAttribute('aria-pressed') === 'true';
    return questions.filter(item => (selectedCategory === 'all' || item.category === selectedCategory) && (!showOnlyUnanswered || !done.has(item.id)) && (!term || `${item.title} ${item.q} ${item.answer.join(' ')} ${(item.tags || []).join(' ')}`.toLowerCase().includes(term)));
  }
  function renderNavigation() {
    const allLink = `<button class="category-link ${selectedCategory === 'all' ? 'active' : ''}" data-category="all"><span class="nav-icon">⌂</span><span>كل الأسئلة</span><span class="nav-count">${questions.length}</span></button>`;
    els.categoryNav.innerHTML = allLink + categories.map(category => {
      const count = questions.filter(q => q.category === category.id).length;
      return `<button class="category-link ${selectedCategory === category.id ? 'active' : ''}" data-category="${category.id}"><span class="nav-icon">${category.icon}</span><span>${category.label}</span><span class="nav-count">${count}</span></button>`;
    }).join('');
  }
  function renderQuestionList() {
    const list = visibleQuestions();
    if (list.length && !list.some(q => q.id === selectedId)) selectedId = list[0].id;
    els.activeLabel.textContent = selectedCategory === 'all' ? 'كل الأسئلة' : (categoryById(selectedCategory)?.label || 'الأسئلة');
    els.count.textContent = list.length;
    els.empty.hidden = list.length > 0;
    els.questionList.innerHTML = list.map((item, index) => {
      const category = categoryById(item.category);
      return `<button class="question-item ${item.id === selectedId ? 'active' : ''}" data-question="${item.id}" aria-current="${item.id === selectedId ? 'true' : 'false'}"><span class="item-number">${String(questions.indexOf(item) + 1).padStart(2, '0')}</span><span class="item-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(category?.en || '')}</small></span>${done.has(item.id) ? '<span class="item-done" title="تم التدريب">✓</span>' : ''}</button>`;
    }).join('');
    if (list.length) renderDetail();
    else els.detail.innerHTML = '<div class="empty-state">اختر قسمًا أو امسح البحث لرؤية الأسئلة.</div>';
  }
  function escapeHtml(text) { return String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
  function wordMarkup(text) {
    return String(text).split(/([A-Za-z0-9]+(?:[’'-][A-Za-z0-9]+)*)/g).map(piece => {
      if (!/^[A-Za-z0-9]+(?:[’'-][A-Za-z0-9]+)*$/.test(piece)) return escapeHtml(piece);
      if (!/[A-Za-z]/.test(piece)) return escapeHtml(piece);
      const safe = escapeHtml(piece);
      return `<span class="tap-word" role="button" tabindex="0" data-word="${safe}" aria-label="${safe}; اضغط لسماع الكلمة ومعناها">${safe}</span>`;
    }).join('');
  }
  function renderDetail() {
    const question = questions.find(item => item.id === selectedId);
    if (!question) return;
    const category = categoryById(question.category);
    const index = questions.indexOf(question) + 1;
    const isDone = done.has(question.id);
    els.detail.innerHTML = `
      <div class="detail-top"><span class="detail-category">${escapeHtml(category?.en || 'Interview practice')}</span><span class="detail-index">QUESTION ${String(index).padStart(2,'0')} / ${questions.length}</span></div>
      <section class="question-block"><div class="block-label"><span class="role-label"><i class="role-dot"></i> HR INTERVIEWER</span><div class="audio-actions"><button class="listen-button" data-play="question" aria-label="استمع إلى سؤال الموارد البشرية"><span class="listen-symbol">▶</span> استمع للسؤال</button></div></div><div class="english-copy question-text" dir="ltr">${wordMarkup(question.q)}</div></section>
      <section class="question-block"><div class="block-label"><span class="role-label driver-label"><i class="role-dot"></i> DRIVER CANDIDATE</span><div class="audio-actions"><button class="listen-button" data-play="answer" aria-label="استمع إلى إجابة المرشح"><span class="listen-symbol">▶</span> استمع للإجابة</button></div></div><div class="english-copy answer-copy" dir="ltr">${question.answer.map(p => `<p>${wordMarkup(p)}</p>`).join('')}</div></section>
      <div class="answer-footer"><span class="answer-tip"><strong>تلميح تدريب:</strong> ${escapeHtml(question.tip || 'أجب بوضوح وبصدق.')}</span><button class="complete-button ${isDone ? 'completed' : ''}" data-complete="${question.id}" aria-pressed="${isDone}">${isDone ? '✓ تدربت عليها' : 'علّمها كمتدرّب عليها'}</button></div>`;
  }
  function selectQuestion(id) {
    stopSpeech();
    selectedId = id;
    renderNavigation();
    renderQuestionList();
    const selected = $('.question-item.active', els.questionList);
    selected?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function updateVoices() {
    if (!('speechSynthesis' in window)) { voiceOptions = []; return; }
    const all = window.speechSynthesis.getVoices();
    voiceOptions = all.filter(voice => voice.localService === true && /^en([-_]|$)/i.test(voice.lang));
  }
  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2700);
  }
  function setSpeaking(kind) {
    currentSpeaking = kind;
    els.detail.querySelectorAll('.question-block').forEach((block, index) => {
      block.classList.toggle('is-speaking', kind === (index === 0 ? 'question' : 'answer'));
    });
    els.detail.querySelectorAll('.tap-word.is-spoken-word').forEach(word => word.classList.remove('is-spoken-word'));
    if (kind === 'word' && currentWordElement?.isConnected) currentWordElement.classList.add('is-spoken-word');
    els.detail.querySelectorAll('[data-play]').forEach(button => {
      const active = button.dataset.play === kind;
      button.classList.toggle('is-speaking', active);
      button.setAttribute('aria-label', active ? 'إيقاف المقطع الصوتي الجاري' : button.dataset.play === 'question' ? 'استمع إلى سؤال الموارد البشرية' : 'استمع إلى إجابة المرشح');
      button.innerHTML = `<span class="listen-symbol">${active ? '◼' : '▶'}</span> ${active ? 'جارٍ الاستماع' : button.dataset.play === 'question' ? 'استمع للسؤال' : 'استمع للإجابة'}`;
    });
  }
  function getWordAudioContext() {
    if (!wordAudioContext) {
      const Context = window.AudioContext || window.webkitAudioContext;
      if (!Context) throw new Error('Web Audio is not supported');
      try { wordAudioContext = new Context({ sampleRate: 22050 }); }
      catch (_) { wordAudioContext = new Context(); }
    }
    return wordAudioContext;
  }
  function getWordAudioBuffer(file, context) {
    if (!wordAudioBuffers.has(file)) {
      const request = fetch(file).then(response => {
        if (!response.ok) throw new Error('Audio file unavailable');
        return response.arrayBuffer();
      }).then(data => context.decodeAudioData(data.slice(0)));
      wordAudioBuffers.set(file, request);
      request.catch(() => wordAudioBuffers.delete(file));
    }
    return wordAudioBuffers.get(file);
  }
  function warmWordAudio() {
    if (navigator.connection?.saveData) return;
    const files = [...new Set(Object.values(window.WORD_AUDIO_MAP || {})
      .map(segment => segment.file)
      .filter(file => file.startsWith('/audio/words/')))].sort();
    if (!files.length) return;
    let context;
    try { context = getWordAudioContext(); } catch (_) { return; }
    const warmNext = index => {
      if (index >= files.length) return;
      getWordAudioBuffer(files[index], context).catch(() => null).finally(() => {
        const next = () => warmNext(index + 1);
        if (window.requestIdleCallback) window.requestIdleCallback(next, { timeout: 1200 });
        else setTimeout(next, 300);
      });
    };
    warmNext(0);
  }
  function playWord(word, target) {
    const key = normalizeWord(word);
    const segment = window.WORD_AUDIO_MAP?.[key];
    if (!segment) {
      if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
        showToast('لا يتوفر تسجيل لهذه الكلمة ولا يدعم المتصفح النطق الصوتي.');
        return;
      }
      if (currentSpeaking === 'word' && currentWordKey === key) { stopSpeech(); return; }
      stopSpeech();
      const token = ++audioToken;
      currentSpeaking = 'word';
      currentWordKey = key;
      currentWordElement = target || null;
      setSpeaking('word');
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-GB';
      utterance.volume = Math.max(0, Math.min(1, Number(els.speechVolume.value) / 100));
      utterance.rate = 0.82;
      const localVoice = voiceOptions.find(voice => /^en[-_](GB|IN|US)$/i.test(voice.lang)) || voiceOptions[0];
      if (localVoice) utterance.voice = localVoice;
      utterance.onend = () => { if (token === audioToken) stopSpeech(); };
      utterance.onerror = () => {
        if (token === audioToken) { stopSpeech(); showToast('تعذر نطق هذه الكلمة على هذا الجهاز.'); }
      };
      window.speechSynthesis.speak(utterance);
      return;
    }
    if (currentSpeaking === 'word' && currentWordKey === key) { stopSpeech(); return; }
    stopSpeech();
    const token = ++audioToken;
    currentSpeaking = 'word';
    currentWordKey = key;
    currentWordElement = target || null;
    setSpeaking('word');
    let context;
    try { context = getWordAudioContext(); }
    catch (_) { stopSpeech(); showToast('تعذر تشغيل صوت المفردة في هذا المتصفح.'); return; }
    context.resume().catch(() => {});
    getWordAudioBuffer(segment.file, context).then(buffer => {
      if (token !== audioToken || currentSpeaking !== 'word') return;
      const start = Math.max(0, Math.min(segment.start, Math.max(0, buffer.duration - 0.01)));
      const duration = Math.max(0.05, Math.min(segment.end - segment.start, buffer.duration - start));
      const source = context.createBufferSource();
      const gain = context.createGain();
      source.buffer = buffer;
      gain.gain.value = Math.max(0, Math.min(1, Number(els.speechVolume.value) / 100));
      source.connect(gain);
      gain.connect(context.destination);
      currentWordSource = source;
      currentWordGain = gain;
      source.onended = () => { if (token === audioToken && currentWordSource === source) stopSpeech(); };
      source.start(0, start, duration);
    }).catch(() => {
      if (token === audioToken) { stopSpeech(); showToast('تعذر تحميل نطق الكلمة.'); }
    });
  }
  function stopSpeech() {
    audioToken += 1;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.removeAttribute('src');
      currentAudio.load();
      currentAudio = null;
    }
    if (currentWordSource) {
      try { currentWordSource.stop(); } catch (_) {}
      currentWordSource.disconnect();
      currentWordSource = null;
      currentWordGain = null;
    }
    currentWordKey = '';
    currentSpeaking = null;
    setSpeaking(null);
    currentWordElement = null;
    const button = $('#pauseResume');
    if (button) { button.textContent = 'Ⅱ'; button.setAttribute('aria-label', 'إيقاف مؤقت أو استئناف الصوت'); }
  }
  function playInterviewClip(question, kind) {
    if (currentAudio && currentSpeaking === kind) { stopSpeech(); showToast('تم إيقاف المقطع.'); return; }
    const clipUrl = window.INTERVIEW_AUDIO?.[question.id]?.[kind];
    if (!clipUrl) {
      showToast('المقطع الصوتي غير متاح الآن.');
      return;
    }
    const url = new URL(clipUrl, location.origin);
    if (url.origin !== location.origin) { showToast('يجب أن يكون التسجيل محفوظًا محليًا داخل الموقع.'); return; }
    stopSpeech();
    currentAudio = new Audio(url.pathname);
    currentAudio.volume = Math.max(0, Math.min(1, Number(els.speechVolume.value) / 100));
    const clip = currentAudio;
    setSpeaking(kind);
    clip.onended = () => { if (currentAudio === clip) { currentAudio = null; setSpeaking(null); } };
    clip.onerror = () => { if (currentAudio !== clip) return; currentAudio = null; setSpeaking(null); showToast('تعذر تشغيل المقطع. تحقق من إعدادات الصوت.'); };
    clip.play().catch(() => { if (currentAudio !== clip) return; currentAudio = null; setSpeaking(null); showToast('تعذر تشغيل المقطع. تحقق من إعدادات الصوت.'); });
  }
  function createAmbient() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) { showToast('الأجواء الصوتية غير مدعومة في هذا المتصفح.'); return; }
    if (!ambient) {
      const context = new AudioContextClass();
      const master = context.createGain();
      master.gain.value = 0;
      master.connect(context.destination);
      const frequencies = [110, 164.81, 220];
      const oscillators = frequencies.map((frequency, index) => {
        const osc = context.createOscillator();
        const gain = context.createGain();
        osc.type = 'sine';
        osc.frequency.value = frequency;
        osc.detune.value = index === 1 ? -3 : index === 2 ? 2 : 0;
        gain.gain.value = [0.34, 0.22, 0.11][index];
        osc.connect(gain); gain.connect(master); osc.start();
        return osc;
      });
      ambient = { context, master, oscillators };
    }
    ambient.context.resume().catch(() => {});
    const level = Number(els.ambientVolume.value) / 100 * 0.095;
    ambient.master.gain.setTargetAtTime(level, ambient.context.currentTime, 0.65);
    els.ambientToggle.setAttribute('aria-checked', 'true');
  }
  function stopAmbient() {
    if (ambient) {
      ambient.master.gain.setTargetAtTime(0, ambient.context.currentTime, 0.3);
      els.ambientToggle.setAttribute('aria-checked', 'false');
    }
  }
  function updateVolumeLabels() {
    els.speechVolumeLabel.textContent = `${els.speechVolume.value}%`;
    els.ambientVolumeLabel.textContent = `${els.ambientVolume.value}%`;
    if (ambient && els.ambientToggle.getAttribute('aria-checked') === 'true') {
      const level = Number(els.ambientVolume.value) / 100 * 0.095;
      ambient.master.gain.setTargetAtTime(level, ambient.context.currentTime, 0.25);
    }
    if (currentAudio) currentAudio.volume = Number(els.speechVolume.value) / 100;
    if (currentWordGain) currentWordGain.gain.value = Number(els.speechVolume.value) / 100;
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
      // Current utterances cannot change volume mid-sentence; the next one will use this setting.
    }
  }
  function normalizeWord(word) { return word.toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, '').replace(/[’]/g, "'"); }
  function localMeaning(word) {
    const key = normalizeWord(word);
    if (!key) return '';
    const direct = dictionary.get(key) || window.OFFLINE_GLOSSARY?.get(key) || dictionary.get(String(word).toLowerCase());
    if (direct) return direct;
    const candidates = [key.replace(/'s$/, ''), key.replace(/ies$/, 'y'), key.replace(/s$/, ''), key.replace(/ed$/, ''), key.replace(/ing$/, ''), key.replace(/ly$/, ''), key.replace(/er$/, ''), key.replace(/tion$/, 'te')];
    for (const candidate of candidates) {
      const meaning = dictionary.get(candidate) || window.OFFLINE_GLOSSARY?.get(candidate);
      if (meaning) return meaning;
    }
    return '';
  }
  function lookupMeaning(word) {
    return localMeaning(word) || 'هذه المفردة غير موجودة في القاموس المحلي.';
  }
  function openWord(word, target) {
    lastWord = word;
    els.popover.hidden = false;
    els.popWord.textContent = word;
    const phonetic = window.arabicPronunciation?.(word) || word;
    els.popPronunciation.innerHTML = `<bdi dir="ltr">${escapeHtml(word)}</bdi> — <bdi dir="rtl">${escapeHtml(phonetic)}</bdi>`;
    els.popMeaning.textContent = `المعنى: ${lookupMeaning(word)}`;
    const rect = target?.getBoundingClientRect();
    if (rect && innerWidth > 700) {
      const left = Math.min(innerWidth - 175, Math.max(175, rect.left + rect.width / 2));
      const top = Math.max(150, Math.min(innerHeight - 170, rect.top - 95));
      els.popover.style.left = `${left}px`;
      els.popover.style.top = `${top}px`;
    }
    playWord(word, target);
  }
  function closeWord() { els.popover.hidden = true; }

  els.total.textContent = questions.length;
  saveProgress();
  renderNavigation();
  renderQuestionList();
  updateVoices();
  if ('speechSynthesis' in window) window.speechSynthesis.addEventListener?.('voiceschanged', updateVoices);
  else showToast('يتطلب النطق الصوتي متصفحًا يدعم Speech Synthesis.');

  els.categoryNav.addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    selectedCategory = button.dataset.category;
    selectedId = '';
    renderNavigation();
    renderQuestionList();
    document.querySelector('.sidebar').classList.remove('open');
    $('#practice').scrollIntoView({ behavior:'smooth', block:'start' });
  });
  els.questionList.addEventListener('click', event => {
    const button = event.target.closest('[data-question]');
    if (button) selectQuestion(button.dataset.question);
  });
  els.detail.addEventListener('click', event => {
    const word = event.target.closest('[data-word]');
    if (word) { event.preventDefault(); openWord(word.dataset.word, word); return; }
    const playButton = event.target.closest('[data-play]');
    if (playButton) {
      const item = questions.find(q => q.id === selectedId);
      if (!item) return;
      playInterviewClip(item, playButton.dataset.play);
      return;
    }
    const completeButton = event.target.closest('[data-complete]');
    if (completeButton) {
      const id = completeButton.dataset.complete;
      if (done.has(id)) done.delete(id); else done.add(id);
      saveProgress(); renderQuestionList();
      return;
    }
  });
  els.dock.addEventListener('click', event => {
    const preview = event.target.closest('[data-preview-voice]');
    if (!preview) return;
    const sample = questions[0];
    if (sample) playInterviewClip(sample, preview.dataset.previewVoice);
  });
  els.voiceSamplePlay.addEventListener('click', () => {
    const sample = questions[0];
    if (sample) playInterviewClip(sample, els.voiceSampleSelect.value);
  });
  els.detail.addEventListener('keydown', event => {
    const word = event.target.closest?.('[data-word]');
    if (word && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openWord(word.dataset.word, word); }
  });
  els.search.addEventListener('input', () => { selectedId = ''; renderQuestionList(); });
  els.onlyNew.addEventListener('click', () => {
    const enabled = els.onlyNew.getAttribute('aria-pressed') !== 'true';
    els.onlyNew.setAttribute('aria-pressed', String(enabled));
    selectedId = ''; renderQuestionList();
  });
  $('#startPractice').addEventListener('click', () => {
    selectedCategory = 'all'; selectedId = questions[0]?.id || '';
    renderNavigation(); renderQuestionList();
    $('#practice').scrollIntoView({ behavior:'smooth', block:'start' });
  });
  $('#nextUnpracticed').addEventListener('click', () => {
    const start = Math.max(0, questions.findIndex(q => q.id === selectedId));
    const next = [...questions.slice(start + 1), ...questions.slice(0, start + 1)].find(q => !done.has(q.id));
    if (!next) { showToast('أحسنت، تدربت على جميع الأسئلة.'); return; }
    selectedCategory = 'all';
    els.search.value = '';
    els.onlyNew.setAttribute('aria-pressed', 'false');
    selectedId = next.id;
    renderNavigation(); renderQuestionList();
    $('#practice').scrollIntoView({ behavior:'smooth', block:'start' });
  });
  els.speechVolume.addEventListener('input', updateVolumeLabels);
  els.ambientVolume.addEventListener('input', updateVolumeLabels);
  els.ambientToggle.addEventListener('click', () => {
    if (els.ambientToggle.getAttribute('aria-checked') === 'true') stopAmbient(); else createAmbient();
  });
  els.dockToggle.addEventListener('click', () => {
    const collapsed = els.dock.classList.toggle('collapsed');
    els.dockToggle.setAttribute('aria-expanded', String(!collapsed));
  });
  $('#stopAll').addEventListener('click', () => { stopSpeech(); stopAmbient(); showToast('تم إيقاف الأصوات.'); });
  $('#pauseResume').addEventListener('click', () => {
    if (currentWordSource && wordAudioContext) {
      const button = $('#pauseResume');
      if (wordAudioContext.state === 'suspended') wordAudioContext.resume().then(() => { button.textContent = 'Ⅱ'; }).catch(() => showToast('تعذر استئناف نطق الكلمة.'));
      else wordAudioContext.suspend().then(() => { button.textContent = '▶'; }).catch(() => showToast('تعذر إيقاف نطق الكلمة مؤقتًا.'));
      return;
    }
    if (currentAudio) {
      const button = $('#pauseResume');
      if (currentAudio.paused) currentAudio.play().then(() => { button.textContent = 'Ⅱ'; }).catch(() => showToast('تعذر استئناف التسجيل.'));
      else { currentAudio.pause(); button.textContent = '▶'; }
      return;
    }
    if (!('speechSynthesis' in window)) return;
    if (window.speechSynthesis.paused) { window.speechSynthesis.resume(); $('#pauseResume').textContent = 'Ⅱ'; }
    else if (window.speechSynthesis.speaking) { window.speechSynthesis.pause(); $('#pauseResume').textContent = '▶'; }
    else showToast('شغّل سؤالًا أو إجابة أولًا.');
  });
  $('#closePopover').addEventListener('click', closeWord);
  $('#pronounceWord').addEventListener('click', () => playWord(lastWord));
  els.popover.addEventListener('click', event => { if (event.target === els.popover) closeWord(); });
  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); els.search.focus(); }
    if (event.key === 'Escape') closeWord();
  });
  $('#mobileMenu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('open'));
  document.addEventListener('visibilitychange', () => { if (document.hidden && ambient) ambient.master.gain.setTargetAtTime(0, ambient.context.currentTime, .5); });

  let installPromptEvent = null;
  const installButton = $('#installApp');
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPromptEvent = event;
    installButton.dataset.installReady = 'true';
  });
  installButton.addEventListener('click', async () => {
    if (!installPromptEvent) {
      showToast('استخدم قائمة المتصفح واختر «إضافة إلى الشاشة الرئيسية» للتثبيت.');
      return;
    }
    installPromptEvent.prompt();
    const choice = await installPromptEvent.userChoice;
    showToast(choice.outcome === 'accepted' ? 'تمت إضافة التطبيق إلى جهازك.' : 'يمكنك التثبيت لاحقًا من قائمة المتصفح.');
    installPromptEvent = null;
  });
  window.addEventListener('appinstalled', () => showToast('أصبح التدريب متاحًا من جهازك.'));
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
  window.addEventListener('load', warmWordAudio, { once: true });
})();
