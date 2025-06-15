
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Slowly oxidizes in air, forming protective oxide layer</li>
          <li>Dissolves slowly in dilute mineral acids</li>
          <li>Reacts with steam at high temperatures: 3Co + 4H₂O → Co₃O₄ + 4H₂</li>
          <li>Burns in oxygen above 300°C forming Co₃O₄</li>
          <li>Forms binary compounds with most non-metals</li>
          <li>Combines with carbon monoxide: Co + 4CO → Co(CO)₄</li>
          <li>Reacts with halogens at elevated temperatures</li>
          <li>Forms numerous coordination complexes</li>
          <li>Stable in alkaline solutions</li>
          <li>Magnetic properties change with temperature</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CobaltReactivitySection;
