
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance:</strong> 25 ppm in Earth's crust (rare)</div>
          <div><strong>Primary sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Cobaltite (CoAsS) - main ore mineral</li>
            <li>Smaltite (CoAs₂)</li>
            <li>Erythrite (Co₃(AsO₄)₂·8H₂O)</li>
            <li>Glaucodot ((Co,Fe)AsS)</li>
            <li>By-product of copper and nickel mining</li>
          </ul>
          <div><strong>Geographic distribution:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Democratic Republic of Congo (~70% of world production)</li>
            <li>Russia, Australia, Cuba, Philippines</li>
            <li>Ocean floor manganese nodules</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CobaltNaturalOccurrenceSection;
