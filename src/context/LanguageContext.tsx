
import React, { createContext, useState, useContext, useEffect } from 'react';
import { languages, LanguageKey, TranslationData } from '../i18n';

interface LanguageContextType {
  language: LanguageKey;
  t: TranslationData;
  setLanguage: (lang: LanguageKey) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageKey>('en');
  
  // Get initial language from localStorage or browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as LanguageKey | null;
    if (savedLanguage && languages[savedLanguage]) {
      setLanguage(savedLanguage);
    } else {
      // Use browser language if available and supported
      const browserLang = navigator.language.split('-')[0] as LanguageKey;
      if (languages[browserLang]) {
        setLanguage(browserLang);
      }
    }
  }, []);
  
  const changeLanguage = (lang: LanguageKey) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };
  
  const value = {
    language,
    t: languages[language],
    setLanguage: changeLanguage
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
