
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const blockColors = [
  {
    colorClass: 'bg-s-block',
    colorName: 'Синий',
    labelKey: 'sBlock',
    // Описание по-русски и по-английски
    descriptions: {
      ru: 'Щелочные и щелочноземельные металлы (s-блок)',
      en: 'Alkali and alkaline earth metals (s-block)',
      uk: 'Лужні та лужноземельні метали (s-блок)'
    }
  },
  {
    colorClass: 'bg-p-block',
    colorName: 'Красный',
    labelKey: 'pBlock',
    descriptions: {
      ru: 'Неметаллы, галогены, благородные газы и часть металлов (p-блок)',
      en: 'Nonmetals, halogens, noble gases, and some metals (p-block)',
      uk: 'Неметали, галогени, благородні гази та частина металів (p-блок)'
    }
  },
  {
    colorClass: 'bg-d-block',
    colorName: 'Зелёный',
    labelKey: 'dBlock',
    descriptions: {
      ru: 'Переходные металлы (d-блок)',
      en: 'Transition metals (d-block)',
      uk: 'Перехідні метали (d-блок)'
    }
  },
  {
    colorClass: 'bg-f-block',
    colorName: 'Фиолетовый',
    labelKey: 'fBlock',
    descriptions: {
      ru: 'Лантаноиды и актиноиды — f-блок',
      en: 'Lanthanides and actinides (f-block)',
      uk: 'Лантаноїди й актиноїди (f-блок)'
    }
  },
];

const Legend = () => {
  const { t, lang } = useLanguage();
  // Проверяем язык; если не ru/en/uk — по умолчанию en
  const language = ['ru', 'uk', 'en'].includes(lang) ? lang : 'en';

  return (
    <div className="legend flex flex-wrap gap-4 mb-6 text-xs">
      {blockColors.map(({ colorClass, colorName, labelKey, descriptions }) => (
        <div key={colorClass} className="flex items-center gap-2">
          {/* Цветной квадрат с рамкой */}
          <div className={`w-4 h-4 rounded border ${colorClass}`}></div>
          <div>
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              {t.legend[labelKey]}
            </span>
            <span className="ml-1 text-gray-500 dark:text-gray-400">({colorName})</span>
            <div className="text-gray-500 dark:text-gray-400 text-[11px] leading-tight mt-0.5">
              {descriptions[language]}
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded border flex items-center justify-center"
          style={{
            background: 'rgba(239, 68, 68, 0.15)',
            borderColor: '#ef4444',
          }}
        >
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
        </div>
        <div>
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            {t.legend.radioactive}
          </span>
          <div className="ml-1 text-gray-500 dark:text-gray-400 text-[11px] leading-tight mt-0.5">
            {language === 'ru' && 'Радиоактивные элементы (выделены красной точкой)'}
            {language === 'en' && 'Radioactive elements (marked with a red circle)'}
            {language === 'uk' && 'Радіоактивні елементи (виділено червоною точкою)'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;

