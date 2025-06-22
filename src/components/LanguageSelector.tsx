import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { enhancedLanguageManager, LanguageConfig } from '../i18n/core/EnhancedLanguageManager';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { Button } from './ui/button';
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { 
  Globe, 
  Check, 
  ChevronDown, 
  Search,
  Star,
  Clock
} from 'lucide-react';
import { cn } from '../lib/utils';

interface LanguageSelectorProps {
  variant?: 'select' | 'popover' | 'compact';
  showFlags?: boolean;
  showNativeNames?: boolean;
  showRecentLanguages?: boolean;
  className?: string;
}

interface LanguageOptionProps {
  language: LanguageConfig;
  isSelected: boolean;
  isRecent?: boolean;
  onClick: () => void;
  showNativeName?: boolean;
}

const LanguageOption: React.FC<LanguageOptionProps> = ({
  language,
  isSelected,
  isRecent,
  onClick,
  showNativeName = true,
}) => {
  const getLanguageFlag = (code: string): string => {
    // Простая мапа кодов языков на флаги (emoji)
    const flagMap: Record<string, string> = {
      'en': '🇺🇸',
      'ru': '🇷🇺',
      'zh-CN': '🇨🇳',
      'zh-TW': '🇹🇼',
      'ar': '🇸🇦',
      'hi': '🇮🇳',
      'es': '🇪🇸',
      'fr': '🇫🇷',
      'fr-FR': '🇫🇷',
      'de': '🇩🇪',
      'ja': '🇯🇵',
      'pt-BR': '🇧🇷',
      'pt-PT': '🇵🇹',
      'uk': '🇺🇦',
      'bn': '🇧🇩',
      'pa': '🇮🇳',
      'ko': '🇰🇷',
      'it': '🇮🇹',
      'pl': '🇵🇱',
      'tr': '🇹🇷',
      'he': '🇮🇱',
      'fa': '🇮🇷',
      'th': '🇹🇭',
      'vi': '🇻🇳',
      'nl': '🇳🇱',
      'sv': '🇸🇪',
      'da': '🇩🇰',
      'no': '🇳🇴',
      'fi': '🇫🇮',
    };
    return flagMap[code] || '🌐';
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
        isSelected && "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-lg flex-shrink-0" role="img" aria-label={language.name}>
          {getLanguageFlag(language.code)}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm truncate">
              {language.name}
            </span>
            {isRecent && <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />}
          </div>
          {showNativeName && language.nativeName !== language.name && (
            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {language.nativeName}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {language.rtl && (
          <Badge variant="secondary" className="text-xs px-1 py-0">
            RTL
          </Badge>
        )}
        {isSelected && <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
      </div>
    </div>
  );
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'popover',
  showFlags = true,
  showNativeNames = true,
  showRecentLanguages = true,
  className = '',
}) => {
  const { language: currentLanguage, setLanguage } = useLanguage();
  const { t } = useValidatedTranslation('LanguageSelector');
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [supportedLanguages, setSupportedLanguages] = useState<LanguageConfig[]>([]);
  const [recentLanguages, setRecentLanguages] = useState<string[]>([]);
  const [loadingStats, setLoadingStats] = useState<Record<string, { state: string }>>({});

  // Загружаем список поддерживаемых языков
  useEffect(() => {
    const languages = enhancedLanguageManager.getSupportedLanguages();
    setSupportedLanguages(languages);
    
    const stats = enhancedLanguageManager.getLoadingStats();
    setLoadingStats(stats);

    // Загружаем недавние языки из localStorage
    const recent = JSON.parse(localStorage.getItem('recentLanguages') || '[]');
    setRecentLanguages(recent);
  }, []);

  // Подписываемся на изменения языка
  useEffect(() => {
    const unsubscribe = enhancedLanguageManager.subscribe((newLanguage) => {
      // Обновляем список недавних языков
      const recent = JSON.parse(localStorage.getItem('recentLanguages') || '[]');
      const updated = [newLanguage, ...recent.filter((lang: string) => lang !== newLanguage)].slice(0, 5);
      localStorage.setItem('recentLanguages', JSON.stringify(updated));
      setRecentLanguages(updated);
    });

    return unsubscribe;
  }, []);

  // Фильтрация языков по поисковому запросу
  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) {
      return supportedLanguages;
    }

    const query = searchQuery.toLowerCase();
    return supportedLanguages.filter(lang => 
      lang.name.toLowerCase().includes(query) ||
      lang.nativeName.toLowerCase().includes(query) ||
      lang.code.toLowerCase().includes(query)
    );
  }, [supportedLanguages, searchQuery]);

  // Группировка языков
  const languageGroups = useMemo(() => {
    const recent = showRecentLanguages ? 
      filteredLanguages.filter(lang => recentLanguages.includes(lang.code)) : [];
    const popular = filteredLanguages.filter(lang => 
      ['en', 'ru', 'zh-CN', 'es', 'fr', 'de', 'ja', 'ar', 'hi'].includes(lang.code)
    );
    const others = filteredLanguages.filter(lang => 
      !recent.some(r => r.code === lang.code) &&
      !popular.some(p => p.code === lang.code)
    );

    return { recent, popular, others };
  }, [filteredLanguages, recentLanguages, showRecentLanguages]);

  const handleLanguageChange = async (languageCode: string) => {
    try {
      await enhancedLanguageManager.setLanguage(languageCode);
      setLanguage(languageCode);
      setIsOpen(false);
      setSearchQuery('');
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  const getCurrentLanguageInfo = () => {
    return supportedLanguages.find(lang => lang.code === currentLanguage) || supportedLanguages[0];
  };

  if (variant === 'select') {
    return (
      <Select value={currentLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className={cn("w-auto min-w-[120px]", className)}>
          <Globe className="h-4 w-4 mr-2" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {supportedLanguages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center gap-2">
                {showFlags && (
                  <span className="text-sm">
                    {/* Здесь можно добавить флаги */}
                    🌐
                  </span>
                )}
                <span>{showNativeNames ? lang.nativeName : lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  if (variant === 'compact') {
    const currentLang = getCurrentLanguageInfo();
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={cn("h-8 px-2", className)}
      >
        <Globe className="h-4 w-4" />
        <span className="ml-1 text-xs font-medium">
          {currentLang?.code.toUpperCase()}
        </span>
      </Button>
    );
  }

  // Default popover variant
  const currentLang = getCurrentLanguageInfo();
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className={cn("justify-between min-w-[200px]", className)}
        >
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="truncate">
              {showNativeNames ? currentLang?.nativeName : currentLang?.name}
            </span>
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Command>
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder={t('searchLanguages', 'Поиск языков...')}
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="border-0 outline-none focus:ring-0"
            />
          </div>
          <CommandList>
            <CommandEmpty>
              {t('noLanguagesFound', 'Языки не найдены')}
            </CommandEmpty>
            
            <ScrollArea className="h-72">
              {/* Недавние языки */}
              {languageGroups.recent.length > 0 && (
                <>
                  <CommandGroup>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <Clock className="h-3 w-3" />
                      {t('recentLanguages', 'Недавние')}
                    </div>
                    {languageGroups.recent.map((lang) => (
                      <CommandItem
                        key={`recent-${lang.code}`}
                        value={lang.code}
                        onSelect={() => handleLanguageChange(lang.code)}
                        className="p-0"
                      >
                        <LanguageOption
                          language={lang}
                          isSelected={currentLanguage === lang.code}
                          isRecent={true}
                          onClick={() => handleLanguageChange(lang.code)}
                          showNativeName={showNativeNames}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <Separator />
                </>
              )}

              {/* Популярные языки */}
              {languageGroups.popular.length > 0 && (
                <>
                  <CommandGroup>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <Star className="h-3 w-3" />
                      {t('popularLanguages', 'Популярные')}
                    </div>
                    {languageGroups.popular.map((lang) => (
                      <CommandItem
                        key={`popular-${lang.code}`}
                        value={lang.code}
                        onSelect={() => handleLanguageChange(lang.code)}
                        className="p-0"
                      >
                        <LanguageOption
                          language={lang}
                          isSelected={currentLanguage === lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          showNativeName={showNativeNames}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  {languageGroups.others.length > 0 && <Separator />}
                </>
              )}

              {/* Остальные языки */}
              {languageGroups.others.length > 0 && (
                <CommandGroup>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                    <Globe className="h-3 w-3" />
                    {t('allLanguages', 'Все языки')}
                  </div>
                  {languageGroups.others.map((lang) => (
                    <CommandItem
                      key={`other-${lang.code}`}
                      value={lang.code}
                      onSelect={() => handleLanguageChange(lang.code)}
                      className="p-0"
                    >
                      <LanguageOption
                        language={lang}
                        isSelected={currentLanguage === lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        showNativeName={showNativeNames}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </ScrollArea>
          </CommandList>
        </Command>
        
        {/* Статистика загрузки (только в dev mode) */}
        {process.env.NODE_ENV === 'development' && (
          <>
            <Separator />
            <div className="p-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Загружено:</span>
                <span>
                  {Object.values(loadingStats).filter(s => s.state === 'loaded').length} / {Object.keys(loadingStats).length}
                </span>
              </div>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
