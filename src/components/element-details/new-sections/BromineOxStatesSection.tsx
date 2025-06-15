
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Common states: -1, +1, +3, +5, +7</li>
        <li>-1 state: Bromides (HBr, NaBr, KBr)</li>
        <li>+1 state: Hypobromous acid (HBrO)</li>
        <li>+3 state: Bromous acid (HBrO₂)</li>
        <li>+5 state: Bromic acid (HBrO₃)</li>
        <li>+7 state: Perbromic acid (HBrO₄)</li>
        <li>Most stable: -1 oxidation state</li>
      </ul>
    </CardContent>
  </Card>
);

export default BromineOxStatesSection;
