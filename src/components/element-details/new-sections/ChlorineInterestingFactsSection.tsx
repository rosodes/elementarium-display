
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Yellow-green gas with distinctive sharp, irritating odor</li>
          <li>2.5 times denser than air</li>
          <li>Essential for life - component of stomach acid</li>
          <li>Makes swimming pool water safe to swim in</li>
          <li>Used as chemical weapon in World War I</li>
          <li>Ozone layer depletion caused by chlorofluorocarbons (CFCs)</li>
          <li>Table salt (NaCl) is the most common chlorine compound</li>
          <li>Powerful bleaching agent - different from hydrogen peroxide</li>
          <li>Can form explosive mixtures with hydrogen</li>
          <li>Essential component of PVC plastic</li>
          <li>Chlorinated compounds make up many pharmaceuticals</li>
          <li>Human body contains about 95g of chlorine</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineInterestingFactsSection;
