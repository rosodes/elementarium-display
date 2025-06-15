
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincInterestingFactsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Interesting Facts</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential for over 300 enzymes in human body</li>
        <li>Zinc deficiency affects growth and immunity</li>
        <li>Galvanized steel prevents rusting</li>
        <li>Zinc oxide used in sunscreens</li>
        <li>Brass is copper-zinc alloy</li>
        <li>Zinc supplements can shorten cold duration</li>
        <li>Second most abundant trace metal in humans</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincInterestingFactsSection;
