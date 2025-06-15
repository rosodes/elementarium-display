
import React from "react";
import { Element } from "../../../data/elementTypes";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Landmark, BookOpen } from "lucide-react";
import HydrogenHistoryVisualBlock from "../new-sections/HydrogenHistoryVisualBlock";

const HistoryTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-orange-700 dark:text-orange-200">
      <Landmark size={19} className="shrink-0" />
      History &amp; Discovery
    </h2>
    {element.atomic === "1" ? (
      <>
        <Card className="mb-4 border-orange-200 dark:border-orange-700">
          <CardHeader className="bg-orange-50 dark:bg-gray-800 py-3 px-4">
            <CardTitle className="text-base flex items-center gap-2 text-orange-700 dark:text-orange-200">
              <BookOpen size={16} />
              How hydrogen was discovered
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-xs space-y-2">
            <ul className="list-disc pl-4 space-y-1 marker:text-orange-500">
              <li>
                <b>1766:</b> Henry Cavendish (England) isolated a gas he called “inflammable air” by reacting metals with acids.
              </li>
              <li>
                <b>1783:</b> Antoine Lavoisier named it “hydrogène” (“water former”) after proving its combustion with oxygen creates water.
              </li>
              <li>
                Paracelsus (16th c.) observed the same gas when dissolving iron in sulfuric acid but didn't identify it as a new element.
              </li>
              <li>
                The Hindenburg airship disaster (1937) highlighted the risks of using H₂ as a lifting gas.
              </li>
            </ul>
            <div className="mt-2 text-[11px] text-gray-500">
              Sources: IUPAC Gold Book, CRC Handbook, WebElements, Britannica
            </div>
          </CardContent>
        </Card>
        <HydrogenHistoryVisualBlock />
      </>
    ) : (
      <p>Информация об открытии, этимологии, исторических фактах и первооткрывателях элемента появится здесь.</p>
    )}
  </div>
);
export default HistoryTab;
