
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation, useNavigate } from 'react-router-dom';

// Map of language codes to display names
const languageNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
};

interface LanguageThemeControlsProps {
  compact?: boolean; // если true — меньше внешних отступов и размер для использования в маленьких заголовках
}

const LanguageThemeControls = ({ compact = false }: LanguageThemeControlsProps) => {
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size={compact ? "sm" : "icon"}
            className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
          >
            <Globe className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">{t.selectLanguage}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {supportedLanguages.map((lang) => (
            <DropdownMenuItem
              key={lang}
              onClick={() => changeLanguageAndUpdateUrl(lang)}
              className={language === lang ? "bg-accent" : ""}
            >
              {languageNames[lang] || lang}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
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

