
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
          <div><strong>Only oxidation state:</strong> 0</div>
          <div><strong>Noble gas characteristics:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Complete outer electron shell (2s² 2p⁶)</li>
            <li>Extremely stable electronic configuration</li>
            <li>Does not form chemical compounds under normal conditions</li>
            <li>No known stable compounds of neon</li>
          </ul>
          <div><strong>Chemical inertness:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Highest first ionization energy of period 2</li>
            <li>No electronegativity value assigned</li>
            <li>Cannot form covalent bonds</li>
            <li>Only exists as monatomic gas</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Neon is chemically inert and forms no known stable compounds.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonOxStatesSection;
