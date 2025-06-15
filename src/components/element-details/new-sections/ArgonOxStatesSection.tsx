
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Only oxidation state:</strong> 0 (neutral)</div>
          <div><strong>Noble gas - chemically inert</strong></div>
          <div className="space-y-1">
            <div><strong>Forms:</strong></div>
            <ul className="list-disc pl-4 space-y-1">
              <li>0: Monatomic gas (Ar) - only stable form</li>
              <li>No known stable compounds under normal conditions</li>
              <li>Some unstable compounds formed under extreme conditions</li>
              <li>Clathrate compounds with water (Ar·6H₂O)</li>
            </ul>
          </div>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Argon has complete electron shell configuration, making it extremely unreactive.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArgonOxStatesSection;
