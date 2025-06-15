
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural gallium isotopes:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Ga-69:</b> 60.1%, stable</li>
          <li><b>Ga-71:</b> 39.9%, stable</li>
        </ul>
        <div className="mt-2">Radioactive isotopes: Ga-67 (3.3 days) used in medical imaging</div>
      </div>
    </CardContent>
  </Card>
);

export default GalliumIsotopesSection;
