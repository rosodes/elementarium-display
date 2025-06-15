
import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
  const bigLanguageList = useMemo(
    () => allLanguageOptions.filter((opt) => supportedLanguages.includes(opt.code)),
    [allLanguageOptions, supportedLanguages]
  );

  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Только при открытии — фокусируем поле поиска
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

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

  return (
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
      <SelectContent align="end" className="z-[200] bg-white dark:bg-gray-900 max-h-80 min-w-[200px] overflow-y-auto p-0" style={{ minWidth: 220 }}>
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
            // autoFocus убрано, теперь по событию открытия
          />
        </div>
        {filteredLanguages.length > 0 ? (
          filteredLanguages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="flex items-center gap-2 cursor-pointer py-2 text-sm group"
            >
              <span className="text-base mr-2">{lang.emoji}</span>
              <span className="truncate group-hover:underline">{lang.name}</span>
            </SelectItem>
          ))
        ) : (
          <div className="px-4 py-2 text-gray-500 text-xs min-h-[48px] flex items-center justify-center">{t.noLanguagesFound || "Nothing found"}</div>
        )}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;

