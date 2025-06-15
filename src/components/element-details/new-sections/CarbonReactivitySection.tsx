
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Forms covalent bonds with most elements</li>
          <li>Can form single, double, and triple bonds</li>
          <li>Creates chains, rings, and complex structures (catenation)</li>
          <li>Reacts with oxygen to form CO and CO₂</li>
          <li>Forms hydrocarbons with hydrogen</li>
          <li>Creates carbides with metals at high temperatures</li>
          <li>Diamond is chemically inert under normal conditions</li>
          <li>Graphite can intercalate various compounds</li>
          <li>Burns in oxygen: C + O₂ → CO₂</li>
          <li>Reduces metal oxides at high temperatures</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CarbonReactivitySection;
