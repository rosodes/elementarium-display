
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural zinc isotopes:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Zn-64:</b> 49.2%, stable</li>
          <li><b>Zn-66:</b> 27.7%, stable</li>
          <li><b>Zn-68:</b> 18.5%, stable</li>
          <li><b>Zn-67:</b> 4.0%, stable</li>
          <li><b>Zn-70:</b> 0.6%, stable</li>
        </ul>
        <div className="mt-2">Radioactive isotopes: Zn-65 (244 days half-life) used in research</div>
      </div>
    </CardContent>
  </Card>
);

export default ZincIsotopesSection;
