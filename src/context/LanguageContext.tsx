import React, { createContext, useState, useContext, useEffect } from 'react';
import { languages, LanguageKey, addLanguage, TranslationData } from '../i18n';
import { 
  detectUserLanguage, 
  saveLanguagePreference, 
  SupportedLanguage
} from '../lib/languageUtils';

interface LanguageContextType {
  language: string;
  t: TranslationData;
  setLanguage: (lang: string) => void;
  supportedLanguages: string[];
  addLanguage: (key: string, translations: TranslationData) => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage?: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLanguage }) => {
  // Используем переданный язык или определяем автоматически ТОЛЬКО РАЗ
  const [language, setLanguage] = useState<string>(() => {
    if (initialLanguage) return initialLanguage;
    return detectUserLanguage();
  });

  // Пересчитываем поддерживаемые языки каждый раз при изменении languages
  const [supportedLanguages, setSupportedLanguages] = useState<string[]>(() => Object.keys(languages));

  // Автоматически обновляем supportedLanguages, если коллекция languages меняется
  useEffect(() => {
    setSupportedLanguages(Object.keys(languages));
  }, [languages]);

  // Сохраняем выбор пользователя в cookies и localStorage согласно best practices
  const changeLanguage = (lang: string) => {
    if (languages[lang as keyof typeof languages]) {
      setLanguage(lang);
      
      // Сохраняем предпочтение пользователя в cookies и localStorage
      saveLanguagePreference(lang as SupportedLanguage);
      
      // Обновляем язык HTML документа
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    } else {
      console.error(`Language "${lang}" is not supported`);
    }
  };

  // Добавление нового языка и синхронизация поддерживаемых языков
  const handleAddLanguage = (key: string, translations: TranslationData) => {
    addLanguage(key, translations);
    setSupportedLanguages(Object.keys(languages));
  };

  const value = {
    language,
    t: languages[language as keyof typeof languages] || languages.en,
    setLanguage: changeLanguage,
    supportedLanguages,
    addLanguage: handleAddLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
