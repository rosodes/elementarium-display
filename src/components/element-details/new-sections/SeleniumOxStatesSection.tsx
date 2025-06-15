
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Common states: -2, +4, +6</li>
        <li>-2 state: Selenides (H₂Se, metal selenides)</li>
        <li>+4 state: Selenium dioxide (SeO₂)</li>
        <li>+6 state: Selenates (SeO₄²⁻)</li>
        <li>Less common: +1, +2, +5</li>
        <li>Can form polyatomic ions and complex compounds</li>
        <li>Variable oxidation behavior in organic compounds</li>
      </ul>
    </CardContent>
  </Card>
);

export default SeleniumOxStatesSection;
