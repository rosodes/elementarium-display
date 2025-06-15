
import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
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

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  supportedLanguages,
  allLanguageOptions,
  onChange,
  t,
}) => {
  // Для теста создаём длинный список языков
  const bigLanguageList = useMemo(() => {
    if (allLanguageOptions.length >= 20) {
      return allLanguageOptions.filter(opt => supportedLanguages.includes(opt.code));
    }
    // Добавляем 20 фиктивных языков для теста скролла
    const extraLanguages = Array.from({ length: 20 }, (_, i) => ({
      code: `test${i+1}`,
      name: `Test Language ${i+1}`,
      emoji: "🌐"
    })).map((lang, idx) => ({
      ...lang,
      code: lang.code,
    }));
    return [
      ...allLanguageOptions.filter(opt => supportedLanguages.includes(opt.code)),
      ...extraLanguages
    ];
  }, [allLanguageOptions, supportedLanguages]);

  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Фокусируем только при открытии dropdown (текущий обработчик фокуса)
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Используем setTimeout чтобы дать времени DOM обновиться
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
      }, 10);
    }
  }, [isOpen]);

  // Не сбрасывать фокус при каждом фильтре, только при закрытии
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) setSearch("");
  };

  // Поиск по языкам
  const filteredLanguages = useMemo(() => {
    const text = search.trim().toLowerCase();
    if (!text) return bigLanguageList;
    return bigLanguageList.filter((l) =>
      l.name.toLowerCase().includes(text) ||
      l.code.toLowerCase().includes(text) ||
      (l.emoji && l.emoji.includes(text))
    );
  }, [search, bigLanguageList]);

  const selectedLanguage = bigLanguageList.find(l => l.code === language);

  // Клик по языку возвращает фокус в поле ввода поиска
  const handleSelectItemClick = useCallback(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }, []);

  return (
    <div className="relative">
      <Select
        value={language}
        onValueChange={onChange}
        open={isOpen}
        onOpenChange={handleOpenChange}
      >
        <SelectTrigger
          className={`w-[180px] h-10 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900`}
          aria-label={t.selectLanguage || "Select language"}
        >
          <span className="flex items-center gap-2 w-full truncate">
            <span>
              {selectedLanguage?.emoji || "🌐"}
            </span>
            <SelectValue>
              {selectedLanguage?.name || language}
            </SelectValue>
          </span>
        </SelectTrigger>

        <SelectContent
          align="end"
          className="z-[200] bg-white dark:bg-gray-900 p-0"
          style={{ minWidth: 220, maxWidth: 320 }}
        >
          {/* sticky поиск */}
          <div className="p-2 sticky top-0 bg-white dark:bg-gray-900 z-10">
            <Input
              ref={inputRef}
              aria-label={t.searchPlaceholder || "Find language"}
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder || "Search…"}
              className="h-8 px-2 text-sm border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onKeyDown={e => e.stopPropagation()}
              tabIndex={0}
              autoComplete="off"
            />
          </div>
          {/* Ограничение по высоте и скролл внутри - выводим только если есть языки */}
          <ScrollArea
            className="max-h-80 min-h-[40px]"
            style={{ maxHeight: 320, minWidth: 200 }}
          >
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <SelectItem
                  key={lang.code}
                  value={lang.code}
                  className="flex items-center gap-2 cursor-pointer py-2 text-sm group"
                  onClick={handleSelectItemClick}
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
