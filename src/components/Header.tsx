
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import LanguageThemeControls from './LanguageThemeControls';
import SearchBar from './periodic-table/SearchBar';
import { Separator } from './ui/separator';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onSearch?: (query: string) => void;
  isElementPage?: boolean;
}

const Header = ({ onSearch, isElementPage = false }: HeaderProps) => {
  console.log('Header component rendering, isElementPage:', isElementPage);
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

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

  console.log('Header: About to return JSX');

  return (
    <header className="w-full bg-white dark:bg-gray-900 py-3 md:py-3 border-b border-gray-200 dark:border-gray-700 relative z-10">
      <div className="px-4 md:px-12">
        <div className="flex flex-col">
          {/* Top bar with site title (not h1!) and controls */}
          <div className="flex justify-between items-center mb-3">
            {/* Site name always left, not h1 */}
            <div className="flex-1 min-w-0 flex items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                {t.title}
              </span>
              {/* Подзаголовок только на главной */}
              {!isElementPage && (
                <span className="ml-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 truncate hidden sm:inline">
                  {t.subtitle}
                </span>
              )}
            </div>
            {/* Search & Lang/Theme controls right */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:block">
                <SearchBar onSearch={onSearch ?? (() => {})} />
              </div>
              <LanguageThemeControls />
            </div>
          </div>
          {/* Divider only on main page */}
          {!isElementPage && (
            <Separator className="my-4" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
