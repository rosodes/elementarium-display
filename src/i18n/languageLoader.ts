import { en } from './en';
import { ru } from './ru';
import { uk } from './uk';
import { es } from './es';
import { zhCN } from './zh-CN';
import { zhTW } from './zh-TW';
import { hi } from './hi';
import { ar } from './ar';
import { ptBR } from './pt-BR';
import { ptPT } from './pt-PT';
import { bn } from './bn';
import { ja } from './ja';
import { pa } from './pa';
import { de } from './de';
import { addLanguage } from './types';

export function loadLanguages(): void {
  addLanguage('en', en);
  addLanguage('ru', ru);
  addLanguage('uk', uk);
  addLanguage('es', es);
  addLanguage('zh-CN', zhCN);
  addLanguage('zh-TW', zhTW);
  addLanguage('hi', hi);
  addLanguage('ar', ar);
  addLanguage('pt-BR', ptBR);
  addLanguage('pt-PT', ptPT);
  addLanguage('bn', bn);
  addLanguage('ja', ja);
  addLanguage('pa', pa);
  addLanguage('de', de);

  // Заглушки для новых языков, чтобы не падал сайт при переключении
  const stub = {
    title: "Not translated yet",
    subtitle: "",
    selectLanguage: "",
    search: "",
    toggleTheme: "",
    legend: {} as any,
    details: {} as any,
    categories: {} as any,
    ui: {} as any,
    elementDetails: {} as any,
    footer: {} as any,
    loading: "Loading...",
  };

  addLanguage('zh-CN',   { ...stub, title: "尚未翻译", selectLanguage: "选择语言" });
  addLanguage('zh-TW',   { ...stub, title: "尚未翻譯", selectLanguage: "選擇語言" });
  addLanguage('hi',      { ...stub, title: "अभी तक अनुवाद नहीं किया गया", selectLanguage: "भाषा चुनें" });
  addLanguage('ar',      { ...stub, title: "لم تتم الترجمة بعد", selectLanguage: "اختر اللغة" });
  addLanguage('pt-BR',   { ...stub, title: "Ainda não traduzido", selectLanguage: "Selecionar idioma" });
  addLanguage('pt-PT',   { ...stub, title: "Ainda não traduzido", selectLanguage: "Selecionar idioma" });
  addLanguage('bn',      { ...stub, title: "এখনও অনুবাদ হয়নি", selectLanguage: "ভাষা নির্বাচন করুন" });
  addLanguage('ja',      { ...stub, title: "まだ翻訳されていません", selectLanguage: "言語を選択" });

  addLanguage('pa',      { ...stub, title: "ਅਜੇ ਤਕ ਅਨੁਵਾਦ ਨਹੀਂ ਹੋਇਆ", selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ" });
  addLanguage('de',      { ...stub, title: "Noch nicht übersetzt", selectLanguage: "Sprache wählen" });
  addLanguage('jv',      { ...stub, title: "Durung diterjemahaké", selectLanguage: "Pilih basa" });
  addLanguage('lah',     { ...stub, title: "ہن تڪ ترجمو نه ٿيو آهي", selectLanguage: "ٻولي چونڊيو" });
  addLanguage('tr',      { ...stub, title: "Henüz çevrilmedi", selectLanguage: "Dil seçin" });
  addLanguage('fr-FR',   { ...stub, title: "Pas encore traduit", selectLanguage: "Choisir la langue" });
  addLanguage('fr-CA',   { ...stub, title: "Pas encore traduit", selectLanguage: "Choisir la langue" });
  addLanguage('vi',      { ...stub, title: "Chưa được dịch", selectLanguage: "Chọn ngôn ngữ" });
  addLanguage('ta',      { ...stub, title: "இன்னும் மொழிபெயர்க்கவில்லை", selectLanguage: "மொழி தேர்ந்தெடுക்கவும்" });
  addLanguage('ur',      { ...stub, title: "ابھی تک ترجمہ نہیں ہوا", selectLanguage: "زبان منتخب کریں" });
  addLanguage('fa',      { ...stub, title: "هنوز ترجمه نشده است", selectLanguage: "انتخاب زبان" });
  addLanguage('ml',      { ...stub, title: "ഇനി വിവർത്തനം ചെയ്തിട്ടില്ല", selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക" });
  addLanguage('ko',      { ...stub, title: "아직 번역되지 않음", selectLanguage: "언어 선택" });
  addLanguage('it',      { ...stub, title: "Non ancora tradotto", selectLanguage: "Seleziona la lingua" });
  addLanguage('th',      { ...stub, title: "ยังไม่ได้แปล", selectLanguage: "เลือกภาษา" });
  addLanguage('gu',      { ...stub, title: "હજી અનુવાદ થયો નથી", selectLanguage: "ભાષા પસંદ કરો" });
  addLanguage('pl',      { ...stub, title: "Jeszcze nie przetłumaczone", selectLanguage: "Wybierz język" });
  addLanguage('kn',      { ...stub, title: "ಇನ್ನೂ ಅನುವಾದ ಮಾಡಿಲ್ಲ", selectLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ" });
  addLanguage('sw',      { ...stub, title: "Bado haijatafsiriwa", selectLanguage: "Chagua lugha" });
  addLanguage('ary',     { ...stub, title: "مازال غير مترجم", selectLanguage: "اختر الدارجة" });
  addLanguage('af',      { ...stub, title: "Nog nie vertaal nie", selectLanguage: "Kies taal" });
  addLanguage('tl',      { ...stub, title: "Hindi pa naisalin", selectLanguage: "Pumili ng wika" });
  addLanguage('fil',     { ...stub, title: "Hindi pa naisalin", selectLanguage: "Pumili ng wika" });
  addLanguage('eu',      { ...stub, title: "Oraindik ez da itzuli", selectLanguage: "Hizkuntza aukeratu" });
  addLanguage('su',      { ...stub, title: "Henteu acan ditarjamahkeun", selectLanguage: "Pilih basa" });
  addLanguage('ha',      { ...stub, title: "Ba a fassara ba tukuna", selectLanguage: "Zaɓi harshe" });
  addLanguage('ro',      { ...stub, title: "Încă nu a fost tradus", selectLanguage: "Alege limba" });
  addLanguage('nl',      { ...stub, title: "Nog niet vertaald", selectLanguage: "Selecteer taal" });
  addLanguage('el',      { ...stub, title: "Δεν έχει μεταφραστεί ακόμα", selectLanguage: "Επιλέξτε γλώσσα" });
  addLanguage('sr-Cyrl', { ...stub, title: "Још није преведено", selectLanguage: "Изаберите језик" });
  addLanguage('sr-Latn', { ...stub, title: "Još nije prevedeno", selectLanguage: "Izaberite jezik" });
  addLanguage('sl',      { ...stub, title: "Še ni prevedeno", selectLanguage: "Izberite jezik" });
  addLanguage('sk',      { ...stub, title: "Ešte nebolo preložené", selectLanguage: "Vyberte jazyk" });
}
