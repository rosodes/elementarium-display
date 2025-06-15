
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
import LanguageThemeControls from './LanguageThemeControls';
import SearchBar from './periodic-table/SearchBar';
import { Separator } from './ui/separator';
import { useNavigate, useLocation } from 'react-router-dom';

// Map of language codes to display names
const languageNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
  // Add more languages here as they are supported
};

interface HeaderProps {
  onSearch?: (query: string) => void;
  isElementPage?: boolean;
}

const Header = ({ onSearch, isElementPage = false }: HeaderProps) => {
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Функция для обновления URL с языковым параметром
  const changeLanguageAndUpdateUrl = (newLang: string) => {
    setLanguage(newLang);
    
    const pathParts = location.pathname.split('/').filter(Boolean);
    let newPathParts: string[] = [];
    
    // Проверяем, является ли первый сегмент кодом языка
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
    <header className={`py-6 w-full bg-white dark:bg-gray-900`}>
      <div className="px-4 md:px-12">
        <div className="flex flex-col">
          {/* Top bar with title and controls */}
          <div className="flex justify-between items-center mb-4">
            {/* Название сайта и подзаголовок — всегда слева */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 truncate">{t.title}</h1>
              {/* Можно не показывать подзаголовок на странице элемента, если нужно компактнее */}
              {!isElementPage && <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">{t.subtitle}</p>}
            </div>

            {/* Поиск и Language/Theme Controls справа */}
            <div className="flex items-center space-x-6">
              {/* Поиск должен отображаться на всех страницах */}
              <div className="hidden md:block">
                <SearchBar onSearch={onSearch ?? (() => {})} />
              </div>
              <LanguageThemeControls />
            </div>
          </div>

          {/* Для главной страницы разделитель и (ранее тут была легенда) */}
          {!isElementPage && (
            <>
              <Separator className="my-4" />
              {/* Legend компонент был удалён ранее */}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
