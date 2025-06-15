
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Mining methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Open-pit mining of limestone quarries</li>
            <li>Underground mining of chalk and marble</li>
            <li>Solution mining of gypsum deposits</li>
          </ul>
          <div><strong>Metal production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electrolysis of molten CaCl₂ at 800°C</li>
            <li>Thermal reduction: CaO + Al → Ca + Al₂O₃</li>
            <li>Vacuum distillation for purification</li>
            <li>Must be done under inert atmosphere</li>
          </ul>
          <div><strong>Industrial lime production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Heating limestone: CaCO₃ → CaO + CO₂</li>
            <li>Hydration to slaked lime: CaO + H₂O → Ca(OH)₂</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalciumExtractionSection;
