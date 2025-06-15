
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +4 (most common)</div>
          <div><strong>Other common states:</strong> +3, +2</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+4: TiO₂ (rutile, anatase), TiCl₄ (most stable)</li>
            <li>+3: Ti₂O₃, TiCl₃ (reducing agent)</li>
            <li>+2: TiO, TiCl₂ (unstable in air)</li>
            <li>Forms complex ions in various oxidation states</li>
            <li>Can exhibit multiple oxidation states simultaneously</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Titanium dioxide (TiO₂) is the most important compound industrially.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitaniumOxStatesSection;
