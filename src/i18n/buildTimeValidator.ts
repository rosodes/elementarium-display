
import { languages } from './types';

// Build-time validator that throws errors for missing translations
export function validateTranslationsAtBuildTime() {
  const baseLanguage = 'en';
  const requiredLanguages = ['ru', 'uk'];
  
  if (!languages[baseLanguage]) {
    throw new Error(`Base language "${baseLanguage}" not found!`);
  }
  
  // Get all translation paths from English
  const getAllPaths = (obj: any, prefix = ''): string[] => {
    let paths: string[] = [];
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        paths = paths.concat(getAllPaths(obj[key], prefix ? `${prefix}.${key}` : key));
      } else {
        paths.push(prefix ? `${prefix}.${key}` : key);
      }
    }
    return paths;
  };
  
  const getByPath = (obj: any, path: string): any => {
    return path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), obj);
  };
  
  const allPaths = getAllPaths(languages[baseLanguage]);
  
  for (const lang of requiredLanguages) {
    if (!languages[lang]) {
      throw new Error(`Required language "${lang}" not found!`);
    }
    
    const missingPaths: string[] = [];
    
    for (const path of allPaths) {
      const value = getByPath(languages[lang], path);
      if (typeof value === 'undefined' || value === null || value === '') {
        missingPaths.push(path);
      }
    }
    
    if (missingPaths.length > 0) {
      throw new Error(
        `Build failed: Missing translations for language "${lang}":\n${missingPaths.map(p => `  - ${p}`).join('\n')}\n\nPlease add all missing translations before building.`
      );
    }
  }
  
  console.log('✅ All required translations are present for ru and uk languages');
}

// Run validation immediately when this module is imported
if (import.meta.env.NODE_ENV !== 'development') {
  validateTranslationsAtBuildTime();
}
