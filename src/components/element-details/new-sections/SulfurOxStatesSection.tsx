
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Common oxidation states:</strong> -2, +2, +4, +6</div>
          <div><strong>Most stable:</strong> -2, +6</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>-2: Hydrogen sulfide (H₂S), metal sulfides (Na₂S, FeS)</li>
            <li>+2: Sulfur dichloride (SCl₂)</li>
            <li>+4: Sulfur dioxide (SO₂), sulfurous acid (H₂SO₃)</li>
            <li>+6: Sulfur trioxide (SO₃), sulfuric acid (H₂SO₄)</li>
            <li>0: Elemental sulfur (S₈)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Sulfur shows variable oxidation states due to its position in group 16.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurOxStatesSection;
