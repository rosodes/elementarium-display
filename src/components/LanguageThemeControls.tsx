
import { useValidatedTranslation } from '@/hooks/useValidatedTranslation';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

// Универсальный справочник: emoji и локальное описание для всех языков, даже если их не загрузили
const languageMeta: Record<string, { name: string; emoji: string }> = {
  en:      { name: "English", emoji: "🇬🇧" },
  "zh-CN": { name: "简体中文 (Chinese, Simplified)", emoji: "🇨🇳" },
  "zh-TW": { name: "繁體中文 (Chinese, Traditional)", emoji: "🇹🇼" },
  es:      { name: "Español (Spanish)", emoji: "🇪🇸" },
  hi:      { name: "हिन्दी (Hindi)", emoji: "🇮🇳" },
  ar:      { name: "العربية (Arabic)", emoji: "🇦🇪" },
  "pt-BR": { name: "Português (Brazilian)", emoji: "🇧🇷" },
  "pt-PT": { name: "Português (European)", emoji: "🇵🇹" },
  bn:      { name: "বাংলা (Bengali)", emoji: "🇧🇩" },
  ru:      { name: "Русский", emoji: "🇷🇺" },
  ja:      { name: "日本語 (Japanese)", emoji: "🇯🇵" },
  pa:      { name: "ਪੰਜਾਬੀ (Punjabi)", emoji: "🇮🇳" },
  de:      { name: "Deutsch (German)", emoji: "🇩🇪" },
  jv:      { name: "Basa Jawa (Javanese)", emoji: "🇮🇩" },
  lah:     { name: "لہندا (Western Punjabi)", emoji: "🇵🇰" },
  tr:      { name: "Türkçe (Turkish)", emoji: "🇹🇷" },
  "fr-FR": { name: "Français (French, European)", emoji: "🇫🇷" },
  "fr-CA": { name: "Français (French, Canada)", emoji: "🇨🇦" },
  vi:      { name: "Tiếng Việt (Vietnamese)", emoji: "🇻🇳" },
  ta:      { name: "தமிழ் (Tamil)", emoji: "🇮🇳" },
  ur:      { name: "اُردُو‎ (Urdu)", emoji: "🇵🇰" },
  fa:      { name: "فارسی (Persian/Farsi)", emoji: "🇮🇷" },
  ml:      { name: "മലയാളം (Malayalam)", emoji: "🇮🇳" },
  ko:      { name: "한국어 (Korean)", emoji: "🇰🇷" },
  it:      { name: "Italiano (Italian)", emoji: "🇮🇹" },
  th:      { name: "ไทย (Thai)", emoji: "🇹🇭" },
  gu:      { name: "ગુજરાતી (Gujarati)", emoji: "🇮🇳" },
  pl:      { name: "Polski (Polish)", emoji: "🇵🇱" },
  uk:      { name: "Українська (Ukrainian)", emoji: "🇺🇦" },
  kn:      { name: "ಕನ್ನಡ (Kannada)", emoji: "🇮🇳" },
  sw:      { name: "Kiswahili (Swahili)", emoji: "🇰🇪" },
  ary:     { name: "العربية المغربية (Moroccan Arabic)", emoji: "🇲🇦" },
  af:      { name: "Afrikaans (Afrikaans)", emoji: "🇿🇦" },
  tl:      { name: "Tagalog (Filipino)", emoji: "🇵🇭" },
  fil:     { name: "Filipino (Tagalog)", emoji: "🇵🇭" },
  eu:      { name: "Euskara (Basque)", emoji: "🇪🇸" },
  su:      { name: "Basa Sunda (Sundanese)", emoji: "🇮🇩" },
  ha:      { name: "Hausa (Hausa)", emoji: "🇳🇬" },
  ro:      { name: "Română (Romanian)", emoji: "🇷🇴" },
  nl:      { name: "Nederlands (Dutch)", emoji: "🇳🇱" },
  el:      { name: "Ελληνικά (Greek)", emoji: "🇬🇷" },
  "sr-Cyrl": { name: "Српски (Serbian Cyrillic)", emoji: "🇷🇸" },
  "sr-Latn": { name: "Srpski (Serbian Latin)", emoji: "🇷🇸" },
  sl:      { name: "Slovenščina (Slovenian)", emoji: "🇸🇮" },
  sk:      { name: "Slovenčina (Slovak)", emoji: "🇸🇰" },
};

interface LanguageThemeControlsProps {
  compact?: boolean;
}

const LanguageThemeControls = ({ compact = false }: LanguageThemeControlsProps) => {
  const { t } = useValidatedTranslation('LanguageThemeControls');
  const { language, setLanguage, supportedLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Формируем динамический массив для LanguageSelector:
  const allLanguageOptions = React.useMemo(() => {
    // Ключи только из реально поддерживаемых языков (из контекста)
    return supportedLanguages.map((code) => {
      const meta = languageMeta[code];
      return {
        code,
        name: meta?.name || code,
        emoji: meta?.emoji || "🌐"
      }
    });
  }, [supportedLanguages]);

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
      {/* Language selector с автогенерируемыми языками */}
      <LanguageSelector
        language={language}
        supportedLanguages={supportedLanguages}
        allLanguageOptions={allLanguageOptions}
        onChange={changeLanguageAndUpdateUrl}
        t={{
          selectLanguage: t('selectLanguage', 'Select Language'),
          searchLanguage: t('ui.searchPlaceholder', 'Search language…'),
          noLanguagesFound: t('ui.noResults', 'Nothing found')
        }}
      />
      {/* Theme toggle button */}
      <Button
        variant="outline"
        size={compact ? "sm" : "icon"}
        onClick={toggleTheme}
        aria-label={t('toggleTheme', 'Toggle theme')}
        className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
      >
        {theme === 'light' ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">{t('toggleTheme', 'Toggle theme')}</span>
      </Button>
    </div>
  );
};

export default LanguageThemeControls;
