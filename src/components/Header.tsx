
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
import SearchBar from './periodic-table/SearchBar';
import Legend from './periodic-table/Legend';

// Map of language codes to display names
const languageNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
  // Add more languages here as they are supported
};

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-6 w-full">
      <div className="px-12">
        <div className="flex flex-col">
          {/* Top bar with title and controls */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{t.title}</h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">{t.subtitle}</p>
            </div>

            <div className="flex items-center gap-4">
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
                      onClick={() => setLanguage(lang)}
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

          {/* Search and legend */}
          <div className="max-w-md">
            <SearchBar onSearch={onSearch} />
            <Legend />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
