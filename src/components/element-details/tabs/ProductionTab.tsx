
import React from "react";
import { Element } from "../../../data/elementTypes";
const ProductionTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Production / Synthesis</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      {element.atomic === "1" ? (
        <div>
          <ul className="list-disc pl-5 text-xs mb-2">
            <li>Основные промышленные методы: паровая конверсия метана (CH₄ + H₂O → CO + 3H₂), электролиз воды, крекинг нефти, термическое разложение метана.</li>
            <li>Лабораторно: реакция металлов с кислотами (Zn + 2HCl → H₂ + ZnCl₂).</li>
            <li>Глобальное производство: более 94 млн тонн/год (2022, IEA), основное использование — аммиак, нефтепереработка.</li>
            <li>Страны-лидеры: Китай, США, Индия, Россия, Евросоюз</li>
            <li>Технологические тренды: развитие "зелёного" водорода (электролиз возобновляемой энергии).</li>
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">Источник: IEA, DOE Hydrogen Program, WebElements</div>
        </div>
      ) : (
        <p>Информация о методах получения, промышленной продукции и синтезе элемента появится здесь.</p>
      )}
    </div>
  </div>
);
export default ProductionTab;
