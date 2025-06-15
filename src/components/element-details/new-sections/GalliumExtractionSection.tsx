
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Extracted from bauxite residue (Bayer process)</li>
        <li>Also from zinc smelting flue dusts</li>
        <li>Electrolysis of gallium hydroxide solutions</li>
        <li>Fractional crystallization methods</li>
        <li>Very energy-intensive process</li>
        <li>Annual production: ~300 metric tons globally</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumExtractionSection;
