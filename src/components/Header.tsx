
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
// Removed: import Legend from './periodic-table/Legend';
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
    
    // Получаем текущий путь и обновляем языковой сегмент при необходимости
    const pathParts = location.pathname.split('/').filter(Boolean);
    let newPathParts: string[] = [];
    
    // Проверяем, является ли первый сегмент кодом языка
    if (pathParts.length > 0 && supportedLanguages.includes(pathParts[0])) {
      if (newLang === 'en') {
        // Если переключаемся на английский, убираем языковой сегмент
        newPathParts = pathParts.slice(1);
      } else {
        // Заменяем языковой сегмент
        newPathParts = [newLang, ...pathParts.slice(1)];
      }
    } else {
      // Если первый сегмент не является языковым, добавляем языковой сегмент
      // только если язык не английский
      if (newLang !== 'en') {
        newPathParts = [newLang, ...pathParts];
      } else {
        newPathParts = [...pathParts];
      }
    }
    
    // Навигация на новый URL
    const newPath = newPathParts.length === 0 ? '/' : `/${newPathParts.join('/')}`;
    navigate(newPath);
  };

  return (
    <header className={`py-6 w-full ${isElementPage ? 'bg-transparent' : ''}`}>
      <div className="px-4 md:px-12">
        <div className="flex flex-col">
          {/* Top bar with title and controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">
              {!isElementPage && (
                <>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{t.title}</h1>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">{t.subtitle}</p>
                </>
              )}
            </div>

            <div className="flex items-center space-x-6">
              {/* Search bar positioned right */}
              {onSearch && !isElementPage && <SearchBar onSearch={onSearch} />}
              
              <div className="flex items-center space-x-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700">
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
                  size="icon"
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
            </div>
          </div>

          {!isElementPage && (
            <>
              <Separator className="my-4" />
              {/* Legend component removed */}
              {/* <div className="max-w-md">
                <Legend />
              </div> */}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
