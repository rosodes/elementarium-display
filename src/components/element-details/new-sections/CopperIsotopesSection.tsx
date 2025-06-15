
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li><strong>Cu-63:</strong> 69.2%, stable</li>
        <li><strong>Cu-65:</strong> 30.8%, stable</li>
        <li><strong>Cu-64:</strong> Radioactive, 12.7 hours half-life</li>
        <li><strong>Cu-67:</strong> Radioactive, 2.58 days half-life</li>
        <li>Medical isotopes used in cancer treatment</li>
        <li>Cu-64 used in PET scans</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperIsotopesSection;
