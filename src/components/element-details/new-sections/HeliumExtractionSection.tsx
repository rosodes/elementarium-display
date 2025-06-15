
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Production & Extraction</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Extracted from natural gas by fractional distillation</li>
          <li>Major sources: Texas, Kansas, Oklahoma, and Qatar</li>
          <li>Cryogenic separation at extremely low temperatures</li>
          <li>Cannot be artificially produced economically</li>
          <li>Finite resource - once released to atmosphere, it escapes to space</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HeliumExtractionSection;
