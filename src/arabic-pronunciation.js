/* Arabic-script pronunciation hints for the English interview vocabulary. */
(() => {
  const overrides = {
    car: 'كار', cars: 'كارز', driver: 'درايفر', drivers: 'درايفرز', drive: 'درايف', driving: 'درايڤِنغ',
    vehicle: 'ڤيكل', vehicles: 'ڤيكلز', safety: 'سيفتي', safe: 'سيف', safely: 'سيفلي', route: 'روت',
    embassy: 'إمبَسي', embassies: 'إمبَسيز', interview: 'إنترفيو', interviewer: 'إنترفيوَر',
    question: 'كويستشن', answer: 'آنسر', licence: 'لايسنس', license: 'لايسنس', professional: 'بروفِشنَل',
    usual: 'يوجوال', cause: 'كوز', could: 'كُد', ensure: 'إنشور', each: 'إيتش', fuel: 'فيول',
    equipment: 'إكْوِپمَنت', visible: 'ڤِزَبُل', procedure: 'پْرَسيدجَر',
    professionally: 'بروفِشنَلي', confidential: 'كونفِدِنشَل', confidentiality: 'كونفِدِنشاليتي',
    armoured: 'آرمَرد', armored: 'آرمَرد', passenger: 'باسِنجر', passengers: 'باسِنجرز',
    appointment: 'أبوينتمِنت', congested: 'كونجِستِد', traffic: 'ترافِك', punctuality: 'بانكتشواليتي',
    schedule: 'سْكَجول', gps: 'جي بي إس', cop27: 'سي أو بي ٢٧', rimo: 'ريمو',
    carcontrol: 'كار كنترول', control: 'كنترول', manager: 'مانِجر', management: 'مانِجمنت',
    egyptian: 'إيجيپشَن', january: 'جانيوَري', august: 'أوغَست', april: 'إيپرِل', september: 'سبتِمبر',
    british: 'بريتش', embassy: 'إمبَسي', arabic: 'أرَبِك', english: 'إنجلِش',
    yes: 'يِس', no: 'نو', the: 'ذَ', this: 'ذِس', that: 'ذَت', with: 'وِذ', without: 'وِذاوت',
    thank: 'ثانك', thankyou: 'ثانك يو', please: 'پليز', clear: 'كلير', calm: 'كالم',
    confidential: 'كونفِدِنشَل', gps: 'جي بي إس', star: 'ستار', cop: 'سي أو پي'
  };
  const groups = [
    [/tion|sion/g, 'شَن'], [/tch/g, 'تش'], [/ch/g, 'تش'], [/sh/g, 'ش'], [/ph/g, 'ف'],
    [/th/g, 'ث'], [/ck/g, 'ك'], [/qu/g, 'كو'], [/ee|ea/g, 'ي'], [/ai|ay/g, 'اي'],
    [/igh/g, 'اي'], [/oo|ou|ew/g, 'و'], [/ar/g, 'ار'], [/er|ir|ur/g, 'ر'], [/or/g, 'ور'],
    [/ow/g, 'او'], [/x/g, 'كس'], [/c(?=[eiy])/g, 'س'], [/g(?=[eiy])/g, 'ج']
  ];
  const letters = { a:'ا', b:'ب', c:'ك', d:'د', e:'ي', f:'ف', g:'ج', h:'ه', i:'ي', j:'ج', k:'ك', l:'ل', m:'م', n:'ن', o:'و', p:'پ', q:'ك', r:'ر', s:'س', t:'ت', u:'و', v:'ڤ', w:'و', y:'ي', z:'ز' };
  window.arabicPronunciation = function(word) {
    const key = String(word || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!key) return '';
    const dictionary = window.ARABIC_PRONUNCIATION_DATA || {};
    if (dictionary[key]) return dictionary[key];
    if (overrides[key]) return overrides[key];
    let result = key.replace(/[0-9]+/g, digits => digits.split('').join(' '));
    for (const [pattern, replacement] of groups) result = result.replace(pattern, replacement);
    result = result.replace(/[a-z]/g, letter => letters[letter] || letter);
    return result || '—';
  };
})();
