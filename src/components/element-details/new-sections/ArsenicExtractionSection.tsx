
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Roasting arsenopyrite ore: FeAsS → As₂O₃ + FeS</li>
        <li>Reduction of arsenic trioxide with carbon</li>
        <li>Sublimation and condensation for purification</li>
        <li>Byproduct recovery from copper/lead smelting</li>
        <li>Zone refining for high-purity applications</li>
        <li>Special handling due to toxicity</li>
        <li>Controlled atmosphere processing</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicExtractionSection;
