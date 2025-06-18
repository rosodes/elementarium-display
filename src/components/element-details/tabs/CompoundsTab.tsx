
import React from "react";
import { Element } from "../../../data/elementTypes";
import { useLanguage } from "../../../context/LanguageContext";

const CompoundsTab = ({ element }: { element: Element }) => {
  const { language } = useLanguage();
  
  const getGenericCompoundsContent = (element: Element) => {
    if (language === 'ru') {
      return `Элемент ${element.name} (${element.symbol}) образует различные химические соединения в зависимости от его валентности и электронной конфигурации. Изучение соединений этого элемента важно для понимания его химических свойств и практического применения.`;
    } else if (language === 'uk') {
      return `Елемент ${element.name} (${element.symbol}) утворює різні хімічні сполуки залежно від його валентності та електронної конфігурації. Вивчення сполук цього елемента важливе для розуміння його хімічних властивостей та практичного застосування.`;
    } else {
      return `Element ${element.name} (${element.symbol}) forms various chemical compounds depending on its valence and electron configuration. Study of this element's compounds is important for understanding its chemical properties and practical applications.`;
    }
  };

  return (
    <div className="text-base">
      <div className="bg-blue-50 dark:bg-gray-900/40 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">
          {language === 'ru' ? 'Химические соединения' : language === 'uk' ? 'Хімічні сполуки' : 'Chemical Compounds'}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{getGenericCompoundsContent(element)}</p>
      </div>
    </div>
  );
};

export default CompoundsTab;
