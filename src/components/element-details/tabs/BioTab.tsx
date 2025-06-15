
import React from "react";
import { Element } from "../../../data/elementTypes";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { HeartHandshake, Activity } from "lucide-react";
import HydrogenBioVisualBlock from "../new-sections/HydrogenBioVisualBlock";

const BioTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2 flex items-center gap-2 text-rose-700 dark:text-rose-200">
      <Activity size={19} className="shrink-0" />
      Biological Role &amp; Toxicity
    </h2>
    {element.atomic === "1" ? (
      <>
        <Card className="mb-4 border-rose-200 dark:border-rose-700">
          <CardHeader className="bg-rose-50 dark:bg-gray-800 py-3 px-4">
            <CardTitle className="text-base flex items-center gap-2 text-rose-700 dark:text-rose-200">
              <HeartHandshake size={16} />
              Hydrogen in living systems
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-xs">
            <ul className="list-disc pl-4 space-y-1 marker:text-rose-500">
              <li>
                Essential for all life: part of every organic molecule and water.
              </li>
              <li>
                Hydrogen is not toxic, but hydrogen gas (H₂) can asphyxiate by displacing oxygen in confined spaces.
              </li>
              <li>
                <b>Biological functions:</b> involved in energy transfer (NADH/NADPH), acid-base homeostasis, and proton gradients.
              </li>
              <li>
                No official exposure limit; asphyxiation risk if oxygen is low.
              </li>
              <li>
                Some hydrogen compounds (e.g., H₂S, PH₃) are highly toxic!
              </li>
              <li>
                Investigated as antioxidant and for medical therapy (e.g., ischemia, inflammation).
              </li>
            </ul>
            <div className="mt-2 text-[11px] text-gray-500">
              Sources: CRC Handbook, Medical chemistry, scientific articles
            </div>
          </CardContent>
        </Card>
        <HydrogenBioVisualBlock />
      </>
    ) : (
      <p>Информация о биологической роли, токсичности или отсутствии таковых для элемента будет отображаться здесь.</p>
    )}
  </div>
);
export default BioTab;
