
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural germanium isotopes:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Ge-74:</b> 36.3%, stable</li>
          <li><b>Ge-72:</b> 27.5%, stable</li>
          <li><b>Ge-70:</b> 20.8%, stable</li>
          <li><b>Ge-73:</b> 7.8%, stable</li>
          <li><b>Ge-76:</b> 7.6%, stable</li>
        </ul>
        <div className="mt-2">Radioactive isotopes: Ge-68 used in medical imaging</div>
      </div>
    </CardContent>
  </Card>
);

export default GermaniumIsotopesSection;
