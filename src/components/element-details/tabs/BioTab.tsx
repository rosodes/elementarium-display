
import React from "react";
import { Element } from "../../../data/elementTypes";
import { useLanguage } from "../../../context/LanguageContext";

const BioTab = ({ element }: { element: Element }) => {
  const { language } = useLanguage();
  
  const getGenericBioContent = (element: Element) => {
    if (language === 'ru') {
      return `Биологическая роль элемента ${element.name} (${element.symbol}) в живых организмах зависит от его химических свойств и способности участвовать в биохимических процессах. Важно изучать как полезные, так и потенциально токсичные эффекты элемента.`;
    } else if (language === 'uk') {
      return `Біологічна роль елемента ${element.name} (${element.symbol}) в живих організмах залежить від його хімічних властивостей та здатності брати участь у біохімічних процесах. Важливо вивчати як корисні, так і потенційно токсичні ефекти елемента.`;
    } else {
      return `The biological role of ${element.name} (${element.symbol}) in living organisms depends on its chemical properties and ability to participate in biochemical processes. It's important to study both beneficial and potentially toxic effects of the element.`;
    }
  };

  return (
    <div className="text-base">
      <div className="bg-teal-50 dark:bg-gray-900/40 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-teal-800 dark:text-teal-200">
          {language === 'ru' ? 'Биологическая роль и токсичность' : language === 'uk' ? 'Біологічна роль та токсичність' : 'Biological Role & Toxicity'}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{getGenericBioContent(element)}</p>
      </div>
    </div>
  );
};

export default BioTab;
