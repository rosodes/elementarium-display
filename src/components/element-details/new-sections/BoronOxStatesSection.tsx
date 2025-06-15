
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +3</div>
          <div><strong>Less common states:</strong> +1, +2</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+3: Boric acid (H₃BO₃), borax (Na₂B₄O₇)</li>
            <li>+3: Boron trioxide (B₂O₃), boron trichloride (BCl₃)</li>
            <li>+3: Boron nitride (BN), borates</li>
            <li>+2: Diborane (B₂H₆) - bridge bonding</li>
            <li>0: Elemental boron (B)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Boron forms electron-deficient compounds due to having only 3 valence electrons.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronOxStatesSection;
