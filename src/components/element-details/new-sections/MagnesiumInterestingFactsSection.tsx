
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Essential element for all living organisms - center of chlorophyll molecule</li>
          <li>Fourth most abundant cation in the human body</li>
          <li>Burns with one of the brightest white flames known</li>
          <li>Lighter than aluminum but stronger when alloyed</li>
          <li>Used in World War I for incendiary bombs and flares</li>
          <li>Magnesium fire cannot be extinguished with water (produces hydrogen)</li>
          <li>Critical for over 300 enzymatic reactions in human body</li>
          <li>Magnesium deficiency affects crop yields worldwide</li>
          <li>First metal to be produced by electrolysis</li>
          <li>Can burn in carbon dioxide atmosphere</li>
          <li>Essential for photosynthesis in all green plants</li>
          <li>Has excellent electromagnetic shielding properties</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default MagnesiumInterestingFactsSection;
