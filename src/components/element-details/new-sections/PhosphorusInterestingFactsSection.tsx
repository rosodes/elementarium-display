
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>White phosphorus glows in the dark (chemiluminescence)</li>
          <li>The human body contains about 780 grams of phosphorus</li>
          <li>Essential for all life - no known substitute in biology</li>
          <li>White phosphorus ignites spontaneously in air at 30°C</li>
          <li>Red phosphorus is used on matchbox striking surfaces</li>
          <li>Black phosphorus is the most stable allotrope</li>
          <li>Violet phosphorus is the least reactive form</li>
          <li>Can exist in over 10 different allotropic forms</li>
          <li>Originally isolated from human urine by medieval alchemists</li>
          <li>Critical bottleneck element for global food production</li>
          <li>No economically viable substitute for phosphate fertilizers</li>
          <li>ATP (energy currency of cells) contains three phosphate groups</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PhosphorusInterestingFactsSection;
