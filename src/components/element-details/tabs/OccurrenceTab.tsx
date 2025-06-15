
import React from "react";
import { Element } from "../../../data/elementTypes";
const OccurrenceTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Occurrence / Abundance</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      {element.atomic === "1" ? (
        <div>
          <ul className="list-disc pl-5 text-xs mb-2">
            <li>Самый распространённый элемент во Вселенной (~75% массы, почти все звёзды состоят из водорода).</li>
            <li>В Солнечной системе: основной "строительный блок" газовых гигантов (Юпитер, Сатурн).</li>
            <li>На Земле: 0.15% массы земной коры, ~11% в океанах (в воде H₂O), крайне мало в атмосфере (0.00005%).</li>
            <li>Входит в состав воды, нефти, органических веществ, минералов кристаллогидратов.</li>
            <li>Основные минералы-носители: вода (лед, жидкость), минеральные гидраты, органика.</li>
            <li>Ресурсы концентрированы повсеместно, пром. добыча — электролиз или рекформинг природного газа.</li>
            <li>В живых организмах: третий по распространённости элемент (до 10% массы тела человека).</li>
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">
            Источники: CRC Handbook, WebElements, Atkins
          </div>
        </div>
      ) : (
        <p>Здесь будет расписана распространённость, основные минералы и источники элемента.</p>
      )}
    </div>
  </div>
);
export default OccurrenceTab;
