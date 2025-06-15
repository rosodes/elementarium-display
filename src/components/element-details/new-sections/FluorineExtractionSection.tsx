
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineExtractionSection: React.FC = () => (
  <Card className="my-4 border border-lime-200 dark:border-lime-700">
    <CardHeader className="bg-lime-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production &amp; Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Elemental fluorine (F₂) is produced industrially by electrolyzing potassium hydrogen difluoride (KHF₂) in anhydrous hydrofluoric acid (HF).</li>
        <li>Fluorite (CaF₂) is mined, then reacted with concentrated sulfuric acid to release HF (feedstock for further chemical manufacturing).</li>
        <li>Electrolysis must occur in special materials (nickel, Monel, Teflon) to contain aggressive F₂ gas.</li>
        <li>Most F₂ is consumed at the point of production; rarely shipped due to extreme hazard.</li>
        <li>Major uses: uranium enrichment (UF₆), production of SF₆, organofluorine compounds, and polymers like Teflon.</li>
      </ul>
    </CardContent>
  </Card>
);

export default FluorineExtractionSection;
