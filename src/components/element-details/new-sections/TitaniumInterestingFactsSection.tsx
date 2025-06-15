
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Strongest metal with highest strength-to-weight ratio</li>
          <li>Completely biocompatible with human body</li>
          <li>Used in spacecraft, aircraft, and submarines</li>
          <li>More abundant than copper but harder to extract</li>
          <li>Burns with brilliant white flame</li>
          <li>Used in hip and knee replacement implants</li>
          <li>Titanium dioxide is the whitest known substance</li>
          <li>Resistant to corrosion in seawater for decades</li>
          <li>Used in jewelry for hypoallergenic properties</li>
          <li>Can be anodized to produce various colors</li>
          <li>Memory shape alloys return to original form when heated</li>
          <li>Essential for modern jet engines</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default TitaniumInterestingFactsSection;
