
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +2 (most common)</div>
          <div><strong>Common compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+2: CaCl₂, CaO, Ca(OH)₂, CaCO₃ (most stable)</li>
            <li>+1: CaH (rare, in some hydrides)</li>
            <li>Calcium readily loses two outer electrons</li>
            <li>Forms ionic compounds with non-metals</li>
            <li>Strong reducing agent in chemical reactions</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Calcium almost always exhibits +2 oxidation state in compounds.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalciumOxStatesSection;
