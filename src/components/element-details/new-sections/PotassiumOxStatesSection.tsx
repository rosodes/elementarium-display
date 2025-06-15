
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +1 (most common)</div>
          <div><strong>Common compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+1: KCl, KOH, K₂O, KNO₃ (most stable)</li>
            <li>Potassium readily loses its outer electron</li>
            <li>Forms ionic compounds with non-metals</li>
            <li>Very electropositive - strong reducing agent</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Potassium is highly reactive and always found in +1 oxidation state in nature.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotassiumOxStatesSection;
