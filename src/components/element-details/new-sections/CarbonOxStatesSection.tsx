
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Common oxidation states:</strong> -4, -3, -2, -1, 0, +1, +2, +3, +4</div>
          <div><strong>Most common:</strong> +4, -4</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>-4: Methane (CH₄), metal carbides (CaC₂)</li>
            <li>-2: Ethylene (C₂H₄), acetylene (C₂H₂)</li>
            <li>0: Elemental carbon (diamond, graphite)</li>
            <li>+2: Carbon monoxide (CO)</li>
            <li>+4: Carbon dioxide (CO₂), carbonates (CaCO₃)</li>
            <li>+4: Carbon tetrachloride (CCl₄)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Carbon's four valence electrons allow for diverse bonding patterns.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonOxStatesSection;
