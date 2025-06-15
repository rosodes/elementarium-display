
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Excellent electrical conductor - second only to silver</li>
        <li>Has antimicrobial properties - kills bacteria and viruses</li>
        <li>Essential trace element for all living organisms</li>
        <li>Statue of Liberty is made of copper (green patina)</li>
        <li>Recyclable without loss of quality</li>
        <li>Used in pennies (though modern pennies are mostly zinc)</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperInterestingFactsSection;
