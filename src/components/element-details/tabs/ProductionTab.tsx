
import React from "react";
import { Element } from "../../../data/elementTypes";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Factory, Repeat2 } from "lucide-react";
import HydrogenProductionVisualBlock from "../new-sections/HydrogenProductionVisualBlock";

const ProductionTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-lime-800 dark:text-lime-200">
      <Factory size={19} className="shrink-0" />
      Production &amp; Synthesis
    </h2>
    {element.atomic === "1" ? (
      <>
        <Card className="mb-4 border-lime-200 dark:border-lime-700">
          <CardHeader className="bg-lime-50 dark:bg-gray-800 py-3 px-4">
            <CardTitle className="text-base flex items-center gap-2 text-lime-800 dark:text-lime-200">
              <Repeat2 size={16} />
              Modern hydrogen production
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-xs space-y-2">
            <ul className="list-disc pl-4 space-y-1 marker:text-lime-600">
              <li>
                <b>Steam methane reforming (SMR):</b> primary industrial method (CH₄ + H₂O → CO + 3H₂).
              </li>
              <li>
                <b>Electrolysis of water:</b> produces “green hydrogen” from renewable electricity.
              </li>
              <li>
                <b>Partial oxidation, thermal cracking of hydrocarbons, and coal gasification:</b> alternative large-scale methods.
              </li>
              <li>
                <b>Laboratory:</b> metals + acids (e.g. Zn + HCl).
              </li>
              <li>
                Global annual H₂ production &gt; 94 million tons (2022, IEA); mostly for ammonia, refining, and methanol.
              </li>
              <li>
                Technology trends: increasing share of green H₂, energy storage, fuel cells.
              </li>
            </ul>
            <div className="mt-2 text-[11px] text-gray-500">
              Sources: IEA, DOE Hydrogen Program, WebElements
            </div>
          </CardContent>
        </Card>
        <HydrogenProductionVisualBlock />
      </>
    ) : (
      <p>Информация о методах получения, промышленной продукции и синтезе элемента появится здесь.</p>
    )}
  </div>
);
export default ProductionTab;
