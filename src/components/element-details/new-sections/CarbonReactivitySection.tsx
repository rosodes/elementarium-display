
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
          <li>Forms more compounds than any other element</li>
          <li>Catenation - ability to form long carbon chains</li>
          <li>Burns in oxygen: C + O₂ → CO₂</li>
          <li>Reacts with metals to form carbides</li>
          <li>Forms single, double, and triple bonds</li>
          <li>Relatively unreactive at room temperature</li>
          <li>Diamond is chemically inert under normal conditions</li>
          <li>Graphite can conduct electricity</li>
          <li>Forms stable aromatic compounds (benzene rings)</li>
          <li>Basis of all organic chemistry</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CarbonReactivitySection;
