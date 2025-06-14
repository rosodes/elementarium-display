
import React from "react";
import { Element } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";
import { Badge } from "../ui/badge";

interface Props {
  element: Element;
}

const ElementOxidationStatesSection: React.FC<Props> = ({ element }) => {
  const { t } = useLanguage();

  // Если степеней окисления вообще нет (например, благородный газ с валентностью 0)
  const oxidation = element.oxidation ? element.oxidation.trim() : '';
  const isNobleGas = (element.series === "Noble" || element.category === "noble gas") && (!oxidation || oxidation === "0");

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
        {t.elementDetails?.oxidationStates || "Степени окисления"}
      </h3>
      {isNobleGas ? (
        <div className="text-sm text-gray-700 dark:text-gray-300 italic">
          {t.elementDetails?.noOxidationStatesForNobleGases || "Для благородных газов степени окисления в нормальных условиях отсутствуют."}
        </div>
      ) : oxidation ? (
        <div className="flex flex-wrap gap-2 ml-1">
          {oxidation.split(",").map((state, idx) => (
            <Badge key={idx} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/60 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-700">
              {state}
            </Badge>
          ))}
        </div>
      ) : (
        <div className="text-sm text-gray-700 dark:text-gray-300 italic">
          {t.elementDetails?.noOxidationStates || "Данные о степенях окисления отсутствуют."}
        </div>
      )}
    </div>
  );
};

export default ElementOxidationStatesSection;
