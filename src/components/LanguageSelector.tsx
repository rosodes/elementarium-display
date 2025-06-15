
import React, { useState, useRef, useEffect } from "react";
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

const MAX_VISIBLE = 12;

// Новый компонент выбора языка
const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  supportedLanguages,
  allLanguageOptions,
  onChange,
  t,
}) => {
  // Отдельно убеждаемся что русский и украинский есть всегда в списке (даже если их по ошибке нет в supportedLanguages)
  const extendedSupported = Array.from(new Set([
    ...supportedLanguages,
    'ru',
    'uk', // обязателен!
  ]));

  // Список языков показываем только те, что реально описаны
  const realLanguages = allLanguageOptions.filter(
    (l) => extendedSupported.includes(l.code)
  );

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Фильтрация
  const filtered = React.useMemo(() => {
    if (!search.trim()) return realLanguages;
    const s = search.trim().toLowerCase();
    return realLanguages.filter((l) =>
      l.name.toLowerCase().includes(s) ||
      l.code.toLowerCase().includes(s) ||
      (l.emoji && l.emoji.includes(s))
    );
  }, [realLanguages, search]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.setSelectionRange(
          inputRef.current.value.length,
          inputRef.current.value.length
        );
      }, 15);
    }
    if (!isOpen) setSearch("");
  }, [isOpen]);

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
          className="w-[210px] h-10 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 justify-start text-left"
          aria-label={t.selectLanguage || "Select language"}
        >
          <span className="flex items-center gap-2 w-full truncate text-left">
            <span>{selected?.emoji || "🌐"}</span>
            <SelectValue>{selected?.name || language}</SelectValue>
          </span>
        </SelectTrigger>
        <SelectContent
          align="end"
          className="z-[1200] bg-white dark:bg-gray-900 p-0 border-gray-200 dark:border-gray-800 text-left shadow-xl"
          style={{ minWidth: 230, maxWidth: 340, fontSize: 15 }}
        >
          <div className="p-2 sticky top-0 bg-white dark:bg-gray-900 z-10">
            <Input
              ref={inputRef}
              aria-label={t.searchLanguage || "Find language"}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchLanguage || "Search…"}
              className="h-8 px-2 text-sm border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onKeyDown={e => e.stopPropagation()}
              autoComplete="off"
            />
          </div>
          <ScrollArea
            className="max-h-[404px] min-h-[40px] text-left"
            style={{
              maxHeight: `calc(${MAX_VISIBLE} * 37px)`,
              minWidth: 210,
            }}
          >
            {filtered.length > 0 ? (
              filtered.map((lang) => (
                <SelectItem
                  key={lang.code}
                  value={lang.code}
                  className={`flex items-center gap-2 cursor-pointer py-2 pl-2 pr-3 text-[15px] group transition-colors
                  ${lang.code === language ? "bg-blue-50 dark:bg-blue-900/20 font-semibold" : ""}
                  hover:bg-blue-100 dark:hover:bg-blue-800`}
                >
                  <span className="text-base mr-2">{lang.emoji}</span>
                  <span className="truncate group-hover:underline">{lang.name}</span>
                  {/* Галочка у выбранного языка */}
                  {lang.code === language && (
                    <span className="ml-auto text-blue-700 dark:text-blue-300">&#10003;</span>
                  )}
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
