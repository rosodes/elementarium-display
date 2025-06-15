
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Common oxidation states:</strong> -1, +1, +3, +5, +7</div>
          <div><strong>Most common:</strong> -1</div>
          <div><strong>Examples by oxidation state:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>-1: Chloride ions (Cl⁻), HCl, NaCl, metal chlorides</li>
            <li>+1: Hypochlorous acid (HClO), sodium hypochlorite (NaClO)</li>
            <li>+3: Chlorous acid (HClO₂), chlorites</li>
            <li>+5: Chloric acid (HClO₃), chlorates (ClO₃⁻)</li>
            <li>+7: Perchloric acid (HClO₄), perchlorates (ClO₄⁻)</li>
            <li>0: Molecular chlorine (Cl₂)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Higher oxidation states are increasingly oxidizing and unstable.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorineOxStatesSection;
