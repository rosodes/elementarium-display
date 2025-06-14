
import React from "react";
import { Element } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";

interface Props {
  element: Element;
}

const ElementHistorySection: React.FC<Props> = ({ element }) => {
  const { t } = useLanguage();
  if (!element.historyInfo) {
    return (
      <div className="my-4">
        <h3 className="text-base font-bold mb-1">{t.elementDetails.historicalInfo || "Historical Information"}</h3>
        <div className="italic text-gray-500 dark:text-gray-400 text-sm">
          {t.elementDetails.notAvailable}
        </div>
      </div>
    );
  }
  return (
    <div className="my-4">
      <h3 className="text-base font-bold mb-1">{t.elementDetails.historicalInfo || "Historical Information"}</h3>
      <div className="text-sm">{element.historyInfo}</div>
    </div>
  );
};

export default ElementHistorySection;
