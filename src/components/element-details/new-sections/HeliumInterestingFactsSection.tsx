
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Liquid helium becomes superfluid at 2.17 K with zero viscosity</li>
          <li>Inhaling helium changes voice pitch due to increased sound speed</li>
          <li>Cannot be solidified at standard pressure, requires 25 atmospheres</li>
          <li>Used in party balloons because it's lighter than air and non-flammable</li>
          <li>Critical for MRI machines and scientific research requiring ultra-low temperatures</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HeliumInterestingFactsSection;
