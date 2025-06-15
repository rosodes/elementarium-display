
import { en } from './en';
import { ru } from './ru';
import { uk } from './uk';
import { addLanguage } from './types';

export function loadLanguages(): void {
  // Register all available languages
  addLanguage('en', en);
  addLanguage('ru', ru);
  addLanguage('uk', uk);

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

  addLanguage('zh-CN', { ...stub, title: "尚未翻译", selectLanguage: "选择语言" });
  addLanguage('zh-TW', { ...stub, title: "尚未翻譯", selectLanguage: "選擇語言" });
  addLanguage('es',    { ...stub, title: "Aún no traducido", selectLanguage: "Seleccionar idioma" });
  addLanguage('hi',    { ...stub, title: "अभी तक अनुवाद नहीं किया गया", selectLanguage: "भाषा चुनें" });
  addLanguage('ar',    { ...stub, title: "لم تتم الترجمة بعد", selectLanguage: "اختر اللغة" });
  addLanguage('pt-BR', { ...stub, title: "Ainda não traduzido", selectLanguage: "Selecionar idioma" });
  addLanguage('pt-PT', { ...stub, title: "Ainda não traduzido", selectLanguage: "Selecionar idioma" });
  addLanguage('bn',    { ...stub, title: "এখনও অনুবাদ হয়নি", selectLanguage: "ভাষা নির্বাচন করুন" });
  addLanguage('ja',    { ...stub, title: "まだ翻訳されていません", selectLanguage: "言語を選択" });
}
