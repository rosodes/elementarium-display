import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';
import { Moon, Sun, Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface LanguageThemeControlsProps {
  onLanguageChange?: (language: string) => void;
}

const LanguageThemeControls = ({ onLanguageChange }: LanguageThemeControlsProps) => {
  const { language, setLanguage, supportedLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageChange = (lang: string) => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    } else {
      setLanguage(lang);
    }
  };

  const languageNames = {
    en: 'English',
    ru: 'Русский',
    uk: 'Українська',
    fr: 'Français',
    de: 'Deutsch',
    es: 'Español',
    ja: '日本語',
    zh: '中文'
  };

  const getCurrentLanguageName = () => {
    return languageNames[language as keyof typeof languageNames] || 'English';
  };

  const getThemeIcon = () => {
    return theme === 'dark' ? Sun : Moon;
  };

  const getThemeLabel = () => {
    return theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему';
  };

  const ThemeIcon = getThemeIcon();

  return (
    <div className="flex items-center space-x-3" role="group" aria-label="Настройки языка и темы">
      {/* Переключатель темы с высокой контрастностью */}
      <Button
        variant="outline"
        size="lg"
        onClick={toggleTheme}
        className="flex items-center justify-center p-3 h-12 w-12
                   border-4 border-gray-900 dark:border-gray-100 
                   bg-white dark:bg-gray-900 
                   text-gray-900 dark:text-gray-100
                   hover:bg-gray-100 dark:hover:bg-gray-800
                   hover:border-gray-700 dark:hover:border-gray-300
                   focus:ring-4 focus:ring-blue-600 focus:ring-offset-2
                   transition-all duration-300 rounded-xl
                   hover:scale-110 focus:scale-110"
        aria-label={getThemeLabel()}
        title={getThemeLabel()}
      >
        <ThemeIcon className="h-6 w-6" aria-hidden="true" />
      </Button>

      {/* Селектор языка с высокой контрастностью */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 px-4 py-3 h-12 min-w-[120px]
                       border-4 border-gray-900 dark:border-gray-100 
                       bg-white dark:bg-gray-900 
                       text-gray-900 dark:text-gray-100
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       hover:border-gray-700 dark:hover:border-gray-300
                       focus:ring-4 focus:ring-blue-600 focus:ring-offset-2
                       transition-all duration-300 rounded-xl
                       hover:scale-105 focus:scale-105"
            aria-label={`Текущий язык: ${getCurrentLanguageName()}. Нажмите для выбора другого языка`}
            aria-expanded="false"
            aria-haspopup="menu"
          >
            <Globe className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm font-bold truncate">
              {getCurrentLanguageName()}
            </span>
            <ChevronDown className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent 
          align="end"
          className="w-48 p-2 
                     border-4 border-gray-900 dark:border-gray-100 
                     bg-white dark:bg-gray-900 
                     shadow-2xl rounded-xl
                     focus:ring-4 focus:ring-blue-600"
          role="menu"
          aria-label="Выбор языка интерфейса"
        >
          {supportedLanguages.map((lang) => (
            <DropdownMenuItem
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-lg
                text-base font-bold cursor-pointer
                transition-all duration-300
                focus:ring-4 focus:ring-blue-600 focus:ring-offset-2
                hover:scale-105 focus:scale-105
                ${language === lang 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border-2 border-blue-600' 
                  : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                }
              `}
              role="menuitem"
              aria-label={`Переключить язык на ${languageNames[lang as keyof typeof languageNames]}`}
              aria-current={language === lang ? 'true' : 'false'}
            >
              <Globe className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span className="flex-1">
                {languageNames[lang as keyof typeof languageNames] || lang.toUpperCase()}
              </span>
              {language === lang && (
                <div 
                  className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900" 
                  aria-hidden="true"
                  role="img"
                  aria-label="Выбранный язык"
                />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageThemeControls;
