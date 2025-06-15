
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential trace element in very small amounts</li>
        <li>Famous for its toxicity - "King of Poisons"</li>
        <li>Key component in high-speed electronics</li>
        <li>Can exist in several allotropic forms</li>
        <li>GaAs semiconductors faster than silicon</li>
        <li>Used in ancient bronze-making</li>
        <li>Important in LED technology</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicInterestingFactsSection;
