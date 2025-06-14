
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Возможные состояния окисления водорода
 */
const HydrogenOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ul className="pl-4 list-disc text-xs space-y-1">
          <li>Main: +1 (most common in compounds, e.g., H₂O, HCl)</li>
          <li>Also: -1 (in metal hydrides, e.g., NaH, LiH)</li>
          <li>Hydrogen does not form other stable oxidation states.</li>
        </ul>
        <p className="text-xs mt-2 text-gray-600 dark:text-gray-300">
          In molecular form (H₂), oxidation state is 0.
        </p>
      </CardContent>
    </Card>
  );
};

export default HydrogenOxStatesSection;
