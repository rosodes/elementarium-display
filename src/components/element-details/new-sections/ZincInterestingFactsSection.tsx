
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Second most abundant trace metal in human body</li>
        <li>Essential for over 300 enzymes</li>
        <li>Zinc deficiency affects taste and smell</li>
        <li>Used in pennies (1982-present) as core material</li>
        <li>Zinc-air batteries have very high energy density</li>
        <li>Calamine lotion contains zinc oxide</li>
        <li>Dies casting industry uses ~17% of zinc production</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincInterestingFactsSection;
