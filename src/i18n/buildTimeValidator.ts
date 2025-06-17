
import { languages } from './types';

// Build-time validator that throws errors for missing translations and placeholder content
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
  
  // Placeholder texts that should cause build failure
  const placeholderTexts = [
    'Information about discovery, etymology, historical facts and discoverers of this element will be shown here.',
    'Information about abundance and occurrence of this element in nature will be displayed here.',
    'Information about chemical compounds and main classes of compounds for this element will be shown here.',
    'Information about biological effects, significance and toxicity for this element will be shown here.',
    'Methods of production, industrial synthesis and relevant data for this element will be shown here.',
    'Safety precautions, hazards, handling and disposal guidelines for this element will be displayed here.',
    'Information about',
    'will be displayed here',
    'will be shown here'
  ];
  
  const allPaths = getAllPaths(languages[baseLanguage]);
  
  // Check for missing translations
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
  
  // Check for placeholder content in all languages
  const placeholderErrors: string[] = [];
  
  for (const [langCode, translation] of Object.entries(languages)) {
    for (const path of allPaths) {
      const value = getByPath(translation, path);
      if (typeof value === 'string') {
        for (const placeholder of placeholderTexts) {
          if (value.includes(placeholder)) {
            placeholderErrors.push(`${langCode}.${path}: "${value}"`);
          }
        }
      }
    }
  }
  
  if (placeholderErrors.length > 0) {
    throw new Error(
      `Build failed: Placeholder content found (must be replaced with real content):\n${placeholderErrors.map(p => `  - ${p}`).join('\n')}\n\nPlease replace all placeholder texts with actual content.`
    );
  }
  
  console.log('✅ All required translations are present and no placeholder content found');
}

// Check for placeholder content in component files
export function validateComponentContent() {
  // This will be called by build script to check component files for placeholders
  const placeholderPatterns = [
    /Information about.*will be (shown|displayed) here/i,
    /Methods of production.*will be shown here/i,
    /Safety precautions.*will be displayed here/i,
    /text-gray-600.*text-center.*placeholder/i
  ];
  
  // This validation should be done at build time by scanning actual component files
  // For now, we'll log a warning that manual check is needed
  console.warn('⚠️  Manual check needed: Please verify no placeholder content exists in component files');
}

// Run validation immediately when this module is imported
if (import.meta.env.NODE_ENV !== 'development') {
  validateTranslationsAtBuildTime();
  validateComponentContent();
}
