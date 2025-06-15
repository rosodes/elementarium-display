
import React from "react";
import { Element } from "../../../data/elementTypes";
const CompoundsTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Compounds / Chemistry</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      {element.atomic === "1" ? (
        <div>
          <ul className="list-disc pl-5 text-xs mb-2">
            <li>
              <b>Главные соединения:</b> 
              вода (H₂O), аммиак (NH₃), метан (CH₄), хлорводород (HCl), перекись водорода (H₂O₂), гидриды металлов (LiH, NaH, CaH₂ и др.)
            </li>
            <li>
              <b>Основные химические свойства:</b> 
              водород проявляет восстановительные свойства, реагирует с неметаллами (O₂, Cl₂, N₂), образует многочисленные гидриды.
            </li>
            <li>
              <b>Характерные реакции:</b> 
              2H₂ + O₂ → 2H₂O; N₂ + 3H₂ → 2NH₃ (синтез аммиака); H₂ + Cl₂ → 2HCl.
            </li>
            <li>
              <b>Кислотно-основные свойства:</b> 
              в соединениях с металлами − гидриды (основания/восстановители); с неметаллами — кислоты.
            </li>
            <li>
              <b>Растворимость:</b> 
              плохо растворяется в воде, хорошо — в палладии (Pd).
            </li>
            <li>
              <b>Схемы превращений:</b> 
              H₂ ⇄ 2H⁺ + 2e⁻ (электролиз); H₂ + CO₂ → H₂O + CO (реформинг).
            </li>
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">Источник: CRC Handbook, WebElements, Petrov</div>
        </div>
      ) : (
        <p>Здесь будут описаны основные химические соединения и химия элемента.</p>
      )}
    </div>
  </div>
);
export default CompoundsTab;
