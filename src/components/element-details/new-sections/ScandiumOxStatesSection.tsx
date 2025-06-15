
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +3 (most common)</div>
          <div><strong>Common compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+3: Sc₂O₃, ScCl₃, Sc(OH)₃ (most stable)</li>
            <li>+2: ScO (rare, high temperature)</li>
            <li>+1: ScI (very rare)</li>
            <li>Forms ionic compounds with non-metals</li>
            <li>Strong reducing agent in metallic form</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Scandium almost exclusively exists in +3 oxidation state in compounds.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScandiumOxStatesSection;
