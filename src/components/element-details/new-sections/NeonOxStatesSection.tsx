
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Oxidation state:</strong> 0 (zero)</div>
          <div><strong>Chemical inertness:</strong> Complete</div>
          <div className="space-y-1">
            <div><strong>Noble gas characteristics:</strong></div>
            <ul className="list-disc pl-4 space-y-1">
              <li>Complete outer electron shell (2s² 2p⁶)</li>
              <li>No known stable compounds</li>
              <li>Does not form chemical bonds</li>
              <li>Exists only as monatomic gas</li>
            </ul>
          </div>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Neon is the most chemically inert element - no compounds have ever been synthesized.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonOxStatesSection;
