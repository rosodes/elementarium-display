import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

// Массив поддерживаемых языков: emoji + название + код
const languageOptions = [
  { code: "en", name: "English", emoji: "🇬🇧" },
  { code: "ru", name: "Русский", emoji: "🇷🇺" },
  { code: "uk", name: "Українська", emoji: "🇺🇦" },
  { code: "zh-CN", name: "简体中文 (Chinese, Simplified)", emoji: "🇨🇳" },
  { code: "zh-TW", name: "繁體中文 (Chinese, Traditional)", emoji: "🇹🇼" },
  { code: "es", name: "Español (Spanish)", emoji: "🇪🇸" },
  { code: "hi", name: "हिन्दी (Hindi)", emoji: "🇮🇳" },
  { code: "ar", name: "العربية (Arabic)", emoji: "🇦🇪" },
  { code: "pt-BR", name: "Português (Brazilian)", emoji: "🇧🇷" },
  { code: "pt-PT", name: "Português (European)", emoji: "🇵🇹" },
  { code: "bn", name: "বাংলা (Bengali)", emoji: "🇧🇩" },
  { code: "ja", name: "日本語 (Japanese)", emoji: "🇯🇵" },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)", emoji: "🇮🇳" },
  { code: "de", name: "Deutsch (German)", emoji: "🇩🇪" },
];

interface LanguageThemeControlsProps {
  compact?: boolean;
}

const LanguageThemeControls = ({ compact = false }: LanguageThemeControlsProps) => {
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // URL update logic when changing language
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
      {/* Language selector with emoji and search */}
      <LanguageSelector
        language={language}
        supportedLanguages={supportedLanguages}
        allLanguageOptions={languageOptions}
        onChange={changeLanguageAndUpdateUrl}
        t={{
          selectLanguage: t.selectLanguage,
          // Use correct key from the UITranslations
          searchLanguage: t.ui?.searchPlaceholder || "Search language…",
          noLanguagesFound: t.ui?.noResults || "Nothing found"
        }}
      />
      {/* Theme toggle button */}
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
