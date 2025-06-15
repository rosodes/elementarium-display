
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Common oxidation states:</strong> -2, -1, 0, +1, +2</div>
          <div><strong>Most common:</strong> -2</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>-2: Water (H₂O), most oxides (CaO, CO₂)</li>
            <li>-1: Hydrogen peroxide (H₂O₂), peroxides</li>
            <li>0: Molecular oxygen (O₂), ozone (O₃)</li>
            <li>+1: Hypofluorous acid (HOF)</li>
            <li>+2: Oxygen difluoride (OF₂)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Oxygen typically has -2 oxidation state, except in peroxides (-1) and compounds with fluorine.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenOxStatesSection;
