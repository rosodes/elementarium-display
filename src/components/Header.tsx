
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

// Map of language codes to display names
const languageNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
  // Add more languages here as they are supported
};

const Header = () => {
  const { t, language, setLanguage, supportedLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-4 px-4 flex justify-end items-center">
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
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
