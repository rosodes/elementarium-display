
import React from "react";
import { Element } from "../../data/elementTypes";
import { useLanguage } from "../../context/LanguageContext";

// Дополнительная информация, включая токсичность для неона
const elementSpecificText: Record<string, { toxicity?: string }> = {
  "Neon": {
    toxicity: "Neon is a chemically inert noble gas and is considered non-toxic and environmentally harmless. It poses no known health or ecological hazards under normal conditions."
  },
  // Добавлять остальные элементы по мере необходимости
};

interface Props {
  element: Element;
}
const AdditionalInfo: React.FC<Props> = ({ element }) => {
  const { t } = useLanguage();

  const specific = elementSpecificText[element.name];
  return (
    <div>
      {element.summary && (
        <p className="mb-2">{element.summary}</p>
      )}
      {specific?.toxicity && (
        <div className="mt-2">
          <b>{t.elementDetails.additionalInfo || "Additional Info"}:</b>
          <p>{specific.toxicity}</p>
        </div>
      )}
      {/* Placeholder for further ecological or reactivity facts */}
    </div>
  );
};

export default AdditionalInfo;
