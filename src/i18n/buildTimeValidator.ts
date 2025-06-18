
import { languages } from './types';
import fs from 'fs';
import path from 'path';

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
  
  // Enhanced placeholder texts that should cause build failure
  const placeholderTexts = [
    'Information about discovery, etymology, historical facts and discoverers of this element will be shown here.',
    'Information about abundance and occurrence of this element in nature will be displayed here.',
    'Information about chemical compounds and main classes of compounds for this element will be shown here.',
    'Information about biological effects, significance and toxicity for this element will be shown here.',
    'Methods of production, industrial synthesis and relevant data for this element will be shown here.',
    'Safety precautions, hazards, handling and disposal guidelines for this element will be displayed here.',
    'Information about',
    'will be displayed here',
    'will be shown here',
    '[MISSING PATH]',
    '[MISSING ru]',
    '[MISSING uk]'
  ];
  
  const allPaths = getAllPaths(languages[baseLanguage]);
  
  // Check for missing translations
  const missingTranslations: Record<string, string[]> = {};
  
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
      missingTranslations[lang] = missingPaths;
    }
  }
  
  // Report missing translations
  if (Object.keys(missingTranslations).length > 0) {
    let errorMessage = 'Build failed: Missing translations found:\n';
    for (const [lang, paths] of Object.entries(missingTranslations)) {
      errorMessage += `\n${lang.toUpperCase()}:\n${paths.map(p => `  - ${p}`).join('\n')}\n`;
    }
    errorMessage += '\nPlease add all missing translations before building.';
    throw new Error(errorMessage);
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
  const componentPaths = [
    'src/components/element-details/tabs',
    'src/components/element-details/new-sections'
  ];
  
  const placeholderPatterns = [
    /Information about.*will be (shown|displayed) here/gi,
    /Methods of production.*will be shown here/gi,
    /Safety precautions.*will be displayed here/gi,
    /text-gray-600.*text-center.*placeholder/gi
  ];
  
  const errors: string[] = [];
  
  for (const dirPath of componentPaths) {
    try {
      const fullPath = path.resolve(process.cwd(), dirPath);
      if (fs.existsSync(fullPath)) {
        const files = fs.readdirSync(fullPath);
        
        for (const file of files) {
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const filePath = path.join(fullPath, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            
            for (const pattern of placeholderPatterns) {
              const matches = content.match(pattern);
              if (matches) {
                matches.forEach(match => {
                  errors.push(`${filePath}: "${match}"`);
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not scan directory ${dirPath}`);
    }
  }
  
  if (errors.length > 0) {
    throw new Error(
      `Build failed: Placeholder content found in component files:\n${errors.map(e => `  - ${e}`).join('\n')}\n\nPlease replace all placeholder texts with actual content.`
    );
  }
  
  console.log('✅ No placeholder content found in component files');
}

// Run validation immediately when this module is imported in production
if (import.meta.env.NODE_ENV !== 'development') {
  validateTranslationsAtBuildTime();
  validateComponentContent();
}
