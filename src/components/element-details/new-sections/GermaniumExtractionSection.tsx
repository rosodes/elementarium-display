
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Recovered from zinc ore processing</li>
        <li>Extracted from coal ash and flue dust</li>
        <li>Zone refining for high purity</li>
        <li>Hydrolysis of GeCl₄ to GeO₂</li>
        <li>Reduction with hydrogen to metal</li>
        <li>Very expensive purification process</li>
        <li>Annual production: ~120 metric tons</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumExtractionSection;
