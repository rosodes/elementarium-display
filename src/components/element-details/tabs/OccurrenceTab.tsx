
import React from "react";
import { Element } from "../../../data/elementTypes";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { PieChart, Globe2, Droplets } from "lucide-react";
import HydrogenOccurrenceVisualBlock from "../new-sections/HydrogenOccurrenceVisualBlock";
import HydrogenNaturalOccurrenceSection from "../new-sections/HydrogenNaturalOccurrenceSection";

const OccurrenceTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-indigo-700 dark:text-indigo-200">
      <PieChart size={19} className="shrink-0" />
      Occurrence &amp; Abundance
    </h2>
    {element.atomic === "1" ? (
      <>
        <Card className="mb-4 border-indigo-200 dark:border-indigo-700">
          <CardHeader className="bg-indigo-50 dark:bg-gray-800 py-3 px-4">
            <CardTitle className="text-base flex items-center gap-2 text-indigo-700 dark:text-indigo-200">
              <Globe2 size={15} />
              Where is hydrogen found?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-xs">
            <ul className="list-disc pl-4 space-y-1 marker:text-indigo-500">
              <li>
                Most abundant element in the Universe (~75% by mass), forms the bulk of stars and interstellar medium.
              </li>
              <li>
                Very rare as H₂ gas on Earth (escapes gravity), but present everywhere as part of water (H₂O) and organics.
              </li>
              <li>
                Major component in gas giant planets (Jupiter, Saturn).
              </li>
              <li>
                Essential in all biological life: part of water, fats, proteins, nucleic acids.
              </li>
              <li>
                Found as a minor component in volcanic and deep-earth gases.
              </li>
            </ul>
            <div className="mt-2 text-[11px] text-gray-500">
              Sources: CRC Handbook, WebElements, NASA, IUPAC
            </div>
          </CardContent>
        </Card>
        <HydrogenOccurrenceVisualBlock />
        <HydrogenNaturalOccurrenceSection />
      </>
    ) : (
      <p>Здесь будет расписана распространённость, основные минералы и источники элемента.</p>
    )}
  </div>
);
export default OccurrenceTab;
