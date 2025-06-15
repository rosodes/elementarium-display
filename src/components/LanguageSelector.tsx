import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LanguageOption {
  code: string;
  name: string;
  emoji: string;
}
interface LanguageSelectorProps {
  language: string;
  supportedLanguages: string[];
  allLanguageOptions: LanguageOption[];
  onChange: (lang: string) => void;
  t: Record<string, string>;
}

const MAX_VISIBLE = 10;

// СПИСОК ЯЗЫКОВ: добавим новые языки для отображения
const allLanguageOptions: LanguageOption[] = [
  { code: 'en', name: 'English', emoji: '🇬🇧' },
  { code: 'zh-CN', name: '简体中文 (Chinese, Simplified)', emoji: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文 (Chinese, Traditional)', emoji: '🇹🇼' },
  { code: 'es', name: 'Español (Spanish)', emoji: '🇪🇸' },
  { code: 'hi', name: 'हिन्दी (Hindi)', emoji: '🇮🇳' },
  { code: 'ar', name: 'العربية (Arabic)', emoji: '🇦🇪' },
  { code: 'pt-BR', name: 'Português (Brazilian)', emoji: '🇧🇷' },
  { code: 'pt-PT', name: 'Português (European)', emoji: '🇵🇹' },
  { code: 'bn', name: 'বাংলা (Bengali)', emoji: '🇧🇩' },
  { code: 'ru', name: 'Русский (Russian)', emoji: '🇷🇺' },
  { code: 'uk', name: 'Українська (Ukrainian)', emoji: '🇺🇦' },
  { code: 'ja', name: '日本語 (Japanese)', emoji: '🇯🇵' },

  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', emoji: '🇮🇳' },
  { code: 'de', name: 'Deutsch (German)', emoji: '🇩🇪' },
  { code: 'jv', name: 'Basa Jawa (Javanese)', emoji: '🇮🇩' },
  { code: 'lah', name: 'لہندا (Western Punjabi)', emoji: '🇵🇰' },
  { code: 'tr', name: 'Türkçe (Turkish)', emoji: '🇹🇷' },
  { code: 'fr-FR', name: 'Français (French, European)', emoji: '🇫🇷' },
  { code: 'fr-CA', name: 'Français (French, Canada)', emoji: '🇨🇦' },
  { code: 'vi', name: 'Tiếng Việt (Vietnamese)', emoji: '🇻🇳' },
  { code: 'ta', name: 'தமிழ் (Tamil)', emoji: '🇮🇳' },
  { code: 'ur', name: 'اُردُو‎ (Urdu)', emoji: '🇵🇰' },
  { code: 'fa', name: 'فارسی (Persian/Farsi)', emoji: '🇮🇷' },
  { code: 'ml', name: 'മലയാളം (Malayalam)', emoji: '🇮🇳' },
  { code: 'ko', name: '한국어 (Korean)', emoji: '🇰🇷' },
  { code: 'it', name: 'Italiano (Italian)', emoji: '🇮🇹' },
  { code: 'th', name: 'ไทย (Thai)', emoji: '🇹🇭' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)', emoji: '🇮🇳' },
  { code: 'pl', name: 'Polski (Polish)', emoji: '🇵🇱' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', emoji: '🇮🇳' },
  { code: 'sw', name: 'Kiswahili (Swahili)', emoji: '🇰🇪' },
  { code: 'ary', name: 'العربية المغربية (Moroccan Arabic)', emoji: '🇲🇦' },
  { code: 'af', name: 'Afrikaans (Afrikaans)', emoji: '🇿🇦' },
  { code: 'tl', name: 'Tagalog (Filipino)', emoji: '🇵🇭' },
  { code: 'fil', name: 'Filipino (Tagalog)', emoji: '🇵🇭' },
  { code: 'eu', name: 'Euskara (Basque)', emoji: '🇪🇸' },
  { code: 'su', name: 'Basa Sunda (Sundanese)', emoji: '🇮🇩' },
  { code: 'ha', name: 'Hausa (Hausa)', emoji: '🇳🇬' },
  { code: 'ro', name: 'Română (Romanian)', emoji: '🇷🇴' },
  { code: 'nl', name: 'Nederlands (Dutch)', emoji: '🇳🇱' },
  { code: 'el', name: 'Ελληνικά (Greek)', emoji: '🇬🇷' },
  { code: 'sr-Cyrl', name: 'Српски (Serbian Cyrillic)', emoji: '🇷🇸' },
  { code: 'sr-Latn', name: 'Srpski (Serbian Latin)', emoji: '🇷🇸' },
  { code: 'sl', name: 'Slovenščina (Slovenian)', emoji: '🇸🇮' },
  { code: 'sk', name: 'Slovenčina (Slovak)', emoji: '🇸🇰' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  supportedLanguages,
  allLanguageOptions,
  onChange,
  t,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Оставляем только реальные языки
  const realLanguages = useMemo(
    () =>
      allLanguageOptions.filter((l) => supportedLanguages.includes(l.code)),
    [allLanguageOptions, supportedLanguages]
  );

  // Фильтрация
  const filtered = useMemo(() => {
    if (!search.trim()) return realLanguages;
    const s = search.trim().toLowerCase();
    return realLanguages.filter(
      (l) =>
        l.name.toLowerCase().includes(s) ||
        l.code.toLowerCase().includes(s) ||
        (l.emoji && l.emoji.includes(s))
    );
  }, [realLanguages, search]);

  // Управление фокусом: автофокус только когда открыли меню
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Ждём пока появится поле
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.setSelectionRange(
          inputRef.current.value.length,
          inputRef.current.value.length
        );
      }, 10);
    }
    if (!isOpen) setSearch(""); // сбрасываем только при закрытии
  }, [isOpen]);

  // Выбранный язык
  const selected = realLanguages.find((l) => l.code === language);

  return (
    <div className="relative z-[1000] text-left flex justify-start">
      <Select
        value={language}
        onValueChange={onChange}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SelectTrigger
          className="w-[180px] h-10 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 justify-start text-left"
          aria-label={t.selectLanguage || "Select language"}
        >
          <span className="flex items-center gap-2 w-full truncate text-left">
            <span>{selected?.emoji || "🌐"}</span>
            <SelectValue>{selected?.name || language}</SelectValue>
          </span>
        </SelectTrigger>
        <SelectContent
          align="end"
          className="z-[1000] bg-white dark:bg-gray-900 p-0 border-gray-200 dark:border-gray-800 text-left"
          style={{ minWidth: 220, maxWidth: 320 }}
        >
          <div className="p-2 sticky top-0 bg-white dark:bg-gray-900 z-10">
            <Input
              ref={inputRef}
              aria-label={t.searchPlaceholder || "Find language"}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder || "Search…"}
              className="h-8 px-2 text-sm border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onKeyDown={e => e.stopPropagation()}
              autoComplete="off"
            />
          </div>
          <ScrollArea
            className="max-h-[360px] min-h-[40px] text-left"
            style={{
              maxHeight: `calc(${MAX_VISIBLE} * 36px)`, // up to 10 строк, потом scroll
              minWidth: 200,
            }}
          >
            {filtered.length > 0 ? (
              filtered.map((lang) => (
                <SelectItem
                  key={lang.code}
                  value={lang.code}
                  className="flex items-center gap-2 cursor-pointer py-2 text-sm group text-left"
                >
                  <span className="text-base mr-2">{lang.emoji}</span>
                  <span className="truncate group-hover:underline">{lang.name}</span>
                </SelectItem>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500 text-xs min-h-[48px] flex items-center justify-center">
                {t.noLanguagesFound || "Nothing found"}
              </div>
            )}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
};
export default LanguageSelector;
