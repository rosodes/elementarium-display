
import React, { createContext, useState, useContext, useEffect } from 'react';
import { languages, LanguageKey, TranslationData, addLanguage } from '../i18n';
import { uk } from '../i18n/languages/uk';

// Add Ukrainian language
addLanguage('uk', uk);

interface LanguageContextType {
  language: string;
  t: TranslationData;
  setLanguage: (lang: string) => void;
  supportedLanguages: string[];
  addLanguage: (key: string, translations: TranslationData) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');
  const [supportedLanguages, setSupportedLanguages] = useState<string[]>(Object.keys(languages));
  
  // Get initial language from localStorage or browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languages[savedLanguage as keyof typeof languages]) {
      setLanguage(savedLanguage);
    } else {
      // Use browser language if available and supported
      const browserLang = navigator.language.split('-')[0];
      if (languages[browserLang as keyof typeof languages]) {
        setLanguage(browserLang);
      }
    }
  }, []);
  
  const changeLanguage = (lang: string) => {
    if (languages[lang as keyof typeof languages]) {
      setLanguage(lang);
      localStorage.setItem('preferredLanguage', lang);
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
