import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

// Массив языков теперь соответствует вашему списку полностью:
const languageOptions = [
  { code: "en",      name: "English", emoji: "🇬🇧" },
  { code: "zh-CN",   name: "简体中文 (Chinese, Simplified)", emoji: "🇨🇳" },
  { code: "zh-TW",   name: "繁體中文 (Chinese, Traditional)", emoji: "🇹🇼" },
  { code: "es",      name: "Español (Spanish)", emoji: "🇪🇸" },
  { code: "hi",      name: "हिन्दी (Hindi)", emoji: "🇮🇳" },
  { code: "ar",      name: "العربية (Arabic)", emoji: "🇦🇪" },
  { code: "pt-BR",   name: "Português (Brazilian)", emoji: "🇧🇷" },
  { code: "pt-PT",   name: "Português (European)", emoji: "🇵🇹" },
  { code: "bn",      name: "বাংলা (Bengali)", emoji: "🇧🇩" },
  { code: "ru",      name: "Русский", emoji: "🇷🇺" },
  { code: "ja",      name: "日本語 (Japanese)", emoji: "🇯🇵" },
  { code: "pa",      name: "ਪੰਜਾਬੀ (Punjabi)", emoji: "🇮🇳" },
  { code: "de",      name: "Deutsch (German)", emoji: "🇩🇪" },
  { code: "jv",      name: "Basa Jawa (Javanese)", emoji: "🇮🇩" },
  { code: "lah",     name: "لہندا (Western Punjabi)", emoji: "🇵🇰" },
  { code: "tr",      name: "Türkçe (Turkish)", emoji: "🇹🇷" },
  { code: "fr-FR",   name: "Français (French, European)", emoji: "🇫🇷" },
  { code: "fr-CA",   name: "Français (French, Canada)", emoji: "🇨🇦" },
  { code: "vi",      name: "Tiếng Việt (Vietnamese)", emoji: "🇻🇳" },
  { code: "ta",      name: "தமிழ் (Tamil)", emoji: "🇮🇳" },
  { code: "ur",      name: "اُردُو‎ (Urdu)", emoji: "🇵🇰" },
  { code: "fa",      name: "فارسی (Persian/Farsi)", emoji: "🇮🇷" },
  { code: "ml",      name: "മലയാളം (Malayalam)", emoji: "🇮🇳" },
  { code: "ko",      name: "한국어 (Korean)", emoji: "🇰🇷" },
  { code: "it",      name: "Italiano (Italian)", emoji: "🇮🇹" },
  { code: "th",      name: "ไทย (Thai)", emoji: "🇹🇭" },
  { code: "gu",      name: "ગુજરાતી (Gujarati)", emoji: "🇮🇳" },
  { code: "pl",      name: "Polski (Polish)", emoji: "🇵🇱" },
  { code: "uk",      name: "Українська (Ukrainian)", emoji: "🇺🇦" },
  { code: "kn",      name: "ಕನ್ನಡ (Kannada)", emoji: "🇮🇳" },
  { code: "sw",      name: "Kiswahili (Swahili)", emoji: "🇰🇪" },
  { code: "ary",     name: "العربية المغربية (Moroccan Arabic)", emoji: "🇲🇦" },
  { code: "af",      name: "Afrikaans (Afrikaans)", emoji: "🇿🇦" },
  { code: "tl",      name: "Tagalog (Filipino)", emoji: "🇵🇭" },
  { code: "fil",     name: "Filipino (Tagalog)", emoji: "🇵🇭" },
  { code: "eu",      name: "Euskara (Basque)", emoji: "🇪🇸" },
  { code: "su",      name: "Basa Sunda (Sundanese)", emoji: "🇮🇩" },
  { code: "ha",      name: "Hausa (Hausa)", emoji: "🇳🇬" },
  { code: "ro",      name: "Română (Romanian)", emoji: "🇷🇴" },
  { code: "nl",      name: "Nederlands (Dutch)", emoji: "🇳🇱" },
  { code: "el",      name: "Ελληνικά (Greek)", emoji: "🇬🇷" },
  { code: "sr-Cyrl", name: "Српски (Serbian Cyrillic)", emoji: "🇷🇸" },
  { code: "sr-Latn", name: "Srpski (Serbian Latin)", emoji: "🇷🇸" },
  { code: "sl",      name: "Slovenščina (Slovenian)", emoji: "🇸🇮" },
  { code: "sk",      name: "Slovenčina (Slovak)", emoji: "🇸🇰" },
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
