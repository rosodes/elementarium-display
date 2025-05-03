
import React, { createContext, useState, useContext, useEffect } from 'react';
import { languages, LanguageKey, TranslationData, addLanguage } from '../i18n';

interface LanguageContextType {
  language: string;
  t: TranslationData;
  setLanguage: (lang: string) => void;
  supportedLanguages: string[];
  addLanguage: (key: string, translations: TranslationData) => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage?: string; // Добавляем возможность задать начальный язык при SSR
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLanguage }) => {
  const [language, setLanguage] = useState<string>(initialLanguage || 'en');
  const [supportedLanguages, setSupportedLanguages] = useState<string[]>(Object.keys(languages));
  
  // Синхронизируем язык с localStorage при запуске на клиенте
  useEffect(() => {
    if (typeof window !== 'undefined') { // Проверяем, что мы на клиенте
      // Если нет initialLanguage (SSR), получаем из localStorage или по настройкам браузера
      if (!initialLanguage) {
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage && languages[savedLanguage as keyof typeof languages]) {
          setLanguage(savedLanguage);
        } else {
          // Использовать язык браузера, если он поддерживается
          const browserLang = navigator.language.split('-')[0];
          if (languages[browserLang as keyof typeof languages]) {
            setLanguage(browserLang);
          }
        }
      }
    }
  }, [initialLanguage]);
  
  const changeLanguage = (lang: string) => {
    if (languages[lang as keyof typeof languages]) {
      setLanguage(lang);
      if (typeof window !== 'undefined') { // Сохраняем только на клиенте
        localStorage.setItem('preferredLanguage', lang);
      }
    } else {
      console.error(`Language "${lang}" is not supported`);
    }
  };

  const handleAddLanguage = (key: string, translations: TranslationData) => {
    addLanguage(key, translations);
    setSupportedLanguages((prev) => [...prev, key]);
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
