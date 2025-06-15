
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
          <div><strong>Common oxidation states:</strong> -4, +2, +4</div>
          <div><strong>Most stable:</strong> +4</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>-4: Silicides (Mg₂Si, Ca₂Si)</li>
            <li>+2: Silicon monoxide (SiO)</li>
            <li>+4: Silicon dioxide (SiO₂), silicates (SiO₄⁴⁻)</li>
            <li>+4: Silicon tetrachloride (SiCl₄), silicic acid (H₄SiO₄)</li>
            <li>0: Elemental silicon (Si)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Silicon preferentially forms covalent bonds due to its intermediate electronegativity.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconOxStatesSection;
