import { useLanguage } from '../context/LanguageContext';
import LanguageThemeControls from './LanguageThemeControls';
import { useNavigate, useLocation } from 'react-router-dom';
import { Atom, Search } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface HeaderProps {
  isElementPage?: boolean;
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

const Header = ({ isElementPage = false, onSearch, searchQuery = '' }: HeaderProps) => {
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  // Синхронизируем локальное состояние с внешним searchQuery
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  // Функция для обновления URL с языковым параметром
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

  const handleLogoClick = () => {
    const basePath = language === 'en' ? '/' : `/${language}`;
    navigate(basePath);
  };

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  }, [onSearch]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(localSearchQuery);
    }
  }, [onSearch, localSearchQuery]);

  // Локализованный текст для поиска
  const getSearchPlaceholder = () => {
    switch (language) {
      case 'ru':
        return 'Поиск элементов по названию, символу или номеру...';
      case 'uk':
        return 'Пошук елементів за назвою, символом або номером...';
      case 'fr':
        return 'Recherche d\'éléments par nom, symbole ou numéro...';
      default:
        return 'Search elements by name, symbol or number...';
    }
  };

  return (
    <header 
      className="w-full bg-white dark:bg-gray-900 border-b-4 border-gray-900 dark:border-gray-100 sticky top-0 z-50"
      role="banner"
      aria-label="Основная навигация сайта"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Логотип и название с улучшенной контрастностью */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group flex-shrink-0 
                       focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-offset-2 
                       rounded-lg p-2 -m-2 transition-all duration-300 
                       hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            aria-label="Перейти на главную страницу периодической таблицы"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLogoClick();
              }
            }}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-700 dark:bg-blue-600 rounded-xl 
                           group-hover:bg-blue-800 dark:group-hover:bg-blue-500 
                           transition-colors border-2 border-gray-900 dark:border-gray-100
                           group-hover:scale-110 group-focus:scale-110">
              <Atom className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-gray-900 dark:text-gray-100 
                           group-hover:text-blue-700 dark:group-hover:text-blue-400 
                           transition-colors leading-tight">
                {t.title}
              </h1>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300 hidden lg:block leading-tight">
                {t.subtitle}
              </span>
            </div>
          </div>

          {/* Центральный поиск с высокой контрастностью */}
          {onSearch && (
            <div className="flex-1 max-w-lg mx-6">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-600 dark:text-gray-400" aria-hidden="true" />
                  <Input
                    type="text"
                    placeholder={getSearchPlaceholder()}
                    value={localSearchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-16 py-4 text-lg font-medium
                             border-4 border-gray-900 dark:border-gray-100 rounded-xl 
                             bg-white dark:bg-gray-800 
                             text-gray-900 dark:text-gray-100
                             focus:ring-4 focus:ring-blue-600 focus:ring-offset-2 focus:border-blue-600
                             placeholder-gray-600 dark:placeholder-gray-400
                             transition-all duration-300
                             hover:border-gray-700 dark:hover:border-gray-300"
                    autoComplete="off"
                    role="searchbox"
                    aria-label="Поиск химических элементов"
                    aria-describedby="search-help"
                  />
                  <div id="search-help" className="sr-only">
                    Введите название элемента, химический символ или атомный номер для поиска
                  </div>
                </div>
                {localSearchQuery && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="lg"
                    onClick={() => {
                      setLocalSearchQuery('');
                      if (onSearch) onSearch('');
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 
                             h-10 w-10 p-0 text-gray-600 dark:text-gray-400 
                             hover:text-gray-900 dark:hover:text-gray-100
                             hover:bg-gray-100 dark:hover:bg-gray-700
                             focus:ring-4 focus:ring-blue-600 focus:ring-offset-2
                             border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600
                             rounded-lg transition-all duration-300"
                    aria-label="Очистить поле поиска"
                  >
                    <span className="text-2xl font-black" aria-hidden="true">×</span>
                  </Button>
                )}
              </form>
            </div>
          )}

          {/* Настройки языка и темы с улучшенной доступностью */}
          <div className="flex items-center flex-shrink-0">
            <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-300 dark:border-gray-600">
              <LanguageThemeControls onLanguageChange={changeLanguageAndUpdateUrl} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
