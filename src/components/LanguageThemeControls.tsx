
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useMemo } from "react";

// Массив поддерживаемых языков: emoji + название + код
const languageOptions = [
  { code: "en", name: "English", emoji: "🇺🇸" },
  { code: "ru", name: "Русский", emoji: "🇷🇺" },
  { code: "uk", name: "Українська", emoji: "🇺🇦" },
  // Здесь можно добавить много других языков:
  // { code: "fr", name: "Français", emoji: "🇫🇷" }, ...
];

interface LanguageThemeControlsProps {
  compact?: boolean;
}

const LanguageThemeControls = ({ compact = false }: LanguageThemeControlsProps) => {
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Build real supported languages list
  const bigLanguageList = languageOptions.filter(opt => supportedLanguages.includes(opt.code));

  // --- Новое состояние для поиска
  const [search, setSearch] = useState("");

  // Фильтруем языки по поисковому запросу
  const filteredLanguages = useMemo(() => {
    const text = search.trim().toLowerCase();
    if (!text) return bigLanguageList;
    return bigLanguageList.filter(l =>
      l.name.toLowerCase().includes(text) ||
      l.code.toLowerCase().includes(text) ||
      (l.emoji && l.emoji.includes(text))
    );
  }, [search, bigLanguageList]);

  // URL update логика
  const changeLanguageAndUpdateUrl = (newLang: string) => {
    setLanguage(newLang);
    const pathParts = location.pathname.split('/').filter(Boolean);
    let newPathParts: string[] = [];
    if (pathParts.length > 0 && supportedLanguages.includes(pathParts[0])) {
      if (newLang === 'en') {
        newPathParts = pathParts.slice(1);
      } else {
        newPathParts = [newLang, ...pathParts.slice(1)];
      }
    } else {
      if (newLang !== 'en') {
        newPathParts = [newLang, ...pathParts];
      } else {
        newPathParts = [...pathParts];
      }
    }
    const newPath = newPathParts.length === 0 ? '/' : `/${newPathParts.join('/')}`;
    navigate(newPath);
  };

  return (
    <div className={`flex items-center ${compact ? 'gap-1' : 'gap-3'} ml-auto`}>
      {/* Языковой селект с флагами-эмодзи и поиском */}
      <Select
        value={language}
        onValueChange={changeLanguageAndUpdateUrl}
      >
        <SelectTrigger
          className={`w-[160px] ${compact ? "h-8 text-xs" : "h-10"} border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900`}
          aria-label={t.selectLanguage}
        >
          <span className="flex items-center gap-2 w-full truncate">
            <span>
              {bigLanguageList.find(l => l.code === language)?.emoji || "🌐"}
            </span>
            <SelectValue>
              {bigLanguageList.find(l => l.code === language)?.name || language}
            </SelectValue>
          </span>
        </SelectTrigger>
        <SelectContent align="end" className="z-[200] bg-white dark:bg-gray-900 max-h-80 min-w-[180px] overflow-y-auto p-0">
          {/* Поле поиска */}
          <div className="p-2 sticky top-0 bg-white dark:bg-gray-900 z-10">
            <Input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t.searchLanguage || "Search language…"}
              className="h-8 px-2 text-sm"
              autoFocus
            />
          </div>
          {/* Список языков */}
          {filteredLanguages.length > 0 ? (
            filteredLanguages.map((lang) => (
              <SelectItem
                key={lang.code}
                value={lang.code}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="mr-2">{lang.emoji}</span>
                <span>{lang.name}</span>
              </SelectItem>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 text-xs">{t.noLanguagesFound || "Nothing found"}</div>
          )}
        </SelectContent>
      </Select>
      {/* Кнопка переключения темы */}
      <Button
        variant="outline"
        size={compact ? "sm" : "icon"}
        onClick={toggleTheme}
        aria-label={t.toggleTheme}
        className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
      >
        {theme === 'light' ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">{t.toggleTheme}</span>
      </Button>
    </div>
  );
};

export default LanguageThemeControls;
