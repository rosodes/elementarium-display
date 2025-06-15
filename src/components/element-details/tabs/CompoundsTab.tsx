
import React from "react";
import { Element } from "../../../data/elementTypes";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Beaker, FlaskConical } from "lucide-react";
import HydrogenCompoundsVisualBlock from "../new-sections/HydrogenCompoundsVisualBlock";

const CompoundsTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-200">
      <Beaker size={19} className="shrink-0" />
      Compounds &amp; Chemistry
    </h2>
    {element.atomic === "1" ? (
      <>
        <Card className="mb-4 border-emerald-200 dark:border-emerald-700">
          <CardHeader className="bg-emerald-50 dark:bg-gray-800 py-3 px-4">
            <CardTitle className="text-base flex items-center gap-2 text-emerald-700 dark:text-emerald-200">
              <FlaskConical size={16} />
              Key hydrogen compounds
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-xs">
            <ul className="list-disc pl-4 space-y-1 marker:text-emerald-500">
              <li>
                <b>Water (H₂O):</b> most important hydrogen compound, universal solvent, vital for life.
              </li>
              <li>
                <b>Ammonia (NH₃):</b> industrial chemical, fertilizer, refrigerant.
              </li>
              <li>
                <b>Methane (CH₄):</b> primary component of natural gas, key fuel.
              </li>
              <li>
                <b>Hydrochloric acid (HCl):</b> strong acid, essential in chemical industry and physiology.
              </li>
              <li>
                <b>Hydrogen peroxide (H₂O₂):</b> oxidizer and disinfectant.
              </li>
              <li>
                <b>Metal hydrides (LiH, NaH, CaH₂):</b> used for hydrogen storage, chemical synthesis.
              </li>
            </ul>
            <div className="mt-2 text-[11px] text-gray-500">
              Sources: CRC Handbook, WebElements
            </div>
          </CardContent>
        </Card>
        <HydrogenCompoundsVisualBlock />
      </>
    ) : (
      <p>Здесь будут описаны основные химические соединения и химия элемента.</p>
    )}
  </div>
);
export default CompoundsTab;
