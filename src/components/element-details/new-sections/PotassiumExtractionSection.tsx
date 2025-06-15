
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Mining methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Solution mining of underground salt deposits</li>
            <li>Solar evaporation of brine from salt lakes</li>
            <li>Conventional shaft mining of sylvite deposits</li>
          </ul>
          <div><strong>Metal production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electrolysis of molten KCl at 700-800°C</li>
            <li>Thermal reduction: KCl + Na → NaCl + K</li>
            <li>Very dangerous process due to high reactivity</li>
            <li>Must be done under inert atmosphere</li>
          </ul>
          <div><strong>Purification:</strong> Distillation and crystallization of compounds</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotassiumExtractionSection;
