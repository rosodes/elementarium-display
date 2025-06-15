
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineSafetySection: React.FC = () => (
  <Card className="my-4 border border-lime-200 dark:border-lime-700">
    <CardHeader className="bg-lime-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Elemental fluorine (F₂) is among the most dangerous chemicals—highly toxic, corrosive, and violently reactive with nearly all materials.</li>
        <li>Direct contact causes severe burns; inhalation of small amounts can be fatal.</li>
        <li>Hydrofluoric acid (HF) penetrates tissue and can cause life-threatening systemic toxicity; requires calcium gluconate as an antidote.</li>
        <li>All equipment must be resistant to corrosion (nickel, plastic, glass-lined steel).</li>
        <li>Chronic low-level fluoride exposure must be prevented in industrial and water systems.</li>
        <li>Special ventilation, full PPE (respirators, face shields, gloves, aprons) mandatory for handling F₂ or concentrated HF.</li>
      </ul>
    </CardContent>
  </Card>
);

export default FluorineSafetySection;
