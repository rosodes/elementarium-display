
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +1</div>
          <div><strong>Most common compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+1: Sodium chloride (NaCl), sodium hydroxide (NaOH)</li>
            <li>+1: Sodium carbonate (Na₂CO₃), sodium bicarbonate (NaHCO₃)</li>
            <li>+1: Sodium sulfate (Na₂SO₄), sodium nitrate (NaNO₃)</li>
            <li>0: Metallic sodium (Na)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Sodium readily loses its outer electron to achieve noble gas configuration.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SodiumOxStatesSection;
