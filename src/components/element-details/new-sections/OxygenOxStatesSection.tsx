
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
          <div><strong>Most stable:</strong> -2</div>
          <div className="space-y-1">
            <div><strong>Examples:</strong></div>
            <ul className="list-disc pl-4 space-y-1">
              <li>-2: Water (H₂O), metal oxides (CaO, Fe₂O₃)</li>
              <li>-1: Hydrogen peroxide (H₂O₂), peroxides</li>
              <li>0: Oxygen gas (O₂), ozone (O₃)</li>
              <li>+1: Oxygen difluoride (OF₂) - rare</li>
              <li>+2: Oxygen difluoride compounds - very rare</li>
            </ul>
          </div>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Oxygen is highly electronegative and usually has negative oxidation states, except in compounds with fluorine.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenOxStatesSection;
