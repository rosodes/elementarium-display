
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
import { LanguageKey } from '@/i18n';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const languages: { key: LanguageKey; label: string }[] = [
    { key: 'en', label: 'English' },
    { key: 'ru', label: 'Русский' }
  ];

  return (
    <header className="pt-8 pb-4 px-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
        {t.title}
      </h1>
      
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Globe className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Toggle language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem 
                key={lang.key}
                onClick={() => setLanguage(lang.key)}
                className={language === lang.key ? "bg-accent" : ""}
              >
                {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          aria-label={t.toggleTheme}
        >
          {theme === 'light' ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">{t.toggleTheme}</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
