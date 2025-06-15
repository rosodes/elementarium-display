
import React from "react";
import { Element } from "../../../data/elementTypes";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Flame, ShieldAlert } from "lucide-react";
import HydrogenSafetyVisualBlock from "../new-sections/HydrogenSafetyVisualBlock";
import HydrogenSafetySection from "../new-sections/HydrogenSafetySection";

const SafetyTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-red-700 dark:text-red-200">
      <Flame size={19} className="shrink-0" />
      Safety &amp; Precautions
    </h2>
    {element.atomic === "1" ? (
      <>
        <Card className="mb-4 border-red-200 dark:border-red-700">
          <CardHeader className="bg-red-50 dark:bg-gray-800 py-3 px-4">
            <CardTitle className="text-base flex items-center gap-2 text-red-700 dark:text-red-200">
              <ShieldAlert size={16} />
              Hazards and safe handling
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-xs space-y-2">
            <ul className="list-disc pl-4 space-y-1 marker:text-red-600">
              <li>
                <b>Extreme flammability!</b> Explosive with air (flammability limits: 4–75% H₂).
              </li>
              <li>
                Rapidly diffuses, leaks easily due to low molecular mass.
              </li>
              <li>
                Non-toxic, but dangerous asphyxiant (if it displaces oxygen).
              </li>
              <li>
                Safety measures: ventilation, leak detectors, remove ignition sources.
              </li>
              <li>
                Storage: high-strength pressure cylinders, cool and away from flame.
              </li>
              <li>
                Transport: specialized tanks, cryogenic containers for liquid H₂.
              </li>
              <li>
                H₂ flame is nearly invisible—hidden danger!
              </li>
              <li>
                Not environmentally toxic, but improper use is hazardous.
              </li>
            </ul>
            <div className="mt-2 text-[11px] text-gray-500">
              Sources: OSHA, NIOSH, IUPAC, CRC Handbook
            </div>
          </CardContent>
        </Card>
        <HydrogenSafetyVisualBlock />
        <HydrogenSafetySection />
      </>
    ) : (
      <p>Данные о мерах безопасности, утилизации, опасностях и нормах для этого элемента будут показаны здесь.</p>
    )}
  </div>
);
export default SafetyTab;
