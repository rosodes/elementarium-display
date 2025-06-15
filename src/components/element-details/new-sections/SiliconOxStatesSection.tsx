
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation states:</strong> +4, -4</div>
          <div><strong>Most common compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+4: Silicon dioxide (SiO₂), silicon tetrachloride (SiCl₄)</li>
            <li>+4: Silicates (various structures), silicic acid (H₄SiO₄)</li>
            <li>+2: Silicon monoxide (SiO) - rare, unstable</li>
            <li>-4: Silicides (e.g., Mg₂Si, CaSi₂)</li>
            <li>0: Elemental silicon (Si)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Silicon forms covalent bonds in most compounds, rarely ionic.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconOxStatesSection;
