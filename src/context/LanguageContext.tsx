
import React, { createContext, useState, useContext, useEffect } from 'react';
import { languages, LanguageKey, TranslationData, addLanguage } from '../i18n';
import { detectUserLanguage } from '../lib/detectUserLanguage';

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
  // Начальный язык теперь всегда детектится через универсальную функцию (или приходит с SSR)
  const [language, setLanguage] = useState<string>(
    initialLanguage || detectUserLanguage()
  );
  const [supportedLanguages, setSupportedLanguages] = useState<string[]>(Object.keys(languages));

  // Слежение за сменой url — автосмена языка при переходах/обновлении страницы
  useEffect(() => {
    const updateLangFromUrl = () => {
      const urlDetected = detectUserLanguage();
      if (urlDetected && urlDetected !== language) {
        setLanguage(urlDetected);
      }
    };
    window.addEventListener('popstate', updateLangFromUrl); // переходы по истории/строке url
    window.addEventListener('pushstate', updateLangFromUrl as any); // если используется кастомный pushState
    window.addEventListener('replacestate', updateLangFromUrl as any);
    updateLangFromUrl(); // однократно при маунте/переходе
    return () => {
      window.removeEventListener('popstate', updateLangFromUrl);
      window.removeEventListener('pushstate', updateLangFromUrl as any);
      window.removeEventListener('replacestate', updateLangFromUrl as any);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Сохраняем выбор пользователя (только среди поддерживаемых языков!)
  const changeLanguage = (lang: string) => {
    if (languages[lang as keyof typeof languages]) {
      setLanguage(lang);
      if (typeof window !== 'undefined') {
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
