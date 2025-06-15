
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Common state:</strong> +1 (Na<sup>+</sup>)</div>
        <ul className="list-disc pl-4">
          <li>Forms only ionic compounds with +1 oxidation state</li>
          <li>Does not exhibit other stable oxidation states in compounds</li>
        </ul>
        <div><strong>Important compounds:</strong>
          <ul className="list-disc pl-4">
            <li>Sodium chloride (NaCl)</li>
            <li>Sodium hydroxide (NaOH)</li>
            <li>Sodium carbonate (Na<sub>2</sub>CO<sub>3</sub>)</li>
            <li>Sodium nitrate (NaNO<sub>3</sub>)</li>
            <li>Sodium sulfate (Na<sub>2</sub>SO<sub>4</sub>)</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default SodiumOxStatesSection;
